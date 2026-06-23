import { useState, useEffect, useRef, useMemo, useCallback } from "react";

import clsx from "clsx";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";

import useMediaQuery from "../../../hooks/useMediaQuery";
import useAdminEditor from "../../../hooks/useAdminEditor";
import { useAuth } from "../../../hooks/useAuth";
import usePersistentState from "../../../hooks/usePersistentState";

import { flattenObject } from "./utils/flattenObject";
import { unflattenObject } from "./utils/unflattenObject";
import { buildPagePayload } from "./utils/pageObjectEditor";

import { STORAGE_KEYS } from "../../../utils/storage/keys";

import Button from "../../atoms/button/Button";
import TooltipButton from "../../atoms/tooltip/TooltipButton";
import Text from "../../atoms/text/Text";
import FormField from "../../atoms/formfield/FormField";

import {
  CirclePlusIcon,
  XIcon,
  CaretDownIcon,
  EditIcon,
  LayoutColumnsIcon,
  LayoutRowsIcon,
  MaximizeIcon,
  SquareIcon,
  MinusIcon,
  EyeOffIcon,
  EyeIcon,
  CircleXIcon,
  SquaresIcon,
} from "../../../assets/icons/system";
import Spinner from "../../atoms/loader/Spinner";
import { getImageFromDB, saveImageToDB, deleteImageFromDB } from "../../../utils/storage/indexedDb";

// Shared container class strings

const containerClasses = `
    w-full flex flex-col items-center
    z-(--z-admin-portal)
    overflow-y-auto overscroll-contain
    gap-(--spacing-card-wrapper-education-mobile-gap)
    sm:gap-(--spacing-card-wrapper-education-tablet-gap)
    lg:gap-(--spacing-card-wrapper-education-desktop-gap)
    border border-(--color-card-wrapper-stroke)
    bg-(--color-navigation-panel-mobile-background)
    shadow-(--shadow-card-wrapper)
    rounded-(--radius-card-wrapper-base)
    backdrop-blur-(--effect-card-wrapper-background-blur)
`;

const inputContainerClasses = `
    w-full grid cols-1
    z-(--z-admin-portal)
    overflow-y-auto overscroll-contain
    mb-20
    sm:max-w-(---size-section-wrapper-tablet-max-width)
    lg:max-w-(--size-section-wrapper-desktop-max-width)
    gap-(--spacing-card-wrapper-education-mobile-gap)
    sm:gap-(--spacing-card-wrapper-education-tablet-gap)
    lg:gap-(--spacing-card-wrapper-education-desktop-gap)
    px-(--spacing-card-wrapper-education-mobile-padding-x)
    sm:px-(--spacing-card-wrapper-education-tablet-padding-x)
    lg:px-(--spacing-card-wrapper-education-desktop-padding-x)
    u-custom-scrollbar
`;

// Shared pure utilities declared outside component

// Formats a dot separated key path into a readable breadcrumb label
const formatPath = (key) => {
  return key
    .replace(/\./g, " → ")
    .replace(/([A-Z])/g, " $1")
    .replace(/\d+/g, (n) => `Item ${+n + 1}`);
};

// Converts kebab and snake case to Title Case
const formatLabel = (str) => str?.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

// Splits a dot path key into a breadcrumb context prefix and final field name
const getLabelParts = (key) => {
  const parts = key.split(".");
  return {
    context: formatPath(parts.slice(0, -1).join(".")),
    field: parts[parts.length - 1],
  };
};

// Returns metadata about the deepest array found in a dot path key
const getArrayInfo = (key) => {
  const parts = key.split(".");
  let lastIndexPos = -1;

  for (let i = 0; i < parts.length; i++) {
    if (!isNaN(parts[i])) lastIndexPos = i;
  }

  if (lastIndexPos === -1) return null;

  return {
    arrayPath: parts.slice(0, lastIndexPos).join("."),
    index: Number(parts[lastIndexPos]),
    itemPath: parts.slice(0, lastIndexPos + 1).join("."),
  };
};

// Traverses nested object by dot path; numeric segments treated as array indices
const getArrayByPath = (obj, path) => {
  return path.split(".").reduce((acc, key) => {
    if (!acc) return undefined;
    return acc[isNaN(key) ? key : Number(key)];
  }, obj);
};

// Resolves indexeddb references to blob URLs for image preview rendering
const buildPreviewFlat = async (form) => {
  const result = {};

  for (const key in form) {
    const value = form[key];

    if (typeof value === "string" && value.startsWith("indexeddb://")) {
      const id = value.replace("indexeddb://", "");
      const file = await getImageFromDB(id);
      result[key] = file ? URL.createObjectURL(file) : "";
    } else if (value instanceof File) {
      result[key] = URL.createObjectURL(value);
    } else {
      result[key] = value;
    }
  }

  return result;
};

// Returns initial window size scaled to viewport; smaller on mobile
const getInitialSize = (isMobile) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return {
    width: isMobile ? vw * 0.9 : Math.min(vw * 0.75, 800),
    height: isMobile ? vh * 0.6 : Math.min(vh * 0.75, 700),
  };
};

// Returns initial window position centered on viewport; mobile anchors to bottom
const getInitialPosition = (size, isMobile) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  if (isMobile) {
    return {
      x: (vw - size.width) / 2,
      y: vh - size.height,
    };
  }
  return {
    x: Math.max(0, (vw - size.width) / 2),
    y: Math.max(0, (vh - size.height) / 2),
  };
};

const AutoFormEditor = ({
  data,
  pageData,
  sectionData,
  onSave,
  onReset,
  onClearDraft,
  pageOptions,
  isLoadingPageOptions = false,
  isLoadingData = false,
  selection,
  onSelectionChange,
  activeAction,
  draftKey,
  setDrafts,
  onDraftChange,
  hasDraftChanges,
  isClearingDraft,
  onCancelDraftSave,
}) => {
  // Auth
  const { isAuthenticated } = useAuth();

  // Responsive
  const isMobile = useMediaQuery("(max-width: 639px)");

  // Editor context shared across the admin system
  const {
    setDraftData,
    setActiveSection,
    isPreviewMode,
    setIsPreviewMode,
    setIsEditorOpen,
    isEditorOpen,
  } = useAdminEditor();

  // Used only for controlled select dropdowns
  const { control, reset, setValue } = useForm();

  const { ADMIN_EDITOR } = STORAGE_KEYS;

  // Pixel size of the minimized bubble
  const MINI_SIZE = 50;

  // State Form Data

  // Flat key value map of the currently edited object
  const [form, setForm] = useState({});

  // State Drag and Resize Interaction

  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [resizing, setResizing] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [dragTarget, setDragTarget] = useState("editor");

  // State Window Controls

  const [isMaximized, setIsMaximized] = usePersistentState(
    ADMIN_EDITOR.MAXIMIZE,
    false,
    isAuthenticated,
  );

  const [isMinimized, setIsMinimized] = usePersistentState(
    ADMIN_EDITOR.MINIMIZE,
    false,
    isAuthenticated,
  );

  // Snapshot of size and position before maximizing, restored when undoing maximize
  const [prevState, setPrevState] = usePersistentState(
    ADMIN_EDITOR.PREVSTATE,
    null,
    isAuthenticated,
  );

  // State Layout Preference

  // When true, label and value render in a row; false stacks them vertically
  const [isCaptionLayoutRow, setIsCaptionLayoutRow] = usePersistentState(
    ADMIN_EDITOR.LAYOUT,
    true,
    isAuthenticated,
  );

  // State Inline Editing

  // Key of the text field currently in edit mode
  const [activeKey, setActiveKey] = useState(null);

  // Key of the image field with a pending file upload
  const [activeImageKey, setActiveImageKey] = useState(null);

  // Key to object URL map for images stored in IndexedDB
  const [imagePreviewUrls, setImagePreviewUrls] = useState({});

  // Ref mirror keeps revocation logic accurate without stale closures
  const imagePreviewUrlsRef = useRef(imagePreviewUrls);
  useEffect(() => {
    imagePreviewUrlsRef.current = imagePreviewUrls;
  }, [imagePreviewUrls]);

  // Revoke all blob URLs on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      Object.values(imagePreviewUrlsRef.current).forEach((url) => {
        if (url?.startsWith("blob:")) URL.revokeObjectURL(url);
      });
    };
  }, []);

  // Destructured selection values
  const { page, section, row } = selection;

  // Derived Row Options

  // Row dropdown options built from the selected section rows array
  const rowOptions = useMemo(() => {
    if (!selection.section || !Array.isArray(sectionData?.rows)) return [];

    return sectionData.rows.map((row, index) => ({
      value: row.id,
      label: row.title || formatLabel(row.id) || `Row ${index + 1}`,
    }));
  }, [sectionData, selection.section]);

  // Original unflattened page object kept for building the save payload
  const [originalPage, setOriginalPage] = useState(null);

  // State Window Size and Position

  const [size, setSize] = usePersistentState(
    ADMIN_EDITOR.SIZE,
    getInitialSize(false),
    isAuthenticated,
  );

  const [position, setPosition] = usePersistentState(
    ADMIN_EDITOR.POSITION,
    getInitialPosition(getInitialSize(false), false),
    isAuthenticated,
  );

  // Mini bubble position resets each session
  const [miniPosition, setMiniPosition] = useState({
    x: window.innerWidth - 80,
    y: window.innerHeight - 60,
  });

  // Refs DOM Nodes

  const containerRef = useRef(null);
  const miniRef = useRef(null);
  const resizeRef = useRef(null);
  const fileInputRef = useRef(null);

  // Tracks which form keys currently hold a pending PDF upload (IndexedDB ref)
  const pdfUploadedKeysRef = useRef(new Set());
  // Render-safe mirror of pdfUploadedKeysRef — read this during render, never the ref itself
  const [pdfUploadedKeys, setPdfUploadedKeys] = useState(new Set());

  // Prevents data sync from overwriting form after draft clear
  const skipNextDataSyncRef = useRef(false);

  // Refs Interaction State

  const isResizingRef = useRef(false);
  const isDraggingRef = useRef(false);

  // Stored in refs so event listeners always call current versions
  const handleResizeMoveRef = useRef(null);
  const handleMouseMoveRef = useRef(null);

  // Mirrors of state so drag and resize handlers always see current values
  const positionRef = useRef(position);
  const miniPositionRef = useRef(miniPosition);
  const sizeRef = useRef(size);

  // Effects Ref Sync

  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  useEffect(() => {
    miniPositionRef.current = miniPosition;
  }, [miniPosition]);

  useEffect(() => {
    sizeRef.current = size;
  }, [size]);

  // Effects Data Sync

  // Flatten incoming prop data into form state
  useEffect(() => {
    if (data) {
      if (skipNextDataSyncRef.current) {
        skipNextDataSyncRef.current = false;
        return;
      }
      const flat = flattenObject(data);
      requestAnimationFrame(() => setForm(flat));
    }
  }, [data]);

  // Forward form changes to the parent debounced draft save
  useEffect(() => {
    if (!draftKey || !form) return;
    onDraftChange?.(form);
  }, [form, draftKey, onDraftChange]);

  // Rehydrate IndexedDB image references into blob preview URLs when form changes
  useEffect(() => {
    let cancelled = false;

    const rehydrate = async () => {
      const updates = {};

      for (const [key, value] of Object.entries(form)) {
        if (typeof value === "string" && value.startsWith("indexeddb://")) {
          const id = value.replace("indexeddb://", "");
          const file = await getImageFromDB(id);
          if (file) {
            updates[key] = URL.createObjectURL(file);
          }
        }
      }

      if (!cancelled && Object.keys(updates).length > 0) {
        setImagePreviewUrls((prev) => {
          // Revoke stale blob URLs before replacing them
          Object.entries(updates).forEach(([key, newUrl]) => {
            const oldUrl = prev[key];
            if (oldUrl && oldUrl !== newUrl && oldUrl.startsWith("blob:")) {
              URL.revokeObjectURL(oldUrl);
            }
          });
          return { ...prev, ...updates };
        });
      }
    };

    rehydrate();

    return () => {
      cancelled = true;
    };
  }, [form]);

  // Push live preview data to editor context whenever form or row selection changes
  useEffect(() => {
    const buildPreview = async () => {
      if (!form || !selection.section || !sectionData) return;

      const previewFlat = await buildPreviewFlat(form);
      const previewNested = unflattenObject(previewFlat);

      // Row editing, merge preview into the matching row only
      if (selection.row !== null && Array.isArray(sectionData?.rows)) {
        const updatedSection = {
          ...sectionData,
          rows: sectionData.rows.map((rowItem) => {
            if (rowItem.id === selection.row) {
              return {
                ...rowItem,
                ...previewNested,
              };
            }
            return rowItem;
          }),
        };

        setDraftData(updatedSection);
        return;
      }

      // Section editing
      setDraftData(previewNested);
    };

    buildPreview();
  }, [form, selection.section, selection.row, sectionData, setDraftData]);

  // Sync active section highlight in preview context
  useEffect(() => {
    if (!selection?.section || !sectionData) return;
    setActiveSection(sectionData?.id);
  }, [sectionData, selection?.section, setActiveSection]);

  // Sync controlled fields when selection changes externally
  useEffect(() => {
    if (!selection) return;
    setValue("page", selection.page || "");
    setValue("section", selection.section || "");
    setValue("row", selection.row ?? "");
  }, [selection, setValue]);

  // Sync page dropdown after page options finish loading
  useEffect(() => {
    if (!pageOptions?.length) return;
    setValue("page", selection.page || "");
  }, [pageOptions, selection.page, setValue]);

  // Lock body scroll when maximized to prevent layout shift
  useEffect(() => {
    if (!isMaximized) return;

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isMaximized]);

  // Rebuild mouse move handlers whenever drag or resize state changes
  useEffect(() => {
    handleMouseMoveRef.current = (e) => {
      if (!dragging) return;

      let newX = e.clientX - offset.x;
      let newY = e.clientY - offset.y;

      // Mark as actual drag once position meaningfully changes
      const prevX = dragTarget === "mini" ? miniPositionRef.current.x : positionRef.current.x;
      const prevY = dragTarget === "mini" ? miniPositionRef.current.y : positionRef.current.y;
      if (Math.abs(newX - prevX) > 0 || Math.abs(newY - prevY) > 0) {
        isDraggingRef.current = true;
      }

      // Mini bubble clamped fully within viewport
      if (dragTarget === "mini") {
        const maxX = window.innerWidth - MINI_SIZE;
        const maxY = window.innerHeight - MINI_SIZE;
        newX = Math.max(0, Math.min(maxX, newX));
        newY = Math.max(0, Math.min(maxY, newY));
        miniPositionRef.current = { x: newX, y: newY };
        if (miniRef.current) {
          miniRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
        }
        return;
      }

      // Editor window allows partial off screen; at least 10% must remain visible
      const visibleRatio = 0.1;
      const visibleWidth = size.width * visibleRatio;
      const visibleHeight = size.height * visibleRatio;
      const minX = -(size.width - visibleWidth);
      const maxX = window.innerWidth - visibleWidth;
      const minY = -(size.height - visibleHeight);
      const maxY = window.innerHeight - visibleHeight;
      newX = Math.max(minX, Math.min(maxX, newX));
      newY = Math.max(minY, Math.min(maxY, newY));
      positionRef.current = { x: newX, y: newY };
      if (containerRef.current) {
        containerRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
      }
    };

    // Handles resize across all eight edge and corner directions
    handleResizeMoveRef.current = (e) => {
      if (!resizing || !resizeRef.current) return;

      const { direction, startX, startY, startWidth, startHeight, startXPos, startYPos } =
        resizeRef.current;

      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      let newWidth = startWidth;
      let newHeight = startHeight;
      let newX = startXPos;
      let newY = startYPos;

      // Horizontal resize
      if (direction.includes("right")) newWidth = startWidth + dx;
      if (direction.includes("left")) {
        const proposed = startWidth - dx;
        if (proposed <= 300) {
          newWidth = 300;
          newX = startXPos + (startWidth - 300);
        } else {
          newWidth = proposed;
          newX = startXPos + dx;
        }
      }

      // Vertical resize
      if (direction.includes("bottom")) newHeight = startHeight + dy;
      if (direction.includes("top")) {
        const proposed = startHeight - dy;
        if (proposed <= 200) {
          newHeight = 200;
          newY = startYPos + (startHeight - 200);
        } else {
          newHeight = proposed;
          newY = startYPos + dy;
        }
      }

      // Clamp final dimensions within allowed bounds
      newWidth = Math.max(300, Math.min(1000, newWidth));
      newHeight = Math.max(200, Math.min(window.innerHeight, newHeight));

      // Write directly to DOM and refs to avoid rerenders during active resize
      sizeRef.current = { width: newWidth, height: newHeight };
      positionRef.current = { x: newX, y: newY };
      if (containerRef.current) {
        containerRef.current.style.width = `${newWidth}px`;
        containerRef.current.style.height = `${newHeight}px`;
        containerRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
      }
    };
  }, [dragging, resizing, offset, dragTarget, size]);

  // Attach global mouse move and mouse up listeners for drag and resize
  useEffect(() => {
    const mouseMove = (e) => {
      handleMouseMoveRef.current?.(e);
      handleResizeMoveRef.current?.(e);
    };

    const mouseUp = () => {
      setDragging(false);
      setResizing(null);
      isResizingRef.current = false;

      // Commit final positions from refs back to React state
      if (dragTarget === "mini") {
        setMiniPosition(miniPositionRef.current);
      } else {
        setPosition(positionRef.current);
        setSize(sizeRef.current);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, [dragTarget, setPosition, setSize]);

  // Derived Section Options

  const sectionOptions = useMemo(() => {
    if (!selection.page) return [];

    // Global mode exposes header and footer as fixed sections
    if (selection.page === "global") {
      return [
        { value: "header", label: "Header" },
        { value: "footer", label: "Footer" },
        { value: "site-config", label: "Site Config" },
      ];
    }

    if (!Array.isArray(pageData?.sections)) return [];

    return pageData.sections.map((section, i) => ({
      value: section.key,
      label: section.title || formatLabel(section.key) || `Section ${i + 1}`,
    }));
  }, [pageData, selection.page]);

  // Controls field visibility based on current row selection
  const shouldHideField = useCallback(
    (key) => {
      if (!selection.section) return false;

      // Row is selected, data is already scoped to that row
      if (selection.row !== null) return false;

      // Section selected with no row, only applies when section contains rows
      if (!Array.isArray(sectionData?.rows)) return false;

      // Hide deeply nested block fields inside rows at section level
      if (key.includes("rows") && key.includes("blocks")) return true;

      return false;
    },
    [selection.section, selection.row, sectionData],
  );

  // Builds annotated form entries list for rendering
  const processedEntries = useMemo(() => {
    const seen = new Set();

    return Object.entries(form)
      .filter(([key]) => !shouldHideField(key))
      .map(([key, value]) => {
        const arrayInfo = getArrayInfo(key);

        // Render add and remove controls only once per array item
        let shouldRenderControls = false;
        if (arrayInfo && !seen.has(arrayInfo.itemPath)) {
          seen.add(arrayInfo.itemPath);
          shouldRenderControls = true;
        }

        const { context, field } = getLabelParts(key);

        const isImageField = key.toLowerCase().includes("src") || key.toLowerCase().includes("svg");

        const isPdfMediaField = isImageField && (
          pdfUploadedKeys.has(key) ||
          (
            typeof value === "string" &&
            !value.startsWith("indexeddb://") &&
            value.toLowerCase().endsWith(".pdf")
          )
        );

        return {
          key,
          value,
          arrayInfo,
          shouldRenderControls,
          context,
          field,
          isImageField,
          isPdfMediaField,
        };
      });
  }, [form, shouldHideField, pdfUploadedKeys]);

  // Handlers Form Field Changes

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // Saves uploaded image to IndexedDB and stores a reference key in form state
  const handleImageUpload = async (e, key) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type === "application/pdf") {
      pdfUploadedKeysRef.current.add(key);
    } else {
      pdfUploadedKeysRef.current.delete(key);
    }
    setPdfUploadedKeys(new Set(pdfUploadedKeysRef.current));

    const imageId = `${draftKey}__${key}`;
    await saveImageToDB(imageId, file);

    // Create preview URL immediately without waiting for rehydration
    const previewUrl = URL.createObjectURL(file);
    setImagePreviewUrls((prev) => ({ ...prev, [key]: previewUrl }));

    handleChange(key, `indexeddb://${imageId}`);
  };

  // Handlers Array Item Add and Remove

  // Clones the item at the given index and inserts it directly after
  const handleAdd = (arrayPath, index) => {
    const nested = unflattenObject(form);
    const arr = getArrayByPath(nested, arrayPath);
    const clone =
      typeof arr[index] === "object" ? JSON.parse(JSON.stringify(arr[index])) : arr[index];
    arr.splice(index + 1, 0, clone);
    setForm(flattenObject(nested));
  };

  // Removes the item at the given index from its array
  const handleRemove = (arrayPath, index) => {
    const nested = unflattenObject(form);
    const arr = getArrayByPath(nested, arrayPath);
    if (!arr || arr.length === 0) return;
    arr.splice(index, 1);
    setForm(flattenObject(nested));
  };

  // Handlers Save

  const handleSave = async () => {
    // Section or row save sent as multipart FormData
    if (section) {
      const formData = new FormData();

      for (const [key, value] of Object.entries(form)) {
        if (typeof value === "string" && value.startsWith("indexeddb://")) {
          const id = value.replace("indexeddb://", "");
          const file = await getImageFromDB(id);
          if (file) {
            formData.append(key, file);
          }
        } else {
          formData.append(key, value ?? "");
        }
      }

      onSave({
        type: row !== null ? "row" : "section",
        data: formData,
        context: { page, section, row },
      });

      return;
    }

    // Page save sent as JSON payload with restored backend fields
    if (!section && page && originalPage) {
      const payload = buildPagePayload(form, originalPage);
      onSave({
        type: "page",
        data: payload,
        context: { page },
      });
    }
  };

  // Handlers Reset

  const handleReset = () => {
    // Row reset
    if (section && row !== null) {
      onReset({ type: "row", context: { page, section, row } });
      return;
    }

    // Section reset
    if (section) {
      onReset({ type: "section", context: { page, section } });
      return;
    }

    // Page reset
    if (page) {
      onReset({ type: "page", context: { page } });
    }
  };

  // Handlers Clear Draft

  const handleClearDraft = async () => {
    pdfUploadedKeysRef.current.clear();
    setPdfUploadedKeys(new Set());

    // Revoke all blob URLs immediately to prevent stale image previews
    setImagePreviewUrls((prev) => {
      Object.values(prev).forEach((url) => {
        if (url?.startsWith("blob:")) URL.revokeObjectURL(url);
      });
      return {};
    });

    // Remove all draft images from IndexedDB
    Object.values(form).forEach((value) => {
      if (typeof value === "string" && value.startsWith("indexeddb://")) {
        const id = value.replace("indexeddb://", "");
        deleteImageFromDB(id);
      }
    });

    onClearDraft();
  };

  // Handlers Selection Dropdowns

  const handlePageChange = (value) => {
    // Global page auto selects header section
    if (value === "global") {
      onSelectionChange((prev) => ({
        ...prev,
        page: value,
        section: "header",
        row: null,
      }));
      return;
    }

    onSelectionChange((prev) => ({
      ...prev,
      page: value,
      section: null,
      row: null,
    }));
  };

  // Sync original page reference when pageData loads for payload building
  useEffect(() => {
    if (pageData) {
      requestAnimationFrame(() => setOriginalPage(pageData));
    }
  }, [pageData]);

  const handleSectionChange = (value) => {
    onSelectionChange((prev) => ({
      ...prev,
      section: value,
      row: null,
    }));
  };

  const handleRowChange = (value) => {
    onSelectionChange((prev) => ({
      ...prev,
      row: value,
    }));
  };

  // Resets all selections and clears the form
  const handleClearFilters = () => {
    skipNextDataSyncRef.current = true;
    pdfUploadedKeysRef.current.clear();
    setPdfUploadedKeys(new Set());
    onCancelDraftSave?.();

    // Revoke and clear all image preview blob URLs
    setImagePreviewUrls((prev) => {
      Object.values(prev).forEach((url) => {
        if (url?.startsWith("blob:")) URL.revokeObjectURL(url);
      });
      return {};
    });

    reset();
    setForm({});

    if (draftKey) {
      setDrafts((prev) => {
        const updated = { ...prev };
        delete updated[draftKey];
        return updated;
      });
    }

    onSelectionChange({ page: null, section: null, row: null });
  };

  // Handlers Window Drag

  const handleMouseDown = (e) => {
    if (isResizingRef.current) return;
    setDragTarget("editor");
    setDragging(true);
    setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMiniMouseDown = (e) => {
    setDragTarget("mini");
    setDragging(true);
    isDraggingRef.current = false;
    setOffset({ x: e.clientX - miniPosition.x, y: e.clientY - miniPosition.y });
  };

  // Handlers Window Resize

  // Stores resize start snapshot for delta calculation in move handler
  const handleResizeStart = (direction) => (e) => {
    isResizingRef.current = true;
    setResizing(direction);
    e.stopPropagation();

    resizeRef.current = {
      direction,
      startX: e.clientX,
      startY: e.clientY,
      startWidth: size.width,
      startHeight: size.height,
      startXPos: position.x,
      startYPos: position.y,
    };
  };

  // Handlers Window Maximize and Restore

  const handleMaximize = (e) => {
    e.stopPropagation();

    if (!isMaximized) {
      // Snapshot current state before going fullscreen
      setPrevState({ position, size });
      setPosition({ x: 0, y: 0 });
      setSize({ width: window.innerWidth, height: window.innerHeight });
    } else {
      // Restore from snapshot
      if (prevState) {
        setPosition(prevState.position);
        setSize(prevState.size);
      }
    }

    setIsMaximized((prev) => !prev);
  };

  // Hide when unauthenticated or editor is closed
  if (!isAuthenticated || !isEditorOpen) return null;

  // Render

  return createPortal(
    !isMinimized ? (
      // Full Editor Window
      <div
        ref={containerRef}
        className={clsx(containerClasses)}
        style={{
          position: "absolute",
          transform: `translate(${position.x}px, ${position.y}px)`,
          width: size.width,
          height: size.height,
        }}
      >
        {/* Header */}
        <div
          onMouseDown={handleMouseDown}
          className={clsx(
            "w-full flex flex-wrap items-center justify-between",
            "gap-x-4 px-2 py-1",
            "bg-(--color-card-wrapper-header-fill)",
            "cursor-grab active:cursor-grabbing select-none",
            "rounded-t-(--radius-card-wrapper-base)",
          )}
        >
          <Text variant="bodyLrge" modifiers={["strong"]} text="Admin Editor" className="pl-2" />

          <div className="flex flex-wrap">
            {/* Toggle preview mode */}
            <TooltipButton label={isPreviewMode ? "Exit Preview" : "Preview Mode"} position="bottom">
              <Button
                variant="iconOnlyCircular"
                iconLeft={isPreviewMode ? EyeIcon : EyeOffIcon}
                iconClassName="!w-[45%] !h-[45%]"
                onClick={() => setIsPreviewMode((prev) => !prev)}
              />
            </TooltipButton>

            {/* Toggle label and value layout direction */}
            <TooltipButton label={isCaptionLayoutRow ? "Stack Layout" : "Row Layout"} position="bottom">
              <Button
                variant="iconOnlyCircular"
                iconLeft={isCaptionLayoutRow ? LayoutRowsIcon : LayoutColumnsIcon}
                iconClassName="!w-[45%] !h-[45%]"
                onClick={() => setIsCaptionLayoutRow((prev) => !prev)}
              />
            </TooltipButton>

            {/* Minimize to bubble */}
            <TooltipButton label="Minimize" position="bottom">
              <Button
                variant="iconOnlyCircular"
                iconLeft={MinusIcon}
                iconClassName="!w-[45%] !h-[45%]"
                onClick={() => setIsMinimized(true)}
              />
            </TooltipButton>

            {/* Maximize or restore */}
            <TooltipButton label={isMaximized ? "Restore" : "Maximize"} position="bottom">
              <Button
                variant="iconOnlyCircular"
                iconLeft={isMaximized ? SquaresIcon : SquareIcon}
                iconClassName="!w-[45%] !h-[45%]"
                onClick={handleMaximize}
              />
            </TooltipButton>

            {/* Close editor */}
            <TooltipButton label="Close Editor" position="bottom">
              <Button
                variant="iconOnlyCircular"
                iconLeft={XIcon}
                iconClassName="!w-[45%] !h-[45%]"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditorOpen(false);
                }}
              />
            </TooltipButton>
          </div>
        </div>

        {/* Selection Bar */}
        <div
          className={clsx(
            "w-full flex flex-wrap gap-4 p- items-center",
            "px-(--spacing-card-wrapper-education-mobile-padding-x)",
            "sm:px-(--spacing-card-wrapper-education-tablet-padding-x)",
            "lg:px-(--spacing-card-wrapper-education-desktop-padding-x)",
            isMaximized && [
              "sm:max-w-(---size-section-wrapper-tablet-max-width)",
              "lg:max-w-(--size-section-wrapper-desktop-max-width)",
              "lg:px-(--spacing-section-wrapper-desktop-padding-x)",
              "sm:px-(--spacing-section-wrapper-tablet-padding-x)",
            ],
          )}
        >
          <FormField
            variant="selectCustom"
            Icon={CaretDownIcon}
            placeholder={isLoadingPageOptions ? "Loading pages..." : "Select Page"}
            name="page"
            control={control}
            options={pageOptions}
            onChange={(value) => handlePageChange(value)}
            disabled={isLoadingPageOptions}
            className="!z-[calc(var(--z-admin-dropdown)+20)]"
          />

          <FormField
            variant="selectCustom"
            Icon={CaretDownIcon}
            placeholder="Select Section"
            name="section"
            control={control}
            options={sectionOptions}
            onChange={(value) => handleSectionChange(value)}
            className="!z-[calc(var(--z-admin-dropdown)+10)]"
          />

          <FormField
            variant="selectCustom"
            Icon={CaretDownIcon}
            placeholder="Select Row"
            name="row"
            control={control}
            options={rowOptions}
            onChange={(value) => handleRowChange(value)}
            className="!z-(--z-admin-dropdown)"
          />

          <Button variant="tag" label="Clear" onClick={handleClearFilters} />
        </div>

        {/* Form Fields */}
        <div
          className={clsx(
            inputContainerClasses,
            isMaximized && [
              "lg:px-(--spacing-section-wrapper-desktop-padding-x)",
              "sm:px-(--spacing-section-wrapper-tablet-padding-x)",
            ],
          )}
        >
          {isLoadingData && sectionData ? (
            <div className="w-full flex justify-center items-center py-10">
              <Text variant="bodyDefault" text="Loading content..." />
            </div>
          ) : !data ? (
            <div className="w-full flex justify-center items-center py-10">
              <Text variant="bodyDefault" text="No data available" />
            </div>
          ) : selection.section && !sectionData ? (
            <div className="w-full flex justify-center items-center py-10">
              <Text variant="bodyDefault" text="Loading content..." />
            </div>
          ) : (
            processedEntries.map(
              ({
                key,
                value,
                arrayInfo,
                shouldRenderControls,
                context,
                field,
                isImageField,
                isPdfMediaField,
              }) => {
                const isEditing = activeKey === key;

                return (
                  <div
                    key={key}
                    className={clsx(
                      "relative w-full flex gap-2 px-2 py-1 min-w-0 whitespace-pre-wrap",
                      isCaptionLayoutRow ? "flex-row" : "flex-col",
                    )}
                  >
                    {/* Array Item Controls */}
                    {shouldRenderControls && (
                      <div className="flex">
                        <Button
                          variant="iconOnlyCircular"
                          size="compact"
                          iconLeft={CirclePlusIcon}
                          iconClassName="!fill-red-400"
                          onClick={() => handleAdd(arrayInfo.arrayPath, arrayInfo.index)}
                        />
                        <Button
                          variant="iconOnlyCircular"
                          size="compact"
                          iconLeft={CircleXIcon}
                          iconClassName="!fill-green-500"
                          onClick={() => handleRemove(arrayInfo.arrayPath, arrayInfo.index)}
                        />
                      </div>
                    )}

                    {/* Field Label */}
                    {(context || field) && (
                      <span
                        className={clsx(
                          "cursor-pointer",
                          isCaptionLayoutRow
                            ? "flex-shrink-0 break-words max-w-[55%]"
                            : "w-full inline",
                        )}
                        onClick={() => setActiveKey(key)}
                      >
                        <Text
                          variant="labelDefault"
                          text={context && `${context} → `}
                          className="!inline opacity-90 !text-(--color-text-primary)"
                        />
                        <Text
                          modifiers={["strong"]}
                          variant="labelDefault"
                          text={`${field}:`}
                          className="!inline opacity-90 !text-(--color-text-primary)"
                        />
                      </span>
                    )}

                    {/* Media Field (Image / SVG / PDF) */}
                    {isImageField ? (
                      isPdfMediaField ? (
                        /* PDF field — show filename badge and always-visible Replace PDF button */
                        <div className="flex flex-col items-start gap-1">
                          <div
                            className={clsx(
                              "flex items-center gap-1.5 px-2 py-1.5",
                              "rounded-(--radius-form-field-base)",
                              "border border-(--color-form-field-border-default)",
                              "text-(--color-text-body)",
                            )}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 shrink-0 text-red-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.5}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <Text
                              variant="labelDefault"
                              text={
                                typeof value === "string" && !value.startsWith("indexeddb://")
                                  ? (value.split("/").pop()?.split("?")[0]?.slice(-22) || "resume.pdf")
                                  : "PDF ready to upload"
                              }
                              className="!text-[11px] opacity-60 max-w-[130px] truncate"
                            />
                          </div>

                          <input
                            type="file"
                            accept="image/*,.svg,.pdf"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={(e) => {
                              if (!activeImageKey) return;
                              handleImageUpload(e, activeImageKey);
                              setActiveImageKey(null);
                            }}
                          />

                          <Button
                            variant="overlayDefault"
                            size="compact"
                            label="Replace PDF"
                            onClick={() => {
                              setActiveImageKey(key);
                              fileInputRef.current?.click();
                            }}
                          />
                        </div>
                      ) : (
                        /* Image / SVG field — hover overlay replace button */
                        <div
                          className={clsx(
                            "relative h-auto group flex items-center justify-center",
                            key.toLowerCase().includes("svg") ? "w-8" : "w-32",
                          )}
                        >
                          {(imagePreviewUrls[key] ||
                            (typeof value === "string" && !value.startsWith("indexeddb://"))) && (
                            <img
                              src={imagePreviewUrls[key] ?? value}
                              className={clsx(
                                "w-full h-full object-cover",
                                "rounded-(--radius-form-field-base)",
                                "border border-(--color-form-field-border-default)",
                              )}
                            />
                          )}

                          <input
                            type="file"
                            accept="image/*,.svg,.pdf"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={(e) => {
                              if (!activeImageKey) return;
                              handleImageUpload(e, activeImageKey);
                              setActiveImageKey(null);
                            }}
                          />

                          <div
                            className={clsx(
                              "absolute inset-0",
                              "flex items-center justify-center",
                              "opacity-0 group-hover:opacity-100",
                              "transition-opacity",
                            )}
                          >
                            <Button
                              variant="overlayDefault"
                              size="compact"
                              label="Replace"
                              onClick={() => {
                                setActiveImageKey(key);
                                fileInputRef.current?.click();
                              }}
                            />
                          </div>
                        </div>
                      )
                    ) : // Text field, inline textarea while editing, read only text otherwise
                      isEditing ? (
                        <FormField
                          variant="textareaNative"
                          value={value ?? ""}
                          onChange={(e) => handleChange(key, e.target.value)}
                          onBlur={() => setActiveKey(null)}
                          className="!w-full"
                        />
                      ) : (
                        <div
                          className="w-full min-w-0 break-words whitespace-pre-wrap cursor-pointer"
                          onClick={() => setActiveKey(key)}
                        >
                          <Text variant="bodyDefault" text={value?.toString() || ""} />
                        </div>
                      )}
                  </div>
                );
              },
            )
          )}
        </div>

        {/* Footer */}
        <div
          className={clsx(
            "w-full absolute bottom-0",
            "flex items-center justify-end",
            "gap-3 px-6 py-6",
            "rounded-b-(--radius-card-wrapper-base)",
          )}
        >
          <Button
            variant="pirmary"
            size="compact"
            label="Save Changes"
            onClick={handleSave}
            className={isMobile && "!w-full"}
            disabled={!hasDraftChanges || activeAction !== null}
          >
            {activeAction === "save" && <Spinner variant="buttonPrimary" text="Saving Changes" />}
          </Button>

          <Button
            variant="secondary"
            size="compact"
            label="Clear Draft"
            onClick={handleClearDraft}
            className={isMobile && "!w-full"}
            disabled={!hasDraftChanges || activeAction !== null || isClearingDraft}
          >
            {isClearingDraft && <Spinner variant="buttonSecondary" text="Clearing Draft" />}
          </Button>

          <Button
            variant="secondary"
            size="compact"
            label={row !== null ? "Reset Row" : section ? "Reset Section" : "Reset Page"}
            onClick={handleReset}
            className={isMobile && "!w-full"}
            disabled={!selection.page || activeAction !== null}
          >
            {activeAction === "reset" && (
              <Spinner
                variant="buttonSecondary"
                text={
                  row !== null ? "Resetting Row" : section ? "Resetting Section" : "Resetting Page"
                }
              />
            )}
          </Button>
        </div>

        {/* Resize Handles */}
        <div
          onMouseDown={handleResizeStart("right")}
          className="absolute top-0 right-0 w-2 h-full cursor-ew-resize"
        />
        <div
          onMouseDown={handleResizeStart("left")}
          className="absolute top-0 left-0 w-2 h-full cursor-ew-resize"
        />
        <div
          onMouseDown={handleResizeStart("bottom")}
          className="absolute bottom-0 left-0 w-full h-2 cursor-ns-resize"
        />
        <div
          onMouseDown={handleResizeStart("top")}
          className="absolute top-0 left-0 w-full h-2 cursor-ns-resize"
        />
        <div
          onMouseDown={handleResizeStart("top-left")}
          className="absolute top-0 left-0 w-3 h-3 cursor-nwse-resize"
        />
        <div
          onMouseDown={handleResizeStart("top-right")}
          className="absolute top-0 right-0 w-3 h-3 cursor-nesw-resize"
        />
        <div
          onMouseDown={handleResizeStart("bottom-left")}
          className="absolute bottom-0 left-0 w-3 h-3 cursor-nesw-resize"
        />
        <div
          onMouseDown={handleResizeStart("bottom-right")}
          className="absolute bottom-0 right-0 w-3 h-3 cursor-nwse-resize"
        />
      </div>
    ) : (
      // Minimized Bubble
      <div
        ref={miniRef}
        onMouseDown={handleMiniMouseDown}
        style={{
          position: "absolute",
          transform: `translate(${miniPosition.x}px, ${miniPosition.y}px)`,
        }}
      >
        <Button
          variant="tag"
          iconLeft={EditIcon}
          onClick={() => {
            // Block click if user was dragging the bubble
            if (isDraggingRef.current) return;
            setIsMinimized(false);
          }}
          className={clsx(
            "!z-(--z-admin-portal)",
            "backdrop-blur-(--effect-card-wrapper-background-blur)",
            "bg-(--color-card-wrapper-header-fill)",
            "border border-(--color-form-field-border-default)",
          )}
        />
      </div>
    ),
    document.getElementById("admin-root"),
  );
};

export default AutoFormEditor;

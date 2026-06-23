import { useState, useEffect, useCallback, useRef } from "react";

import { getPageBySlug, resetPage, updatePage, getPageOptions } from "../../api/admin/page.api";
import { getHeader, getFooter, getSiteConfig } from "../../api/global.api";
import {
  updateHeader,
  updateFooter,
  resetHeader,
  resetFooter,
  updateSiteConfig,
  resetSiteConfig,
} from "../../api/admin/global.api";
import { resetSection, updateSection } from "../../api/admin/section.api";
import { resetRow, updateRow } from "../../api/admin/row.api";
import { getSection } from "../../api/admin/section.api";

import { usePopupMessage } from "../../hooks/usePopupMessage";
import { useAuth } from "../../hooks/useAuth";
import usePersistentState from "../../hooks/usePersistentState";

import { STORAGE_KEYS } from "../../utils/storage/keys";
import { flattenObject } from "../../components/admin/editors/utils/flattenObject";

import AutoFormEditor from "../../components/admin/editors/AutoFormEditor";

const AdminEditorContainer = () => {
  const { isAuthenticated } = useAuth();
  const { showMessage, closeModal } = usePopupMessage();

  // Page dropdown options
  const [pageOptions, setPageOptions] = useState([]);
  const [isLoadingPageOptions, setIsLoadingPageOptions] = useState(false);

  // Main data (page / section / row)
  const [pageData, setPageData] = useState(null);
  const [sectionData, setSectionData] = useState(null);
  const [rowData, setRowData] = useState(null);
  const [isLoadingPageData, setIsLoadingPageData] = useState(false);
  const [isLoadingSectionData, setIsLoadingSectionData] = useState(false);
  const [isLoadingRowData, setIsLoadingRowData] = useState(false);
  const [activeAction, setActiveAction] = useState(null);
  const [isClearingDraft, setIsClearingDraft] = useState(false);

  // Persisted selection (page slug, section key, row id)
  const [selectedContext, setSelectedContext] = usePersistentState(
    STORAGE_KEYS.ADMIN_EDITOR.SELECTION,
    {
      page: null,
      section: null,
      row: null,
    },
    isAuthenticated,
  );

  // Persisted local draft data keyed by selection
  const [drafts, setDrafts] = usePersistentState(
    STORAGE_KEYS.ADMIN_EDITOR.DRAFTS,
    {},
    isAuthenticated,
  );

  const draftSaveTimerRef = useRef(null);

  // Composite draft key based on current selection depth
  const draftKey =
    selectedContext.row !== null
      ? `${selectedContext.page}__${selectedContext.section}__${selectedContext.row}`
      : selectedContext.section
        ? `${selectedContext.page}__${selectedContext.section}`
        : selectedContext.page;

  const currentDraft = drafts[draftKey];
  const currentApiData = rowData || sectionData || pageData;

  // Flatten API data to match draft structure for change comparison
  const flatApiData = currentApiData ? flattenObject(currentApiData) : null;

  const hasDraftChanges =
    currentDraft && JSON.stringify(currentDraft) !== JSON.stringify(flatApiData);

  // Debounces draft saves to avoid excessive localStorage writes
  const saveDraftDebounced = useCallback(
    (formData) => {
      if (draftSaveTimerRef.current) {
        clearTimeout(draftSaveTimerRef.current);
      }

      draftSaveTimerRef.current = setTimeout(() => {
        setDrafts((prev) => ({
          ...prev,
          [draftKey]: formData,
        }));
      }, 1500);
    },
    [draftKey, setDrafts],
  );

  // Cleanup debounce timer on unmount
  useEffect(() => {
    return () => {
      if (draftSaveTimerRef.current) {
        clearTimeout(draftSaveTimerRef.current);
      }
    };
  }, []);

  // Cancels a pending debounced draft save
  const cancelDraftSave = useCallback(() => {
    if (draftSaveTimerRef.current) {
      clearTimeout(draftSaveTimerRef.current);
      draftSaveTimerRef.current = null;
    }
  }, []);

  const handleClearDraft = async () => {
    try {
      setIsClearingDraft(true);

      setDrafts((prev) => {
        const updated = { ...prev };
        delete updated[draftKey];
        return updated;
      });

      showMessage({
        role: "status",
        title: "Draft cleared",
        message: "Your draft has been cleared successfully",
        variant: "success",
        autoCloseMs: 4000,
      });
    } catch (error) {
      showMessage({
        role: "alert",
        title: "Clear Failed",
        message: error?.message || "Something went wrong while clearing the draft",
        variant: "error",
        autoCloseMs: 4000,
      });
    } finally {
      setIsClearingDraft(false);
    }
  };

  // Fetches page options for the editor dropdown on mount
  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchOptions = async () => {
      setIsLoadingPageOptions(true);

      try {
        const res = await getPageOptions();
        setPageOptions(res.data);
      } catch (err) {
        showMessage({
          role: "alert",
          title: "Failed to load pages",
          message: err?.message || "Unable to fetch page options",
          variant: "error",
          autoCloseMs: 4000,
        });
      } finally {
        setIsLoadingPageOptions(false);
      }
    };

    fetchOptions();
  }, [isAuthenticated, showMessage]);

  // Fetches page, section, and row data based on the current selection context
  const fetchByContext = useCallback(
    async (context) => {
      const { page, section, row } = context;

      if (!page) return;

      try {
        if (!section) {
          setSectionData(null);
          setRowData(null);
        }

        if (!row) {
          setRowData(null);
        }

        // Global context (header / footer / site-config)
        if (page === "global") {
          setPageData(null);

          if (section === "header") {
            setIsLoadingSectionData(true);
            const headerRes = await getHeader();
            setSectionData(headerRes.data);
            setIsLoadingSectionData(false);
          } else if (section === "footer") {
            setIsLoadingSectionData(true);
            const footerRes = await getFooter();
            setSectionData(footerRes.data);
            setIsLoadingSectionData(false);
          } else if (section === "site-config") {
            setIsLoadingSectionData(true);
            const siteConfigRes = await getSiteConfig();
            setSectionData(siteConfigRes.data);
            setIsLoadingSectionData(false);
          }

          return;
        }

        // Normal page
        setIsLoadingPageData(true);
        const pageRes = await getPageBySlug(page);
        setPageData(pageRes.data);
        setIsLoadingPageData(false);

        if (section) {
          setIsLoadingSectionData(true);
          const sectionRes = await getSection(page, section);
          setSectionData(sectionRes.data);
          setIsLoadingSectionData(false);

          if (row) {
            setIsLoadingRowData(true);
            const foundRow = sectionRes.data?.rows?.find((r) => r.id === row) || null;
            setRowData(foundRow);
            setIsLoadingRowData(false);
          }
        }
      } catch (err) {
        showMessage({
          role: "alert",
          title: "Data load failed",
          message: err?.message || "Unable to load selected data",
          variant: "error",
          autoCloseMs: 4000,
        });
      }
    },
    [showMessage],
  );

  // Refetch when selection changes
  useEffect(() => {
    fetchByContext(selectedContext);
  }, [selectedContext, fetchByContext]);

  const refetchData = async () => {
    await fetchByContext(selectedContext);
  };

  const handleSave = async ({ type, data, context }) => {
    try {
      setActiveAction("save");

      const { page, section, row } = context;

      if (type === "row") {
        await updateRow(page, section, row, data);
      } else if (type === "section") {
        if (page === "global") {
          if (section === "header") {
            await updateHeader(data);
          } else if (section === "footer") {
            await updateFooter(data);
          } else if (section === "site-config") {
            await updateSiteConfig(data);
          }
        } else {
          await updateSection(page, section, data);
        }
      } else if (type === "page") {
        await updatePage(page, data);
      }

      // Clear draft after successful save
      setDrafts((prev) => {
        const updated = { ...prev };
        delete updated[draftKey];
        return updated;
      });

      await refetchData();

      showMessage({
        role: "status",
        title: `${type} updated`,
        message: "Changes saved successfully",
        variant: "success",
        autoCloseMs: 5000,
      });
    } catch (error) {
      showMessage({
        role: "alert",
        title: "Update Failed",
        message: error?.response?.data?.message || "Something went wrong while saving changes.",
        variant: "error",
        autoCloseMs: 4000,
      });
    } finally {
      setActiveAction(null);
    }
  };

  const handleReset = async ({ type, context }) => {
    const { page, section, row } = context;

    showMessage({
      title: `Reset ${type}?`,
      message: `This will restore the original ${type} data.`,
      variant: "warning",
      autoCloseMs: 0,

      actions: [
        {
          id: "confirm",
          variant: "primary",
          label: "Reset",

          onClick: async () => {
            closeModal();

            try {
              setActiveAction("reset");

              if (type === "row") {
                await resetRow(page, section, row);
              } else if (type === "section") {
                if (page === "global") {
                  if (section === "header") {
                    await resetHeader();
                  } else if (section === "footer") {
                    await resetFooter();
                  } else if (section === "site-config") {
                    await resetSiteConfig();
                  }
                } else {
                  await resetSection(page, section);
                }
              } else if (type === "page") {
                await resetPage(page);
              }

              // Clear draft on reset
              setDrafts((prev) => {
                const updated = { ...prev };
                delete updated[draftKey];
                return updated;
              });

              await refetchData();

              showMessage({
                title: `${type} reset`,
                message: `${type} restored successfully`,
                variant: "success",
                autoCloseMs: 4000,
              });
            } catch (error) {
              showMessage({
                title: "Reset Failed",
                message: error?.response?.data?.message || "Something went wrong while resetting.",
                variant: "error",
                autoCloseMs: 4000,
              });
            } finally {
              setActiveAction(null);
            }
          },
        },

        {
          id: "cancel",
          variant: "secondary",
          label: "Cancel",

          onClick: () => {
            closeModal();
          },
        },
      ],
    });
  };

  return (
    <AutoFormEditor
      pageOptions={pageOptions}
      isLoadingPageOptions={isLoadingPageOptions}
      data={currentDraft && Object.keys(currentDraft).length > 0 ? currentDraft : currentApiData}
      pageData={pageData}
      sectionData={sectionData}
      isLoadingData={isLoadingPageData || isLoadingSectionData || isLoadingRowData}
      selection={selectedContext}
      onSelectionChange={setSelectedContext}
      onSave={handleSave}
      onReset={handleReset}
      onClearDraft={handleClearDraft}
      activeAction={activeAction}
      draftKey={draftKey}
      drafts={drafts}
      setDrafts={setDrafts}
      onDraftChange={saveDraftDebounced}
      hasDraftChanges={hasDraftChanges}
      isClearingDraft={isClearingDraft}
      onCancelDraftSave={cancelDraftSave}
    />
  );
};

export default AdminEditorContainer;

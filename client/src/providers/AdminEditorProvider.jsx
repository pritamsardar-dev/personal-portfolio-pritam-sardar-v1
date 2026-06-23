import React, { useState } from "react";

import { useAuth } from "../hooks/useAuth";
import usePersistentState from "../hooks/usePersistentState";

import { STORAGE_KEYS } from "../utils/storage/keys";

import { AdminEditorContext } from "../context/AdminEditorContext";

export const AdminEditorProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const { ADMIN_EDITOR } = STORAGE_KEYS;

  // Controls whether the admin editor panel is mounted
  const [isEditorOpen, setIsEditorOpen] = usePersistentState(
    ADMIN_EDITOR.OPEN,
    false,
    isAuthenticated,
  );

  // Toggles live preview mode in the editor
  const [isPreviewMode, setIsPreviewMode] = usePersistentState(
    ADMIN_EDITOR.PREVIEW,
    false,
    isAuthenticated,
  );

  // Tracks which section is currently being edited
  const [activeSection, setActiveSection] = useState(null);

  // Holds unsaved live draft data for the active section
  const [draftData, setDraftData] = useState(null);

  const value = {
    isEditorOpen,
    setIsEditorOpen,

    isPreviewMode,
    setIsPreviewMode,

    activeSection,
    setActiveSection,

    draftData,
    setDraftData,
  };

  return <AdminEditorContext.Provider value={value}>{children}</AdminEditorContext.Provider>;
};

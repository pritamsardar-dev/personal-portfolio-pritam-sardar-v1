import { useContext } from "react";

import { AdminEditorContext } from "../context/AdminEditorContext";

// Provides access to AdminEditorContext and throws if used outside its provider.
const useAdminEditor = () => {
  const context = useContext(AdminEditorContext);

  if (!context) {
    throw new Error("useAdminEditor must be used inside AdminEditorProvider");
  }

  return context;
};

export default useAdminEditor;

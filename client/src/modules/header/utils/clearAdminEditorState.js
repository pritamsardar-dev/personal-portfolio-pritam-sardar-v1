import { STORAGE_KEYS } from "../../../utils/storage/keys";

// Clears all admin editor and auth session state from localStorage
export const clearAdminEditorState = () => {
  const { ADMIN_EDITOR, AUTH } = STORAGE_KEYS;

  const keys = [
    ADMIN_EDITOR.OPEN,
    ADMIN_EDITOR.PREVIEW,
    ADMIN_EDITOR.PAGE,
    ADMIN_EDITOR.SECTION,
    ADMIN_EDITOR.ROW,
    ADMIN_EDITOR.LAYOUT,
    ADMIN_EDITOR.MINIMIZE,
    ADMIN_EDITOR.MAXIMIZE,
    ADMIN_EDITOR.POSITION,
    ADMIN_EDITOR.SIZE,
    ADMIN_EDITOR.PREVSTATE,
    ADMIN_EDITOR.SELECTION,

    AUTH.SESSION_HINT,
  ];

  keys.forEach((key) => localStorage.removeItem(key));
};

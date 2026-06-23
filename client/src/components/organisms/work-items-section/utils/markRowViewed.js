import { recordRowView } from "../../../../api/workItems.api";

// Module level Set persists across component mounts for the session
// No localStorage needed at all
const visitedRows = new Set();
const listeners = new Map(); // rowId -> callback[]

export const isRowVisited = (rowId) => {
  if (!rowId) return false;
  return visitedRows.has(rowId);
};

// Subscribe to view events for a specific row
// Returns an unsubscribe function
export const onRowViewed = (rowId, callback) => {
  if (!rowId || typeof callback !== "function") return () => {};
  if (!listeners.has(rowId)) listeners.set(rowId, []);
  listeners.get(rowId).push(callback);
  return () => {
    const cbs = listeners.get(rowId) || [];
    listeners.set(rowId, cbs.filter((cb) => cb !== callback));
  };
};

const notify = (rowId, payload) => {
  (listeners.get(rowId) || []).forEach((cb) => {
    try { cb(payload); } catch { /* ignore */ }
  });
};

// Records a view for a row, deduplicated by IP on the server
// No localStorage or sessionStorage used
export const markRowViewed = async (rowId) => {
  if (!rowId) return;

  if (visitedRows.has(rowId)) {
    // Already visited this session, just notify so UI can show visited state
    notify(rowId, { visited: true, counted: false });
    return;
  }

  try {
    const result = await recordRowView(rowId);
    visitedRows.add(rowId);
    notify(rowId, { visited: true, counted: result?.counted === true });
  } catch {
    // Non critical, ignore
  }
};
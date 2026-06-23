import RowView from "../models/RowView.model.js";
import { extractClientIp, hashIp } from "./ipHash.js";

// Attaches a `viewed` boolean to each row based on whether the current
// visitor (by ipHash) already has a RowView record for it. One query
// for the whole batch.
export const attachViewedFlag = async (rows, req) => {
  if (!Array.isArray(rows) || rows.length === 0) return rows;

  const ipHash = hashIp(extractClientIp(req));
  const rowIds = rows.map((row) => row.id).filter(Boolean);

  if (rowIds.length === 0) return rows;

  const viewedDocs = await RowView.find(
    { ipHash, rowId: { $in: rowIds } },
    { rowId: 1, _id: 0 },
  ).lean();

  const viewedSet = new Set(viewedDocs.map((doc) => doc.rowId));

  return rows.map((row) => ({
    ...row,
    viewed: viewedSet.has(row.id),
  }));
};
import { Schema, model } from "mongoose";

// Tracks which IP hashes have already counted as a view for a given row,
// so the view counter on Section.rows only increases once per visitor.
const rowViewSchema = new Schema(
  {
    rowId: {
      type: String,
      required: true,
    },

    ipHash: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

// One view per IP per row, enforced at the database level
rowViewSchema.index({ rowId: 1, ipHash: 1 }, { unique: true });

export default model("RowView", rowViewSchema);
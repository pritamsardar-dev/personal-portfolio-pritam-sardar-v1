import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const HeaderSchema = new Schema(
  {
    id: {
      type: String,
      default: "global-header",
      unique: true,
    },
    type: {
      type: String,
      default: "header",
    },
    enabled: Boolean,
    navigationItems: Schema.Types.Mixed,
    showThemeToggle: Boolean,
  },
  { timestamps: true },
);

export default models.header || model("header", HeaderSchema);

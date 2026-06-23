import { Schema, model } from "mongoose";

const renderSchema = new Schema(
  {
    view: String,
    variant: String,
    order: Number,
    enabled: Boolean,
  },
  { _id: false },
);

const pageSectionSchema = new Schema(
  {
    key: String,
    view: String,
    variant: String,
    order: Number,
    enabled: Boolean,

    // Supports multiple renders from the same section ref
    renders: [renderSchema],

    refModel: {
      type: String,
      required: true,
    },
    ref: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: "sections.refModel",
    },
  },
  { _id: false },
);

const pageSchema = new Schema(
  {
    id: String,
    type: { type: String, default: "page" },
    slug: { type: String, unique: true },
    enabled: Boolean,
    seo: {
      title: String,
      description: String,
    },
    sections: [pageSectionSchema],
  },
  { timestamps: true },
);

export default model("Page", pageSchema);

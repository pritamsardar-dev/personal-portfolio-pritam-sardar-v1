import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const blockSchema = new Schema(
  {
    id: String,
    type: Schema.Types.Mixed,
    view: Schema.Types.Mixed,
    enabled: Schema.Types.Mixed,
    order: Schema.Types.Mixed,
    data: Schema.Types.Mixed,
  },
  { _id: false },
);

const rowSchema = new Schema(
  {
    id: String,
    title: String,
    domain: String,
    type: Schema.Types.Mixed,
    view: Schema.Types.Mixed,
    enabled: Boolean,
    order: Number,
    featured: Boolean,
    topOrder: Number,
    views: { type: Number, default: 0 },
    createdAt: Schema.Types.Mixed,
    primaryCategory: Schema.Types.Mixed,
    secondaryCategories: Schema.Types.Mixed,
    tags: Schema.Types.Mixed,
    links: Schema.Types.Mixed,
    buttonProps: Schema.Types.Mixed,
    fullCaseStudy: Schema.Types.Mixed,
    blocks: [blockSchema],
  },
  { _id: false },
);

const SectionSchema = new Schema(
  {
    id: {
      type: String,
      default: "hero",
      unique: true,
    },
    type: {
      type: String,
      default: "hero",
    },
    assetFolder: String,
    enabled: Schema.Types.Mixed,
    order: Number,
    headingHome: Schema.Types.Mixed,
    metadataHome: Schema.Types.Mixed,
    atAGlance: Schema.Types.Mixed,
    alignment: Schema.Types.Mixed,
    heading: Schema.Types.Mixed,
    buttonProps: Schema.Types.Mixed,
    filters: Schema.Types.Mixed,
    workExperienceHighlightsCtaProps: Schema.Types.Mixed,
    WorkExperienceHomeCtaProps: Schema.Types.Mixed,
    projectsHomeCtaProps: Schema.Types.Mixed,
    carouselBlockButtonProps: Schema.Types.Mixed,
    textBlockCtaProps: Schema.Types.Mixed,
    relatedWorkItemsCtas: Schema.Types.Mixed,
    rows: [rowSchema],
  },
  { timestamps: true },
);

export default models.section || model("section", SectionSchema);

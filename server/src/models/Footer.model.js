import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const FooterSchema = new Schema(
  {
    id: {
      type: String,
      default: "global-footer",
      unique: true,
    },
    type: {
      type: String,
      default: "footer",
    },
    enabled: Boolean,
    navigationItems: Schema.Types.Mixed,
    brandTagline: Schema.Types.Mixed,
    quickLinksHeading: Schema.Types.Mixed,
    contactLinksHeading: Schema.Types.Mixed,
    contactLinks: Schema.Types.Mixed,
    availabilityHeading: Schema.Types.Mixed,
    availabilityTagline: Schema.Types.Mixed,
    copyright: Schema.Types.Mixed,
    attribution: Schema.Types.Mixed,
  },
  { timestamps: true },
);

export default models.footer || model("footer", FooterSchema);

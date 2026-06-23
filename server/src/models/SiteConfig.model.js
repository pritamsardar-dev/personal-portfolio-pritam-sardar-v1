import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const SiteConfigSchema = new Schema(
  {
    id: {
      type: String,
      default: "global-site-config",
      unique: true,
    },
    type: {
      type: String,
      default: "site-config",
    },
    enabled: Boolean,
    identity: Schema.Types.Mixed,
    links: Schema.Types.Mixed,
  },
  { timestamps: true },
);

export default models.siteconfig || model("siteconfig", SiteConfigSchema);
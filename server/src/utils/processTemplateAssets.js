import path from "path";
import fs from "fs";

import { uploadFromPath } from "../utils/uploadToCloudianry.js";

const BASE_ASSET_PATH = path.join(process.cwd(), "src/templates/assets");

// Recursively walks an object and uploads any src fields found as local asset paths
export const processTemplateAssets = async (obj, folder) => {
  if (!obj || typeof obj !== "object") return;

  for (const key in obj) {
    const value = obj[key];

    if (key === "src" && typeof value === "string") {
      if (!value.trim()) continue;

      const filePath = path.join(BASE_ASSET_PATH, value);

      if (!fs.existsSync(filePath)) continue;
      if (!fs.statSync(filePath).isFile()) continue;

      const uploaded = await uploadFromPath(filePath, folder);

      obj.src = uploaded.url;
      obj.public_id = uploaded.public_id;
    } else if (typeof value === "object" && value !== null) {
      await processTemplateAssets(value, folder);
    }
  }
};

import cloudinary from "../config/cloudinary.js";

export const deleteOneAsset = async (publicId) => {
  try {
    // Raw resource_type required for PDFs detect by extension in the public_id
    const resourceType = /\.pdf$/i.test(publicId) ? "raw" : "image";
    const result = await cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
    return result;
  } catch {
    throw new Error(`Failed to delete: ${publicId}`);
  }
};

export const deleteAllAssets = async (publicIds = []) => {
  for (const id of publicIds) {
    try {
      await deleteOneAsset(id);
    } catch {
      console.warn("Failed to delete:", id);
    }
  }
};

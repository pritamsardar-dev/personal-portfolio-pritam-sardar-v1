import cloudinary from "../config/cloudinary.js";

export const deleteOneAsset = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
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

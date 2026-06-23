import cloudinary from "../config/cloudinary.js";

export const uploadFromBuffer = (fileBuffer, folder) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder, resource_type: "auto" }, (error, result) => {
        if (error) return reject(error);
        resolve({
          url: result.secure_url,
          public_id: result.public_id,
        });
      })
      .end(fileBuffer);
  });
};

export const uploadFromPath = async (filePath, folder) => {
  const result = await cloudinary.uploader.upload(filePath, { folder });

  return {
    url: result.secure_url,
    public_id: result.public_id,
  };
};

import cloudinary from "../config/cloudinary.js";

export const uploadFromBuffer = (fileBuffer, folder, options = {}) => {
  const { mimetype, originalname } = options;
  const isPdf = mimetype === "application/pdf";

  const uploadOptions = {
    folder,
    // PDFs need "image" so transformations/flags like fl_inline actually work.
    // Raw assets can't be transformed at all, that was the real bug.
    resource_type: isPdf ? "image" : "auto",
  };

  if (isPdf && originalname) {
    // Use the original filename (spaces to underscores) as the Cloudinary public_id
    // so the CDN link reflects the actual resume name
    // Strip extension Cloudinary appends it automatically for raw resource_type
    const sanitisedName = originalname.trim().replace(/\s+/g, "_").replace(/(\.pdf)+$/i, "");
    uploadOptions.public_id = sanitisedName; // e.g. "Pritam_Sardar_Resume.pdf"
    uploadOptions.overwrite = true;
    uploadOptions.unique_filename = false;
  }

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(uploadOptions, (error, result) => {
        if (error) return reject(error);
        // For PDFs, inject fl_inline so the browser renders them in-tab
        // instead of forcing a download. User can still save from the browser.
        const url = result.secure_url;

        resolve({
          url,
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

export const extractPublicIds = (obj, ids = []) => {
  if (!obj || typeof obj !== "object") return ids;

  for (const key in obj) {
    const value = obj[key];

    if (key === "public_id" && typeof value === "string") {
      ids.push(value);
    }

    if (typeof value === "object" && value !== null) {
      extractPublicIds(value, ids);
    }
  }

  return ids;
};

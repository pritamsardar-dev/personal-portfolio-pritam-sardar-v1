export function normalizeImage(image, theme = "light") {
  if (image?.sources) {
    const themed = image.sources[theme];
    const fallback = image.sources[theme === "dark" ? "light" : "dark"];
    return {
      ...image,
      src: themed?.src ?? fallback?.src ?? "",
      public_id: themed?.public_id ?? fallback?.public_id ?? "",
    };
  }
  return image;
}
export const getAvailableLinks = (links) => {
  if (!links) return [];

  const map = [
    { key: "liveDemo", label: "Live Demo" },
    { key: "sourceCode", label: "Source Code" },
    { key: "designFile", label: "Design File" },
  ];

  return map
    .map((item) => ({
      label: item.label,
      url: links[item.key]?.url,
    }))
    .filter((link) => link.url);
};

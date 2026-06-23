export const resolveCtaTarget = (row, ctaId) => {
  if (!row?.links) return null;

  switch (ctaId) {
  case "live-demo-link":
    return row.links.liveDemo;

  case "source-code-link":
    return row.links.sourceCode;

  case "design-file-link":
    return row.links.designFile;

  default:
    return null;
  }
};

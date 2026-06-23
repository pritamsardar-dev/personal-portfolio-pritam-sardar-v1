import { getFeaturedItems } from "./getFeaturedItems";
import { getRelatedItems } from "./getRelatedItems";

export function getWorkItemsDisplayRows({ rows, currentItem, isFullScreenMode, resolvedVariant }) {
  if (!Array.isArray(rows)) return [];

  const enabledRows = rows.filter((r) => r?.enabled !== false);
  const featuredItems = getFeaturedItems(enabledRows, 4);

  const includeCurrent = resolvedVariant === "fullscreenCaseStudyPageRead";

  const relatedItems = currentItem
    ? getRelatedItems(enabledRows, currentItem, 10, { includeCurrent })
    : [];

  if (isFullScreenMode || resolvedVariant === "fullscreenCaseStudyPageRead") {
    return relatedItems;
  }

  if (resolvedVariant === "projectsHomePage") {
    return featuredItems;
  }

  return enabledRows;
}

export function getRelatedItems(rows, currentItem, limit = 10, { includeCurrent = false } = {}) {
  if (!Array.isArray(rows) || !currentItem) return [];

  const filtered = [...rows].filter((item) => {
    if (!item?.id) return false;
    if (!includeCurrent && item.id === currentItem.id) return false;
    return true;
  });

  return filtered
    .sort((a, b) => {
      // Featured items rank first
      if (a?.featured !== b?.featured) {
        return b.featured - a.featured;
      }

      // Prefer matching primary category
      const aPrimaryMatch =
        a?.primaryCategory?.key &&
        currentItem?.primaryCategory?.key &&
        a.primaryCategory.key === currentItem.primaryCategory.key;

      const bPrimaryMatch =
        b?.primaryCategory?.key &&
        currentItem?.primaryCategory?.key &&
        b.primaryCategory.key === currentItem.primaryCategory.key;

      if (aPrimaryMatch !== bPrimaryMatch) {
        return bPrimaryMatch - aPrimaryMatch;
      }

      // Prefer more overlapping secondary categories
      const aSecondaryScore = Array.isArray(a.secondaryCategories)
        ? a.secondaryCategories.filter((cat) =>
          currentItem.secondaryCategories?.some((c) => c.key === cat.key),
        ).length
        : 0;

      const bSecondaryScore = Array.isArray(b.secondaryCategories)
        ? b.secondaryCategories.filter((cat) =>
          currentItem.secondaryCategories?.some((c) => c.key === cat.key),
        ).length
        : 0;

      if (aSecondaryScore !== bSecondaryScore) {
        return bSecondaryScore - aSecondaryScore;
      }

      // Prefer more overlapping tags
      const aTagScore = Array.isArray(a?.tags)
        ? a.tags.filter((tag) => currentItem.tags?.includes(tag)).length
        : 0;

      const bTagScore = Array.isArray(b?.tags)
        ? b.tags.filter((tag) => currentItem.tags?.includes(tag)).length
        : 0;

      if (aTagScore !== bTagScore) {
        return bTagScore - aTagScore;
      }

      return (a?.topOrder ?? Infinity) - (b?.topOrder ?? Infinity);
    })
    .slice(0, limit);
}

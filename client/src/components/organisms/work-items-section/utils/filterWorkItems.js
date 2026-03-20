export function filterWorkItems(rows, filters = {}) {
  if (!Array.isArray(rows)) return [];

  const {
    scope = "all",
    primary = "all",
    secondary = [],
    sort = "top"
  } = filters;

  let result = rows.filter(r => r?.enabled !== false);

  // ---------- Scope Filter ----------
  if (scope !== "all") {
    result = result.filter(row => row.domain === scope);
  }

  // ---------- Primary Filter ----------
  if (primary !== "all") {
    result = result.filter(
      row => row?.primaryCategory?.key === primary
    );
  }

  // ---------- Secondary Filter ----------
  if (Array.isArray(secondary) && secondary.length > 0) {
    result = result.filter(row =>
      row.secondaryCategories?.some(cat =>
        secondary.includes(cat.key)
      )
    );
  }

  // ---------- Sorting ----------
  const sorted = [...result];

  switch (sort) {

    case "newest":
      sorted.sort(
        (a, b) =>
          new Date(b.createdAt) - new Date(a.createdAt)
      );
      break;

    case "popular":
      sorted.sort(
        (a, b) =>
          (b.views ?? 0) - (a.views ?? 0)
      );
      break;

    case "top":
    default:
      sorted.sort(
        (a, b) =>
          (a.topOrder ?? Infinity) -
          (b.topOrder ?? Infinity)
      );
      break;
  }

  return sorted;
}
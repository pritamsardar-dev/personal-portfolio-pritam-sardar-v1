export function buildFilterOptions({ rows, filtersPayload = {} }) {
  if (!Array.isArray(rows)) {
    return { scope: [], primary: [], secondary: [] };
  }

  const { scope = "all", primary: primaryKey = "all" } = filtersPayload;

  const scopeMap = new Map();
  const primaryMap = new Map();
  const secondaryMap = new Map();

  const enabledScopeRows = rows.filter((row) => row.enabled !== false);

  const categoryRows = rows.filter((row) => {
    if (filtersPayload.scope === "all") return true;
    return row?.domain === filtersPayload.scope;
  });

  const enabledCategoryRows = categoryRows.filter((row) => row.enabled !== false);

  // Scope options
  scopeMap.set("all", {
    key: "all",
    label: "All",
    variant: "tag",
    count: enabledScopeRows.length,
  });

  scopeMap.set("projects", {
    key: "project",
    label: "Projects",
    variant: "tag",
    count: enabledScopeRows.filter((r) => r.domain === "project").length,
  });

  scopeMap.set("experience", {
    key: "experience",
    label: "Work Experience",
    variant: "tag",
    count: enabledScopeRows.filter((r) => r.domain === "experience").length,
  });

  // Primary options built from all enabled category rows without modification
  enabledCategoryRows.forEach((row) => {
    const primaryCategory = row?.primaryCategory;

    if (primaryCategory?.key) {
      const { key, label } = primaryCategory;
      const domain = row.domain;

      if (!primaryMap.has(key)) {
        primaryMap.set(key, {
          key,
          label,
          domain,
          variant: "tag",
          count: 0,
        });
      }

      primaryMap.get(key).count += 1;
    }
  });

  const primary = [
    {
      key: "all",
      label: "All",
      variant: "tag",
      count: enabledCategoryRows.length,
      domain: "all",
    },
    ...Array.from(primaryMap.values()),
  ];

  // Secondary options scoped to rows that match the active primary (and domain if scoped)
  let secondaryRows = [...enabledCategoryRows];

  if (primaryKey !== "all") {
    secondaryRows = secondaryRows.filter((row) => row?.primaryCategory?.key === primaryKey);
  }

  secondaryRows.forEach((row) => {
    const secondaryCategories = row?.secondaryCategories;

    if (Array.isArray(secondaryCategories)) {
      secondaryCategories.forEach((cat) => {
        const { key, label } = cat;

        if (!secondaryMap.has(key)) {
          secondaryMap.set(key, {
            key,
            label,
            variant: "tag",
            count: 0,
          });
        }

        secondaryMap.get(key).count += 1;
      });
    }
  });

  return {
    scope: Array.from(scopeMap.values()),
    primary,
    secondary: Array.from(secondaryMap.values()),
  };
}

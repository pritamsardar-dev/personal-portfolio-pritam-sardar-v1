export function buildFilterOptions({ rows, filtersPayload = {} }) {
  if (!Array.isArray(rows)) {
    return { scope: [], primary: [], secondary: [] };
  }

  const { scope = "all", primary: primaryKey = "all" } = filtersPayload;

  const scopeMap = new Map();
  const primaryMap = new Map();
  const secondaryMap = new Map();

  const enabledScopeRows = rows.filter(row => row.enabled !== false);
  const categoryRows = rows.filter(row => {
      if (filtersPayload.scope === "all") return true;

      return row?.domain === filtersPayload.scope;
    });

  const enabledCategoryRows = categoryRows.filter(row => row.enabled !== false);

  // ---------- SCOPE DEFAULT OPTIONS ----------
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
    count: enabledScopeRows.filter(r => r.domain === "project").length,
  });

  scopeMap.set("experience", {
    key: "experience",
    label: "Work Experience",
    variant: "tag",
    count: enabledScopeRows.filter(r => r.domain === "experience").length,
  });

  // ---------- PRIMARY OPTIONS (use all enabledCategoryRows, do NOT modify) ----------
  enabledCategoryRows.forEach((row) => {
    const primaryCategory = row?.primaryCategory;

    if (primaryCategory?.key) {
      const { key, label } = primaryCategory;
      const domain = row.domain;

      if (!primaryMap.has(key)) {
        primaryMap.set(key, {
          key,
          label,
          domain, // keep domain for reference
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
      count: enabledCategoryRows.length, // correct total count
      domain: "all",
    },
    ...Array.from(primaryMap.values()),
  ];

  // ---------- SECONDARY OPTIONS ----------
  let secondaryRows = [...enabledCategoryRows];

  // Only limit secondaryRows when scope is "all" and primaryKey is active
  if (scope === "all" && primaryKey !== "all") {
    const activePrimaryDomain = primaryMap.get(primaryKey)?.domain;
    if (activePrimaryDomain) {
      secondaryRows = secondaryRows.filter(row => row.domain === activePrimaryDomain);
    }
  }

  // Build secondaryMap
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
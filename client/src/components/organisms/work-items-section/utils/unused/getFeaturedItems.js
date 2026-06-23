export function getFeaturedItems(rows, limit = 4) {
  if (!Array.isArray(rows)) return [];

  return [...rows]
    .filter((r) => r?.featured)
    .sort((a, b) => (a?.topOrder ?? Infinity) - (b?.topOrder ?? Infinity))
    .slice(0, limit);
}

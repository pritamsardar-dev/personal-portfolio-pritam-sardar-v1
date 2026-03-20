export function getFeaturedItems(rows, limit = 4) {
  if (!Array.isArray(rows)) return [];

  return [...rows]
    .filter(r => r?.featured)
    .sort((a, b) => {
      const topA = a?.topOrder ?? Infinity;
      const topB = b?.topOrder ?? Infinity;

      return topA - topB;
    })
    .slice(0, limit);
}
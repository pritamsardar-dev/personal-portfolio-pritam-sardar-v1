export function paginateRows(rows, currentPage = 1, limit = 6) {
  if (!Array.isArray(rows)) {
    return {
      data: [],
      pagination: { page: 1, totalPages: 1, total: 0 },
    };
  }

  const total = rows.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  const start = (currentPage - 1) * limit;
  const end = start + limit;

  return {
    data: rows.slice(start, end),
    pagination: {
      page: currentPage,
      totalPages,
      total,
    },
  };
}

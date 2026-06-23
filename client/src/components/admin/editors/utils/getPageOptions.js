export const getPageOptions = (pages) => {
  return pages?.map((page) => ({
    value: page.id,
    label: page.id.replace("-", " "),
  }));
};

// Derives section options from page; preserves ref for scroll targeting
export const getSectionOptions = (page) => {
  if (!page?.sections) return [];

  return page.sections.map((section, index) => {
    const key = section?.variant || section?.view || `section-${index}`;

    return {
      value: key,
      label: section?.key?.replace(/([A-Z])/g, " $1"),
      ref: section?.ref,
    };
  });
};

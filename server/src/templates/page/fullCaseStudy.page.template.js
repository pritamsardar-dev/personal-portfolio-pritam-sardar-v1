export const fullCaseStudyPageTemplate = {
  id: "full-case-study-page",
  type: "page",
  slug: "full-case-study",
  enabled: true,

  seo: {
    title: "Full Case Study Page | Pritam Sardar",
    description: "Frontend & MERN Developer Portfolio",
  },

  sections: [
    {
      key: "work-items",
      view: "fullCaseStudy",
      variant: "fullscreenCaseStudyPageRead",
      order: 1,
      enabled: true,
    },
  ],
};

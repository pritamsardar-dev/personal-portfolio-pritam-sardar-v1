export const caseStudiesPageTemplate = {
  id: "case-study-page",
  type: "page",
  slug: "case-studies",
  enabled: true,

  seo: {
    title: "Case Study | Pritam Sardar",
    description: "Frontend & MERN Developer Portfolio",
  },

  sections: [
    {
      key: "hero",
      variant: "caseStudyHero",
      order: 1,
      enabled: true,
    },
    {
      key: "work-items",
      view: "caseStudies",
      variant: "caseStudyPage",
      order: 2,
      enabled: true,
    },
  ],
};

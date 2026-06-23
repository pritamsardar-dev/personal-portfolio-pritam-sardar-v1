export const caseStudiesPageLoadingStructure = {
  id: "case-studies-page-loading",
  type: "page-loading",
  enabled: true,

  sections: [
    {
      key: "hero",
      variant: "caseStudyHero",
      order: 1,
      enabled: true,

      ref: {
        type: "hero",
      },
    },

    {
      key: "work-items",
      view: "caseStudies",
      variant: "caseStudyPage",
      order: 2,
      enabled: true,

      ref: {
        type: "workItems",
      },
    },
  ],
};

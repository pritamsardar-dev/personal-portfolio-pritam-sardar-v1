export const fullCaseStudyPageLoadingStructure = {
  id: "full-case-study-page-loading",
  type: "page-loading",
  enabled: true,

  sections: [
    {
      key: "work-items",
      view: "fullCaseStudy",
      variant: "fullscreenCaseStudyPageRead",
      order: 1,
      enabled: true,

      ref: {
        type: "work-items",
      },
    },
  ],
};

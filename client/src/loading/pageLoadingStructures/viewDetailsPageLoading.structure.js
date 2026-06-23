export const viewDetailsPageLoadingStructure = {
  id: "view-details-page-loading",
  type: "page-loading",
  enabled: true,

  sections: [
    {
      key: "work-items",
      view: "viewDetails",
      variant: "fullscreenProjectsHomePage",
      order: 1,
      enabled: true,

      ref: {
        type: "work-items",
      },
    },
  ],
};

export const projectsPageLoadingStructure = {
  id: "projects-page-loading",
  type: "page-loading",
  enabled: true,

  sections: [
    {
      key: "hero",
      variant: "projectsHero",
      order: 1,
      enabled: true,

      ref: {
        type: "hero",
      },
    },

    {
      key: "work-items",
      view: "projects",
      variant: "projectsPage",
      order: 2,
      enabled: true,

      ref: {
        type: "workItems",
      },
    },
  ],
};

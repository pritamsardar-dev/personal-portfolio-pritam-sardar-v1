export const viewDetailsPageTemplate = {
  id: "view-details-page",
  type: "page",
  slug: "view-details",
  enabled: true,

  seo: {
    title: "view Details Page | Pritam Sardar",
    description: "Frontend & MERN Developer Portfolio",
  },

  sections: [
    {
      key: "work-items",
      view: "viewDetails",
      variant: "fullscreenProjectsHomePage",
      order: 1,
      enabled: true,
    },
  ],
};

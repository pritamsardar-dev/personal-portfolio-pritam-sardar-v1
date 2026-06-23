export const projectsPageTemplate = {
  id: "projects-page",
  type: "page",
  slug: "projects",
  enabled: true,

  seo: {
    title: "Projects | Pritam Sardar",
    description: "Frontend & MERN Developer Portfolio",
  },

  sections: [
    {
      key: "hero",
      variant: "projectsHero",
      order: 1,
      enabled: true,
    },
    {
      key: "work-items",
      view: "projects",
      variant: "projectsPage",
      order: 2,
      enabled: true,
    },
  ],
};

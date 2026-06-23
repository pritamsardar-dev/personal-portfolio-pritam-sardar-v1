export const aboutPageTemplate = {
  id: "about-page",
  type: "page",
  slug: "about",
  enabled: true,

  seo: {
    title: "About | Pritam Sardar",
    description: "Frontend & MERN Developer Portfolio",
  },

  sections: [
    {
      key: "hero",
      variant: "aboutHero",
      order: 1,
      enabled: true,
    },
    {
      key: "journey",
      order: 2,
      enabled: true,
    },
    {
      key: "current-skills-snapshot",
      order: 4,
      enabled: true,
    },
  ],
};

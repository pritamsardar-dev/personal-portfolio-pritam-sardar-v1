export const skillsPageTemplate = {
  id: "skills-page",
  type: "page",
  slug: "skills",
  enabled: true,

  seo: {
    title: "Skills | Pritam Sardar",
    description: "Frontend & MERN Developer Portfolio",
  },

  sections: [
    {
      key: "hero",
      variant: "skillsHero",
      order: 1,
      enabled: true,
    },
    {
      key: "skills",
      order: 2,
      enabled: true,
    },
  ],
};

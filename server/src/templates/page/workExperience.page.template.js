export const workExperiencePageTemplate = {
  id: "work-experience-page",
  type: "page",
  slug: "work-experience",
  enabled: true,

  seo: {
    title: "Work Experience | Pritam Sardar",
    description: "Frontend & MERN Developer Portfolio",
  },

  sections: [
    {
      key: "hero",
      variant: "workExperienceHero",
      order: 1,
      enabled: true,
    },
    {
      key: "work-items",
      view: "workExperience",
      variant: "workExperience",
      order: 2,
      enabled: true,
    },
  ],
};

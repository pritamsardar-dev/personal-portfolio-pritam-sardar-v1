export const homePageTemplate = {
  id: "home-page",
  key: "HomePage",
  type: "page",
  slug: "home",
  enabled: true,

  seo: {
    title: "Home | Pritam Sardar",
    description: "Frontend & MERN Developer Portfolio",
  },

  sections: [
    {
      key: "hero",
      variant: "homeHero",
      order: 1,
      enabled: true,
    },
    {
      key: "journey",
      view: "journeyHome",
      order: 2,
      enabled: true,
    },
    {
      key: "skills",
      view: "skillsHome",
      order: 3,
      enabled: true,
    },
    {
      key: "work-items",
      enabled: true,
      renders: [
        {
          view: "workExperienceHome",
          order: 5,
          enabled: true,
        },
        {
          view: "projectsHome",
          variant: "projectsHomePage",
          order: 4,
          enabled: true,
        },
      ],
    },
    
    {
      key: "contact",
      order: 6,
      enabled: true,
    },
  ],
};

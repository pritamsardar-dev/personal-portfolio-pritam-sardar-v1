export const homePageLoadingStructure = {
  id: "home-page-loading",
  type: "page-loading",
  enabled: true,

  sections: [
    {
      key: "hero",
      variant: "homeHero",
      order: 1,
      enabled: true,

      ref: {
        type: "hero",
      },
    },

    {
      key: "journey",
      view: "journeyHome",
      order: 2,
      enabled: true,

      ref: {
        type: "journey",
      },
    },

    {
      key: "work-items",
      order: 3,
      enabled: true,

      ref: {
        type: "workItems",
      },

      renders: [
        {
          view: "workExperienceHome",
          order: 3,
          enabled: true,
        },

        {
          view: "projectsHome",
          variant: "projectsHomePage",
          order: 5,
          enabled: true,
        },
      ],
    },

    {
      key: "skills",
      view: "skillsHome",
      order: 4,
      enabled: true,

      ref: {
        type: "skills",
      },
    },

    {
      key: "contact",
      order: 6,
      enabled: true,

      ref: {
        type: "contact",
      },
    },
  ],
};

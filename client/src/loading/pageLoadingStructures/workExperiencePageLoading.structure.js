export const workExperiencePageLoadingStructure = {
  id: "work-experience-page-loading",
  type: "page-loading",
  enabled: true,

  sections: [
    {
      key: "hero",
      variant: "workExperienceHero",
      order: 1,
      enabled: true,

      ref: {
        type: "hero",
      },
    },

    {
      key: "work-items",
      view: "workExperience",
      variant: "workExperience",
      order: 2,
      enabled: true,

      ref: {
        type: "workItems",
      },
    },
  ],
};

export const skillsPageLoadingStructure = {
  id: "skills-page-loading",
  type: "page-loading",
  enabled: true,

  sections: [
    {
      key: "hero",
      variant: "skillsHero",
      order: 1,
      enabled: true,

      ref: {
        type: "hero",
      },
    },

    {
      key: "skills",
      order: 2,
      enabled: true,

      ref: {
        type: "skills",
      },
    },
  ],
};

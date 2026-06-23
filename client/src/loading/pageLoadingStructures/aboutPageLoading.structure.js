export const aboutPageLoadingStructure = {
  id: "about-page-loading",
  type: "page-loading",
  enabled: true,

  sections: [
    {
      key: "hero",
      variant: "aboutHero",
      order: 1,
      enabled: true,

      ref: {
        type: "hero",
      },
    },

    {
      key: "journey",
      order: 2,
      enabled: true,

      ref: {
        type: "journey",
      },
    },

    {
      key: "current-skills-snapshot",
      order: 4,
      enabled: true,

      ref: {
        type: "currentSkillsSnapshot",
      },
    },
  ],
};

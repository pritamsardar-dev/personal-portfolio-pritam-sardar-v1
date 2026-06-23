export const contactPageLoadingStructure = {
  id: "contact-page-loading",
  type: "page-loading",
  enabled: true,

  sections: [
    {
      key: "hero",
      variant: "contactHero",
      order: 1,
      enabled: true,

      ref: {
        type: "hero",
      },
    },

    {
      key: "contact",
      order: 2,
      enabled: true,

      ref: {
        type: "contact",
      },
    },
  ],
};

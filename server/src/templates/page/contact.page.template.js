export const contactPageTemplate = {
  id: "contact-page",
  type: "page",
  slug: "contact",
  enabled: true,

  seo: {
    title: "Contact | Pritam Sardar",
    description: "Frontend & MERN Developer Portfolio",
  },

  sections: [
    {
      key: "hero",
      variant: "contactHero",
      order: 1,
      enabled: true,
    },
    {
      key: "contact",
      order: 2,
      enabled: true,
    },
  ],
};

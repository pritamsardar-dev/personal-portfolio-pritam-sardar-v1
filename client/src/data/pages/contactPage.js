import { heroSection } from "../sections/shared/heroSection";
import { contactSection } from "../sections/shared/contactSection";

export const contactPage = {
  id: "contact-page",
  type: "page",
  slug: "/contact",
  enabled: true,
  seo: {
    title: "Contact | Pritam Sardar",
    description: "Frontend & MERN Developer Portfolio"
  },
  sections: [
    {
      variant: "contactHero",
      order: 1,
      enabled: true,
      ref: heroSection
    },
    {
      order: 2,
      enabled: true,
      ref: contactSection
    },
  ]
};
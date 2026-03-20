import { heroSection } from "../sections/shared/heroSection";
import { workItemsSection } from "../sections/shared/workItemsSection";

export const workExperiencePage = {
  id: "work-experience-page",
  type: "page",
  slug: "/work-experience-page",
  enabled: true,
  seo: {
    title: "Work Experience | Pritam Sardar",
    description: "Frontend & MERN Developer Portfolio"
  },
  sections: [
    {
      variant: "workExperienceHero",
      order: 1,
      enabled: true,
      ref: heroSection
    },
    {
      view: "workExperience",
      variant: "workExperience",
      order: 2,
      enabled: true,
      ref: workItemsSection
    },
  ]
};
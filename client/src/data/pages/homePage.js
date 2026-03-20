import { heroSection } from "../sections/shared/heroSection";
import { journeySection } from "../sections/shared/journeySection";
import { workItemsSection } from "../sections/shared/workItemsSection";
import { skillsSection } from "../sections/shared/skillsSection";
import { contactSection } from "../sections/shared/contactSection";

export const homePage = {
  id: "home-page",
  type: "page",
  slug: "/",
  enabled: true,
  seo: {
    title: "Home | Pritam Sardar",
    description: "Frontend & MERN Developer Portfolio"
  },
  sections: [
    {
      variant: "homeHero",
      order: 1,
      enabled: true,
      ref: heroSection
    },
    {
      view: "journeyHome",
      order: 2,
      enabled: true,
      ref: journeySection
    },
    {
      view: "workExperienceHome",
      order: 3,
      enabled: true,
      ref: workItemsSection
    },
    {
      view: "skillsHome",
      order: 4,
      enabled: true,
      ref: skillsSection
    },
    {
      view: "projecstHome",
      variant: "projectsHomePage",
      order: 5,
      enabled: true,
      ref: workItemsSection
    },
    {
      order: 6,
      enabled: true,
      ref: contactSection
    },
  ]
};
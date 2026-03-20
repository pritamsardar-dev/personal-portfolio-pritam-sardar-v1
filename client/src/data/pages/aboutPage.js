import { heroSection } from "../sections/shared/heroSection";
import { journeySection } from "../sections/shared/journeySection";
import { coreValuesSection} from "../sections/about/coreValuesSection"
import {currentSkillsSnapshot} from "../sections/about/currentSkillsSnapshot"

export const aboutPage = {
  id: "about-page",
  type: "page",
  slug: "/about",
  enabled: true,
  seo: {
    title: "About | Pritam Sardar",
    description: "Frontend & MERN Developer Portfolio"
  },
  sections: [
    {
      variant: "aboutHero",
      order: 1,
      enabled: true,
      ref: heroSection
    },
    {
      order: 2,
      enabled: true,
      ref: journeySection
    },
    {
      order: 3,
      enabled: true,
      ref: coreValuesSection
    },
    {
      order: 4,
      enabled: true,
      ref: currentSkillsSnapshot
    },
  ]
};
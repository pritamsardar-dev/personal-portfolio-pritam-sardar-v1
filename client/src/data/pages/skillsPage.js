import { heroSection } from "../sections/shared/heroSection";
import { skillsSection } from "../sections/shared/skillsSection";

export const skillsPage = {
  id: "skills-page",
  type: "page",
  slug: "/skills",
  enabled: true,
  seo: {
    title: "Skills | Pritam Sardar",
    description: "Frontend & MERN Developer Portfolio"
  },
  sections: [
    {
      variant: "skillsHero",
      order: 1,
      enabled: true,
      ref: heroSection
    },
    {
      order: 2,
      enabled: true,
      ref: skillsSection
    },
  ]
};
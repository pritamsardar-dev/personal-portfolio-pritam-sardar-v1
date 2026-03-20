import { heroSection } from "../sections/shared/heroSection";
import { workItemsSection } from "../sections/shared/workItemsSection";

export const caseStudiesPage = {
  id: "case-study-page",
  type: "page",
  slug: "/case-study",
  enabled: true,
  seo: {
    title: "Case Study | Pritam Sardar",
    description: "Frontend & MERN Developer Portfolio"
  },
  sections: [
    {
      variant: "caseStudyHero",
      order: 1,
      enabled: true,
      ref: heroSection
    },
    {
      view: "caseStudies",
      variant: "caseStudyPage",
      order: 2,
      enabled: true,
      ref: workItemsSection
    },
  ]
};
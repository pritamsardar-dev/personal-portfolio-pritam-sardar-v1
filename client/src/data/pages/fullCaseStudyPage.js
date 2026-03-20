import { workItemsSection } from "../sections/shared/workItemsSection";

export const fullCaseStudyPage = {
  id: "full-case-study-page",
  type: "page",
  slug: "/full-case-study/:fullscreenRowId",
  enabled: true,
  seo: {
    title: "Full Case Study Page | Pritam Sardar",
    description: "Frontend & MERN Developer Portfolio"
  },
  sections: [
    {
      view: "fullCaseStudy",
      variant: "fullscreenCaseStudyPageRead",
      order: 1,
      enabled: true,
      ref: workItemsSection
    },
  ]
};
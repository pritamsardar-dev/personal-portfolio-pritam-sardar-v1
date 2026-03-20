import { heroSection } from "../sections/shared/heroSection";
import { workItemsSection } from "../sections/shared/workItemsSection";

export const projectsPage = {
  id: "projects-page",
  type: "page",
  slug: "/projects",
  enabled: true,
  seo: {
    title: "Projects | Pritam Sardar",
    description: "Frontend & MERN Developer Portfolio"
  },
  sections: [
    {
      variant: "projectsHero",
      order: 1,
      enabled: true,
      ref: heroSection
    },
    {
      view: "projects",
      variant: "projectsPage",
      order: 2,
      enabled: true,
      ref: workItemsSection
    },
  ]
};
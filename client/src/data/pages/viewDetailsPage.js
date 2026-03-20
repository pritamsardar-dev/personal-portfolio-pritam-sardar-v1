import { workItemsSection } from "../sections/shared/workItemsSection";

export const viewDetailsPage = {
  id: "view-details-page",
  type: "page",
  slug: "/view-details/:fullscreenRowId",
  enabled: true,
  seo: {
    title: "view Details Page | Pritam Sardar",
    description: "Frontend & MERN Developer Portfolio"
  },
  sections: [
    {
      view: "viewDetails",
      variant: "fullscreenProjectsHomePage",
      order: 1,
      enabled: true,
      ref: workItemsSection
    },
  ]
};
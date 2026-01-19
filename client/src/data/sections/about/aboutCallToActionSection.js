export const aboutCallToActionSection = {
  id: "call-to-action-section",
  type: "callToActionSection", 
  enabled: true,
  order: 4,
  alignment: {
    headingContainer: "center",
    heading: "center",
    body: "left",
    cta: "center",
  },
  heading: {
    variant: "heading3",
    text: "Ready to see my projects in action or get in touch?",
  },
  ctaButtons: [
    {
      id: "priamry-action",
      order: 1,
      variant: "priamry",
      label: "View Projects",
      onClick: () => {},
    },
    {
      id: "secondary-action",
      order: 2,
      variant: "secondary",
      label: "Contact Me",
      onClick: () => {},
    },
  ],
};

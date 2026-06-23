export const footerGlobalTemplate = {
  id: "global-footer",
  type: "footer",
  enabled: true,

  navigationItems: {
    variant: "footer",

    items: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Skills", to: "/skills" },
      { label: "Projects", to: "/projects" },
      { label: "Work Experience", to: "/work-experience" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Contact", to: "/contact" },
    ],
  },

  brandTagline: {
    variant: "bodySmall",
    text: "A personal portfolio documenting my software development career.",
  },

  quickLinksHeading: {
    modifiers: ["strong"],
    variant: "bodyLarge",
    text: "Quick Links",
  },

  contactLinksHeading: {
    modifiers: ["strong"],
    variant: "bodyLarge",
    text: "Contact",
  },

  contactLinks: [
    {
      id: "contact-phone",
      role: "contact-link",
      variant: "link",
      label: "+91 6297553930",
      action: "external",
      target: "tel:+916297553930",
    },
    {
      id: "contact-email",
      role: "contact-link",
      variant: "link",
      label: "pritamsardar.dev@gmail.com",
      action: "external",
      target: "mailto:pritamsardar.dev@gmail.com",
    },
    {
      id: "contact-location",
      role: "contact-link",
      variant: "link",
      label: "Kolkata, India",
      action: "external",
      target: "https://maps.google.com/?q=Kolkata",
    },
  ],

  availabilityHeading: {
    modifiers: ["strong"],
    variant: "bodyLarge",
    text: "Availability",
  },

  availabilityTagline: {
    variant: "bodySmall",
    text: "Availability: Open to work · Notice: Immediate · Role: Full Stack Dev (MERN) · Open to: 0–2 yr roles",
  },

  copyright: {
    variant: "captionDefault",
    text: "Personal Portfolio · Designed & Developed by Pritam Sardar",
  },

  attribution: {
    variant: "captionDefault",
    label: "Attributions:",
    items: [
      {
        id: "storyset",
        text: "Illustrations by Storyset",
        url: "https://storyset.com/business",
      },
      {
        id: "tabler-icons",
        text: "Icons by Tabler Icons",
        url: "https://tabler.io/icons",
      },
      {
        id: "lucide-icons",
        text: "Icons by Lucide",
        url: "https://lucide.dev/icons/",
      },
    ],
  },
};

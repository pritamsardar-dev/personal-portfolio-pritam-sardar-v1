export const headerGlobalTemplate = {
  id: "global-header",
  type: "header",
  enabled: true,

  navigationItems: {
    variant: "header",
    splitLastItem: true,
    showCenterGroup: true,

    items: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Skills", to: "/skills" },
      { label: "Projects", to: "/projects" },
      { label: "Work Experience", to: "/work-experience" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Contact", to: "/contact", isButtonStyle: true },
    ],
  },

  showThemeToggle: true,
};

export const footer = {
  navItems: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Work Experience", to: "/experience" },
    { label: "Skills", to: "/skills" },
    { label: "Projects", to: "/projects" },
    { label: "Case Studies", to: "/case-studies" },
    { label: "Contact", to: "/contact" },
  ],
  brandTagline: {
        variant: "bodySmall", 
        text: "MERN Stack Developer building scalable and accessible web apps."
    },
    quickLinksHeading: {
        variant: "bodyLargeStrong", 
        text: "Quick Links"
    },
    contactLinksHeading: {
        variant: "bodyLargeStrong", 
        text: "Contact"
    },
    contactLinks: [
        {
            id: "contactPhone",
            variant: "linkSmall", 
            label: "+91 99999 99999",
            onClick: () => {}
        },
        {
            id: "contactEmail",
            variant: "linkSmall", 
            label: "you@example.com",
            onClick: () => {}
        },
        {
            id: "contactLocation",
            variant: "linkSmall", 
            label: "Kolkata, India",
            onClick: () => {}
        }
    ],
    availabilityHeading: {
        variant: "bodyLargeStrong", 
        text: "Availability"
    },
    availabilityTagline: {
        variant: "bodySmall", 
        text: "Open to full-time roles, internships, and freelance MERN stack opportunities."
    },
    copyright: {
        variant: "captionDefault", 
        text: "© 2025 Pritam Sardar. All rights reserved."
    }
};


export const footer = {
  navItems: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Work Experience", to: "/work-experience" },
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
        modifiers: ["strong"],
        variant: "bodyLarge", 
        text: "Quick Links"
    },
    contactLinksHeading: {
        modifiers: ["strong"],
        variant: "bodyLarge", 
        text: "Contact"
    },
    contactLinks: [
        {
            id: "contact-phone",
            role: "contact-link",
            variant: "link",
            label: "+91 99999 99999",
            action: "external",
            target: "tel:+919999999999",
        },
        {
            id: "contact-email",
            role: "contact-link",
            variant: "link",
            label: "you@example.com",
            action: "external",
            target: "mailto:you@example.com",
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
        text: "Availability"
    },
    availabilityTagline: {
        variant: "bodySmall", 
        text: "Open to full-time roles, internships, and freelance MERN stack opportunities."
    },
    copyright: {
        variant: "captionDefault", 
        text: "Pritam Sardar. All rights reserved."
    }
};


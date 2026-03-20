export const callToActionSection = {
  id: "cta-section",
  type: "ctaSection", 
  rows: [
    {
      // Row 1
      id: "about-cta-section",
      type: "aboutCtaSection", 
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
          label: "Explore My Work",
          action: "navigate",
          target: "/projects"
        },
        {
          id: "secondary-action",
          order: 2,
          variant: "secondary",
          label: "Contact Me",
          action: "navigate",
          target: "/contact"
        },
      ],
    },

    {
      // Row 2
      id: "work-experience-cta-section",
      type: "workExperienceCtaSection", 
      alignment: {
        headingContainer: "center",
        heading: "center",
        body: "left",
        cta: "center",
      },
      heading: {
        variant: "heading3",
        text: "Interested in how I build real-world solutions?",
      },
      ctaButtons: [
        {
          id: "priamry-action",
          order: 1,
          variant: "priamry",
          label: "Explore My Projects",
          action: "navigate",
          target: "/projects"
        },
        {
          id: "secondary-action",
          order: 2,
          variant: "secondary",
          label: "Get In Touch",
          action: "navigate",
          target: "/contact"
        },
      ],
    },

    {
      // Row 3
      id: "skills-cta-section",
      type: "skillsCtaSection", 
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
    },

    {
      // Row 4
      id: "projects-cta-section",
      type: "projectsCtaSection", 
      alignment: {
        headingContainer: "center",
        heading: "center",
        body: "left",
        cta: "center",
      },
      heading: {
        variant: "heading3",
        text: "I hope these projects show the value I can bring — let’s connect for an interview or explore my case studies.",
      },
      ctaButtons: [
        {
          id: "priamry-action",
          order: 1,
          variant: "priamry",
          label: "View Contact Details",
          onClick: () => {},
        },
        {
          id: "secondary-action",
          order: 2,
          variant: "secondary",
          label: "See Testimonials",
          onClick: () => {},
        },
      ],
    },

    {
      // Row 5
      id: "case-study-cta-section",
      type: "caseStudyCtaSection", 
      alignment: {
        headingContainer: "center",
        heading: "center",
        body: "left",
        cta: "center",
      },
      heading: {
        variant: "heading3",
        text: "I hope these projects show the value I can bring — let’s connect for an interview or explore my case studies.",
      },
      ctaButtons: [
        {
          id: "priamry-action",
          order: 1,
          variant: "priamry",
          label: "View Contact Details",
          onClick: () => {},
        },
        {
          id: "secondary-action",
          order: 2,
          variant: "secondary",
          label: "See Testimonials",
          onClick: () => {},
        },
      ],
    },
  ]
}


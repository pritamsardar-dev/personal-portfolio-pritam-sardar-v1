import {
  workExperienceHeading,
  workExperienceTitleTextblock,
  workExperienceTitleCardblock,
  workExperienceSubtitleOfficeBuilding,
} from "../../../../assets/icons/content";

export const homeWorkExperienceSection = {
  id: "work-experience-home",
  type: "workExperience",
  enabled: true,
  order: 3,

  alignment: {
    heading: "center",
    cta: "center",
  },

  heading: {
    variant: "heading1",
    text: "Work Experience",
    icon: {
      svg: workExperienceHeading.svg,
      type: workExperienceHeading.type,
    },
  },

  buttonProps: {
    variant: "secondary",
    label: "More About Work Experience →",
    onClick: () => {},
  },

  /* ───────────────────────── ROW GROUPING ───────────────────────── */
  rows: [
    /* ───────────── ROW 1 ───────────── */
    {
      id: "work-exp-row-1",
      enabled: true,

      blocks: [
        /* CARD BLOCK — ROW 1 (FIRST) */
        {
          id: "work-exp-cardblock-1",
          type: "workExperienceCardsBlock",
          enabled: true,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            heading: {
              variant: "heading2",
              text: "My Professional Journey",
              icon: {
                svg: workExperienceTitleCardblock.svg,
                type: workExperienceTitleCardblock.type,
              },
            },

            bodyItems: [
              {
                id: "experience-1",
                heading: {
                  variant: "heading3",
                  text: "TechNova Solutions",
                  icon: {
                    svg: workExperienceSubtitleOfficeBuilding.svg,
                    type: workExperienceSubtitleOfficeBuilding.type,
                  },
                },
                body: {
                  timeline: {
                    variant: "bodyBase",
                    text: "Jun 2026 – Present",
                  },

                  labelValueItems: [
                    {
                      label: { variant: "bodyBaseStrong", text: "Location:" },
                      value: {
                        variant: "bodyBase",
                        text: "Bengaluru, India (Hybrid)",
                      },
                    },
                    {
                      label: { variant: "bodyBaseStrong", text: "Role:" },
                      value: {
                        variant: "bodyBase",
                        text: "Full-stack Developer",
                      },
                    },
                    {
                      label: {
                        variant: "bodyBaseStrong",
                        text: "Employment Type:",
                      },
                      value: {
                        variant: "bodyBase",
                        text: "Full-time · On Payroll · Hybrid",
                      },
                    },
                    {
                      label: { variant: "bodyBaseStrong", text: "Domain:" },
                      value: {
                        variant: "bodyBase",
                        text: "FinTech SaaS / Payment Systems",
                      },
                    },
                  ],

                  techStack: {
                    label: {
                      variant: "bodyBaseStrong",
                      text: "Tech Stack:",
                    },
                    value: {
                      variant: "bodyBaseTag",
                      texts: [
                        "React",
                        "Node.js",
                        "MongoDB",
                        "Express",
                        "AWS",
                        "Docker",
                      ],
                    },
                  },
                },
              },
            ],
          },
        },

        /* TEXT BLOCK — ROW 1 (SECOND) */
        {
          id: "work-exp-textblock-1",
          type: "workExperienceTextBlock",
          enabled: true,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            heading: {
              variants: {
                desktopTablet: "heading2",
                mobile: "heading3",
              },
              text: "Key Contributions & Impact",
              icon: {
                svg: workExperienceTitleTextblock.svg,
                type: workExperienceTitleTextblock.type,
              },
            },

            bodyItems: [
              {
                id: "impact-1",
                overview: {
                  variant: "bodyLarge",
                  text:
                    "Contributed to the Payments & Analytics division, building secure and scalable SaaS systems handling thousands of daily financial transactions.",
                },
                highlights: {
                  variant: "bodyLarge",
                  as: "li",
                  texts: [
                    "Architected microservices backend handling 10k+ daily transactions.",
                    "Optimized React dashboards, improving page load speed by 40%.",
                    "Implemented CI/CD pipelines using Docker & AWS, reducing deployment time to 10 minutes.",
                    "Collaborated cross-functionally to deliver 3 production features on schedule.",
                  ],
                },
                caseStudyAtAGlance: {
                  variant: "bodyLarge",
                  text:
                    "Full case study includes system architecture, microservices diagrams, and role-specific problem-solving insights.",
                },
                buttonProps: {
                  variant: "secondary",
                  label: "View TechNova Case Study →",
                },
              },
            ],
          },
        },
      ],
    },

    /* ───────────── ROW 2 ───────────── */
    {
      id: "work-exp-row-2",
      enabled: true,

      blocks: [
        /* CARD BLOCK — ROW 2 (FIRST) */
        {
          id: "work-exp-cardblock-2",
          type: "workExperienceCardsBlock",
          enabled: true,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            bodyItems: [
              {
                id: "experience-2",
                heading: {
                  variant: "heading3",
                  text: "Freelance Project – Local Retail Client",
                  icon: {
                    svg: workExperienceSubtitleOfficeBuilding.svg,
                    type: workExperienceSubtitleOfficeBuilding.type,
                  },
                },
                body: {
                  timeline: {
                    variant: "bodyBase",
                    text: "Jan 2025 – Mar 2025",
                  },

                  labelValueItems: [
                    {
                      label: { variant: "bodyBaseStrong", text: "Location:" },
                      value: {
                        variant: "bodyBase",
                        text: "Kolkata, India (Remote)",
                      },
                    },
                    {
                      label: { variant: "bodyBaseStrong", text: "Role:" },
                      value: {
                        variant: "bodyBase",
                        text:
                          "Full-stack Developer (Contract / Remote)",
                      },
                    },
                    {
                      label: {
                        variant: "bodyBaseStrong",
                        text: "Employment Type:",
                      },
                      value: {
                        variant: "bodyBase",
                        text: "Freelance · Contract · Remote",
                      },
                    },
                    {
                      label: { variant: "bodyBaseStrong", text: "Domain:" },
                      value: {
                        variant: "bodyBase",
                        text: "E-commerce Web Application",
                      },
                    },
                  ],

                  techStack: {
                    label: {
                      variant: "bodyBaseStrong",
                      text: "Tech Stack:",
                    },
                    value: {
                      variant: "bodyBaseTag",
                      texts: [
                        "React",
                        "Node.js",
                        "MongoDB",
                        "Express",
                        "Netlify",
                      ],
                    },
                  },
                },
              },
            ],
          },
        },

        /* TEXT BLOCK — ROW 2 (SECOND) */
        {
          id: "work-exp-textblock-2",
          type: "workExperienceTextBlock",
          enabled: true,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            heading: {
              variants: {
                mobile: "heading3",
              },
              text: "Key Contributions & Impact",
              icon: {
                svg: workExperienceTitleTextblock.svg,
                type: workExperienceTitleTextblock.type,
              },
            },

            bodyItems: [
              {
                id: "impact-2",
                overview: {
                  variant: "bodyLarge",
                  text:
                    "Designed and developed a custom e-commerce platform for a local retail client as a short-term freelance engagement.",
                },
                highlights: {
                  variant: "bodyLarge",
                  as: "li",
                  texts: [
                    "Built responsive React frontend with product listing and search.",
                    "Developed Node.js & Express APIs for inventory and order management.",
                    "Deployed the application using Netlify and Render free tiers.",
                  ],
                },
                caseStudyAtAGlance: {
                  variant: "bodyLarge",
                  text:
                    "Case study showcases feature screenshots and deployment workflow.",
                },
                buttonProps: {
                  variant: "secondary",
                  label: "View Full Case Study →",
                },
              },
            ],
          },
        },
      ],
    },
  ],
};

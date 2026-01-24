import {
  workExperienceHeading,
  workExperienceTitleTextblock,
  workExperienceSubtitleOfficeBuilding,
} from "../../../assets/icons/content";
import { DropdownIcon } from "../../../assets/icons/system";

export const workExperienceSection = {
  id: "work-experience-list",
  type: "workExperienceList",
  enabled: true,
  order: 2,

  alignment: {
    heading: "center",
    cta: "center",
  },

  heading: {
    variant: {
      home: "heading1",
      workExperience: "heading1Subpage",
    },
    text: "Work Experience",
    icon: {
      svg: workExperienceHeading.svg,
      type: workExperienceHeading.type,
    },
  },
  filters: {
    selectProps: {
        variant: "selectCustom",
        label: "",
        name: "choice",
        placeholder: "Select one",
        options: [
            { value: "option1", label: "Option One" },
            { value: "option2", label: "Option Two" },
            { value: "option3", label: "Option Three" },
        ],
        Icon: DropdownIcon,
        error: "",
    },

    clearButtonProps: {
        id: "action-clear",
        variant: "tag",
        label: "Clear",
        onClick: () => {}
    },

    primaryFiltersProps: [
        {
            id: "primary-filter-all",
            variant: "tag",
            label: "All",
            count: 12,
            onClick: () => {}
        },
        {
            id: "primary-filter-frontend",
            variant: "tag",
            label: "Frontend",
            count: 1,
            onClick: () => {}
        },
        {
            id: "primary-filter-frontend",
            variant: "tag",
            label: "Frontend",
            count: 4,
            onClick: () => {}
        },
        {
            id: "primary-filter-backend",
            variant: "tag",
            label: "Backend",
            count: 1,
            onClick: () => {}
        },
        {
            id: "primary-filter-full-Stack",
            variant: "tag",
            label: "Full-Stack",
            count: 1,
            onClick: () => {}
        },
    ],

    secondaryFiltersProps: [
        {
            id: "secondary-filter-internship",
            variant: "tag",
            label: "Internship",
            count: 0,
            onClick: () => {}
        },
        {
            id: "secondary-filter-freelance",
            variant: "tag",
            label: "Freelance",
            count: 1,
            onClick: () => {}
        },
        {
            id: "secondary-filter-full-time",
            variant: "tag",
            label: "Fulltime",
            count: 0,
            onClick: () => {}
        },
        {
            id: "secondary-filter-open-source",
            variant: "tag",
            label: "Open-source",
            count: 0,
            onClick: () => {}
        }
    ],
  },

  /* ───────────────────────── ROW GROUPING ───────────────────────── */
  rows: [
    /* ───────────── ROW 1 ───────────── */
    {
      id: "techNovaSolutions",
      order: 1,
      enabled: true,

      /** CMS / FILTERING META */
      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 1, // 1 = highest quality
      primaryCategory: "Frontend",
      secondaryCategories: ["Full-time", "Open-source"],

      buttonProps: {
        variant: {
          home: "primary",
          workExperience: "secondary",
        },
        label: "View TechNova Case Study →",
      },

      blocks: [
        /* BLOCK 1 — ROW 1 (FIRST) */
        {
          id: "work-experience-meta-info",
          type: "workExperienceMetaInfo",
          enabled: true,

          data: {
            alignment: {
              body: "left",
            },

            bodyItems: [
              {
                id: "metaInfo",
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
                      label: { 
                        variant: "bodyBase", 
                        modifiers: ["strong"], 
                        text: "Location:" },
                      value: {
                        variant: "bodyBase",
                        text: "Bengaluru, India (Hybrid)",
                      },
                    },
                    {
                      label: { 
                        variant: "bodyBase", 
                        modifiers: ["strong"], 
                        text: "Role:" },
                      value: {
                        variant: "bodyBase",
                        text: "Full-stack Developer",
                      },
                    },
                    {
                      label: {
                        variant: "bodyBase", 
                        modifiers: ["strong"], 
                        text: "Employment Type:",
                      },
                      value: {
                        variant: "bodyBase",
                        text: "Full-time · On Payroll · Hybrid",
                      },
                    },
                    {
                      label: { 
                        variant: "bodyBase", 
                        modifiers: ["strong"], 
                        text: "Domain:" },
                      value: {
                        variant: "bodyBase",
                        text: "FinTech SaaS / Payment Systems",
                      },
                    },
                  ],

                  techStack: {
                    label: {
                      variant: "bodyBase", 
                      modifiers: ["strong"],
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

        /* BLOCK 2 — ROW 1 (SECOND) */
        {
          id: "work-experience-highlights",
          type: "workExperienceHighlights",
          enabled: true,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            bodyItems: [
              {
                id: "keyContributionsAndImpact",
                enabled: true,
                heading: {
                  variant: "heading3",
                  text: "Key Contributions & Impact",
                  icon: {
                    workExperience: null,
                    home: {
                      svg: workExperienceTitleTextblock.svg,
                      type: workExperienceTitleTextblock.type,
                    },
                  },
                },
                overview: {
                  variant: "bodyLarge",
                  text: {
                    home: "Contributed to the Payments & Analytics division, building secure and scalable SaaS systems handling thousands of daily financial transactions.",
                    workExperience: null,
                  }
                },
                highlights: {
                  variant: "bodyLarge",
                  as: "li",
                  texts: {
                    home: [
                      "Architected microservices backend handling 10k+ daily transactions.",
                      "Optimized React dashboards, improving page load speed by 40%.",
                      "Implemented CI/CD pipelines using Docker & AWS, reducing deployment time to 10 minutes.",
                      "Collaborated cross-functionally to deliver 3 production features on schedule.",
                    ],
                    workExperience: [
                      "Scalable Transactions: Architected a microservices backend in Node.js & Express to handle 10k+ daily secure transactions with zero data loss incidents.",
                      "Frontend Performance: Refactored React dashboard architecture, leveraging React Query and dynamic imports to reduce page load time by 40% and improve Lighthouse performance scores to 90+.",
                      "DevOps Excellence: Integrated CI/CD with GitHub Actions, Docker, and AWS ECS, cutting deployment cycles from 1 hour to under 10 minutes.",
                      "Collaboration: Worked closely with product managers, QA, and design teams to deliver three major production releases ahead of schedule.",
                      "Security & Compliance: Implemented OWASP best practices and JWT-based authentication, passing all security audits with zero critical vulnerabilities.",
                    ],
                  }
                },
                caseStudyAtAGlance: {
                  variant: "bodyLarge",
                  text: {
                    home: "Full case study includes system architecture, microservices diagrams, and role-specific problem-solving insights.",
                    workExperience: null,
                  }
                },
              },

              {
                id: "challengesAndProblemSolving",
                enabled: {
                  home: false,
                  workExperience: true,
                },
                heading: {
                  variant: "heading3",
                  text: "Challenges & Problem-Solving",
                },
                highlights: {
                  variant: "bodyLarge",
                  as: "li",
                  texts: [
                    "Migrated legacy payment APIs to a distributed microservices architecture with minimal downtime (< 5 mins) by orchestrating blue-green deployments.",
                    "Resolved concurrency bottlenecks in order processing pipeline by introducing a Redis-based queue system, boosting throughput by 25%.",
                  ],
                },
              },
            ],
            buttonProps: {
              variant: {
                home: "secondary",
                workExperience: "primary",
              },
              label: "View TechNova Case Study →",
            },
          },
        },
      ],
    },

    /* ───────────── ROW 2 ───────────── */
    {
      id: "freelanceProjectRetailClient",
      order: 2,
      enabled: true,

      /** CMS / FILTERING META */
      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 2,
      primaryCategory: "Backend",
      secondaryCategories: ["Freelance", "Open-source"],

      buttonProps: {
        variant: {
          home: "primary",
          workExperience: "secondary",
        },
        label: "View TechNova Case Study →",
      },

      blocks: [
        /* BLOCK 1 — ROW 2 (FIRST) */
        {
          id: "work-experience-meta-info",
          type: "workExperienceMetaInfo",
          enabled: true,

          data: {
            alignment: {
              body: "left",
            },
            
            bodyItems: [
              {
                id: "metaInfo",
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
                      label: { 
                        variant: "bodyBase", 
                        modifiers: ["strong"], 
                        text: "Location:" },
                      value: {
                        variant: "bodyBase",
                        text: "Kolkata, India (Remote)",
                      },
                    },
                    {
                      label: { 
                        variant: "bodyBase", 
                        modifiers: ["strong"], 
                        text: "Role:" },
                      value: {
                        variant: "bodyBase",
                        text:
                          "Full-stack Developer (Contract / Remote)",
                      },
                    },
                    {
                      label: {
                        variant: "bodyBase", 
                        modifiers: ["strong"],
                        text: "Employment Type:",
                      },
                      value: {
                        variant: "bodyBase",
                        text: "Freelance · Contract · Remote",
                      },
                    },
                    {
                      label: { 
                        variant: "bodyBase", 
                        modifiers: ["strong"], 
                        text: "Domain:" },
                      value: {
                        variant: "bodyBase",
                        text: "E-commerce Web Application",
                      },
                    },
                  ],

                  techStack: {
                    label: {
                      variant: "bodyBase", 
                      modifiers: ["strong"],
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

        /* BLOCK 2 — ROW 2 (SECOND) */
        {
          id: "work-experience-highlights",
          type: "workExperienceHighlights",
          enabled: true,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            bodyItems: [
              {
                id: "keyContributionsAndImpact",
                enabled: true,
                heading: {
                  variant: "heading3",
                  text: "Key Contributions & Impact",
                  icon: {
                    workExperience: null,
                    home: {
                      svg: workExperienceTitleTextblock.svg,
                      type: workExperienceTitleTextblock.type,
                    },
                  },
                },
                overview: {
                  variant: "bodyLarge",
                  text: {
                    home: "Designed and developed a custom e-commerce platform for a local retail client as a short-term freelance engagement.",
                    workExperience: null,
                  }
                },
                highlights: {
                  variant: "bodyLarge",
                  as: "li",
                  texts: {
                    home: [
                      "Built responsive React frontend with product listing and search.",
                      "Developed Node.js & Express APIs for inventory and order management.",
                      "Deployed the application using Netlify and Render free tiers.",
                    ],
                    workExperience: [
                      "Developed a responsive React-based storefront with advanced product search and filtering.",
                      "Created Node.js REST APIs for inventory, orders, and checkout with secure Stripe payment integration.",
                      "Developed a responsive React-based storefront with advanced product search and filtering.",
                      "Delivered full project in 6 weeks, including admin dashboard with analytics view.",
                    ],
                  }
                },
                caseStudyAtAGlance: {
                  variant: "bodyLarge",
                  text: {
                    home: "Case study showcases feature screenshots and deployment workflow.",
                    workExperience: null,
                  }
                },
              },

              {
                id: "challengesAndProblemSolving",
                enabled: {
                  home: false,
                  workExperience: true,
                },
                heading: {
                  variant: "heading3",
                  text: "Challenges & Problem-Solving",
                },
                highlights: {
                  variant: "bodyLarge",
                  as: "li",
                  texts: [
                    "Optimized images and reduced bundle size by 30% for better load speed on slow 3G connections.",
                    "Designed a lightweight caching strategy for high-traffic product pages using HTTP caching headers.",
                  ],
                },
              },
            ],
            buttonProps: {
              variant: {
                home: "secondary",
                workExperience: "primary",
              },
              label: "View Full Case Study →",
            },
          },
        },
      ],
    },
  ],
};

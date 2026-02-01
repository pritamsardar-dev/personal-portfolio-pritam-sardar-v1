import {
  skillsSubtitleBackendLibrariesAndTools,
  skillsSubtitleCoreMERNStack,
  skillsSubtitleDevAndTestingTools,
  skillsSubtitleDSAAndProgramming,
  skillsSubtitleFrontendLibrariesAndTools,
  skillsSubtitleUIUXDesign,
  skillsSubtitleWorkflowAndSoftSkills,
  skillsTitleCardblock,
  skillsTitleTextblock,
  skillsSubtitleMERNStackExpertise,
  skillsSubtitleFrontendPowerhouse,
  skillsSubtitleBackendWithRealWorldApproach,
  skillsSubtitleTestedDocumentedAndDebugged,
  skillsSubtitleAvdancedMongoDBHandling,
  skillsSubtitleStrongDSAFoundations,
  skillsSubtitleUIUXAtomicPrecision,
  skillsSubtitleTeamCommunicationAndWorkEthic,
  skillsSubtitleProcessOriented,
  skillsSubtitleFlexibleAndDedicated,
  skillsHeading,
} from "../../../assets/icons/content";
import { DropdownIcon } from "../../../assets/icons/system";

export const skillsSection = {
  id: "skills-home",
  type: "skills",
  enabled: true,
  order: 4,

  alignment: {
    heading: "center",
    body: "center"
  },
  heading: {
    variant: {
      home: "heading1",
      skills: "heading1Subpage",
    },
    text: "My Skills",
    icon: {
      svg: skillsHeading.svg,
      type: skillsHeading.type,
    },
  },
  headingHome: {
    skillSet: {
      variant: "heading2",
      text: "My Technical Skillset",
      icon: {
        svg: skillsTitleCardblock.svg,
        type: skillsTitleCardblock.type,
      },
    },
    strengths: {
      variant: "heading2",
      text: "My Skills & Strengths",
      icon: {
        svg: skillsTitleTextblock.svg,
        type: skillsTitleTextblock.type,
      },
    },
  },

  metadataHome: {
    alignment: {
      heading: "left",
      body: "left",
    },
    skillSet: {
      id: "skills-skill-set-home",
      type: "skillsSkillSetBlockHome",
      enabled: true,
      order: 1,
    },
    strengths: {
      id: "skills-strengths-home",
      type: "skillsStrengthsBlockHome", 
      enabled: true,
      order: 2,
    },
  },

  buttonProps: {
    variant: "secondary",
    label: "More About My Skills →",
    onClick: () => {},
  },
  filters: {
    primaryFiltersProps: [
      {
        id: "primary-filter-all",
        variant: "tag",
        label: "All",
        onClick: () => {}
      },
      {
        id: "primary-filter-core-mern",
        variant: "tag",
        label: "Core MERN",
        onClick: () => {}
      },
      {
        id: "primary-filter-frontend",
        variant: "tag",
        label: "Frontend",
        onClick: () => {}
      },
      {
        id: "primary-filter-backend",
        variant: "tag",
        label: "Backend",
        onClick: () => {}
      },
      {
        id: "primary-filter-database",
        variant: "tag",
        label: "Database",
        onClick: () => {}
      },
      {
        id: "primary-filter-dev-and-testing",
        variant: "tag",
        label: "Dev & Testing",
        onClick: () => {}
      },
      {
        id: "primary-filter-dta-and-programming",
        variant: "tag",
        label: "Dsa & Programming",
        onClick: () => {}
      },
      {
        id: "primary-filter-ui-ux",
        variant: "tag",
        label: "UI/UX",
        onClick: () => {}
      },
      {
        id: "primary-filter-workflow-and-soft-skills",
        variant: "tag",
        label: "Workflow & Soft Skills",
        onClick: () => {}
      },
      {
        id: "primary-filter-proof-hightlights",
        variant: "tag",
        label: "Proof / Highlights",
        onClick: () => {}
      },
    ],
  },
  atAGlance: {
    id: "at-a-glance",
    enabled: true,
    heading: {
      variant: "heading2",
      text: "At a Glance",
    },
    description: {
      variant: "bodyLarge",
      text: "A quick glance at the technologies and areas I’m confident working with.",
    },
    highlights: {
      id: "at-a-glance-highlights",
      enabled: true,
      alignment: {
        heading: "left",
        body: "left",
      },
      bodyItems: [
        {
          id: "end-to-end-mern",
          heading: {
            variant: "heading3",
            text: "End-to-End MERN",
            icon: {
              svg: skillsSubtitleCoreMERNStack.svg,
              type: skillsSubtitleCoreMERNStack.type,
            },
          },
          body: {
            variant: "bodyLarge",
            text: "From API design and data modeling to responsive React UIs and deployment on Vercel/Render.",
          },
        },
        {
          id: "auth-and-security",
          heading: {
            variant: "heading3",
            text: "Auth & Security Basics",
            icon: {
              svg: skillsSubtitleBackendWithRealWorldApproach.svg,
              type: skillsSubtitleBackendWithRealWorldApproach.type,
            },
          },
          body: {
            variant: "bodyLarge",
            text: "From API design and data modeling to responsive React UIs and deployment on Vercel/Render.",
          },
        },
        {
          id: "mongodb",
          heading: {
            variant: "heading3",
            text: "MongoDB Done Right",
            icon: {
              svg: skillsSubtitleAvdancedMongoDBHandling.svg,
              type: skillsSubtitleAvdancedMongoDBHandling.type,
            },
          },
          body: {
            variant: "bodyLarge",
            text: "From API design and data modeling to responsive React UIs and deployment on Vercel/Render.",
          },
        },
      ],
    },
    effectiveness: {
      id: "at-a-glance-effectiveness",
      enabled: true,
      alignment: {
        heading: "left",
        body: "left",
      },
      bodyItems: [
        {
          id: "effectiveness",
          heading: {
          variant: "heading3",
          text: "Where I’m Effective",
          },
          description: {
            variant: "bodyLarge",
            text: "Tasks I can pick up immediately in a full-stack team.",
          },
          body: {
            variant: "bodyLarge",
            icon: {
              svg: skillsSubtitleTestedDocumentedAndDebugged.svg,
              type: skillsSubtitleTestedDocumentedAndDebugged.type,
            },
            texts: [
              "Build REST APIs with clean route modules, middleware, and consistent error responses.",
              "Implement auth flows (sign-up/login, password reset, role-based access) with JWT.",
              "Translate Figma designs into accessible, responsive React UIs with reusable components.",
              "Model data for real features: uploads (Multer → Cloudinary), dashboards, feeds, comments.",
              "Write docs/README, Postman collections, and follow a PR/Agit workflow.",
            ],
          },
        }
      ],
    },
    toolbelt: {
      id: "at-a-glance-toolbelt",
      enabled: true,
      alignment: {
        heading: "left",
        body: "left",
      },
      bodyItems: [ 
        {
          id: "toolbelt",
          heading: {
            variant: "heading3",
            text: "Weekly Toolbelt",
        
          },
          description: {
            variant: "bodyLarge",
            text: "The tools and libraries I actively use.",
          },
          body: {
            variant: "bodyBase",
            texts: [
              "React",
              "Redux Toolkit",
              "React Router",
              "React Hook Form",
              "Tailwind CSS",
              "Axios",
              "Node.js",
              "Express",
              "Mongoose",
              "JWT",
              "Multer",
              "Cloudinary SDK",
              "Postman",
              "Git & GitHub",
              "Prettier / ESLint",
            ],
          }
        },
      ],
    },
  },

  /* ───────────────────────── ROW GROUPING ───────────────────────── */
  rows: [
    /* ───────────── ROW 1 ───────────── */
    {
      id: "core-mern-stack",
      order: 1,
      enabled: true,

      /** CMS / FILTERING META */
      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 1,
      primaryCategory: "core-mern",

      blocks: [
        /* ───────────── BLOCK 1 ───────────── */
        {
          id: "skill-overview",
          type: "contextBlock",
          enabled: true,
          order: 1,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            bodyItems: [
              {
                id: "core-mern-stack-overview",
                heading: {
                  variant: "heading3",
                  text: "Core MERN Stack",
                  icon: {
                    svg: skillsSubtitleCoreMERNStack.svg,
                    type: skillsSubtitleCoreMERNStack.type,
                  },
                },
                scopeSet: {
                  variant: "bodyBase",
                  texts: [
                    "Express.js", 
                    "MongoDB", 
                    "Node.js", 
                    "React.js"
                  ],
                },
                homeNarratives: {
                  heading: {
                    variant: "heading3",
                    text: "MERN Stack Expertise",
                    icon: {
                      svg: skillsSubtitleMERNStackExpertise.svg,
                      type: skillsSubtitleMERNStackExpertise.type,
                    },
                  },
                  body: {
                    variant: "bodyLarge",
                    text:
                      "Built complete projects with MongoDB, Express, React, and Node.js — following scalable architecture, component reuse, and RESTful best practices.",
                  },
                },
                narrativeList: {
                  variant: "bodyBase",
                  modifiers: ["strong"], 
                  as: "li",
                  texts:
                   [
                    {
                      label:
                        "MERN Stack Expertise:",
                      value:
                        "Built complete projects with MongoDB, Express, React, and Node.js — following scalable architecture, component reuse, and RESTful best practices.",
                    },
                  ]
                }
              },
            ],
          },
        },

        /* ───────────── BLOCK 2 ───────────── */
        {
          id: "skill-details",
          type: "contentBlock",
          enabled: true,
          order: 2,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            bodyItems: [
              {
                id: "core-mern-stack-details",
                heading: {
                  variant: "bodyBase", 
                  modifiers: ["strong"], 
                  text: "What I can do with MERN" 
                },
         
                body: {
                  variant: "bodyLarge",
                  as: "li",
                  texts: [
                    "Design clean React component hierarchies, manage state effectively (Context/Redux Toolkit), and ship responsive UIs.",
                    "Build Express APIs with route modules, middleware, validation, and error handling.",
                    "Model data with Mongoose schemas, relationships, and indexes; write efficient queries.",
                    "Implement auth flows using JWT, refresh tokens, and protected routes.",
                    "Deploy hobby / portfolio apps to Vercel / Render; manage environment configs.",
                  ]
                },
              },
            ],
          },
        },
      ],
    },

    /* ───────────── ROW 2 ───────────── */
    {
      id: "frontend-libraries-and-tools",
      order: 2,
      enabled: true,

      /** CMS / FILTERING META */
      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 2,
      primaryCategory: "frontend",

      blocks: [
        /* ───────────── BLOCK 1 ───────────── */
        {
          id: "skill-overview",
          type: "contextBlock",
          enabled: true,
          order: 1,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            bodyItems: [
              {
                id: "frontend-libraries-and-tools-overview",
                heading: {
                  variant: "heading3",
                  text: "Frontend Libraries & Tools",
                  icon: {
                    svg: skillsSubtitleFrontendLibrariesAndTools.svg,
                    type: skillsSubtitleFrontendLibrariesAndTools.type,
                  },
                },
                scopeSet: {
                  variant: "bodyBase",
                  texts: [
                    "Axios",
                    "React Hook Form",
                    "React Router",
                    "Redux Toolkit",
                    "Tailwind CSS",
                  ],
                },
                homeNarratives: {
                  heading: {
                    variant: "heading3",
                    text: "Frontend Powerhouse",
                    icon: {
                      svg: skillsSubtitleFrontendPowerhouse.svg,
                      type: skillsSubtitleFrontendPowerhouse.type,
                    },
                  },
                  body: {
                    variant: "bodyLarge",
                    text:
                      "Crafted responsive, fast UIs using React, Tailwind CSS, and Redux Toolkit — mastered reusable components, conditional rendering, and design-to-code flows.",
                  },
                },
                narrativeList: {
                  variant: "bodyBase",
                  modifiers: ["strong"], 
                  as: "li",
                  texts:
                   [
                    {
                      label:
                        "Frontend Powerhouse",
                      value:
                        "Crafted responsive, fast UIs using React, Tailwind CSS, and Redux Toolkit — mastered reusable components, conditional rendering, and design-to-code flows.",
                    },
                  ]
                }
              },
            ],
          },
        },

        /* ───────────── BLOCK 2 ───────────── */
        {
          id: "skill-details",
          type: "contentBlock",
          enabled: true,
          order: 2,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            bodyItems: [
              {
                id: "frontend-libraries-and-tools-details",
                heading: {
                  variant: "bodyBase", 
                  modifiers: ["strong"], 
                  text: "How I approach the frontend" 
                },
         
                body: {
                  variant: "bodyLarge",
                  texts: [
                    "Build accessible components (labels, focus states, keyboard use) and consistent spacing/typography scales.",
                    "Use React Router for nested routes, guarded routes, and scroll restoration.",
                    "Forms with RHF (schema validations, touched state, error UI). HTTP via Axios with interceptors.",
                  ]
                },
              },
            ],
          },
        },
      ],
    },

    /* ───────────── ROW 3 ───────────── */
    {
      id: "backend-libraries-and-tools",
      order: 3,
      enabled: true,

      /** CMS / FILTERING META */
      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 3,
      primaryCategory: "backend",

      blocks: [
        /* ───────────── BLOCK 1 ───────────── */
        {
          id: "skill-overview",
          type: "contextBlock",
          enabled: true,
          order: 1,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            bodyItems: [
              {
                id: "backend-libraries-and-tools-overview",
                heading: {
                  variant: "heading3",
                  text: "Backend Libraries & Tools",
                  icon: {
                    svg: skillsSubtitleBackendLibrariesAndTools.svg,
                    type: skillsSubtitleBackendLibrariesAndTools.type,
                  },
                },
                scopeSet: {
                  variant: "bodyBase",
                  texts: [
                    "Bcrypt.js",
                    "Cloudinary SDK",
                    "CORS",
                    "dotenv",
                    "Helmet",
                    "JWT",
                    "Mongoose",
                    "Multer",
                  ],
                },
                homeNarratives: {
                  heading: {
                    variant: "heading3",
                    text: "Backend with Real-World Approach",
                    icon: {
                      svg: skillsSubtitleBackendWithRealWorldApproach.svg,
                      type: skillsSubtitleBackendWithRealWorldApproach.type,
                    },
                  },
                  body: {
                    variant: "bodyLarge",
                    text:
                      "Developed secure APIs using JWT, handled middleware, validations, scalable route structures, file uploads (Cloudinary), error handling, and logging systems.",
                  },
                },
                narrativeList: {
                  variant: "bodyBase",
                  modifiers: ["strong"], 
                  as: "li",
                  texts:
                   [
                    {
                      label:
                        "Backend with Real-World Approach",
                      value:
                        "Developed secure APIs using JWT, handled middleware, validations, scalable route structures, file uploads (Cloudinary), error handling, and logging systems.",
                    },
                    {
                      label:
                        "Tested, Documented, and Debugged",
                      value:
                        "Confident with Postman, debugging APIs, and writing clean, maintainable backend code. I follow industry conventions from the start.",
                    },
                  ]
                }
              },
            ],
          },
        },

        /* ───────────── BLOCK 2 ───────────── */
        {
          id: "skill-details",
          type: "contentBlock",
          enabled: true,
          order: 2,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            bodyItems: [
              {
                id: "backend-libraries-and-tools-details",
                heading: {
                  variant: "bodyBase", 
                  modifiers: ["strong"], 
                  text: "Typical backend patterns I use",
                },
         
                body: {
                  variant: "bodyLarge",
                  texts: [
                    "Controller-service-model structure with async handlers and centralized error middleware.",
                    "Input validation (Joi/Zod) + sanitize + rate limits for basic hardening.",
                    "Secure file uploads with Multer → Cloudinary; serve signed URLs where needed.",
                  ]
                },
              },
            ],
          },
        },
      ],
    },

    /* ───────────── ROW 4 ───────────── */
    {
      id: "advanced-mongodb-handling",
      order: 4,
      enabled: true,

      /** CMS / FILTERING META */
      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 4,
      primaryCategory: "database",

      blocks: [
        /* ───────────── BLOCK 1 ───────────── */
        {
          id: "skill-overview",
          type: "contextBlock",
          enabled: {
            home: {
              skillSet: false,
              strengths: true
            },
            skills: true,
          },
          order: 1,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            bodyItems: [
              {
                id: "advanced-mongodb-handling-overview",
                heading: {
                  variant: "heading3",
                  text: "Advanced MongoDB Handling",
                  icon: {
                    svg: skillsSubtitleAvdancedMongoDBHandling.svg,
                    type: skillsSubtitleAvdancedMongoDBHandling.type,
                  },
                },
                scopeSet: {
                  variant: "bodyBase",
                  texts: [
                    "Schema design",
                    "references",
                    "indexing",
                    "aggregation pipelines",
                  ],
                },
                homeNarratives: {
                  // Fallback to the block heading
                  body: {
                    variant: "bodyLarge",
                    text:
                      "Schema design, validations, references, indexing, and even aggregation pipelines — built production-ready MongoDB layers with Mongoose.",
                  },
                },
                narrativeList: {
                  variant: "bodyBase",
                  modifiers: ["strong"], 
                  as: "li",
                  texts:
                   [
                    {
                      label:
                        "Production-ready data layers:",
                      value:
                        "Schema design, validations, references, indexing, and even aggregation pipelines — built production-ready MongoDB layers with Mongoose.",
                    },
                  ]
                }
              },
            ],
          },
        },

        /* ───────────── BLOCK 2 ───────────── */
        {
          id: "skill-details",
          type: "contentBlock",
          enabled: true,
          order: 2,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            bodyItems: [
              {
                id: "advanced-mongodb-handling-details",
                heading: {
                  variant: "bodyBase", 
                  modifiers: ["strong"], 
                  text: "Examples of data work",
                },
         
                body: {
                  variant: "bodyLarge",
                  texts: [
                    "Soft deletes, audit fields, and compound indexes for rPopulation for relational views with lean queries for performance.",
                    "Aggregation for metrics (counts, group by, date buckets) used in dashboards.",
                  ]
                },
              },
            ],
          },
        },
      ],
    },

    /* ───────────── ROW 5 ───────────── */
    {
      id: "dev-and-testing-tools",
      order: 5,
      enabled: true,

      /** CMS / FILTERING META */
      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 5,
      primaryCategory: "dev-and-testing",

      blocks: [
        /* ───────────── BLOCK 1 ───────────── */
        {
          id: "skill-overview",
          type: "contextBlock",
          enabled: true,
          order: 1,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            bodyItems: [
              {
                id: "dev-and-testing-tools-overview",
                heading: {
                  variant: "heading3",
                  text: "Dev & Testing Tools",
                  icon: {
                    svg: skillsSubtitleDevAndTestingTools.svg,
                    type: skillsSubtitleDevAndTestingTools.type,
                  },
                },
                scopeSet: {
                  variant: "bodyBase",
                  texts: [
                    "ESLint",
                    "Git",
                    "GitHub",
                    "MongoDB Atlas",
                    "Nodemon",
                    "Postman",
                    "Prettier",
                    "Render",
                    "Vercel",
                  ],
                },
                homeNarratives: {
                  heading: {
                    variant: "heading3",
                    text: "Tested, Documented, and Debugged",
                    icon: {
                      svg: skillsSubtitleTestedDocumentedAndDebugged.svg,
                      type: skillsSubtitleTestedDocumentedAndDebugged.type,
                    },
                  },
                  body: {
                    variant: "bodyLarge",
                    text:
                      "Confident with Postman, debugging APIs, and writing clean, maintainable backend code. I follow industry conventions from the start.",
                  },
                },
                narrativeList: {
                  variant: "bodyBase",
                  modifiers: ["strong"], 
                  as: "li",
                  texts:
                   [
                    {
                      value:
                        "Project scaffolding, environment separation, and CLI workflows to speed up local dev.",
                    },
                    {
                      value:
                        "Consistent linting / formatting from day one to keep the codebase clean.",
                    },
                    {
                      value:
                        "Postman collections for repeatable manual tests and API documentation.",
                    },
                    {
                      value:
                        "Basic CI-style discipline (branching, PR mindset) even in solo projects.",
                    },
                  ]
                }
              },
            ],
          },
        },
      ],
    },

    /* ───────────── ROW 6 ───────────── */
    {
      id: "dsa-and-programming",
      order: 6,
      enabled: true,

      /** CMS / FILTERING META */
      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 6,
      primaryCategory: "dsa-and-programming",

      blocks: [
        /* ───────────── BLOCK 1 ───────────── */
        {
          id: "skill-overview",
          type: "contextBlock",
          enabled: true,
          order: 1,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            bodyItems: [
              {
                id: "dsa-and-programming-overview",
                heading: {
                  variant: "heading3",
                  text: "DSA & Programming",
                  icon: {
                    svg: skillsSubtitleDSAAndProgramming.svg,
                    type: skillsSubtitleDSAAndProgramming.type,
                  },
                },
                scopeSet: {
                  variant: "bodyBase",
                  texts: [
                    "Algorithms",
                    "Big-O",
                    "Data Structures",
                    "Java",
                    "JavaScript (ES6+)",
                    "OOP",
                  ],
                },
                homeNarratives: {
                  heading: {
                    variant: "heading3",
                    text: "Strong DSA Foundations",
                    icon: {
                      svg: skillsSubtitleStrongDSAFoundations.svg,
                      type: skillsSubtitleStrongDSAFoundations.type,
                    },
                  },
                  body: {
                    variant: "bodyLarge",
                    text:
                      "Solved 300+ problems in Java, with a deep understanding of time-space complexity, recursion, and problem-solving strategies.",
                  },
                },
                narrativeList: {
                  variant: "bodyBase",
                  modifiers: ["strong"], 
                  as: "li",
                  texts:
                   [
                    {
                      label:
                        "Strong DSA Foundations:",
                      value:
                        "Solved 300+ problems in Java, with a deep understanding of time-space complexity, recursion, and problem-solving strategies.",
                    },
                    {
                      value:
                        "Comfortable translating problem statements into efficient data models and APIs.",
                    },
                  ]
                }
              },
            ],
          },
        },
      ],
    },

    /* ───────────── ROW 7 ───────────── */
    {
      id: "ui-ux-with-atomic-precision",
      order: 7,
      enabled: true,

      /** CMS / FILTERING META */
      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 7,
      primaryCategory: "ui-ux",

      blocks: [
        /* ───────────── BLOCK 1 ───────────── */
        {
          id: "skill-overview",
          type: "contextBlock",
          enabled: true,
          order: 1,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            bodyItems: [
              {
                id: "ui-ux-with-atomic-overview",
                heading: {
                  variant: "heading3",
                  text: "UI/UX Design",
                  icon: {
                    svg: skillsSubtitleUIUXDesign.svg,
                    type: skillsSubtitleUIUXDesign.type,
                  },
                },
                scopeSet: {
                  variant: "bodyBase",
                  texts: [
                    "Atomic Design",
                    "Color/Layout Systems",
                    "Design Systems",
                    "Figma",
                    "Variants & Components",
                  ],
                },
                homeNarratives: {
                  heading: {
                    variant: "heading3",
                    text: "UI/UX with Atomic Precision",
                    icon: {
                      svg: skillsSubtitleUIUXAtomicPrecision.svg,
                      type: skillsSubtitleUIUXAtomicPrecision.type,
                    },
                  },
                  body: {
                    variant: "bodyLarge",
                    text:
                      "Pro UI/UX knowledge — built scalable design systems in Figma using Atomic Design, reusable variants, and UX-first thinking.",
                  },
                },
                narrativeList: {
                  variant: "bodyBase",
                  modifiers: ["strong"], 
                  as: "li",
                  texts:
                   [
                    {
                      label:
                        "UI/UX Design:",
                      value:
                        "Pro UI/UX knowledge — built scalable design systems in Figma using Atomic Design, reusable variants, and UX-first thinking.",
                    },
                    {
                      value:
                        "Accessibility and content hierarchy baked in; I ship interfaces that read well and feel fast.",
                    },
                  ]
                }
              },
            ],
          },
        },
      ],
    },

    /* ───────────── ROW 8 ───────────── */
    {
      id: "workflow-and-soft-skills",
      order: 8,
      enabled: true,

      /** CMS / FILTERING META */
      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 8,
      primaryCategory: "workflow-and-soft-skills",

      blocks: [
        /* ───────────── BLOCK 1 ───────────── */
        {
          id: "skill-overview",
          type: "contextBlock",
          enabled: true,
          order: 1,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            bodyItems: [
              {
                id: "workflow-and-soft-overview",
                heading: {
                  variant: "heading3",
                  text: "Workflow & Soft Skills",
                  icon: {
                    svg: skillsSubtitleWorkflowAndSoftSkills.svg,
                    type: skillsSubtitleWorkflowAndSoftSkills.type,
                  },
                },
                scopeSet: {
                  variant: "bodyBase",
                  texts: [
                    "Agile / Sprints",
                    "Cross-functional Collaboration",
                    "Discipline",
                    "Documentation",
                    "Fast Learner",
                    "PRD Writing",
                    "Team Communication",
                    "User-centered Thinking",
                  ],
                },
                homeNarratives: [
                  {
                    heading: {
                      variant: "heading3",
                      text: "Team Communication & Work Ethic",
                      icon: {
                        svg: skillsSubtitleTeamCommunicationAndWorkEthic.svg,
                        type: skillsSubtitleTeamCommunicationAndWorkEthic.type,
                      },
                    },
                    body: {
                      variant: "bodyLarge",
                      text:
                        "Can collaborate cross-functionally — developers, designers, or clients. Have handled roles independently from UI to deployment in freelance projects.",
                    },
                  },
                  {
                    heading: {
                      variant: "heading3",
                      text: "Process Oriented",
                      icon: {
                        svg: skillsSubtitleProcessOriented.svg,
                        type: skillsSubtitleProcessOriented.type,
                      },
                    },
                    body: {
                      variant: "bodyLarge",
                      text:
                        "Know how to create PRDs, documentation, handoff files, version control, and follow agile sprints — from requirement gathering to deployment.",
                    },
                  },
                  {
                    heading: {
                      variant: "heading3",
                      text: "Flexible & Dedicated",
                      icon: {
                        svg: skillsSubtitleFlexibleAndDedicated.svg,
                        type: skillsSubtitleFlexibleAndDedicated.type,
                      },
                    },
                    body: {
                      variant: "bodyLarge",
                      text:
                        "I can adapt to any shift, any role, and any tech stack on demand. Even on weekends or under strict deadlines — quality never drops.",
                    },
                  },
                ],
                narrativeList: {
                  variant: "bodyBase",
                  modifiers: ["strong"], 
                  as: "li",
                  texts:
                   [
                    {
                      label:
                        "Process Oriented:",
                      value:
                        "Know how to create PRDs, documentation, handoff files, version control, and follow agile sprints — from requirement gathering to deployment.",
                    },
                    {
                      label:
                      "Flexible & Dedicated:",
                      value:
                        "I can adapt to any shift, any role, and any tech stack on demand. Even on weekends or under strict deadlines — quality never drops.",
                    },
                  ]
                }
              },
            ],
          },
        },
      ],
    },

    /* ───────────── ROW 9 ───────────── */
    {
      id: "proof-highlights",
      order: 9,
      enabled: true,

      /** CMS / FILTERING META */
      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 9,
      primaryCategory: "proof-highlights",

      blocks: [
        /* ───────────── BLOCK 1 ───────────── */
        {
          id: "skill-overview",
          type: "contextBlock",
          enabled: {
            home: {
              skillSet: false,
              strengths: false
            },
            skills: true,
          },
          order: 1,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            bodyItems: [
              {
                id: "proof-highlights-overview",
                heading: {
                  variant: "heading3",
                  text: "Proof & Highlights",
                  icon: {
                    svg: skillsSubtitleTestedDocumentedAndDebugged.svg,
                    type: skillsSubtitleTestedDocumentedAndDebugged.type,
                  },
                },
                scopeSet: {
                  variant: "bodyBase",
                  texts: [
                    "Concrete signals that back the claims above (links may point to your portfolio/GitHub).",
                  ],
                },
                narrativeList: {
                  variant: "bodyBase",
                  modifiers: ["strong"], 
                  as: "li",
                  texts:
                   [
                    {
                      label:
                        "Projects:",
                      value:
                        "End-to-end MERN apps (auth, file uploads, dashboards, REST APIs). Link: your portfolio projects page",
                    },
                    {
                      label:
                        "Auth flows:",
                      value:
                        "JWT access/refresh token pattern with protected React routes.",
                    },
                    {
                      label:
                        "Performance & UX:",
                      value:
                        "Responsive layouts, image optimization via Cloudinary, and smooth UI states.",
                    },
                    {
                      label:
                        "DSA:",
                      value:
                        "300+ solved problems in Java (consistency & depth in algorithms).",
                    },
                    {
                      label:
                        "Docs & Testing:",
                      value:
                        "Postman collections, README/PRDs, and clear environment setup notes.",
                    },
                  ]
                }
              },
            ],
          },
        },

        /* ───────────── BLOCK 2 ───────────── */
        {
          id: "skill-validation",
          type: "validationBlock",
          enabled: true,
          order: 2,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            bodyItems: [
              {
                id: "validation-cta",
                heading: {
                  variant: {
                    atAGlance: "heading3",
                    skillsRow: "bodyBase",
                  },
                  modifiers: ["strong"], 
                  text: "Want to validate skills quickly?",
                },
         
                description: {
                  variant: "bodyLarge",
                  text: "Quick ways to verify my skills without self-ratings.",
                },

                ctaButtons: [
                  {
                    variant: "primary",
                    label: "View Projects",
                    onClick: () => {},
                  },
                  {
                    variant: "secondary",
                    label: "GitHub Repos",
                    onClick: () => {},
                  },
                  {
                    variant: "secondary",
                    label: "Download Resume",
                    onClick: () => {},
                  },
                  {
                    variant: "secondary",
                    label: "Contact Me",
                    onClick: () => {},
                  },
                ]

              },
            ],
          },
        },
      ],
    },
  ],
};

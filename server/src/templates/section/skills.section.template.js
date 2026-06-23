export const skillsSectionTemplate = {
  id: "skills",
  type: "skills",
  assetFolder: "skills",
  enabled: true,
  order: 4,

  alignment: {
    heading: "center",
    body: "center",
    cta: "center",
  },

  heading: {
    variant: {
      home: "heading1",
      skills: "heading1Subpage",
    },
    text: "My Skills",
    icon: {
      src: "icons/content/skills-heading.svg",
      public_id: "",
      type: "stroke",
    },
  },

  headingHome: {
    skillSet: {
      variant: "heading2",
      text: "Technical Skillset",
      icon: {
        src: "icons/content/skills-title-cardblock.svg",
        public_id: "",
        type: "stroke",
      },
    },
    strengths: {
      variant: "heading2",
      text: "Working Approach",
      icon: {
        src: "icons/content/skills-title-textblock.svg",
        public_id: "",
        type: "stroke",
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
    label: "More About My Skills",
    icon: "ChevronRight",
    action: "navigate",
    target: "/skills",
  },

  // At a glance block shown on the skills subpage
  atAGlance: {
    id: "at-a-glance",
    enabled: true,

    heading: {
      variant: "heading2",
      text: "At a Glance",
    },

    description: {
      variant: "bodyLarge",
      text: "A quick overview of my core skills, the technologies I work with and where I can contribute.",
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
              src: "icons/content/skills-subtitle-core-mern-stack.svg",
              public_id: "",
              type: "stroke",
            },
          },
          body: {
            variant: "bodyLarge",
            text: "Can work across the full stack covering data modeling, API design, React frontends and deployment. Comfortable contributing across both frontend and backend depending on project requirements.",
          },
        },
        {
          id: "auth-and-security",
          heading: {
            variant: "heading3",
            text: "Auth & Security",
            icon: {
              src: "icons/content/skills-subtitle-auth-with-security.svg",
              public_id: "",
              type: "stroke",
            },
          },
          body: {
            variant: "bodyLarge",
            text: "Can implement secure authentication and authorization workflows including JWT access and refresh token flows, role based access control, secure session management and protected routes. Comfortable adapting modern authentication and security practices to different project requirements.",
          },
        },
        {
          id: "mongodb",
          heading: {
            variant: "heading3",
            text: "MongoDB",
            icon: {
              src: "icons/content/skills-subtitle-avdanced-mongo-db-handling.svg",
              public_id: "",
              type: "stroke",
            },
          },
          body: {
            variant: "bodyLarge",
            text: "Can design MongoDB schemas using references, indexes and aggregation pipelines. Comfortable working with nested lookups and complex data relationships, while also able to adapt to MySQL, PostgreSQL and other relational databases based on project requirements.",
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
            text: "How I Can Contribute",
          },
          description: {
            variant: "bodyLarge",
            text: "What I can pick up and deliver in a team from early on.",
          },
          body: {
            variant: "bodyLarge",
            icon: {
              src: "icons/content/skills-subtitle-how-i-can-contribute.svg",
              public_id: "",
              type: "stroke",
            },
            texts: [
              "Build REST APIs with clean route structures, middleware, validation and consistent error handling.",

              "Implement authentication and authorization flows covering sign up, login, token refresh and role based access using JWT.",

              "Translate Figma designs into responsive React UIs with reusable components and clean state management.",

              "Model data for application features such as file uploads, dashboards, feeds, playlists and subscriptions.",

              "Write documentation that other developers can follow, maintain structured commits and keep development environments reproducible.",
            ],
          },
        },
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
            text: "Technologies & Tools",
          },
          description: {
            variant: "bodyLarge",
            text: "Technologies and tools I use across most projects.",
          },
          body: {
            variant: "bodyBase",
            texts: [
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",

              "Redux Toolkit",
              "Context API",
              "React Router",
              "React Hook Form",
              "Tailwind CSS",
              "Axios",

              "REST APIs",
              "Mongoose",
              "JWT",
              "Multer",
              "Bcrypt.js",
              "Cloud Storage",

              "Git & GitHub",
              "Postman",
              "Vercel",
              "Render",

              "Figma",
              "ESLint",
              "Prettier",
            ],
          },
        },
      ],
    },
  },

  rows: [
    // Row 1: Core MERN stack
    {
      id: "core-mern-stack",
      order: 1,
      enabled: true,

      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 1,
      primaryCategory: "core-mern",

      blocks: [
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
                    src: "icons/content/skills-subtitle-core-mern-stack.svg",
                    public_id: "",
                    type: "stroke",
                  },
                },
                scopeSet: {
                  variant: "bodyBase",
                  texts: ["React.js", "Node.js", "Express.js", "MongoDB"],
                },
                homeNarratives: {
                  heading: {
                    variant: "heading3",
                    text: "MERN Stack",
                    icon: {
                      src: "icons/content/skills-subtitle-mern-stack-expertise.svg",
                      public_id: "",
                      type: "stroke",
                    },
                  },
                  body: {
                    variant: "bodyLarge",
                    text: "Can work across the full MERN stack on authentication, data modeling, REST API development and React frontends. Able to contribute across both frontend and backend development depending on project requirements.",
                  },
                },
                narrativeList: {
                  variant: "bodyBase",
                  modifiers: ["strong"],
                  as: "li",
                  texts: [
                    {
                      label: "MERN Stack:",
                      value:
                        "Can work across the full MERN stack on authentication, data modeling, REST API development and React frontends. Able to contribute across both frontend and backend development depending on project requirements.",
                    },
                  ],
                },
              },
            ],
          },
        },

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
                  text: "MERN in practice",
                },

                body: {
                  variant: "bodyLarge",
                  as: "li",
                  texts: [
                    "Structure React applications with clear component hierarchies and state management using Context API or Redux Toolkit depending on project requirements. Build responsive interfaces from Figma designs across different application types.",
                    "Build Express APIs using route modules, middleware, request validation and centralized error handling. Familiar with backend structures that prioritize maintainability and consistency as applications grow.",
                    "Design Mongoose schemas with references and indexes that reflect feature requirements and expected query patterns. Focus on keeping data models practical and queries efficient.",
                    "Implement JWT based authentication with access tokens, refresh tokens, httpOnly cookies and route protection across both client and server.",
                    "Deploy applications using Vercel and Render with environment configuration, production builds and deployment workflows. Familiar with Netlify and similar hosting platforms.",
                  ],
                },
              },
            ],
          },
        },
      ],
    },

    // Row 2: Frontend libraries and tools
    {
      id: "frontend-libraries-and-tools",
      order: 2,
      enabled: true,

      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 2,
      primaryCategory: "frontend",

      blocks: [
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
                    src: "icons/content/skills-subtitle-frontend-libraries-and-tools.svg",
                    public_id: "",
                    type: "stroke",
                  },
                },
                scopeSet: {
                  variant: "bodyBase",
                  texts: [
                    "Redux Toolkit",
                    "Context API",
                    "React Router",
                    "React Hook Form",
                    "Tailwind CSS",
                    "Axios",
                    "Responsive Design",
                  ],
                },
                homeNarratives: {
                  heading: {
                    variant: "heading3",
                    text: "Frontend Development",
                    icon: {
                      src: "icons/content/skills-subtitle-frontend-powerhouse.svg",
                      public_id: "",
                      type: "stroke",
                    },
                  },
                  body: {
                    variant: "bodyLarge",
                    text: "Can work with React, Tailwind CSS and Redux Toolkit across different types of applications. Comfortable with component architecture, routing, form handling and translating Figma designs into responsive user interfaces. Able to adapt to different frontend libraries, tooling and project requirements when needed.",
                  },
                },
                narrativeList: {
                  variant: "bodyBase",
                  modifiers: ["strong"],
                  as: "li",
                  texts: [
                    {
                      label: "Frontend Development:",
                      value:
                        "Can work with React, Tailwind CSS and Redux Toolkit across different types of applications. Comfortable with component architecture, routing, form handling and translating Figma designs into responsive user interfaces. Able to adapt to different frontend libraries, tooling and project requirements when needed.",
                    },
                  ],
                },
              },
            ],
          },
        },

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
                  text: "Frontend work in practice",
                },

                body: {
                  variant: "bodyLarge",
                  as: "li",
                  texts: [
                    "Build components with consistent spacing, focus states and responsive layouts that hold across screen sizes from the start rather than being patched later.",

                    "Use React Router for routing and navigation flows, and React Hook Form for validated forms with clear error handling and user feedback.",

                    "Work with Axios for API communication and Redux Toolkit or Context API for state management depending on application complexity and project requirements.",

                    "Implement theme preferences, client-side persistence and other interface features that improve the overall user experience.",
                  ],
                },
              },
            ],
          },
        },
      ],
    },

    // Row 3: Backend libraries and tools
    {
      id: "backend-libraries-and-tools",
      order: 3,
      enabled: true,

      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 3,
      primaryCategory: "backend",

      blocks: [
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
                    src: "icons/content/skills-subtitle-backend-libraries-and-tools.svg",
                    public_id: "",
                    type: "stroke",
                  },
                },
                scopeSet: {
                  variant: "bodyBase",
                  texts: [
                    "REST APIs",
                    "JWT",
                    "Mongoose",
                    "Multer",
                    "Bcrypt.js",
                    "Request Validation",
                    "Error Handling",
                    "CORS",
                    "Helmet",
                    "Cloud Media Platforms",
                  ],
                },
                homeNarratives: {
                  heading: {
                    variant: "heading3",
                    text: "Backend Development",
                    icon: {
                      src: "icons/content/skills-subtitle-backend-development.svg",
                      public_id: "",
                      type: "stroke",
                    },
                  },
                  body: {
                    variant: "bodyLarge",
                    text: "Can work with JWT authentication, REST API development, file uploads, middleware based request handling and structured error management. Familiar with cloud media platforms for media uploads, asset replacement and asset lifecycle management. Comfortable working across different backend libraries, frameworks and project architectures depending on project requirements.",
                  },
                },
                narrativeList: {
                  variant: "bodyBase",
                  modifiers: ["strong"],
                  as: "li",
                  texts: [
                    {
                      label: "Backend Development:",
                      value:
                        "Can work with JWT authentication, REST API development, file uploads, middleware based request handling and structured error management. Familiar with cloud media platforms for media uploads, asset replacement and asset lifecycle management. Comfortable working across different backend libraries, frameworks and project architectures depending on project requirements.",
                    },
                    {
                      label: "API practices:",
                      value:
                        "Test API endpoints and backend workflows using Postman before frontend integration. Familiar with organizing backend projects using controller, service and model layers with async error handling and reusable response patterns.",
                    },
                  ],
                },
              },
            ],
          },
        },

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
                  text: "Backend work in practice",
                },

                body: {
                  variant: "bodyLarge",
                  as: "li",
                  texts: [
                    "Work with controller, service and model layers alongside async handlers and centralized error middleware. Use standardized response formats to keep API responses consistent and predictable across endpoints.",

                    "Handle file uploads using Multer and cloud media platforms such as Cloudinary. Manage media uploads, replacements and deletion workflows while keeping application data and stored assets synchronized.",

                    "Work with JWT access tokens, refresh tokens and httpOnly cookies for authentication and session management. Implement token refresh workflows and database backed session invalidation patterns.",

                    "Configure CORS, Helmet and environment based settings as part of backend setup. Apply request validation, rate limiting and input sanitization on authentication and other sensitive routes.",
                  ],
                },
              },
            ],
          },
        },
      ],
    },

    // Row 4: Advanced MongoDB
    {
      id: "advanced-mongodb-handling",
      order: 4,
      enabled: true,

      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 4,
      primaryCategory: "database",

      blocks: [
        {
          id: "skill-overview",
          type: "contextBlock",
          enabled: {
            home: {
              skillSet: false,
              strengths: true,
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
                  text: "Advanced MongoDB",
                  icon: {
                    src: "icons/content/skills-subtitle-avdanced-mongo-db-handling.svg",
                    public_id: "",
                    type: "stroke",
                  },
                },
                scopeSet: {
                  variant: "bodyBase",
                  texts: [
                    "Schema Design",
                    "Data Modeling",
                    "References",
                    "Indexing",
                    "Aggregation Pipelines",
                    "Query Optimization",
                    "MySQL",
                    "PostgreSQL",
                  ],
                },
                homeNarratives: {
                  body: {
                    variant: "bodyLarge",
                    text: "Can work with schema design, references, indexing and aggregation pipelines for complex data relationships and query requirements. Comfortable working with nested lookups, multi-collection data retrieval and performance conscious query patterns. MongoDB is the primary database used across most projects, while also familiar with MySQL and able to adapt to PostgreSQL or other relational databases depending on project requirements.",
                  },
                },
                narrativeList: {
                  variant: "bodyBase",
                  modifiers: ["strong"],
                  as: "li",
                  texts: [
                    {
                      label: "Data modeling:",
                      value:
                        "Can work with schema design, references, indexing and aggregation pipelines for complex data relationships, reporting needs and analytical queries. MongoDB is the primary database across most projects, while also familiar with MySQL and able to work with PostgreSQL or other relational databases when required.",
                    },
                  ],
                },
              },
            ],
          },
        },

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
                  text: "MongoDB in practice",
                },

                body: {
                  variant: "bodyLarge",
                  as: "li",
                  texts: [
                    "Work with aggregation pipelines to retrieve and transform data across multiple collections in a single query. Handle lookups, counts and conditional data processing for profile, feed and dashboard style features.",

                    "Use nested lookup pipelines for features that require joined data across multiple levels of relationships, helping reduce database round trips and simplify data retrieval.",

                    "Apply indexes on frequently queried fields and use lean query patterns where full document population is not required. Work with Mongoose middleware and schema level logic for validation, authentication related workflows and reusable data handling patterns.",

                    "Approach database design around application query patterns and data access requirements. Apply the same principles across MongoDB, MySQL and PostgreSQL regardless of the underlying database technology.",
                  ],
                },
              },
            ],
          },
        },
      ],
    },

    // Row 5: Dev and testing tools
    {
      id: "dev-and-testing-tools",
      order: 5,
      enabled: true,

      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 5,
      primaryCategory: "dev-and-testing",

      blocks: [
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
                    src: "icons/content/skills-subtitle-dev-and-testing-tools.svg",
                    public_id: "",
                    type: "stroke",
                  },
                },
                scopeSet: {
                  variant: "bodyBase",
                  texts: [
                    "Git",
                    "GitHub",
                    "Postman",
                    "API Testing",
                    "Vercel",
                    "Render",
                    "MongoDB Atlas",
                    "Environment Variables",
                    "ESLint",
                    "Prettier",
                  ],
                },
                homeNarratives: {
                  heading: {
                    variant: "heading3",
                    text: "Testing, Documentation & Git",
                    icon: {
                      src: "icons/content/skills-subtitle-tested-documented-and-debugged.svg",
                      public_id: "",
                      type: "stroke",
                    },
                  },
                  body: {
                    variant: "bodyLarge",
                    text: "Can work with Git, GitHub, Postman and modern deployment platforms as part of day to day development workflows. Comfortable with version control, API testing, project documentation and deployment processes. Familiar with development tooling, code quality practices and environment management across different project setups.",
                  },
                },
                narrativeList: {
                  variant: "bodyBase",
                  modifiers: ["strong"],
                  as: "li",
                  texts: [
                    {
                      value:
                        "Use Git with structured commits, feature branches and pull request based workflows to keep development organized and version history meaningful.",
                    },
                    {
                      value:
                        "Work with Postman for API testing, debugging and documentation before frontend integration. Manage environment specific configurations across local development and production deployments.",
                    },
                    {
                      value:
                        "Use ESLint and Prettier to maintain consistent code quality, formatting standards and development workflows across projects.",
                    },
                    {
                      value:
                        "Deploy applications using platforms such as Vercel, Render and MongoDB Atlas. Comfortable managing environment configuration, build processes and deployment related issues across different project requirements.",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },

    // Row 6: DSA and programming
    {
      id: "dsa-and-programming",
      order: 6,
      enabled: true,

      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 6,
      primaryCategory: "dsa-and-programming",

      blocks: [
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
                    src: "icons/content/skills-subtitle-dsa-and-programming.svg",
                    public_id: "",
                    type: "stroke",
                  },
                },
                scopeSet: {
                  variant: "bodyBase",
                  texts: [
                    "Data Structures",
                    "Algorithms",
                    "Big-O Analysis",
                    "OOP",
                    "Java",
                    "JavaScript (ES6+)",
                    "System Design Fundamentals",
                  ],
                },
                homeNarratives: {
                  heading: {
                    variant: "heading3",
                    text: "DSA & Problem Solving",
                    icon: {
                      src: "icons/content/skills-subtitle-strong-dsa-foundations.svg",
                      public_id: "",
                      type: "stroke",
                    },
                  },
                  body: {
                    variant: "bodyLarge",
                    text: "Can optimize data access, reduce unnecessary processing and build efficient solutions that scale with growing application requirements. Comfortable working through complex requirements while balancing performance, maintainability and implementation complexity.",
                  },
                },
                narrativeList: {
                  variant: "bodyBase",
                  modifiers: ["strong"],
                  as: "li",
                  texts: [
                    {
                      label: "DSA & Problem Solving:",
                      value:
                        "Can optimize data access, reduce unnecessary processing and build efficient solutions that scale with growing application requirements. Comfortable working through complex requirements while balancing performance, maintainability and implementation complexity",
                    },
                    {
                      value:
                        "Break down complex requirements into smaller, manageable components before implementation. Apply a structured approach when evaluating different solution paths and handling technical constraints.",
                    },
                    {
                      label: "System Design Fundamentals:",
                      value:
                        "Familiar with system design fundamentals including API contracts, data flow, component boundaries and architectural tradeoffs. Comfortable reasoning about how different parts of a system interact as application complexity grows.",
                    },
                  ],
                },
              },
            ],
          },
        },

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
                id: "dsa-and-programming-details",
                heading: {
                  variant: "bodyBase",
                  modifiers: ["strong"],
                  text: "DSA in practice",
                },

                body: {
                  variant: "bodyLarge",
                  as: "li",
                  texts: [
                    "Use data structures and algorithmic thinking to improve data access patterns, reduce unnecessary processing and support efficient application behavior.",

                    "Apply the same approach when designing queries, evaluating implementation tradeoffs and reducing avoidable work across backend workflows.",

                    "Use object oriented programming principles such as encapsulation, separation of concerns and modular design when organizing services, models and application logic.",

                    "Work with system design fundamentals including API contracts, data flow, component boundaries and architectural tradeoffs when building features that span multiple parts of an application.",
                  ],
                },
              },
            ],
          },
        },
      ],
    },

    // Row 7: UI/UX design
    {
      id: "ui-ux-with-atomic-precision",
      order: 7,
      enabled: true,

      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 7,
      primaryCategory: "ui-ux",

      blocks: [
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
                  text: "UI/UX & Design Systems",
                  icon: {
                    src: "icons/content/skills-subtitle-ui-ux-design.svg",
                    public_id: "",
                    type: "stroke",
                  },
                },
                scopeSet: {
                  variant: "bodyBase",
                  texts: [
                    "Figma",
                    "Design Systems",
                    "Design Tokens",
                    "Atomic Design",
                    "Component Variants",
                    "Responsive Design",
                    "Color & Layout Systems",
                  ],
                },
                homeNarratives: {
                  heading: {
                    variant: "heading3",
                    text: "UI/UX Design",
                    icon: {
                      src: "icons/content/skills-subtitle-ui-ux-atomic-precision.svg",
                      public_id: "",
                      type: "stroke",
                    },
                  },
                  body: {
                    variant: "bodyLarge",
                    text: "Can work with Figma, design systems, design tokens and component driven design workflows. Comfortable designing interfaces from scratch, defining reusable design foundations and creating systems that remain consistent as products and features grow. Able to adapt design decisions to different product requirements, user needs and implementation constraints.",
                  },
                },
                narrativeList: {
                  variant: "bodyBase",
                  modifiers: ["strong"],
                  as: "li",
                  texts: [
                    {
                      label: "UI/UX Design:",
                      value:
                        "Can work with Figma, design systems, design tokens and component driven design workflows. Comfortable designing interfaces from scratch, defining reusable design foundations and creating systems that remain consistent as products and features grow. Able to adapt design decisions to different product requirements, user needs and implementation constraints.",
                    },
                    {
                      value:
                        "Design systems include reusable tokens, component variants, typography, spacing and layout foundations that support consistent experiences across different parts of a product.",
                    },
                    {
                      value:
                        "Design decisions carry into the React codebase through shared design foundations, helping maintain consistency between design and implementation while reducing unnecessary rework.",
                    },
                  ],
                },
              },
            ],
          },
        },

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
                id: "ui-ux-details",
                heading: {
                  variant: "bodyBase",
                  modifiers: ["strong"],
                  text: "UI/UX work in practice",
                },

                body: {
                  variant: "bodyLarge",
                  as: "li",
                  texts: [
                    "Build design systems in Figma covering design tokens, color systems, typography scales, spacing foundations and reusable component libraries. Establish shared design foundations that remain consistent as products expand.",

                    "Use a component driven design approach where smaller building blocks combine into larger interface sections. Define variants, states and interaction patterns before implementation begins.",

                    "Carry design tokens into frontend implementation through shared naming conventions and token structures. Plan theme support and visual consistency as part of the design system rather than as a later addition.",
                  ],
                },
              },
            ],
          },
        },
      ],
    },

    // Row 8: Python and AI/ML
    {
      id: "python-and-ai",
      order: 8,
      enabled: true,

      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 8,
      primaryCategory: "python-and-ai",

      blocks: [
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
                id: "python-and-ai-overview",
                heading: {
                  variant: "heading3",
                  text: "Python & AI/ML",
                  icon: {
                    src: "icons/content/skills-subtitle-dsa-and-programming.svg",
                    public_id: "",
                    type: "stroke",
                  },
                },
                scopeSet: {
                  variant: "bodyBase",
                  texts: [
                    "Python",
                    "TensorFlow",
                    "Keras",
                    "FastAPI",
                    "scikit-learn",
                    "Librosa",
                  ],
                },
                homeNarratives: {
                  heading: {
                    variant: "heading3",
                    text: "Python & AI/ML",
                    icon: {
                      src: "icons/content/skills-subtitle-dsa-and-programming.svg",
                      public_id: "",
                      type: "stroke",
                    },
                  },
                  body: {
                    variant: "bodyLarge",
                    text: "Can build and deploy AI models for classification tasks, with CNNs being one example of what has been worked on. Covers data preprocessing, model training, inference and FastAPI integration. Python is not the primary stack but gets picked up for AI driven features, data processing workflows and dedicated inference services when a project calls for it alongside a Node.js backend.",
                  },
                },
                narrativeList: {
                  variant: "bodyBase",
                  modifiers: ["strong"],
                  as: "li",
                  texts: [
                    {
                      label: "Python & AI/ML:",
                      value:
                        "Can work with Python based AI/ML workflows covering data preprocessing, model training, inference and FastAPI integration. Comfortable adapting to different models, libraries and project requirements depending on the problem being solved.",
                    },
                    {
                      value:
                        "Python is not the primary stack but gets used when projects require AI driven capabilities, data processing workflows or dedicated inference services alongside existing application architectures.",
                    },
                  ],
                },
              },
            ],
          },
        },

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
                id: "python-and-ai-details",
                heading: {
                  variant: "bodyBase",
                  modifiers: ["strong"],
                  text: "Python and AI work in practice",
                },

                body: {
                  variant: "bodyLarge",
                  as: "li",
                  texts: [
                    "Work with classification models on real world datasets, covering data preparation, class balancing, training and evaluation workflows.",

                    "Build preprocessing pipelines that segment and transform raw inputs into model ready representations before inference. The same workflow applies across different data types and classification tasks.",

                    "Use FastAPI to handle inference requests end to end, including validation, preprocessing, prediction workflows and response generation.",

                    "Deploy Python inference services separately from the main application stack with dedicated runtimes and dependencies, allowing AI capabilities to be integrated without impacting the primary application architecture.",
                  ],
                },
              },
            ],
          },
        },
      ],
    },

    // Row 9: Workflow and soft skills
    {
      id: "workflow-and-soft-skills",
      order: 9,
      enabled: true,

      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 9,
      primaryCategory: "workflow-and-soft-skills",

      blocks: [
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
                    src: "icons/content/skills-subtitle-workflow-and-soft-skills.svg",
                    public_id: "",
                    type: "stroke",
                  },
                },
                scopeSet: {
                  variant: "bodyBase",
                  texts: [
                    "Agile / Sprints",
                    "AI Productivity Tools",
                    "Cross-functional Collaboration",
                    "Documentation",
                    "Team Communication",
                    "User-centered Thinking",
                  ],
                },
                homeNarratives: [
                  {
                    heading: {
                      variant: "heading3",
                      text: "Working in a Team",
                      icon: {
                        src: "icons/content/skills-subtitle-team-communication-and-work-ethic.svg",
                        public_id: "",
                        type: "stroke",
                      },
                    },
                    body: {
                      variant: "bodyLarge",
                      text: "Can contribute across frontend, backend and design workflows within the same project. Comfortable collaborating with people in different roles and adapting to established team processes, communication styles and project requirements.",
                    },
                  },
                  {
                    heading: {
                      variant: "heading3",
                      text: "Team Workflows",
                      icon: {
                        src: "icons/content/skills-subtitle-process-oriented.svg",
                        public_id: "",
                        type: "stroke",
                      },
                    },
                    body: {
                      variant: "bodyLarge",
                      text: "Can work effectively in shared codebases with multiple contributors. Structured commits, documentation and reproducible development environments are consistent practices. Comfortable adapting to new tools, workflows and team conventions when joining existing projects.",
                    },
                  },
                  {
                    heading: {
                      variant: "heading3",
                      text: "AI & Productivity Tools",
                      icon: {
                        src: "icons/content/skills-subtitle-flexible-and-dedicated.svg",
                        public_id: "",
                        type: "stroke",
                      },
                    },
                    body: {
                      variant: "bodyLarge",
                      text: "Can use AI tools to accelerate repetitive development tasks while maintaining responsibility for implementation decisions, code quality and technical correctness. Familiar with GitHub Copilot, Cursor, Claude Code, Windsurf and similar tools, and comfortable working in teams that use AI assisted workflows or primarily manual development approaches.",
                    },
                  },
                ],
                narrativeList: {
                  variant: "bodyBase",
                  modifiers: ["strong"],
                  as: "li",
                  texts: [
                    {
                      label: "Team Practices:",
                      value:
                        "Can work effectively in shared codebases with multiple contributors. Structured commit history, clear documentation and maintainable development workflows are consistent practices across projects.",
                    },
                    {
                      value:
                        "Adapt quickly to existing team workflows, development practices and project conventions without requiring major process changes.",
                    },
                    {
                      value:
                        "Contribute across technical discussions, implementation planning, documentation and day to day collaboration throughout the development lifecycle.",
                    },
                    {
                      value:
                        "Maintain clear communication around requirements, progress, blockers and implementation decisions when working with different stakeholders and team members.",
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },

    // Row 10: Links and references
    {
      id: "proof-highlights",
      order: 10,
      enabled: true,

      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 10,
      primaryCategory: "proof-highlights",

      blocks: [
        {
          id: "skill-overview",
          type: "contextBlock",
          enabled: {
            home: {
              skillSet: false,
              strengths: false,
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
                  text: "Links & Profiles",
                  icon: {
                    src: "icons/content/skills-subtitle-links-profiles.svg",
                    public_id: "",
                    type: "stroke",
                  },
                },
                scopeSet: {
                  variant: "bodyBase",
                  texts: [
                    "Portfolio projects, GitHub repositories, technical profiles and case studies maintained to document personal work, learning and professional experiences throughout my software engineering journey.",
                  ],
                },
                // narrativeList: {
                //   variant: "bodyBase",
                //   modifiers: ["strong"],
                //   as: "li",
                //   texts: [
                //     {
                //       label: "Auth:",
                //       value:
                //         "JWT access and refresh token flow with httpOnly cookies, token rotation and database level session revocation. Each session can be invalidated individually without touching the JWT signing secret.",
                //     },
                //     {
                //       label: "API design:",
                //       value:
                //         "REST APIs with clean route structure, centralized error handling, request validation and standardized response formats. Controller, service and model separation throughout.",
                //     },
                //     {
                //       label: "AI and Python:",
                //       value:
                //         "Classification models trained and deployed for multi-class medical prediction covering data preprocessing, class imbalance handling, model training and FastAPI integration. Research published on medical image classification using deep learning.",
                //     },
                //     {
                //       label: "DSA:",
                //       value:
                //         "Years of DSA practice with focus on time and space complexity and real-world problem decomposition. LeetCode profile is linked below.",
                //     },
                //     {
                //       label: "Documentation:",
                //       value:
                //         "Every project includes a README with setup instructions, architecture notes and environment configuration. Git history is structured and readable.",
                //     },
                //   ],
                // },
              },
            ],
          },
        },

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
                  text: "Links & Profiles",
                },

                description: {
                  variant: "bodyLarge",
                  text: "Portfolio projects, GitHub repositories, technical profiles and case studies maintained to document personal work, learning and professional experiences throughout my software engineering journey.",
                },

                ctaButtons: [
                  {
                    variant: "primary",
                    label: "View Projects",
                    icon: "ChevronRight",
                    action: "navigate",
                    target: "/projects",
                  },
                  {
                    variant: "secondary",
                    label: "Case Studies",
                    icon: "ChevronRight",
                    action: "navigate",
                    target: "/case-studies",
                  },
                  {
                    variant: "secondary",
                    label: "GitHub Repos",
                    icon: "ChevronUpRight",
                    action: "external",
                    target: "https://github.com/pritamsardar-dev",
                  },
                  {
                    variant: "secondary",
                    label: "LeetCode Profile",
                    icon: "ChevronUpRight",
                    action: "external",
                    target: "https://leetcode.com/u/pritamsardardev",
                  },
                  {
                    variant: "secondary",
                    label: "View Resume",
                    icon: "ChevronUpRight",
                    action: "download",
                    target: "/resume/pritam-resume.pdf",
                  },
                  {
                    variant: "secondary",
                    label: "Contact Me",
                    icon: "ChevronRight",
                    action: "navigate",
                    target: "/contact",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
};
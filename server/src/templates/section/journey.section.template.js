export const journeySectionTemplate = {
  id: "journey",
  type: "journey",
  assetFolder: "journey",

  alignment: {
    heading: "center",
    cta: "center",
  },

  heading: {
    variant: {
      home: "heading1",
      about: "heading1Subpage",
    },
    text: "About Me",
    icon: {
      src: "icons/content/about-heading.svg",
      public_id: "",
      type: "stroke",
    },
  },

  buttonProps: {
    variant: "secondary",
    label: "More About Me",
    icon: "ChevronRight",
    action: "navigate",
    target: "/about",
  },

  rows: [
    {
      id: "journey-main-row",
      order: 1,
      enabled: true,

      blocks: [
        {
          id: "developer-journey",
          type: "developerJourney",

          view: {
            home: "developerJourneySummary",
            about: "developerJourneyDetailed",
          },

          enabled: true,
          order: 1,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            heading: {
              variant: "heading2",
              text: "My Developer Journey",

              icon: {
                src: "icons/content/about-title-textblock.svg",
                public_id: "",
                type: "stroke",
              },
            },

            bodyItems: [
  {
    id: "developerEarlyExposureToTechnology",

    heading: {
      variant: "heading3",
      text: "Getting Started",

      icon: {
        src: "icons/content/about-subtitle-getting-started.svg",
        public_id: "",
        type: "stroke",
      },
    },

    body: {
      variant: "bodyLarge",

      text: {
        home:
          "My interest in technology started long before I wrote my first line of code. During school I spent time exploring WordPress, learning how hosting worked, and running a small technology focused blog. Whenever I wanted to customize something beyond what a plugin allowed I could not do it and that is what first made me think seriously about learning to code. That still holds today: when I do not know how something works, I enjoy figuring it out.",

        about:
          "My interest in technology started long before I learned programming. During school I spent time exploring WordPress, learning how hosting worked, experimenting with website customization, and running a small technology focused blog where I managed content, layouts, and day to day updates myself. Whenever I wanted to customize something beyond what a plugin allowed I could not do it. That gap is what first pushed me toward learning to code. Most of it was self taught through trial and error. Looking back, that period taught me something that still holds today: when I do not know how something works, I enjoy figuring it out.",
      },
    },
  },

  {
    id: "developerProgrammingFoundations",

    heading: {
      variant: "heading3",
      text: "Learning to Build Software",

      icon: {
        src: "icons/content/about-subtitle-learning-to-build-software.svg",
        public_id: "",
        type: "stroke",
      },
    },

    body: {
      variant: "bodyLarge",

      text: {
        home:
          "During my diploma years, writing actual code for the first time changed how I looked at building things. Something about putting logic together, running it and watching it work kept pulling me further in. The more I built the more I wanted to understand. That is when technology stopped being something I followed and became something I built.",

        about:
          "During my diploma years, writing actual code for the first time changed how I looked at building things. Reading about technology and exploring tools from the outside is one thing. Writing actual programs is different. Something about putting logic together, running it and watching it work the way I intended kept pulling me further in. The more I built the more I wanted to understand. That is when technology stopped being something I followed and became something I built.",
      },
    },
  },

  {
    id: "developerTechnicalFoundations",

    heading: {
      variant: "heading3",
      text: "Strengthening the Fundamentals",

      icon: {
        src: "icons/content/about-subtitle-strengthening-fundamentals.svg",
        public_id: "",
        type: "stroke",
      },
    },

    body: {
      variant: "bodyLarge",

      text: {
        home:
          "During my B.Tech, most of my time went into data structures, algorithms and problem solving in Java. That focus continues to influence how I approach technical problems today. Alongside that I explored Python and machine learning through academic projects, which gave me a look at a completely different side of software development.",

        about:
          "During my B.Tech my focus was on data structures, algorithms and problem solving in Java. Working through problems regularly taught me how to break things down, think about efficiency and write code that actually handles edge cases. It was not just about passing subjects, it shaped how I approach any technical problem today. Alongside that I explored Python and machine learning through academic projects, which gave me a look at a completely different side of software development where the focus shifts to data, patterns and model building rather than just writing logic.",
      },
    },
  },

  {
    id: "developerBroadeningSkills",

    heading: {
      variant: "heading3",
      text: "Exploring Different Areas of Software Development",

      icon: {
        src: "icons/content/about-subtitle-exploring-software-development.svg",
        public_id: "",
        type: "stroke",
      },
    },

    body: {
      variant: "bodyLarge",

      text: {
        home:
          "Towards the later years of my B.Tech and into my M.Tech, software development started taking up more of my focus. I got deeper into the MERN stack. Separately I got into Figma and UI and UX design and found that working across both the technical and visual side of building products felt natural. Machine learning was running alongside through academic work, but it was the product building side that kept pulling me back. That pull is what made the direction clear.",

        about:
          "Towards the later years of my B.Tech I started getting into software development more seriously. During my M.Tech that continued and I got deeper into the MERN stack. Separately I also spent time learning Figma and getting into UI and UX design. Understanding how to think about interfaces and user experience changed how I approached building products. It was no longer just about making something work but also about making it feel right to use. Machine learning was running alongside through academic work and I found it genuinely interesting, but every time I finished something on the full stack side it felt more like the kind of work I wanted to keep doing. That pull is what made the direction clear.",
      },
    },
  },

  {
    id: "developerBuildingRealProducts",

    heading: {
      variant: "heading3",
      text: "Building Complete Products",

      icon: {
        src: "icons/content/about-subtitle-building-complete-products.svg",
        public_id: "",
        type: "stroke",
      },
    },

    body: {
      variant: "bodyLarge",

      text: {
        home:
          "After completing my M.Tech I put my full focus into software development. Building complete software applications is what I do now. For most projects the core stack is React, Node.js, Express and MongoDB, and I bring in other technologies depending on what the application needs. On the backend that includes JWT based authentication, role based access control, REST API design, file and media management and third party integrations. On the frontend I work with Redux Toolkit, Tailwind CSS and component architecture that stays maintainable as a codebase grows. When a project needs a design phase I work through the UI and UX in Figma before writing code. Development follows a clean Git workflow and every application ships with a live deployment, full documentation and a case study. The goal with everything I build is that it works correctly, is structured to scale and is easy for any other developer to continue.",

        about:
          "After completing my M.Tech I put my full focus into software development. Software development and engineering is the career I am serious about and everything I do now reflects that. For most projects the core stack is React, Node.js, Express and MongoDB with Mongoose. Depending on what the application needs I bring in other technologies. On the backend that includes JWT based authentication, role based access control, REST API design, file and media management, third party service integrations, payment flows and more. For AI driven applications I have worked with Python, FastAPI and TensorFlow. On the frontend I work with Redux Toolkit, Tailwind CSS and component architecture that stays maintainable as a codebase grows. When I am responsible for the design I work through the UI and UX as well. From there development follows a clean Git workflow with structured commits, proper branching and a history that any developer can read and understand. Deployment goes across multiple platforms depending on what fits the project best, most commonly Vercel and Render, with proper environment configuration and production ready setup throughout. Every application I ship has a README that explains the architecture, setup and decisions made, alongside a full case study. I apply DSA and problem solving where the application needs it, optimising how data is structured, how queries are written and how the system behaves under different conditions. The way I approach building is end to end. From the first planning decision to a live deployed product that another engineer can open, read and continue without needing to ask questions.",
      },
    },
  },
],
            

          },
        },

        {
          id: "academic-journey",
          type: "academicJourney",

          view: {
            home: "academicJourneySummary",
            about: "academicJourneyDetailed",
          },

          enabled: true,
          order: 2,

          data: {
            alignment: {
              heading: "left",
              body: "left",
              cta: "left",
            },

            heading: {
              variant: "heading2",
              text: "My Academic Journey",

              icon: {
                src: "icons/content/about-title-cardblock.svg",
                public_id: "",
                type: "stroke",
              },
            },

            bodyItems: [
              {
                id: "academicMTechInComputerScienceAndEngineering",

                heading: {
                  variant: "heading3",
                  text: "M.Tech in Computer Science & Engineering",

                  icon: {
                    src: "icons/content/about-subtitle-education-degrees.svg",
                    public_id: "",
                    type: "stroke",
                  },
                },

                body: {
                  timeline: { variant: "bodyBase", text: "2023 – 2025" },
                  institute: {
                    variant: "bodyBase",
                    text: "Institute of Science & Technology",
                  },
                  board: {
                    variant: "bodyBase",
                    text: "Affiliated to MAKAUT, WB",
                  },

                  highlights: {
                    as: {
                      home: "li",
                      about: null,
                    },

                    variant: "bodyBase",

                    text: {
                      home: [
                        "Studied advanced algorithms, DBMS, comp. arch. and other CS subjects",
                        "Learned AI/ML and deep learning through research and projects",
                        "Developed a CNN based respiratory disease detection system in Python",
                        "Published a research paper on deep learning classification",
                        "Learned the MERN stack and built full stack applications",
                      ],

                      about:
                        "The master's years covered advanced CS subjects including advanced algorithms, computer architecture, compiler design, advanced DBMS, machine learning and deep learning alongside other postgraduate coursework. The thesis project was a CNN based system to classify respiratory diseases from lung audio recordings in Python. That research was published as a paper on medical image classification using deep learning. Alongside the thesis the focus shifted heavily into the MERN stack, covering authentication, REST API design, database modeling and deployment across multiple projects built during this period.",
                    },
                  },

                  score: { variant: "bodyBase", text: "CGPA: 8.1" },
                },
              },

              {
                id: "academicBTechInComputerScienceEngineering",

                heading: {
                  variant: "heading3",
                  text: "B.Tech in Computer Science & Engineering",

                  icon: {
                    src: "icons/content/about-subtitle-education-degrees.svg",
                    public_id: "",
                    type: "stroke",
                  },
                },

                body: {
                  timeline: { variant: "bodyBase", text: "2020 – 2023" },
                  institute: {
                    variant: "bodyBase",
                    text: "Camellia Institute of Technology",
                  },
                  board: {
                    variant: "bodyBase",
                    text: "Affiliated to MAKAUT, WB",
                  },

                  highlights: {
                    as: {
                      home: "li",
                      about: null,
                    },

                    variant: "bodyBase",

                    text: {
                      home: [
                         "Studied DSA, OS, DBMS, CN, TOC and other core CS subjects",
                          "Covered software engineering and related undergraduate coursework",
                          "Focused on data structures, algorithms and problem solving in Java",
                          "Developed a machine learning based text classification system",
                          "Learned HTML, CSS and JavaScript by building web applications",
                      ],

                      about:
                        `
                        The undergraduate years covered core CS engineering subjects including data structures, algorithms, operating systems, computer networks, theory of computation, compiler design, software engineering and more. Java was the primary language with a strong focus on data structures, algorithms and problem solving. Python came in through the main academic project, a text classification system built using machine learning algorithms, which was the first real look at how data is prepared, models are trained and results are evaluated. Toward the final years, I learned HTML, CSS and JavaScript by building web applications.`,
                    },
                  },

                  score: { variant: "bodyBase", text: "CGPA: 9.0" },
                },
              },

              {
                id: "academicDiplomaInComputerScienceAndTechnology",

                heading: {
                  variant: "heading3",
                  text: "Diploma in Computer Science & Technology",

                  icon: {
                    src: "icons/content/about-subtitle-education-degrees.svg",
                    public_id: "",
                    type: "stroke",
                  },
                },

                body: {
                  timeline: { variant: "bodyBase", text: "2017 – 2020" },
                  institute: {
                    variant: "bodyBase",
                    text: "Kalna Govt. Polytechnic",
                  },
                  board: {
                    variant: "bodyBase",
                    text: "Affiliated to WBSCTVESD, WB",
                  },

                  highlights: {
                    as: {
                      home: "li",
                      about: null,
                    },

                    variant: "bodyBase",

                    text: {
                      home: [
                        "Learned programming through C, C++ and Java",
                        "Studied DBMS, networking, operating systems and other CS subjects",
                        "Built library and hospital management system projects",
                        "Worked on several academic utility applications",
                        "Provided an early foundation in programming and computer science",
                      ],

                      about:
                        "The diploma covered programming through C, C++ and Java. Alongside that, subjects such as DBMS, networking, operating systems and others provided exposure to different areas of computer science. The main projects included a library management system and a hospital management system, along with several other utility applications. This period provided my first formal foundation in programming and computer science.",
                    },
                  },

                  score: { variant: "bodyBase", text: "CGPA: 7.8" },
                },
              },

              {
                id: "academicSchooling",

                heading: {
                  variant: "heading3",
                  text: "Schooling",

                  icon: {
                    src: "icons/content/about-subtitle-education-degrees.svg",
                    public_id: "",
                    type: "stroke",
                  },
                },

                body: {
                  timeline: { variant: "bodyBase", text: "2004 – 2017" },
                  institute: { variant: "bodyBase", text: null },
                  board: {
                    variant: "bodyBase",
                    text: "Board: WBBSE, WBCHSE",
                  },

                  highlights: {
                    as: {
                      home: "li",
                      about: null,
                    },

                    variant: "bodyBase",

                    text: {
                      home: [
                        "Completed schooling with a science background",
                        "Learned how to create websites using WordPress and basic HTML",
                        "Developed an early interest in web technologies and software",
                      ],

                      about:
                        "Schooling was completed with a science background. Alongside regular coursework, I learned how to create websites using WordPress and basic HTML. I also explored website layouts, page structure and customization while managing a small technology focused blog. This period provided my first exposure to web technologies and software development concepts.",
                    },
                  },

                  score: {
                    variant: "bodyBase",
                    text: "10th: 65.85% | 12th: 65%",
                  },
                },
              },
            ],

            buttonProps: {
              variant: "secondary",

              label: {
                collapsed: "Show all",
                expanded: "Show less",
              },

              icon: {
                collapsed: "ChevronDown",
                expanded: "ChevronUp",
              },
            },
          },
        },
      ],
    },
  ],
};
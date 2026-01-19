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

export const homeSkillsSection = {
  id: "skills-home",
  type: "skills",
  enabled: true,
  order: 4,

  alignment: {
    heading: "center",
    cta: "center",
  },

  heading: {
    variant: "heading1",
    text: "My Skills",
    icon: {
        svg: skillsHeading.svg,
        type: skillsHeading.type,
    }
  },

  buttonProps: {
    variant: "secondary",
    label: "More About My Skills →",
    onClick: () => {},
  },

  blocks: [
    /* ───────────── CARD BLOCK (ORDER 1) ───────────── */
    {
      id: "skills-cardblock",
      type: "skillsCardsBlock",
      enabled: true,
      order: 1,

      data: {
        alignment: {
          heading: "left",
          body: "left",
        },

        heading: {
          variant: "heading2",
          text: "My Technical Skillset",
          icon: {
            svg: skillsTitleCardblock.svg,
            type: skillsTitleCardblock.type,
          },
        },

        bodyItems: [
          {
            heading: {
              variant: "heading3",
              text: "Core MERN Stack",
              icon: {
                svg: skillsSubtitleCoreMERNStack.svg,
                type: skillsSubtitleCoreMERNStack.type,
              },
            },
            body: {
              variant: "bodyBase",
              texts: ["Express.js", "MongoDB", "Node.js", "React.js"],
            },
          },
          {
            heading: {
              variant: "heading3",
              text: "Frontend Libraries & Tools",
              icon: {
                svg: skillsSubtitleFrontendLibrariesAndTools.svg,
                type: skillsSubtitleFrontendLibrariesAndTools.type,
              },
            },
            body: {
              variant: "bodyBase",
              texts: [
                "Axios",
                "React Hook Form",
                "React Router",
                "Redux Toolkit",
                "Tailwind CSS",
              ],
            },
          },
          {
            heading: {
              variant: "heading3",
              text: "Backend Libraries & Tools",
              icon: {
                svg: skillsSubtitleBackendLibrariesAndTools.svg,
                type: skillsSubtitleBackendLibrariesAndTools.type,
              },
            },
            body: {
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
          },
          {
            heading: {
              variant: "heading3",
              text: "Dev & Testing Tools",
              icon: {
                svg: skillsSubtitleDevAndTestingTools.svg,
                type: skillsSubtitleDevAndTestingTools.type,
              },
            },
            body: {
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
          },
          {
            heading: {
              variant: "heading3",
              text: "DSA & Programming",
              icon: {
                svg: skillsSubtitleDSAAndProgramming.svg,
                type: skillsSubtitleDSAAndProgramming.type,
              },
            },
            body: {
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
          },
          {
            heading: {
              variant: "heading3",
              text: "UI/UX Design",
              icon: {
                svg: skillsSubtitleUIUXDesign.svg,
                type: skillsSubtitleUIUXDesign.type,
              },
            },
            body: {
              variant: "bodyBase",
              texts: [
                "Atomic Design",
                "Color/Layout Systems",
                "Design Systems",
                "Figma",
                "Variants & Components",
              ],
            },
          },
          {
            heading: {
              variant: "heading3",
              text: "Workflow & Soft Skills",
              icon: {
                svg: skillsSubtitleWorkflowAndSoftSkills.svg,
                type: skillsSubtitleWorkflowAndSoftSkills.type,
              },
            },
            body: {
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
          },
        ],
      },
    },

    /* ───────────── TEXT BLOCK (ORDER 2) ───────────── */
    {
      id: "skills-textblock",
      type: "skillsTextBlock",
      enabled: true,
      order: 2,

      data: {
        alignment: {
          heading: "left",
          body: "left",
        },

        heading: {
          variant: "heading2",
          text: "My Skills & Strengths",
          icon: {
            svg: skillsTitleTextblock.svg,
            type: skillsTitleTextblock.type,
          },
        },

        bodyItems: [
          {
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
          {
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
          {
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
          {
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
          {
            heading: {
              variant: "heading3",
              text: "Advanced MongoDB Handling",
              icon: {
                svg: skillsSubtitleAvdancedMongoDBHandling.svg,
                type: skillsSubtitleAvdancedMongoDBHandling.type,
              },
            },
            body: {
              variant: "bodyLarge",
              text:
                "Schema design, validations, references, indexing, and even aggregation pipelines — built production-ready MongoDB layers with Mongoose.",
            },
          },
          {
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
          {
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
      },
    },
  ],
};

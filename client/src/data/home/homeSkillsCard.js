import { skillsSubtitleBackendLibrariesAndTools, skillsSubtitleCoreMERNStack, skillsSubtitleDevAndTestingTools, skillsSubtitleDSAAndProgramming, skillsSubtitleFrontendLibrariesAndTools, skillsSubtitleUIUXDesign, skillsSubtitleWorkflowAndSoftSkills, skillsTitleCardblock } from "../../assets/icons/content";

export const homeSkillsCard = {
  heading: {
    variant: "heading2",
    text: "My Technical Skillset",
    icon: {
      svg: skillsTitleCardblock.svg, 
      type: skillsTitleCardblock.type 
    }
  },

  bodyItems: [
    {
      heading: {
        variant: "heading3",
        text: "Core MERN Stack",
        icon: {
          svg: skillsSubtitleCoreMERNStack.svg, 
          type: skillsSubtitleCoreMERNStack.type 
        }
      },
      body: {
        variant: "bodyBase",
        texts: [
            "Express.js", "MongoDB", "Node.js", "React.js" 
        ]
      }
    },
    {
      heading: {
        variant: "heading3",
        text: "Frontend Libraries & Tools",
        icon: {
          svg: skillsSubtitleFrontendLibrariesAndTools.svg, 
          type: skillsSubtitleFrontendLibrariesAndTools.type 
        }
      },
      body: {
        variant: "bodyBase",
        texts: [
            "Axios", "React Hook Form", "React Router", "Redux Toolkit", "Tailwind CSS"
        ]
      }
    },
    {
      heading: {
        variant: "heading3",
        text: "Backend Libraries & Tools",
        icon: {
          svg: skillsSubtitleBackendLibrariesAndTools.svg, 
          type: skillsSubtitleBackendLibrariesAndTools.type 
        }
      },
      body: {
        variant: "bodyBase",
        texts: [
           "Bcrypt.js", "Cloudinary SDK", "CORS", "dotenv", "Helmet", "JWT", "Mongoose", "Multer"
        ]
      }
    },
    {
      heading: {
        variant: "heading3",
        text: "Dev & Testing Tools",
        icon: {
          svg: skillsSubtitleDevAndTestingTools.svg, 
          type: skillsSubtitleDevAndTestingTools.type 
        }
      },
      body: {
        variant: "bodyBase",
        texts: [
           "ESLint", "Git", "GitHub", "MongoDB Atlas", "Nodemon", "Postman", "Prettier", "Render", "Vercel"
        ]
      }
    },
    {
      heading: {
        variant: "heading3",
        text: "DSA & Programming",
        icon: {
          svg: skillsSubtitleDSAAndProgramming.svg, 
          type: skillsSubtitleDSAAndProgramming.type 
        }
      },
      body: {
        variant: "bodyBase",
        texts: [
           "Algorithms", "Big-O", "Data Structures", "Java", "JavaScript (ES6+)", "OOP"
        ]
      }
    },
    {
      heading: {
        variant: "heading3",
        text: "UI/UX Design",
        icon: {
          svg: skillsSubtitleUIUXDesign.svg, 
          type: skillsSubtitleUIUXDesign.type 
        }
      },
      body: {
        variant: "bodyBase",
        texts: [
           "Atomic Design", "Color/Layout Systems", "Design Systems", "Figma", "Variants & Components"
        ]
      }
    },
    {
      heading: {
        variant: "heading3",
        text: "Workflow & Soft Skills",
        icon: {
          svg: skillsSubtitleWorkflowAndSoftSkills.svg, 
          type: skillsSubtitleWorkflowAndSoftSkills.type 
        }
      },
      body: {
        variant: "bodyBase",
        texts: [
           "Agile / Sprints", "Cross-functional Collaboration", "Discipline", "Documentation", "Fast Learner", "PRD Writing", "Team Communication", "User-centered Thinking"
        ]
      }
    },
  ]
};

import {
  aboutSubtitleBuildingBeyondBoundaries,
  aboutSubtitleEnteringTheFullstackWorld,
  aboutSubtitleFirstLinesOfCode,
  aboutSubtitleReadyToBuildAndGrow,
  aboutSubtitleSparkOfCuriosity,
  aboutTitleTextblock,
  aboutSubtitleEducationDegrees,
  aboutTitleCardblock,
  aboutHeading,
} from '../../../assets/icons/content';

export const journeySection = {
  id: "journey",
  type: "journey", 
  enabled: true,
  orders: 2,
  alignment: {
    heading: "center",
      cta: "center",
  },
  heading: {
    variant: {
      home: "heading1",
      about: "heading1Subpage",
    },
    text:  "About Me",
    icon: {
        svg: aboutHeading.svg,
        type: aboutHeading.type,
    },
  },
  buttonProps: {
    variant: "secondary",
    label: "More About Me →",
    onClick: () => {},
  },
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
            svg: aboutTitleTextblock.svg,
            type: aboutTitleTextblock.type,
          },
        },
        bodyItems: [
          {
            id: "developerSparkOfCuriosity",
            heading: {
              variant: "heading3",
              text: "Spark of Curiosity",
              icon: {
                svg: aboutSubtitleSparkOfCuriosity.svg,
                type: aboutSubtitleSparkOfCuriosity.type,
              },
            },
            body: {
              variant: "bodyLarge",
              text: {
                home:
                  "In school, I was fascinated by how websites worked. I explored WordPress, started designing logos, hosted small websites, and built basic layouts — all driven by curiosity and a desire to create something on my own.",
                about:
                  "From a young age, I was fascinated by how websites came to life. In school, this curiosity drove me to explore WordPress, design logos, and even host small websites for friends and local clubs. Those early hands-on experiments were my first steps into the world of web creation, fueling a deep desire to understand and build digital experiences from the ground up.",
              },
            }
          },
          {
            id: "developerFirstLinesOfCodeFoundations",
            heading: {
              variant: "heading3",
              text: "First Lines of Code Foundations",
              icon: {
                svg: aboutSubtitleFirstLinesOfCode.svg,
                type: aboutSubtitleFirstLinesOfCode.type,
              },
            },
            body: {
              variant: "bodyLarge",
              text: {
                home:
                  "During my diploma, I began learning to code seriously — starting with C, moving to C++, and eventually Java. I built several micro-level school service apps that helped reinforce my fundamentals and sparked a deeper interest in development.",
                about:
                  "During my diploma studies, I transitioned from curiosity to serious learning. I started with C, progressed to C++, and then embraced Java — building several micro-applications aimed at streamlining school services. These projects weren’t just exercises; they solidified my programming fundamentals and ignited a passion for problem-solving through code.",
              },
            },
          },
          {
            id: "developerEnteringTheFullStackWorld",
            heading: {
              variant: "heading3",
              text: "Entering the Full Stack World",
              icon: {
                svg: aboutSubtitleEnteringTheFullstackWorld.svg,
                type: aboutSubtitleEnteringTheFullstackWorld.type,
              },
            },
            body: {
              variant: "bodyLarge",
              text: {
                home:
                  "I self-learned the MERN stack through docs, tutorials, and a lot of practice. I built complete web apps from scratch — working on frontend polish, backend logic, and deployment — all while understanding authentication, APIs, and performance.",
                about:
                  "Eager to build complete, scalable applications, I took the initiative to master the MERN stack through comprehensive self-study—digging into documentation, following tutorials, and relentless coding practice. I developed full-fledged web applications, honing skills in frontend polish, backend architecture, database management, and deployment. Along the way, I built a strong grasp of authentication mechanisms, RESTful APIs, and optimizing app performance.",
              },
            },
          },
          {
            id: "developerBuildingBeyondBoundaries",
            heading: {
              variant: "heading3",
              text: "Building Beyond Boundaries",
              icon: {
                svg: aboutSubtitleBuildingBeyondBoundaries.svg,
                type: aboutSubtitleBuildingBeyondBoundaries.type,
              },
            },
            body: {
              variant: "bodyLarge",
              text: {
                home:
                  "My freelance work with local clients introduced me to the realities of software delivery: managing expectations, meeting deadlines, and adapting to evolving project scopes. Beyond coding, I invested time in understanding UI/UX principles to design intuitive and engaging user interfaces, ensuring my apps were not only functional but also a pleasure to use.",
                about:
                  "My freelance work with local clients introduced me to the realities of software delivery: managing expectations, meeting deadlines, and adapting to evolving project scopes. Beyond coding, I invested time in understanding UI/UX principles to design intuitive and engaging user interfaces, ensuring my apps were not only functional but also a pleasure to use.",
              },
            },
          },
          {
            id: "developerReadyToBuildAndGrow",
            heading: {
              variant: "heading3",
              text: "Ready to Build & Grow",
              icon: {
                svg: aboutSubtitleReadyToBuildAndGrow.svg,
                type: aboutSubtitleReadyToBuildAndGrow.type,
              },
            },
            body: {
              variant: "bodyLarge",
              text: {
                home:
                  "Today, I'm confident building end-to-end web applications. With a strong DSA foundation and hands-on project experience, I'm excited to join a team where I can contribute meaningfully, keep learning, and push boundaries further.",
                about:
                  "Today, armed with a solid foundation in data structures and algorithms and a portfolio of real-world projects, I’m confident in my ability to build robust, efficient web applications. I’m excited to join a collaborative team where I can contribute my skills, continue learning, and push the boundaries of what’s possible in web development.",
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
            svg: aboutTitleCardblock.svg,
            type: aboutTitleCardblock.type,
          },
        },
        bodyItems: [
          {
            id: "academicMTechInComputerScienceAndEngineering",
            heading: {
              variant: "heading3",
              text: "M.Tech in Computer Science & Engineering",
              icon: {
                svg: aboutSubtitleEducationDegrees.svg,
                type: aboutSubtitleEducationDegrees.type,
              },
            },
            body: {
              timeline: { variant: "bodyBase", text: "2023 – 2025" },
              institute: { variant: "bodyBase", text: "Institute of Science & Technology" },
              board: { variant: "bodyBase", text: "Affiliated to MAKAUT, WB" },
              highlights: {
                as: {
                  home: "li",
                  about: null,
                },
                variant: "bodyBase",
                text: {
                  home: [
                    "Built a COPD & Asthma detection system using CNN (Python).",
                    "Published research on medical image classification using deep learning.",
                    "Developed scalable full-stack applications using the MERN stack.",
                  ],
                  about:
                    "During my master’s, I focused on advanced AI and deep learning applications. I developed a COPD & Asthma detection system using convolutional neural networks (CNN) in Python, which sharpened my expertise in medical image processing. My research on medical image classification was published in a peer-reviewed journal. Alongside, I built scalable full-stack applications leveraging the MERN stack, blending backend logic with polished frontend interfaces.",
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
                svg: aboutSubtitleEducationDegrees.svg,
                type: aboutSubtitleEducationDegrees.type,
              },
            },
            body: {
              timeline: { variant: "bodyBase", text: "2020 – 2023" },
              institute: { variant: "bodyBase", text: "Camellia Institute of Technology" },
              board: { variant: "bodyBase", text: "Affiliated to MAKAUT, WB" },
              highlights: {
                as: {
                  home: "li",
                  about: null,
                },
                variant: "bodyBase",
                text: {
                  home: [
                    "Practiced DSA extensively using Java.",
                    "Built a machine learning–based email spam classifier.",
                  ],
                  about:
                    "My undergraduate studies strengthened my core programming and problem-solving skills. I practiced data structures and algorithms extensively using Java, and applied machine learning techniques to build an email spam classifier. This phase laid a solid foundation for my transition into full-stack development.",
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
                svg: aboutSubtitleEducationDegrees.svg,
                type: aboutSubtitleEducationDegrees.type,
              },
            },
            body: {
              timeline: { variant: "bodyBase", text: "2017 – 2020" },
              institute: { variant: "bodyBase", text: "Kalna Govt. Polytechnic" },
              board: { variant: "bodyBase", text: "Affiliated to WBSCTVESD, WB" },
              highlights: {
                as: {
                  home: "li",
                  about: null,
                },
                variant: "bodyBase",
                text: {
                  home: [
                    "Learned C, C++, Java fundamentals.",
                    "Built microservice-based school utility apps.",
                  ],
                  about:
                    "Here, I mastered fundamental programming languages including C, C++, and Java. I also developed microservice-based utility apps for my school, gaining practical experience in software development and project management.",
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
                svg: aboutSubtitleEducationDegrees.svg,
                type: aboutSubtitleEducationDegrees.type,
              },
            },
            body: {
              timeline: { variant: "bodyBase", text: "2004 - 2017" },
              institute: { variant: "bodyBase", text: null },
              board: { variant: "bodyBase", text: "Board: WBBSE, WBCHSE" },
              highlights: {
                as: {
                  home: "li",
                  about: null,
                },
                variant: "bodyBase",
                text: {
                  home: [
                    "Learned C, C++, Java fundamentals.",
                    "Built microservice-based school utility apps.",
                  ],
                  about:
                    "During school, I explored web technologies early on — from WordPress site building to hosting and logo design. I even developed basic websites for local clients, which sparked my passion for web development.",
                },
              },
              score: { variant: "bodyBase", text: "10th: 65.85% | 12th: 65%" },
            },
          },
        ],
        buttonProps: {
            variant: "secondary",
            label: {
                collapsed: "Show all ↓",
                expanded: "Show less ↑"
            },
            onClick: () => {},
        },
      },
    },
  ],
};




  
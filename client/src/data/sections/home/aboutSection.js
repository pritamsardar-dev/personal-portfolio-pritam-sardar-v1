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

export const homeAboutSection = {
  id: "about-home",
  type: "about", 
  enabled: true,
  order: 2,
  alignment: {
    heading: "center",
    cta: "center",
  },
  heading: {
    variant: "heading1",
    text: "About Me",
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
      id: "about-textblock",
      type: "aboutTextBlock",
      enabled: true,
      order: 1,
      data: {
        /* ───────────────────────── TEXT BLOCK ───────────────────────── */
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
            id: "text-1",
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
              text:
                "In school, I was fascinated by how websites worked. I explored WordPress, started designing logos, hosted small websites, and built basic layouts — all driven by curiosity and a desire to create something on my own.",
            },
          },
          {
            id: "text-2",
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
              text:
                "During my diploma, I began learning to code seriously — starting with C, moving to C++, and eventually Java. I built several micro-level school service apps that helped reinforce my fundamentals and sparked a deeper interest in development.",
            },
          },
          {
            id: "text-3",
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
              text:
                "I self-learned the MERN stack through docs, tutorials, and a lot of practice. I built complete web apps from scratch — working on frontend polish, backend logic, and deployment — all while understanding authentication, APIs, and performance.",
            },
          },
          {
            id: "text-4",
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
              text:
                "Alongside projects, I worked with local clients to deliver real-world apps. These freelance experiences taught me communication, timelines, and adaptability. I also explored UI/UX principles to make interfaces more usable and thoughtful.",
            },
          },
          {
            id: "text-5",
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
              text:
                "Today, I'm confident building end-to-end web applications. With a strong DSA foundation and hands-on project experience, I'm excited to join a team where I can contribute meaningfully, keep learning, and push boundaries further.",
            },
          },
        ],
      },
    },
    /* ───────────────────────── CARD BLOCK ───────────────────────── */
    {
      id: "about-cardblock",
      type: "aboutCardsBlock",
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
            id: "card-1",
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
                variant: "bodyBase",
                as: "li",
                texts: [
                  "Built a COPD & Asthma detection system using CNN (Python).",
                  "Published research on medical image classification using deep learning.",
                  "Developed scalable full-stack applications using the MERN stack.",
                ],
              },
              score: { variant: "bodyBase", text: "CGPA: 8.1" },
            },
          },
          {
            id: "card-2",
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
                variant: "bodyBase",
                as: "li",
                texts: [
                  "Practiced DSA extensively using Java.",
                  "Built a machine learning–based email spam classifier.",
                ],
              },
              score: { variant: "bodyBase", text: "CGPA: 9.0" },
            },
          },
          {
            id: "card-3",
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
                variant: "bodyBase",
                as: "li",
                texts: [
                  "Learned C, C++, Java fundamentals.",
                  "Built microservice-based school utility apps.",
                ],
              },
              score: { variant: "bodyBase", text: "CGPA: 7.8" },
            },
          },
          {
            id: "card-4",
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
                variant: "bodyBase",
                as: "li",
                texts: [
                  "Learned C, C++, Java fundamentals.",
                  "Built microservice-based school utility apps.",
                ],
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

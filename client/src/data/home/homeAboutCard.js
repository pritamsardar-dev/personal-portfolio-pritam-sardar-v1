import { aboutSubtitleEducationDegrees, aboutTitleCardblock } from '../../assets/icons/content';

export const homeAboutCard = {
  heading: {
    variant: "heading2",
    text: "My Academic Journey",
    icon: {
      svg: aboutTitleCardblock.svg, 
      type: aboutTitleCardblock.type 
    }
  },

  bodyItems: [
    {
      heading: {
        variant: "heading3",
        text: "M.Tech in Computer Science & Engineering",
        icon: {
          svg: aboutSubtitleEducationDegrees.svg, 
          type: aboutSubtitleEducationDegrees.type 
        }
      },
      body: {
        timeline: {
          variant: "bodyBase",
          text: "2023 – 2025"
        },
        institute: {
          variant: "bodyBase",
          text: "Institute of Science & Technology"
        },
        board: {
          variant: "bodyBase",
          text: "Affiliated to MAKAUT, WB"
        },
        highlights: {
          variant: "bodyBase",
          as: "li",
          texts: [
             "Built a COPD & Asthma detection system using CNN (Python).",
             "Published research on medical image classification using deep learning.",
             "Developed scalable full-stack applications using the MERN stack."
          ]
        },
        score: {
          variant: "bodyBase",
          text: "CGPA: 8.1"
        },
      },
    },

    {
      heading: {
        variant: "heading3",
        text: "B.Tech in Computer Science & Engineering",
        icon: {
          svg: aboutSubtitleEducationDegrees.svg, 
          type: aboutSubtitleEducationDegrees.type 
        }
      },
      body: {
        timeline: {
          variant: "bodyBase",
          text: "2020 – 2023"
        },
        institute: {
          variant: "bodyBase",
          text:  "Camellia Institute of Technology"
        },
        board: {
          variant: "bodyBase",
          text: "Affiliated to MAKAUT, WB"
        },
        highlights: {
          variant: "bodyBase",
          as: "li",
          texts: [
             "Practiced DSA extensively using Java.",
             "Built a machine learning–based email spam classifier."
          ]
        },
        score: {
          variant: "bodyBase",
          text: "CGPA: 9.0"
        },
      },
    },

    {
      heading: {
        variant: "heading3",
        text: "Diploma in Computer Science & Technology",
        icon: {
          svg: aboutSubtitleEducationDegrees.svg, 
          type: aboutSubtitleEducationDegrees.type 
        }
      },
      body: {
        timeline: {
          variant: "bodyBase",
          text: "2017 – 2020"
        },
        institute: {
          variant: "bodyBase",
          text: "Kalna Govt. Polytechnic"
        },
        board: {
          variant: "bodyBase",
          text: "Affiliated to WBSCTVESD, WB"
        },
        highlights: {
          variant: "bodyBase",
          as: "li",
          texts: [
             "Learned C, C++, Java fundamentals.",
             "Built microservice-based school utility apps."
          ]
        },
        score: {
          variant: "bodyBase",
          text: "CGPA: 7.8"
        },
      },
    },

    {
      heading: {
        variant: "heading3",
        text: "Schooling",
        icon: {
          svg: aboutSubtitleEducationDegrees.svg, 
          type: aboutSubtitleEducationDegrees.type 
        }
      },
      body: {
        timeline: {
          variant: "bodyBase",
          text: "2004 - 2017"
        },
        institute: {
          variant: "bodyBase",
          text: null
        },
        board: {
          variant: "bodyBase",
          text: "Board: WBBSE, WBCHSE"
        },
        highlights: {
          variant: "bodyBase",
          as: "li",
          texts: [
             "Learned C, C++, Java fundamentals.",
             "Built microservice-based school utility apps."
          ]
        },
        score: {
          variant: "bodyBase",
          text: "CGPA: 7.8"
        },
      },
    },
  ],

  buttonProps: {
    variant: "secondary",
    label: "Show all ↓",
  },
};

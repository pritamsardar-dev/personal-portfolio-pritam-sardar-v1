import { workExperienceSubtitleOfficeBuilding, workExperienceTitleCardblock } from '../../assets/icons/content';

export const homeWorkExperienceCard = {
  heading: {
    variant: "heading2",
    text: "My Professional Journey",
    icon: {
      svg: workExperienceTitleCardblock.svg, 
      type: workExperienceTitleCardblock.type 
    }
  },

  bodyItems: [
    {
      heading: {
        variant: "heading3",
        text: "TechNova Solutions",
        icon: {
          svg: workExperienceSubtitleOfficeBuilding.svg, 
          type: workExperienceSubtitleOfficeBuilding.type 
        }
      },
      body: {
        timeline: {
          variant: "bodyBase",
          text: "Jun 2026 – Present"
        },
        labelValueItems: [
          {
          label: {
            variant: "bodyBaseStrong",
            text: "Location:"
          },
          value: {
            variant: "bodyBase",
            text: "Bengaluru, India (Hybrid)"
          }
        },
        {
          label: {
            variant: "bodyBaseStrong",
            text: "Role:"
          },
          value: {
            variant: "bodyBase",
            text: "Full‑stack Developer"
          }
        },
        {
          label: {
            variant: "bodyBaseStrong",
            text: "Employment Type:"
          },
          value: {
            variant: "bodyBase",
            text: "Full‑time · On Payroll · Hybridr"
          }
        },
        {
          label: {
            variant: "bodyBaseStrong",
            text: "Domain:"
          },
          value: {
            variant: "bodyBase",
            text: "FinTech SaaS / Payment Systems"
          }
        },
      ],
        techStack: {
          label: {
            variant: "bodyBaseStrong",
            text: "Teck Stack:"
          },
          value: {
            variant: "bodyBaseTag",
            texts: [
              "React", "Node.js", "MongoDB", "Express", "AWS", "Docker" 
            ]
          }
        }
      }
    },

    {
      heading: {
        variant: "heading3",
        text: "Freelance Project – Local Retail Client",
        icon: {
          svg: workExperienceSubtitleOfficeBuilding.svg, 
          type: workExperienceSubtitleOfficeBuilding.type 
        }
      },
      body: {
        timeline: {
          variant: "bodyBase",
          text: "Jan 2025 – Mar 2025"
        },
        labelValueItems:[
          {
          label: {
            variant: "bodyBaseStrong",
            text: "Location:"
          },
          value: {
            variant: "bodyBase",
            text: "Kolkata, India (Remote)"
          }
        },
        {
          label: {
            variant: "bodyBaseStrong",
            text: "Role:"
          },
          value: {
            variant: "bodyBase",
            text: "Full‑stack Developer (Contract / Remote)"
          }
        },
        {
          label: {
            variant: "bodyBaseStrong",
            text: "Employment Type:"
          },
          value: {
            variant: "bodyBase",
            text: "Freelance · Contract · Remote"
          }
        },
        {
          label: {
            variant: "bodyBaseStrong",
            text: "Domain:"
          },
          value: {
            variant: "bodyBase",
            text: "E‑commerce Web Application"
          }
        }
      ]
        ,
        techStack: {
          label: {
            variant: "bodyBaseStrong",
            text: "Teck Stack:"
          },
          value: {
            variant: "bodyBaseTag",
            texts: [
              "React", "Node.js", "MongoDB", "Express", "Netlify"
            ]
          }
        }
      }
    }
  ]
};

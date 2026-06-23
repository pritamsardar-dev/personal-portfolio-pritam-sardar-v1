export const heroSectionTemplate = {
  id: "hero",
  type: "hero",
  assetFolder: "hero",

  heading: {
    icon: {
      src: "icons/content/hero-nav.svg",
      public_id: "",
      type: "stroke",
    },
  },

  rows: [
    //Row 1
    {
      id: "home-hero",
      type: "homeHero",
      blocks: [
        {
          id: "hero-image",
          enabled: true,
          type: "heroImage",
          order: 2,
          data: {
            src: "images/hero/home-hero.svg",
            public_id: "",
            alt: "homeHeroImage",
            aspect: "auto",
            loading: "lazy",
          },
        },

        {
          id: "hero-text",
          enabled: true,
          type: "heroText",
          order: 1,
          data: {
            heroIntro: {
              variant: "heroIntro",
              text: "welcome to my Portfolio",
            },
            heroHeading: {
              variant: "heroHeading",
              textParts: [
                {
                  text: "Hi, I’m Pritam",
                  color: "heading",
                  breakAfter: true,
                },
                {
                  text: "a",
                  color: "heading",
                },
                {
                  text: "Full Stack",
                  color: "primary",
                },
                {
                  text: "Developer",
                  color: "heading",
                },
              ],
            },
            heroTagline: {
              variant: "heroTagline",
              text: "I build full stack applications with React, Node.js, Express and MongoDB, using modern tools and libraries across the stack, and work with other technologies and databases like MySQL depending on what a project requires. I have experience in UI/UX design, Java, AI/ML and several other areas. Graduated with an M.Tech in Computer Science. This portfolio brings together my work experience, skills, case studies, portfolio projects and more.",
            },
            heroStatus: {
              variant: "bodyLarge",
              modifiers: [""],
              text: "Availability: Open to work · Notice: Immediate · Role: Full Stack Dev (MERN) · Open to: 0–2 yr roles",
            },
            cta: [
              {
                variant: "primary",
                label: "View Portfolio Projects",
                icon: "ChevronDown",
                action: "scroll",
                target: "work-items-projectsHomePage",
              },
              {
                variant: "secondary",
                label: "View Resume",
                icon: "ChevronUpRight",
                action: "download",
                src: "",
                public_id: "",
                target: "/resume/pritam-resume.pdf",
              },
            ],
          },
        },
      ],
    },

    //Row 2
    {
      id: "about-hero",
      type: "aboutHero",
      blocks: [
        {
          id: "hero-image",
          enabled: true,
          type: "heroImage",
          order: 2,
          data: {
            src: "images/hero/about-hero.svg",
            public_id: "",
            alt: "aboutHeroImage",
            aspect: "auto",
            loading: "lazy",
          },
        },

        {
          id: "hero-text",
          enabled: true,
          type: "heroText",
          order: 1,
          data: {
            heroIntro: {
              variant: "heroIntro",
              text: "About",
            },
            heroHeading: {
              variant: "heroHeadingSubpage",
              textParts: [
                {
                  text: "My",
                  color: "heading",
                },
                {
                  text: "Background",
                  color: "primary",
                  breakAfter: true,
                },
                {
                  text: "& Path Into",
                  color: "heading",
                },
                {
                  text: "Software Development",
                  color: "heading",
                },
              ],
            },
            heroTagline: {
              variant: "heroTagline",
              text: "A look at how I got into software development, what shaped the way I build things and the academic background behind it. From early curiosity about technology to building full stack applications today.",
            },
            cta: [
              {
                variant: "primary",
                label: "View Portfolio Projects",
                icon: "ChevronRight",
                action: "navigate",
                target: "/projects",
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
        },
      ],
    },

    //Row 3
    {
      id: "work-experience-hero",
      type: "workExperienceHero",
      blocks: [
        {
          id: "hero-image",
          enabled: true,
          type: "heroImage",
          order: 2,
          data: {
            src: "images/hero/work-experience-hero.svg",
            public_id: "",
            alt: "workExperienceHeroImage",
            aspect: "auto",
            loading: "lazy",
          },
        },

        {
          id: "hero-text",
          type: "heroText",
          enabled: true,
          order: 1,
          data: {
            heroIntro: {
              variant: "heroIntro",
              text: "Work Experience",
            },
            heroHeading: {
              variant: "heroHeadingSubpage",
              textParts: [
                {
                  text: "My Software",
                  color: "heading",
                  breakAfter: true,
                },
                {
                  text: "Development Career &",
                  color: "heading",
                },
                {
                  text: "Experiences",
                  color: "primary",
                },
              ],
            },
            heroTagline: {
              variant: "heroTagline",
              text: "A record of the software development work I have done so far, the contributions I made and the decisions I took. Each engagement includes a case study covering the technologies used, the challenges faced, how I approached the work, what I learned and more.",
            },
            cta: [
              {
                variant: "primary",
                label: "View Case Studies",
                icon: "ChevronRight",
                action: "navigate",
                target: "/case-studies",
              },
              {
                variant: "secondary",
                label: "View Portfolio Projects",
                icon: "ChevronRight",
                action: "navigate",
                target: "/projects",
              },
            ],
          },
        },
      ],
    },

    //Row 4
    {
      id: "skills-hero",
      type: "skillsHero",
      blocks: [
        {
          id: "hero-image",
          enabled: true,
          type: "heroImage",
          order: 2,
          data: {
            src: "images/hero/skills-hero.svg",
            public_id: "",
            alt: "skillsHeroImage",
            aspect: "auto",
            loading: "lazy",
          },
        },

        {
          id: "hero-text",
          enabled: true,
          type: "heroText",
          order: 1,
          data: {
            heroIntro: {
              variant: "heroIntro",
              text: "Skills",
            },
            heroHeading: {
              variant: "heroHeadingSubpage",
              textParts: [
                {
                  text: "My Technical",
                  color: "heading",
                  breakAfter: true,
                },
                {
                  text: "Skills,",
                  color: "primary",
                },
                {
                  text: "Software & Design Expertise",
                  color: "heading",
                },
              ],
            },
            heroTagline: {
              variant: "heroTagline",
              text: "A breakdown of the technologies and tools I work with, how I use them and what I bring to a project across the full stack. Covers frontend, backend, database, testing, security, deployment and more.",
            },
            cta: [
              {
                variant: "primary",
                label: "View Skills",
                icon: "ChevronDown",
                action: "scroll",
                target: "skills",
              },
              {
                variant: "secondary",
                label: "Highlights & Links",
                icon: "ChevronDown",
                action: "scroll",
                target: "proof-highlights",
              },
            ],
          },
        },
      ],
    },

    //Row 5
    {
      id: "projects-hero",
      type: "projectsHero",
      blocks: [
        {
          id: "hero-image",
          enabled: true,
          type: "heroImage",
          order: 2,
          data: {
            src: "images/hero/projects-hero.svg",
            public_id: "",
            alt: "projectsHeroImage",
            aspect: "auto",
            loading: "lazy",
          },
        },

        {
          id: "hero-text",
          enabled: true,
          type: "heroText",
          order: 1,
          data: {
            heroIntro: {
              variant: "heroIntro",
              text: "Projects",
            },
            heroHeading: {
              variant: "heroHeadingSubpage",
              textParts: [
                {
                  text: "Portfolio",
                  color: "heading",
                },
                {
                  text: "Projects",
                  color: "primary",
                  breakAfter: true,
                },
                {
                  text: "Built & Deployed",
                  color: "heading",
                },
                {
                  text: "with Full SDLC",
                  color: "heading",
                },
              ],
            },
            heroTagline: {
              variant: "heroTagline",
              text: [
                "A collection of full stack portfolio projects built and deployed end to end, following a complete software development lifecycle. Each project comes with source code, a live demo and a full case study. These are the projects I have built throughout my software development journey. Building them is how I stay updated with new tools and technologies, sharpen my skills across the full stack and keep learning new things.",
              ],
            },
            cta: [
              {
                variant: "primary",
                label: "View All Projects",
                icon: "ChevronDown",
                action: "scroll",
                target: "work-items-projectsPage",
              },
              {
                variant: "secondary",
                label: "View Case Studies",
                icon: "ChevronRight",
                action: "navigate",
                target: "/case-studies",
              },
            ],
          },
        },
      ],
    },

    //Row 6
    {
      id: "case-study-hero",
      type: "caseStudyHero",
      blocks: [
        {
          id: "hero-image",
          enabled: true,
          type: "heroImage",
          order: 2,
          data: {
            src: "images/hero/case-study-hero.svg",
            public_id: "",
            alt: "caseStudyHeroImage",
            aspect: "auto",
            loading: "lazy",
          },
        },

        {
          id: "hero-text",
          enabled: true,
          type: "heroText",
          order: 1,
          data: {
            heroIntro: {
              variant: "heroIntro",
              text: "case studies",
            },
            heroHeading: {
              variant: "heroHeadingSubpage",
              textParts: [
                {
                  text: "Case Studies on",
                  color: "heading",
                  breakAfter: true,
                },
                {
                  text: "Portfolio",
                  color: "heading",
                },
                {
                  text: "Projects",
                  color: "primary",
                },
                {
                  text: "&",
                  color: "heading",
                },
                {
                  text: "Work",
                  color: "primary",
                },
                {
                  text: "Experience",
                  color: "heading",
                },
              ],
            },
            heroTagline: {
              variant: "heroTagline",
              text: [
                "Each case study documents the full story behind a piece of work. Covers the goals, the technical decisions made, the challenges that came up and how they were solved, and what was learned along the way. The work tells you what was built. The case studies explain the thinking behind it.",
              ],
            },
            cta: [
              {
                variant: "primary",
                label: "View All Case Studies",
                icon: "ChevronDown",
                action: "scroll",
                target: "work-items-caseStudyPage",
              },
              {
                variant: "secondary",
                label: "View Portfolio Projects",
                icon: "ChevronRight",
                action: "navigate",
                target: "/projects",
              },
            ],
          },
        },
      ],
    },

    //Row 7
    {
      id: "contact-hero",
      type: "contactHero",
      blocks: [
        {
          id: "hero-image",
          enabled: true,
          type: "heroImage",
          order: 2,
          data: {
            src: "images/hero/contact-hero.svg",
            public_id: "",
            alt: "contactHeroImage",
            aspect: "auto",
            loading: "lazy",
          },
        },

        {
          id: "hero-text",
          enabled: true,
          type: "heroText",
          order: 1,
          data: {
            heroIntro: {
              variant: "heroIntro",
              text: "Contact",
            },
            heroHeading: {
              variant: "heroHeadingSubpage",
              textParts: [
                {
                  text: "My Contact Details",
                  color: "heading",
                  breakAfter: true,
                },
                {
                  text: "For",
                  color: "heading",
                },
                {
                  text: "Questions",
                  color: "primary",
                },
                {
                  text: "or",
                  color: "heading",
                },
                {
                  text: "Interviews",
                  color: "primary",
                },
              ],
            },
            heroTagline: {
              variant: "heroTagline",
              text: "I hope you had a chance to look through the portfolio, thank you for your time. If my background, skills, current experience level and the work shown here feel like a good fit for the role you are looking for, I would be happy to make time for an interview at your convenience. Feel free to reach me through the contact form, email, phone, WhatsApp or any other method listed below, whichever works best for you.",
            },
            cta: [
              {
                variant: "primary",
                label: "View Contact Options",
                icon: "ChevronDown",
                action: "scroll",
                target: "contact",
              },
              {
                variant: "secondary",
                label: "View Projects",
                icon: "ChevronRight",
                action: "navigate",
                target: "/projects",
              },
            ],
          },
        },
      ],
    },
  ],
};

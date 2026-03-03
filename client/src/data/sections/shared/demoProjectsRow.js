import {
  projectsCarouselSampleSlide1,
  projectsCarouselSampleSlide2,
  projectsCarouselSampleSlide3,
  projectsCarouselSampleSlide4,
  projectsCarouselSampleSlide5,
  projectsCarouselSampleSlide6,
  projectsCarouselSampleSlide7,
  projectsCarouselSampleSlide8,
  projectsCarouselSampleSlide9,
} from "../../../assets/images/projectscarouselsample";

import {
  ArrowBottomIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  FullscreenIcon,
  OverlayCloseIcon,
  OverlayFigmaIcon,
  OverlayGitIcon,
  OverlayPlayIcon,
  HeartReactIcon,
  HeartReactIconType,
  TagEyeIcon,
  TagEyeIconType,
  TagHeartFillIcon,
  TagHeartFillIconType,
  PlayFilledIcon,
  PauseFilledIcon,
  TagTimeDurationIcon,
  TagTimeDurationIconType,
} from "../../../assets/icons/system";

import {
  projectsSubtitleChallengesSolved,
  projectsSubtitleFutureScope,
  projectsSubtitleKeyFeatures,
  projectsSubtitleKeyLearnings,
  projectsSubtitlePerformanceAchievements,
  projectsSubtitleProjectGoal,
  projectsSubtitleTechstack,
  projectsTitleTextblock,
} from "../../../assets/icons/content";

const demoProjectsRow = (idNumber, topOrderNumber) => {
    return {
      id: `project-row-devfolio-${idNumber}`,
      enabled: true,
      domain: "project", // project / experience

      /** CMS / FILTERING META */
      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: topOrderNumber, // 1 = highest quality
      primaryCategory: "MERN",
      secondaryCategories: ["Backend", "Portfolio"],
      tags: ["MERN", "Backend"],

      blocks: [
        /* ────────────────────────
         * CAROUSEL BLOCK (ORDER 1)
         * ──────────────────────── */
        {
          id: "images-devfolio",
          type: {
            project: "carouselBlock",
            caseStudy: "imageBlock",
          },
          enabled: true,
          order: 1,

          data: {
            coverImageId: "slide-1",
            images: [
              { id: "slide-1", src: projectsCarouselSampleSlide1, alt: "projectsCarouselSampleSlide1" },
              { id: "slide-2", src: projectsCarouselSampleSlide2, alt: "projectsCarouselSampleSlide2" },
              { id: "slide-3", src: projectsCarouselSampleSlide3, alt: "projectsCarouselSampleSlide3" },
              { id: "slide-4", src: projectsCarouselSampleSlide4, alt: "projectsCarouselSampleSlide4" },
              { id: "slide-5", src: projectsCarouselSampleSlide5, alt: "projectsCarouselSampleSlide5" },
              { id: "slide-6", src: projectsCarouselSampleSlide6, alt: "projectsCarouselSampleSlide6" },
              { id: "slide-7", src: projectsCarouselSampleSlide7, alt: "projectsCarouselSampleSlide7" },
              { id: "slide-8", src: projectsCarouselSampleSlide8, alt: "projectsCarouselSampleSlide8" },
              { id: "slide-9", src: projectsCarouselSampleSlide9, alt: "projectsCarouselSampleSlide9"},
            ],

            /**
             * onClick handlers are OPTIONAL
             * Mode handling is done inside molecule
             */
            buttonProps: [
              {
                id: "arrow-left",
                role: "navigation",
                variant: "iconOnlyCircularOverlay",
                iconLeft: ArrowLeftIcon,
                onClick: () => {},
              },
              {
                id: "arrow-right",
                role: "navigation",
                variant: "iconOnlyCircularOverlay",
                iconLeft: ArrowRightIcon,
                onClick: () => {},
              },
              {
                id: "play",
                role: "utility",
                variant: "iconOnlyCircularOverlay",
                iconLeft: PlayFilledIcon,
                onClick: () => {},
              },
              {
                id: "pause",
                role: "utility",
                variant: "iconOnlyCircularOverlay",
                iconLeft: PauseFilledIcon,
                onClick: () => {},
              },
              {
                id: "fullscreen",
                role: "utility",
                variant: "iconOnlyRectangularOverlay",
                iconLeft: FullscreenIcon,
                onClick: () => {},
              },
              {
                id: "close-fullscreen",
                role: "utility",
                variant: "iconOnlyRectangularOverlay",
                iconLeft: OverlayCloseIcon,
                onClick: () => {},
              },
              {
                id: "live-demo",
                order: 1,
                role: "cta",
                variant: "overlayDefault",
                label: "Live Demo",
                iconLeft: OverlayPlayIcon,
                onClick: () => {},
              },
              {
                id: "github",
                order: 1,
                role: "cta",
                variant: "overlayDefault",
                label: "Source Code",
                iconLeft: OverlayGitIcon,
                onClick: () => {},
              },
              {
                id: "figma",
                order: 3,
                role: "cta",
                variant: "overlayDefault",
                label: "Design File",
                iconLeft: OverlayFigmaIcon,
                onClick: () => {},
              },
            ],
          },
        },

        /* ────────────────────────
         * TEXT BLOCK (ORDER 2)
         * ──────────────────────── */
        {
          id: "text-devfolio",
          type: "workItemsTextBlock",
          enabled: true,
          order: 2,

          data: {
            heading: {
              variant: {
                project: "heading2",
                caseStudy: {
                  preview: "heading2",
                  full: "heading1Subpage",
                },
              },
              text: `Devfolio – Scalable MERN Stack Portfolio ${idNumber}`,
              icon: {
                svg: projectsTitleTextblock.svg,
                type: projectsTitleTextblock.type,
              },
            },

            tags: [
              { label: "15 Aug 2025" },
              { 
                label: {
                  project: "80 hrs",
                  caseStudy: "9 min read",
                },
                iconLeft: TagTimeDurationIcon, 
                iconLeftType: TagTimeDurationIconType 
              },
              { label: "618", iconLeft: TagEyeIcon, iconLeftType: TagEyeIconType },
              { label: "MERN" },
              { label: "Backend" },
            ],

            overview: {
              variant: "bodyLarge",
              text:
                "A professional full-stack portfolio designed to showcase my work, optimized for performance, scalability, and an engaging recruiter experience.",
            },

            ctaProps: [
              {
                id: "view-details-toggle",
                order: {
                  project: {
                    collapsed: 1,
                    expanded: 5,
                  },
                  caseStudy: {
                    collapsed: 2,
                    expanded: 5,
                  },
                },
                role: "toggle",
                variant: {
                  project: {
                    collapsed: "primary",
                    expanded: "secondary",
                  },
                  caseStudy: "secondary",
                },
                label: {
                  project: {
                    collapsed: "View details",
                    expanded: "Show less",
                  },
                  caseStudy: {
                    collapsed: "Preview",
                    expanded: "Show less",
                  },
                },
                onClick: () => {},
              },
              {
                id: "case-study-link",
                order: {
                  project: {
                    collapsed: 2,
                    expanded: 4,
                  },
                  caseStudy: 1,
                },
                role: "primary-action",
                variant: {
                  project: "secondary",
                  caseStudy: {
                    collapsed: "primary",
                    expanded: "priamry",
                    full: "primary",
                  },
                },
                label: {
                  project: "Full Case Study",
                  caseStudy: {
                    collapsed: "Read",
                    expanded: "Full Case Study",
                  }
                },
                onClick: () => {},
              },
              {
                id: "live-demo-link",
                order: {
                  project: {
                    expanded: 1,
                  },
                  caseStudy: 2,
                },
                role: "primary-action",
                variant: {
                  project: "primary",
                  caseStudy: {
                    collapsed: "secondary",
                    expanded: "secondary",
                    full: "primary",
                  }
                },
                label: "Live demo",
                onClick: () => {},
              },
              {
                order: {
                  project: {
                    expanded: 2,
                  },
                  caseStudy: 2,
                },
                id: "source-code-link",
                role: "secondary-action",
                variant: "secondary",
                label: "Source code",
                onClick: () => {},
              },
              {
                order: {
                  project: {
                    expanded: 3,
                  },
                  caseStudy: 2,
                },
                id: "design-file-link",
                role: "secondary-action",
                variant: "secondary",
                label: "Design file",
                onClick: () => {},
              },
              {
                id: "like",
                order: 6,
                role: "utility",
                variant: "overlay",
                iconLeft: {
                  default: HeartReactIcon,
                  active: TagHeartFillIcon,
                },
                iconLeftType: {
                  default: HeartReactIconType,
                  active: TagHeartFillIconType,
                },
                label: {
                  default: "249",
                  active: "250",
                },
                onClick: () => {},
              },
            ],

            /**
             * DEFAULT MODE CTA
             * Toggle + Redirect + Utility
             */
            ctaDefault: [
              {
                id: "projects-view-details-toggle",
                role: "toggle",
                variant: "secondary",
                labels: {
                  collapsed: "View details",
                  expanded: "Show less",
                },
                onClick: () => {},
              },
              {
                id: "projects-case-study-link",
                role: "primary-action",
                variant: "primary",
                label: "Full Case Study",
                onClick: () => {},
              },
              {
                id: "projects-like",
                role: "utility",
                variant: "overlay",
                iconsLeft: {
                  default: HeartReactIcon,
                  active: TagHeartFillIcon,
                },
                iconsLeftType: {
                  default: HeartReactIconType,
                  active: TagHeartFillIconType,
                },
                labels: {
                  default: "249",
                  active: "250",
                },
                onClick: () => {},
              },
            ],

            description: [
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                order: 1,
                heading: {
                  variant: "heading2",
                  text: "Executive Summary",
                },
                body: [
                  {
                    type: "text",
                    variant: "bodyLarge",
                    text: "Devfolio is a modular portfolio platform built to solve structural issues commonly found in developer portfolios — content duplication, inconsistent layouts, weak scalability, and shallow impact storytelling.",
                  },
                  {
                    type: "text",
                    variant: "bodyLarge",
                    text: "The platform introduces a unified case study data model powering both Projects and Work Experience, enabling clean reuse, multiple presentation variants, and long-term maintainability. The system was designed using atomic design principles with a token-driven architecture to ensure scalability across devices and themes.",
                  },
                  {
                    type: "text",
                    variant: "bodyLarge",
                    text: "This project reflects my approach to building reusable systems rather than isolated UI pages.",
                  },  
                ],
              },
              {
                enabled: {
                  preview: true,
                  full: true,
                },
                order: {
                  preview: 1,
                  full: 2,
                },
                heading: {
                  variant: {
                    preview: "heading3",
                    full: "heading2",
                  },
                  text: "Project Goals",
                  icon: { svg: projectsSubtitleProjectGoal.svg, type: projectsSubtitleProjectGoal.type },
                },
                body: [
                  {
                    enabled: {
                      preview: true,
                      full: false,
                    },
                    type: "list",
                    variant: "bodyLarge",
                    as: "li",
                    texts: [
                      "Build a modern, professional portfolio to presvent my MERN skills",
                      "Deliver a recruiter-friendly experience with clear project demos.",
                      "Focus on scalability and industry-standard development practices.",
                    ],
                  },
                  {
                    enabled: {
                      preview: false,
                      full: true,
                    },
                    type: "text",
                    variant: "bodyLarge",
                    text: "The primary objective was to design a scalable portfolio system that eliminates redundancy and improves clarity for recruiters.",
                  },
                  {
                    enabled: {
                      preview: false,
                      full: true,
                    },
                    type: "list",
                    variant: "bodyLarge",
                    as: "li",
                    texts: [
                      "Build a single reusable case study architecture for projects and work experience",
                      "Eliminate duplicated content structures across pages",
                      "Ensure consistency across breakpoints and themes",
                      "Design a system that supports long-term scalability",
                      "Improve how impact and contributions are presented to recruiters",
                    ],
                  },
                  {
                    enabled: {
                      preview: false,
                      full: true,
                    },
                    type: "text",
                    variant: "bodyLarge",
                    text: "These goals emerged from observing that most portfolios treat projects and work experience as disconnected entities, leading to fragmented structure and poor maintainability.",
                  },
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                order: 3,
                heading: {
                  variant: "heading2",
                  text: "Architecture & Approach",
                },
                body: [
                  {
                    type: "text",
                    variant: "bodyLarge",
                    text: "At the core of Devfolio is a shared workItem data model that acts as a single source of truth.",
                  },
                  {
                    type: "text",
                    variant: "bodyLarge",
                    text: "Instead of duplicating schemas for projects and experience:",
                  },
                  {
                    type: "list",
                    as: "li",
                    variant: "bodyLarge",
                    texts: [
                      "Domain-based filtering controls where content appears",
                      "Variant-based rendering controls presentation depth (preview, collapsed, full case study)",
                      "Atomic design principles ensure component-level reusability",
                      "Token-driven styling maintains visual consistency",
                    ],
                  },
                  {
                    type: "text",
                    variant: "bodyLarge",
                    text: "This approach separates data logic from presentation, enabling flexibility without structural compromise.",
                  },
                ],
              },
              {
                enabled: {
                  preview: true,
                  full: true,
                },
                order: {
                  preview: 2,
                  full: 4,
                },
                heading: {
                  variant: {
                    preview: "heading3",
                    full: "heading2",
                  },
                  text: "Key Features",
                  icon: { svg: projectsSubtitleKeyFeatures.svg, type: projectsSubtitleKeyFeatures.type },
                },
                body: [
                  {
                    enabled: {
                      preview: true,
                      full: false,
                    },
                    type: "list",
                    variant: "bodyLarge",
                    as: "li",
                    texts: [
                      "Single case study powering multiple pages",
                      "Atomic design with token-driven styling",
                      "Lazy-loaded media and optimized carousels",
                    ],
                  },
                  {
                    enabled: {
                      preview: false,
                      full: true,
                    },
                    type: "list",
                    variant: "bodyLarge",
                    as: "li",
                    texts: [
                      "Single case study model powering multiple sections",
                      "Atomic design implementation (atoms → molecules → organisms → pages)",
                      "Token-driven spacing, typography, and theming system",
                      "Lazy-loaded media and optimized rendering logic",
                      "Modular component architecture for maintainability",
                      "Responsive layouts across desktop, tablet, and mobile",
                    ],
                  },
                ],
              },
              {
                enabled: {
                  preview: true,
                  full: true,
                },
                order: {
                  preview: 3,
                  full: 5,
                },
                heading: {
                  variant: {
                    preview: "heading3",
                    full: "heading2",
                  },
                  text: {
                    preview: "Tech Stack",
                    full: "Technology & Tools",
                  },
                  icon: { svg: projectsSubtitleTechstack.svg, type: projectsSubtitleTechstack.type },
                },
                body: [
                  {
                    enabled: {
                      preview: true,
                      full: false,
                    },
                    type: "list",
                    variant: "bodyLarge",
                    as: "li",
                    texts: [
                      "React · Node.js · Express · MongoDB · TailwindCSS",
                      "Atomic design principles with Figma-to-code workflow.",
                    ],
                  },
                  {
                    enabled: {
                      preview: false,
                      full: true,
                    },
                    type: "text",
                    variant: "bodyLarge",
                    text: "The stack was chosen to balance scalability, maintainability, and development speed.",
                  },
                  {
                    enabled: {
                      preview: false,
                      full: true,
                    },
                    type: "labelValueList",
                    as: "li",
                    variant: "bodyLarge",
                    modifiers: ["strong"],
                    texts: [
                      {
                        label:
                          "Frontend:",
                        value:
                          "React modular component architecture and optimized rendering",
                      },
                      {
                        label:
                          "Styling:",
                        value:
                          "TailwindCSS utility-driven, token-aligned styling system",
                      },
                      {
                        label:
                          "Backend:",
                        value:
                          "Node.js & Express structured API handling and flexibility",
                      },
                      {
                        label:
                          "Database:",
                        value:
                          "MongoDB adaptable data modeling for reusable case studies",
                      },
                      {
                        label:
                          "Performance Optimization:",
                        value:
                          "Memoization, lazy loading, conditional rendering",
                      },
                    ],
                  },
                  {
                    enabled: {
                      preview: false,
                      full: true,
                    },
                    type: "text",
                    variant: "bodyLarge",
                    text: "This stack enables clean separation of concerns and long-term architectural growth.",
                  },
                ],
              },
              {
                enabled: {
                  preview: true,
                  full: true,
                },
                order: {
                  preview: 4,
                  full: 6,
                },
                heading: {
                  variant: {
                    preview: "heading3",
                    full: "heading2",
                  },
                  text: {
                    preview: "Challenges Solved",
                    full: "Challenges & Solutions",
                  },
                  icon: {
                    svg: projectsSubtitleChallengesSolved.svg,
                    type: projectsSubtitleChallengesSolved.type,
                  },
                },
                body: [
                  {
                    enabled: {
                      preview: true,
                      full: false,
                    },
                    type: "labelValueList",
                    variant: "bodyLarge",
                    modifiers: ["strong"],
                    as: "li",
                    texts: [
                      {
                        label:
                          "Data duplication:",
                        value:
                          "Solved using a shared master model.",
                      },
                      {
                        label:
                          "Theme contrast:",
                        value:
                          "Addressed through token-based colors.",
                      },
                      {
                        label:
                          "Performance",
                        value:
                          "Reduced re-renders via memoization.",
                      },
                    ],
                  },
                  {
                    enabled: {
                      preview: false,
                      full: true,
                    },
                    type: "labelValueList",
                    variant: "bodyLarge",
                    modifiers: ["strong"],
                    as: "li",
                    texts: [
                      {
                        label:
                          "Content duplication across pages:",
                        value:
                          "Solved by implementing a shared master data model powering all case studies.",
                      },
                      {
                        label:
                          "Inconsistent UI patterns and layout drift:",
                        value:
                          "Addressed through atomic design structure and centralized design tokens.",
                      },
                      {
                        label:
                          "Performance inefficiencies from repeated rendering:",
                        value:
                          "Reduced using memoization, lazy-loaded assets, and optimized",
                      },
                      {
                        label:
                          "Theme contrast and multi-device consistency:",
                        value:
                          "Resolved through token-based color systems and responsive layout planning.",
                      },
                    ],
                  },
                  {
                    enabled: {
                      preview: false,
                      full: true,
                    },
                    type: "text",
                    variant: "bodyLarge",
                    text: "Each challenge was approached with scalability and maintainability in mind rather than short-term fixes.",
                  },
                ],
              },
              {
                enabled: {
                  preview: true,
                  full: true,
                },
                order: {
                  preview: 5,
                  full: 7,
                },
                heading: {
                  variant: {
                    preview: "heading3",
                    full: "heading2",
                  },
                  text: "Performance & Achievements",
                  icon: {
                    svg: projectsSubtitlePerformanceAchievements.svg,
                    type: projectsSubtitlePerformanceAchievements.type,
                  },
                },
                body: [
                  {
                    enabled: {
                      preview: true,
                      full: false,
                    },
                    type: "list",
                    variant: "bodyLarge",
                    as: "li",
                    texts: [
                      "Reduced initial load with lazy image strategy and minimal re-renders.",
                      "Responsive, fluid transitions achieving smooth 60fps interactions.",
                    ],
                  },
                  {
                    enabled: {
                      preview: false,
                      full: true,
                    },
                    type: "list",
                    variant: "bodyLarge",
                    as: "li",
                    texts: [
                      "Built a reusable case study system powering multiple portfolio sections",
                      "Achieved smooth performance across devices and breakpoints",
                      "Reduced structural redundancy and improved maintainability",
                      "Established clean separation between data and presentation layers",
                      "Designed and implemented scalable architecture from scratch",
                    ],
                  },
                  {
                    enabled: {
                      preview: false,
                      full: true,
                    },
                    type: "text",
                    variant: "bodyLarge",
                    text: "The portfolio evolved from a static display into a structured, extensible platform.",
                  },
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                order: 8,
                type: {
                  preview: "list",
                  full: "text"
                },
                heading: {
                  variant: {
                    preview: "heading3",
                    full: "heading2",
                  },
                  text: "Key Learnings",
                  icon: {
                    svg: projectsSubtitleKeyLearnings.svg,
                    type: projectsSubtitleKeyLearnings.type,
                  },
                },
                body: [
                  {
                    type: "list",
                    variant: "bodyLarge",
                    as: "li",
                    texts: [
                      "Strong data modeling prevents long-term architectural debt",
                      "Reusability must be intentionally designed",
                      "Separation of concerns simplifies scaling",
                      "System-level thinking delivers more value than isolated feature development",
                      "Designing for evolution is more important than designing for display",
                    ],
                  },
                  {
                    type: "text",
                    variant: "bodyLarge",
                    text: "This project strengthened my ability to think beyond UI and approach development from a system-design perspective.",
                  },
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                order: 9,
                heading: {
                  variant: {
                    preview: "heading3",
                    full: "heading2",
                  },
                  text: "Future Scope",
                  icon: {
                    svg: projectsSubtitleFutureScope.svg,
                    type: projectsSubtitleFutureScope.type,
                  },
                },
                body: [
                  {
                    type: "list",
                    variant: "bodyLarge",
                    as: "li",
                    texts: [
                      "CMS-driven content management",
                      "SEO and structured metadata enhancements",
                      "Analytics integration",
                      "Admin editing interface for dynamic updates",
                      "Further performance optimization and caching strategies",
                    ],
                  },
                ]
              },
            ],

            /**
             * EXPANDED MODE CTA
             */
            ctaExpanded: [
              {
                id: "projects-live-demo-link",
                role: "primary-action",
                variant: "primary",
                label: "Live demo",
                onClick: () => {},
              },
              {
                id: "projects-source-code-link",
                role: "secondary-action",
                variant: "secondary",
                label: "Source code",
                onClick: () => {},
              },
              {
                id: "projects-design-file-link",
                role: "secondary-action",
                variant: "secondary",
                label: "Design file",
                onClick: () => {},
              },
              {
                id: "projects-case-study-link",
                role: "secondary-action",
                variant: "secondary",
                label: "Full case study",
                onClick: () => {},
              },
              {
                id: "projects-view-less-toggle",
                role: "toggle",
                variant: "secondary",
                label: "Show less",
                onClick: () => {},
              },
            ],
          },
        },
      ],
    }
};

export default demoProjectsRow;
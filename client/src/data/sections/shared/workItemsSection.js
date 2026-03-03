import demoProjectsRow from "./demoProjectsRow";
import { DropdownIcon, TagClockIcon, TagClockIconType } from "../../../assets/icons/system";

import {
  workExperienceHeading,
  workExperienceTitleTextblock,
  workExperienceSubtitleOfficeBuilding,
} from "../../../assets/icons/content";

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
  projectsHeading,
  projectsSubtitleChallengesSolved,
  projectsSubtitleFutureScope,
  projectsSubtitleKeyFeatures,
  projectsSubtitleKeyLearnings,
  projectsSubtitlePerformanceAchievements,
  projectsSubtitleProjectGoal,
  projectsSubtitleTechstack,
  projectsTitleTextblock,
} from "../../../assets/icons/content";

export const workItemsSection = {
  id: "work-items",
  type: "workItems",
  enabled: true,
  alignment: {
    project: {
      heading: "center",
      cta: "center",
    },
    experience: {
      heading: "center",
      cta: "center",
      pagination: "center"
    },
    caseStudy: {
      heading: "center",
      cta: "center",
      pagination: "center"
    },
  },
  heading: {
    project: {
      variants: {
        homePage: "heading1",
        subPage: "heading1Subpage",
        fullScreenPage: "heading2"
      },
      texts: {
        default: "Portfolio Projects",
        fullScreenPage: "Related Projects",
      },
      icons: {
        default: {
          svg: projectsHeading.svg,
          type: projectsHeading.type,
        },
        fullscreenPage: {
          svg: projectsTitleTextblock.svg,
          type: projectsTitleTextblock.type,
        }
      },
    },
    experience: {
      variant: {
        home: "heading1",
        workExperience: "heading1Subpage",
      },
      text: "Work Experience",
      icon: {
        svg: workExperienceHeading.svg,
        type: workExperienceHeading.type,
      },
    },
    caseStudy: {
      variants: {
        subPage: "heading1Subpage",
        fullScreenPage: "heading2"
      },
      texts: {
        default: "Case Studies",
        fullScreenPage: "Related Case Studies",
      },
      icons: {
        default: {
          svg: workExperienceHeading.svg,
          type: workExperienceHeading.type,
        },
        fullscreenPage: {
          svg: projectsTitleTextblock.svg,
          type: projectsTitleTextblock.type,
        }
      },
    },
  },
  filters: {
    project: {
      selectProps: {
        variant: "selectCustom",
        label: "",
        name: "choice",
        placeholder: "Select one",
        options: [
          { value: "option1", label: "Option One" },
          { value: "option2", label: "Option Two" },
          { value: "option3", label: "Option Three" },
        ],
        Icon: DropdownIcon,
        error: "",
      },

      clearButtonProps: {
          id: "action-clear",
          variant: "tag",
          label: "Clear",
          onClick: () => {}
      },

      primaryFiltersProps: [
        {
          id: "primary-filter-all",
          variant: "tag",
          label: "All",
          count: 12,
          onClick: () => {}
        },
        {
          id: "primary-filter-mern",
          variant: "tag",
          label: "MERN",
          count: 5,
          onClick: () => {}
        },
        {
          id: "primary-filter-frontend",
          variant: "tag",
          label: "Frontend",
          count: 4,
          onClick: () => {}
        },
        {
          id: "primary-filter-backend",
          variant: "tag",
          label: "Backend",
          count: 3,
          onClick: () => {}
        },
        {
          id: "primary-filter-full-Stack",
          variant: "tag",
          label: "Full-Stack",
          count: 5,
          onClick: () => {}
        },
      ],

      secondaryFiltersProps: [
        {
          id: "secondary-filter-ai-ml",
          variant: "tag",
          label: "AI/ML",
          count: 2,
          onClick: () => {}
        },
        {
          id: "secondary-filter-data apps",
          variant: "tag",
          label: "Data Apps",
          count: 3,
          onClick: () => {}
        },
        {
          id: "secondary-filter-api-dev",
          variant: "tag",
          label: "API Dev",
          count: 4,
          onClick: () => {}
        },
        {
          id: "secondary-filter-real-time",
          variant: "tag",
          label: "Real-Time",
          count: 3,
          onClick: () => {}
        }
      ],
    },

    experience: {
      selectProps: {
        variant: "selectCustom",
        label: "",
        name: "choice",
        placeholder: "Select one",
        options: [
          { value: "option1", label: "Option One" },
          { value: "option2", label: "Option Two" },
          { value: "option3", label: "Option Three" },
        ],
        Icon: DropdownIcon,
        error: "",
      },

      clearButtonProps: {
        id: "action-clear",
        variant: "tag",
        label: "Clear",
        onClick: () => {}
      },

      primaryFiltersProps: [
        {
          id: "primary-filter-all",
          variant: "tag",
          label: "All",
          count: 12,
          onClick: () => {}
        },
        {
          id: "primary-filter-ai",
          variant: "tag",
          label: "AI",
          count: 1,
          onClick: () => {}
        },
        {
          id: "primary-filter-frontend",
          variant: "tag",
          label: "Frontend",
          count: 4,
          onClick: () => {}
        },
        {
          id: "primary-filter-backend",
          variant: "tag",
          label: "Backend",
          count: 1,
          onClick: () => {}
        },
        {
          id: "primary-filter-full-Stack",
          variant: "tag",
          label: "Full-Stack",
          count: 1,
          onClick: () => {}
        },
      ],

      secondaryFiltersProps: [
        {
          id: "secondary-filter-internship",
          variant: "tag",
          label: "Internship",
          count: 0,
          onClick: () => {}
        },
        {
          id: "secondary-filter-freelance",
          variant: "tag",
          label: "Freelance",
          count: 1,
          onClick: () => {}
        },
        {
          id: "secondary-filter-full-time",
          variant: "tag",
          label: "Fulltime",
          count: 0,
          onClick: () => {}
        },
        {
          id: "secondary-filter-open-source",
          variant: "tag",
          label: "Open-source",
          count: 0,
          onClick: () => {}
        }
      ],
    },

    caseStudy: {
      selectProps: {
        variant: "selectCustom",
        label: "",
        name: "choice",
        placeholder: "Select one",
        options: [
          { value: "option1", label: "Option One" },
          { value: "option2", label: "Option Two" },
          { value: "option3", label: "Option Three" },
        ],
        Icon: DropdownIcon,
        error: "",
      },

      clearButtonProps: {
          id: "action-clear",
          variant: "tag",
          label: "Clear",
          onClick: () => {}
      },

      scopeFiltersProps: [
        {
          id: "scope-filter-all",
          variant: "tag",
          label: "All",
          count: 12,
          onClick: () => {}
        },
        {
          id: "scope-filter-projects",
          variant: "tag",
          label: "Projects",
          count: 5,
          onClick: () => {}
        },
        {
          id: "scope-filter-work-experience",
          variant: "tag",
          label: "Work Experience",
          count: 4,
          onClick: () => {}
        },
      ],

      primaryFiltersProps: [
        {
          id: "primary-filter-all",
          variant: "tag",
          label: "All",
          count: 12,
          onClick: () => {}
        },
        {
          id: "primary-filter-mern",
          variant: "tag",
          label: "MERN",
          count: 5,
          onClick: () => {}
        },
        {
          id: "primary-filter-frontend",
          variant: "tag",
          label: "Frontend",
          count: 4,
          onClick: () => {}
        },
        {
          id: "primary-filter-backend",
          variant: "tag",
          label: "Backend",
          count: 3,
          onClick: () => {}
        },
        {
          id: "primary-filter-full-Stack",
          variant: "tag",
          label: "Full-Stack",
          count: 5,
          onClick: () => {}
        },
      ],

      secondaryFiltersProps: [
        {
          id: "secondary-filter-ai-ml",
          variant: "tag",
          label: "AI/ML",
          count: 2,
          onClick: () => {}
        },
        {
          id: "secondary-filter-data apps",
          variant: "tag",
          label: "Data Apps",
          count: 3,
          onClick: () => {}
        },
        {
          id: "secondary-filter-api-dev",
          variant: "tag",
          label: "API Dev",
          count: 4,
          onClick: () => {}
        },
        {
          id: "secondary-filter-real-time",
          variant: "tag",
          label: "Real-Time",
          count: 3,
          onClick: () => {}
        }
      ],
    },
  },
  
  buttonProps: {
    variant: "secondary",
    label: "View All Projects →",
    onClick: () => {},
  },

  /**
   * Used by:
   * - Home page (top N rows)
   * - Projects page (full list)
   * - Filters & sorting
   */

  rows: [
    {
      id: "project-row-devfolio",
      enabled: true,
      domain: "project", // project / experience
      order: {
        project: 1,
        experience: 1,
        caseStudy: 1,
      },   

      /** CMS / FILTERING META */
      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: { // 1 = highest quality
        project: 1,
        experience: 1,
        caseStudy: 1,
      },
      primaryCategory: { key: "mern", label: "MERN"},
      secondaryCategories: [
        { key: "backend", label: "Backend"},
        { key: "portfolio", label: "Portfolio"},
      ],
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
              { id: "slide-1", src: projectsCarouselSampleSlide1, alt: "Redesigned analytics dashboard showing improved user engagement metrics",},
              { id: "slide-2", src: projectsCarouselSampleSlide2, alt: "projectsCarouselSampleSlide2", caption: "Redesigned analytics dashboard showing improved user engagement metrics" },
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
              text: "Devfolio – Scalable MERN Stack Portfolio",
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

            /**
             * DEFAULT MODE CTA
             * Toggle + Redirect + Utility
             */
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
                    type: "image",
                    imageId: "slide-2",
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
          },
        },
      ],
    },

    demoProjectsRow(2, 2),
    demoProjectsRow(3, 3),
    demoProjectsRow(4, 4),
    demoProjectsRow(5, 5),

    /* ───────────── ROW 6 ───────────── */
    {
      id: "tech-nova-solutions",
      enabled: {
        project: false,
        experience: true,
        caseStudy: true,
      },
      domain: "experience", // project / experience
      order: {
        project: 6,
        experience: 6,
        caseStudy: 6,
      }, 
      /** CMS / FILTERING META */
      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: {
        project: 6,
        experience: 6,
        caseStidy: 6,
      },
      primaryCategory: {key: "frontend", label: "Frontend"},
      secondaryCategories: [
        {key: "full-time", label: "Full-time"},
        {key: "open-source", label: "Open-source"},
      ],

      buttonProps: {
        variant: {
          home: "primary",
          workExperience: "secondary",
        },
        label: "View TechNova Case Study →",
      },

      tags: [
        { label: "Jun 2026 – Present" },
        { 
          label: "9 min read",
          iconLeft: TagTimeDurationIcon, 
          iconLeftType: TagTimeDurationIconType 
        },
        { label: "618", iconLeft: TagEyeIcon, iconLeftType: TagEyeIconType },
      ],

      ctaProps: [
        {
          id: "view-details-toggle",
          order: {
            caseStudy: {
              collapsed: 2,
              expanded: 5,
            },
          },
          role: "toggle",
          variant: "secondary",
          label: {
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
            caseStudy: 1,
          },
          role: "primary-action",
          variant: "primary",
          label: {
            caseStudy: {
              collapsed: "Read",
              expanded: "Full Case Study",
            }
          },
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

      fullCaseStudy: [
        {
          enabled: true,
          order: 1,
          heading: {
            variant: "heading2",
            text: "Executive Summary",
          },
          body: [
            {
              type: "text",
              variant: "bodyLarge",
              text: "TechNova Solutions is a technology-driven company delivering scalable, reliable software solutions for enterprise clients. During a critical growth phase, I worked as a Full-Stack Developer, contributing across backend, frontend, deployment, and system reliability initiatives.",
            },
            {
              type: "text",
              variant: "bodyLarge",
              text: "My work helped improve system scalability, performance, and release reliability—directly supporting business growth, client confidence, and operational efficiency.",
            },
          ],
        },
        {
          enabled: true,
          order: 2,
          heading: {
            variant: "heading2",
            text: "Business Context",
          },
          body: [
            {
              type: "text",
              variant: "bodyLarge",
              text: "As the company scaled its operations and client base, the engineering team faced increasing pressure to:",
            },
            {
              type: "list",
              as: "li",
              variant: "bodyLarge",
              texts: [
                "Handle higher system load without compromising stability",
                "Deliver features faster while minimizing release risk",
                "Maintain performance and reliability for internal teams and end users",
                "Meet growing expectations around security and operational quality",
              ],
            },
            {
              type: "text",
              variant: "bodyLarge",
              text: "Engineering decisions increasingly had direct impact on revenue, trust, and long-term growth.",
            },
          ],
        },
        {
          enabled: true,
          order: 3,
          heading: {
            variant: "heading2",
            text: "Role & Scope of Responsibility",
          },
          body: [
            {
              type: "text",
              variant: "bodyLarge",
              text: "I worked as part of a cross-functional team and contributed across multiple areas, including:",
            },
            {
              type: "list",
              as: "li",
              variant: "bodyLarge",
              texts: [
                "Backend service development and API design",
                "Frontend performance and usability improvements",
                "Build, deployment, and release automation",
                "System reliability, optimization, and maintenance",
                "Collaboration with product, QA, and DevOps teams",
              ],
            },
            {
              type: "text",
              variant: "bodyLarge",
              text: "My responsibilities evolved beyond feature development into improving platform stability and delivery efficiency.",
            },
          ],
        },
        {
          enabled: true,
          order: 4,
          heading: {
            variant: "heading2",
            text: "Key Contributions & Business Impact",
            icon: {
              svg: workExperienceTitleTextblock.svg,
              type: workExperienceTitleTextblock.type,
            },
          },
          body: [
            {
              type: "labelValueList",
              as: "li",
              modifiers: ["strong"],
              variant: "bodyLarge",
              texts: [
                {
                  label:
                    "Backend development and system reliability:",
                  value:
                    "Built and improved backend services supporting core workflows, focusing on scalability, fault tolerance, and data integrity.",
                },
                {
                  label:
                    "Frontend performance and usability:",
                  value:
                    "Optimized frontend rendering and data handling to improve speed, responsiveness, and day-to-day usability for internal and client-facing users.",
                },
                {
                  label:
                    "Delivery and release improvements:",
                  value:
                    "Contributed to streamlining build and deployment workflows, enabling faster and safer releases.",
                },
                {
                  label:
                    "Cross-team collaboration:",
                  value:
                    "Worked closely with non-engineering stakeholders to ensure features were aligned with business goals and delivered on time.",
                },
              ],
            },
            {
              type: "text",
              variant: "bodyLarge",
              modifiers: ["strong",],
              text: "Business Impact:",
            },
            {
              type: "text",
              variant: "bodyLarge",
              text: "These contributions improved reliability, accelerated feature delivery, reduced operational risk, and enabled the business to scale more confidently.",
            },
          ],
        },
        {
          enabled: true,
          order: 5,
          heading: {
            variant: "heading2",
            text: "Challenges & Solutions",
            icon: {
              svg: projectsSubtitleChallengesSolved.svg,
              type: projectsSubtitleChallengesSolved.type,
            },
          },
          body: [
            {
              type: "labelValueList",
              as: "li",
              variant: "bodyLarge",
              modifiers: ["strong"],
              texts: [
                {
                  label:
                    "Scaling without disrupting active users:",
                  value:
                    "Changes needed to be delivered while the system was live and handling real users. I adopted incremental rollouts and safer deployment practices to ensure upgrades could be released with minimal disruption.",
                },
                {
                  label:
                    "Performance issues under production load:",
                  value:
                    "Increased traffic and data volume exposed bottlenecks across key workflows. I analyzed real usage patterns and optimized critical paths to improve responsiveness and stability.",
                },
                {
                  label:
                    "Slow and risky release cycles:",
                  value:
                    "Manual deployment steps increased release time and failure risk. I helped streamline and automate deployment workflows to support faster and more reliable releases.",
                },
              ],
            },
          ],
        },
        {
          enabled: true,
          order: 6,
          heading: {
            variant: "heading2",
            text: "Technology & Tools",
          },
          body: [
            {
              type: "text",
              variant: "bodyLarge",
              text: "The technology stack was chosen to balance scalability, maintainability, and development speed while supporting real-world production workloads.",
            },
            {
              type: "labelValueList",
              as: "li",
              variant: "bodyLarge",
              modifiers: ["strong"],
              texts: [
                {
                  label:
                    "Frontend:",
                  value:
                    "React and modern state/data management patterns for modular UI development and performance optimization",
                },
                {
                  label:
                    "Backend:",
                  value:
                    "Node.js with Express to build scalable, maintainable APIs and service layers",
                },
                {
                  label:
                    "Database:",
                  value:
                    "MongoDB for flexible data modeling, indexing, and performance at scale",
                },
                {
                  label:
                    "Infrastructure:",
                  value:
                    "Containerization and cloud services to ensure consistent deployments and horizontal scalability",
                },
                {
                  label:
                    "CI/CD:",
                  value:
                    "Automated build and deployment pipelines to enable faster releases with reduced operational risk",
                },
              ],
            },
            {
              type: "text",
              variant: "bodyLarge",
              text: "This setup supported long-term growth while keeping development efficient and reliable.",
            },
          ],
        },
        {
          enabled: true,
          order: 7,
          heading: {
            variant: "heading2",
            text: " Achievements & Recognition",
          },
          body: [
            {
              type: "labelValueList",
              as: "li",
              variant: "bodyLarge",
              modifiers: ["strong"],
              texts: [
                {
                  label:
                    "Role Progression:",
                  value:
                    "Promoted from Junior Developer to Software Engineer based on performance and ownership",
                },
                {
                  label:
                    "Responsibility Growth:",
                  value:
                    "Took ownership of production-critical features and deployments",
                },
                {
                  label:
                    "Trust & Reliability:",
                  value:
                    "Handled high-impact tasks during peak traffic and release cycles",
                },
                {
                  label:
                    "Team Impact::",
                  value:
                    "Became a go-to contributor for performance and delivery-related issues",
                },
              ],
            },
          ],
        },
        {
          enabled: true,
          order: 8,
          heading: {
            variant: "heading2",
            text: "Outcomes & Learnings",
          },
          body: [
            {
              type: "text",
              variant: "bodyLarge",
              text: "This experience strengthened my ability to:",
            },
            {
              type: "list",
              as: "li",
              variant: "bodyLarge",
              texts: [
                "Build and maintain production-grade systems",
                "Make engineering decisions with direct business impact",
                "Balance speed, quality, and reliability",
                "Work effectively in cross-functional, real-world environments",
              ],
            },
            {
              type: "text",
              variant: "bodyLarge",
              text: "I gained deeper insight into how technical execution directly influences business growth, customer trust, and long-term scalability.",
            },
          ],
        },
      ],

      blocks: [
        /* BLOCK 1 — ROW 6 (FIRST) */
        {
          id: "work-experience-image-block",
          type: "imageBlock",
          enabled: true,
          order: 1,

          data: {
            coverImageId: "slide-1",
            images: [
              { id: "slide-1", src: projectsCarouselSampleSlide1, alt: "Redesigned analytics dashboard showing improved user engagement metrics",},
              { id: "slide-2", src: projectsCarouselSampleSlide2, alt: "projectsCarouselSampleSlide2", caption: "Redesigned analytics dashboard showing improved user engagement metrics" },
              { id: "slide-3", src: projectsCarouselSampleSlide3, alt: "projectsCarouselSampleSlide3" },
              { id: "slide-4", src: projectsCarouselSampleSlide4, alt: "projectsCarouselSampleSlide4" },
              { id: "slide-5", src: projectsCarouselSampleSlide5, alt: "projectsCarouselSampleSlide5" },
              { id: "slide-6", src: projectsCarouselSampleSlide6, alt: "projectsCarouselSampleSlide6" },
              { id: "slide-7", src: projectsCarouselSampleSlide7, alt: "projectsCarouselSampleSlide7" },
              { id: "slide-8", src: projectsCarouselSampleSlide8, alt: "projectsCarouselSampleSlide8" },
              { id: "slide-9", src: projectsCarouselSampleSlide9, alt: "projectsCarouselSampleSlide9"},
            ],
            buttonProps: [
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
            ],
          },
        },

        /* BLOCK 2 — ROW 6 (SECOND) */
        {
          id: "work-experience-meta-info",
          type: "workExperienceMetaInfo",
          enabled: true,
          order: 2,

          data: {
            alignment: {
              body: "left",
            },

            bodyItems: [
              {
                id: "metaInfo",
                heading: {
                  variant: {
                    experience: "heading3",
                    caseStudy: {
                      preview: "heading2",
                      full: "heading1Subpage",
                    },
                  },
                  text: "TechNova Solutions",
                  icon: {
                    svg: workExperienceSubtitleOfficeBuilding.svg,
                    type: workExperienceSubtitleOfficeBuilding.type,
                  },
                },
                body: {
                  timeline: {
                    variant: "bodyBase",
                    text: "Jun 2026 – Present",
                  },

                  labelValueItems: [
                    {
                      label: { 
                        variant: "bodyBase", 
                        modifiers: ["strong"], 
                        text: "Location:" },
                      value: {
                        variant: "bodyBase",
                        text: "Bengaluru, India (Hybrid)",
                      },
                    },
                    {
                      label: { 
                        variant: "bodyBase", 
                        modifiers: ["strong"], 
                        text: "Role:" },
                      value: {
                        variant: "bodyBase",
                        text: "Full-stack Developer",
                      },
                    },
                    {
                      label: {
                        variant: "bodyBase", 
                        modifiers: ["strong"], 
                        text: "Employment Type:",
                      },
                      value: {
                        variant: "bodyBase",
                        text: "Full-time · On Payroll · Hybrid",
                      },
                    },
                    {
                      label: { 
                        variant: "bodyBase", 
                        modifiers: ["strong"], 
                        text: "Domain:" },
                      value: {
                        variant: "bodyBase",
                        text: "FinTech SaaS / Payment Systems",
                      },
                    },
                  ],

                  techStack: {
                    label: {
                      variant: "bodyBase", 
                      modifiers: ["strong"],
                      text: "Tech Stack:",
                    },
                    value: {
                      variant: "bodyBaseTag",
                      texts: [
                        "React",
                        "Node.js",
                        "MongoDB",
                        "Express",
                        "AWS",
                        "Docker",
                      ],
                    },
                  },
                },
              },
            ],
          },
        },

        /* BLOCK 3 — ROW 6 (THIRD) */
        {
          id: "work-experience-highlights",
          type: "workExperienceHighlights",
          enabled: true,
          order: 3,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            bodyItems: [
              {
                id: "keyContributionsAndImpact",
                enabled: true,
                heading: {
                  variant: {
                    home: "heading3",
                    workExperience: "bodyLarge",
                  },
                  modifiers: ["strong",],
                  text: "Key Contributions & Impact",
                  icon: {
                    svg: workExperienceTitleTextblock.svg,
                    type: workExperienceTitleTextblock.type,
                  },
                },
                overview: {
                  variant: "bodyLarge",
                  text: {
                    home: "Contributed to the Payments & Analytics division, building secure and scalable SaaS systems handling thousands of daily financial transactions.",
                    workExperience: null,
                  }
                },
                highlights: {
                  variant: "bodyLarge",
                  as: "li",
                  texts: {
                    home: [
                      "Architected microservices backend handling 10k+ daily transactions.",
                      "Optimized React dashboards, improving page load speed by 40%.",
                      "Implemented CI/CD pipelines using Docker & AWS, reducing deployment time to 10 minutes.",
                      "Collaborated cross-functionally to deliver 3 production features on schedule.",
                    ],
                    workExperience: [
                      "Scalable Transactions: Architected a microservices backend in Node.js & Express to handle 10k+ daily secure transactions with zero data loss incidents.",
                      "Frontend Performance: Refactored React dashboard architecture, leveraging React Query and dynamic imports to reduce page load time by 40% and improve Lighthouse performance scores to 90+.",
                      "DevOps Excellence: Integrated CI/CD with GitHub Actions, Docker, and AWS ECS, cutting deployment cycles from 1 hour to under 10 minutes.",
                      "Collaboration: Worked closely with product managers, QA, and design teams to deliver three major production releases ahead of schedule.",
                      "Security & Compliance: Implemented OWASP best practices and JWT-based authentication, passing all security audits with zero critical vulnerabilities.",
                    ],
                  }
                },
                caseStudyAtAGlance: {
                  variant: "bodyLarge",
                  text: {
                    home: "Full case study includes system architecture, microservices diagrams, and role-specific problem-solving insights.",
                    workExperience: null,
                  }
                },
              },

              {
                id: "challengesAndProblemSolving",
                enabled: {
                  home: false,
                  workExperience: true,
                },
                heading: {
                  variant: {
                    home: "heading3",
                    workExperience: "bodyLarge",
                  },
                  modifiers: ["strong",],
                  text: "Challenges & Problem-Solving",
                  icon: {
                    svg: projectsSubtitleChallengesSolved.svg,
                    type: projectsSubtitleChallengesSolved.type,
                  },
                },
                highlights: {
                  variant: "bodyLarge",
                  as: "li",
                  texts: [
                    "Migrated legacy payment APIs to a distributed microservices architecture with minimal downtime (< 5 mins) by orchestrating blue-green deployments.",
                    "Resolved concurrency bottlenecks in order processing pipeline by introducing a Redis-based queue system, boosting throughput by 25%.",
                  ],
                },
              },
            ],
            buttonProps: {
              variant: {
                home: "secondary",
                workExperience: "primary",
              },
              label: "View TechNova Case Study →",
            },
          },
        },
      ],
    },

    /* ───────────── ROW 7 ───────────── */
    {
      id: "freelanceProjectRetailClient",
      enabled: false,
      domain: "experience", // project / experience
      order: {
        project: 7,
        experience: 7,
        caseStidy: 7,
      }, 
      /** CMS / FILTERING META */
      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: {
        project: 7,
        experience: 7,
        caseStidy: 7,
      },
      primaryCategory: {key: "backend", label: "Backend"},
      secondaryCategories: [
        {key: "freelance", label: "Freelance"},
        {key: "open-source", label: "Open-source"},
      ],

      buttonProps: {
        variant: {
          home: "primary",
          workExperience: "secondary",
        },
        label: "View TechNova Case Study →",
      },

      blocks: [
        /* BLOCK 1 — ROW 7 (FIRST) */
        {
          id: "work-experience-meta-info",
          type: "workExperienceMetaInfo",
          enabled: true,

          data: {
            alignment: {
              body: "left",
            },
            
            bodyItems: [
              {
                id: "metaInfo",
                heading: {
                  variant: "heading3",
                  text: "Freelance Project – Local Retail Client",
                  icon: {
                    svg: workExperienceSubtitleOfficeBuilding.svg,
                    type: workExperienceSubtitleOfficeBuilding.type,
                  },
                },
                body: {
                  timeline: {
                    variant: "bodyBase",
                    text: "Jan 2025 – Mar 2025",
                  },

                  labelValueItems: [
                    {
                      label: { 
                        variant: "bodyBase", 
                        modifiers: ["strong"], 
                        text: "Location:" },
                      value: {
                        variant: "bodyBase",
                        text: "Kolkata, India (Remote)",
                      },
                    },
                    {
                      label: { 
                        variant: "bodyBase", 
                        modifiers: ["strong"], 
                        text: "Role:" },
                      value: {
                        variant: "bodyBase",
                        text:
                          "Full-stack Developer (Contract / Remote)",
                      },
                    },
                    {
                      label: {
                        variant: "bodyBase", 
                        modifiers: ["strong"],
                        text: "Employment Type:",
                      },
                      value: {
                        variant: "bodyBase",
                        text: "Freelance · Contract · Remote",
                      },
                    },
                    {
                      label: { 
                        variant: "bodyBase", 
                        modifiers: ["strong"], 
                        text: "Domain:" },
                      value: {
                        variant: "bodyBase",
                        text: "E-commerce Web Application",
                      },
                    },
                  ],

                  techStack: {
                    label: {
                      variant: "bodyBase", 
                      modifiers: ["strong"],
                      text: "Tech Stack:",
                    },
                    value: {
                      variant: "bodyBaseTag",
                      texts: [
                        "React",
                        "Node.js",
                        "MongoDB",
                        "Express",
                        "Netlify",
                      ],
                    },
                  },
                },
              },
            ],
          },
        },

        /* BLOCK 2 — ROW 7 (SECOND) */
        {
          id: "work-experience-highlights",
          type: "workExperienceHighlights",
          enabled: true,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            bodyItems: [
              {
                id: "keyContributionsAndImpact",
                enabled: true,
                heading: {
                  variant: "heading3",
                  text: "Key Contributions & Impact",
                  icon: {
                    workExperience: null,
                    home: {
                      svg: workExperienceTitleTextblock.svg,
                      type: workExperienceTitleTextblock.type,
                    },
                  },
                },
                overview: {
                  variant: "bodyLarge",
                  text: {
                    home: "Designed and developed a custom e-commerce platform for a local retail client as a short-term freelance engagement.",
                    workExperience: null,
                  }
                },
                highlights: {
                  variant: "bodyLarge",
                  as: "li",
                  texts: {
                    home: [
                      "Built responsive React frontend with product listing and search.",
                      "Developed Node.js & Express APIs for inventory and order management.",
                      "Deployed the application using Netlify and Render free tiers.",
                    ],
                    workExperience: [
                      "Developed a responsive React-based storefront with advanced product search and filtering.",
                      "Created Node.js REST APIs for inventory, orders, and checkout with secure Stripe payment integration.",
                      "Developed a responsive React-based storefront with advanced product search and filtering.",
                      "Delivered full project in 6 weeks, including admin dashboard with analytics view.",
                    ],
                  }
                },
                caseStudyAtAGlance: {
                  variant: "bodyLarge",
                  text: {
                    home: "Case study showcases feature screenshots and deployment workflow.",
                    workExperience: null,
                  }
                },
              },

              {
                id: "challengesAndProblemSolving",
                enabled: {
                  home: false,
                  workExperience: true,
                },
                heading: {
                  variant: "heading3",
                  text: "Challenges & Problem-Solving",
                },
                highlights: {
                  variant: "bodyLarge",
                  as: "li",
                  texts: [
                    "Optimized images and reduced bundle size by 30% for better load speed on slow 3G connections.",
                    "Designed a lightweight caching strategy for high-traffic product pages using HTTP caching headers.",
                  ],
                },
              },
            ],
            buttonProps: {
              variant: {
                home: "secondary",
                workExperience: "primary",
              },
              label: "View Full Case Study →",
            },
          },
        },
      ],
    },
    
  ],
};

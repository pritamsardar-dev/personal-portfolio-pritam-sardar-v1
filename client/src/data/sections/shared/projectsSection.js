import demoProjectsRow from "./demoProjectsRow";
import { filterBarSection } from "../shared/filterBarSection";

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
  projectsSubtitleIndustryBestPractices,
  projectsSubtitleKeyFeatures,
  projectsSubtitleKeyLearnings,
  projectsSubtitlePerformanceAchievements,
  projectsSubtitleProjectGoal,
  projectsSubtitleTechstack,
  projectsTitleTextblock,
} from "../../../assets/icons/content";

export const projectsSection = {
  id: "projects",
  type: "projects",
  enabled: true,
  alignment: {
    heading: "center",
    cta: "center",
    pagination: "center"
  },
  heading: 
    {
      variants: {
        homePage: "heading1",
        projectsPage: "heading1Subpage",
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
  filterBar: {...filterBarSection},
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

      /** CMS / FILTERING META */
      createdAt: "2025-08-15T00:00:00.000Z",
      topOrder: 1, // 1 = highest quality
      primaryCategory: "MERN",
      secondaryCategories: ["Backend", "Portfolio"],
      tags: ["MERN", "Backend"],

      blocks: [
        /* ────────────────────────
         * CAROUSEL BLOCK (ORDER 1)
         * ──────────────────────── */
        {
          id: "project-carousel-devfolio",
          type: "projectsCarouselBlock",
          enabled: true,
          order: 1,

          data: {
            slides: [
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
          id: "project-text-devfolio",
          type: "projectsTextBlock",
          enabled: true,
          order: 2,

          data: {
            heading: {
              variant: "heading2",
              text: "Devfolio – Scalable MERN Stack Portfolio",
              icon: {
                svg: projectsTitleTextblock.svg,
                type: projectsTitleTextblock.type,
              },
            },

            tags: [
              { label: "15 Aug 2025" },
              { label: "80 hrs", iconLeft: TagTimeDurationIcon, iconLeftType: TagTimeDurationIconType },
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
                heading: {
                  variant: "heading3",
                  text: "Project Goal",
                  icon: { svg: projectsSubtitleProjectGoal.svg, type: projectsSubtitleProjectGoal.type },
                },
                body: {
                  variant: "bodyLarge",
                  as: "li",
                  text: [
                    "Build a modern, professional portfolio to presvent my MERN skills",
                    "Deliver a recruiter-friendly experience with clear project demos.",
                    "Focus on scalability and industry-standard development practices.",
                  ],
                },
              },
              {
                heading: {
                  variant: "heading3",
                  text: "Key Features",
                  icon: { svg: projectsSubtitleKeyFeatures.svg, type: projectsSubtitleKeyFeatures.type },
                },
                body: {
                  variant: "bodyLarge",
                  as: "li",
                  text: [
                    "Build a modern, professional portfolio to present my MERN skills.",
                    "Deliver a recruiter-friendly experience with clear project demos.",
                    "Focus on scalability and industry-standard development practices.",
                  ],
                },
              },
              {
                heading: {
                  variant: "heading3",
                  text: "Tech Stack",
                  icon: { svg: projectsSubtitleTechstack.svg, type: projectsSubtitleTechstack.type },
                },
                body: {
                  variant: "bodyLarge",
                  as: "li",
                  text: [
                    "React · Node.js · Express · MongoDB · TailwindCSS",
                    "Atomic design principles with Figma-to-code workflow.",
                  ],
                },
              },
              {
                heading: {
                  variant: "heading3",
                  text: "Industry Best Practices",
                  icon: {
                    svg: projectsSubtitleIndustryBestPractices.svg,
                    type: projectsSubtitleIndustryBestPractices.type,
                  },
                },
                body: {
                  variant: "bodyLarge",
                  as: "li",
                  text: [
                    "Clean, scalable folder structure with reusable components.",
                    "Lazy loading, code splitting, and performance-focused architecture.",
                    "Adhered to industry-standard coding styles and accessibility guidelines.",
                  ],
                },
              },
              {
                heading: {
                  variant: "heading3",
                  text: "Challenges Solved",
                  icon: {
                    svg: projectsSubtitleChallengesSolved.svg,
                    type: projectsSubtitleChallengesSolved.type,
                  },
                },
                body: {
                  variant: "bodyLarge",
                  as: "li",
                  text: [
                    "Ensured image contrast across dark & light themes.",
                    "Optimized carousel performance without affecting responsiveness.",
                    "Maintained design consistency across 3 breakpoints using atomic components.",
                  ],
                },
              },
              {
                heading: {
                  variant: "heading3",
                  text: "Performance Achievements",
                  icon: {
                    svg: projectsSubtitlePerformanceAchievements.svg,
                    type: projectsSubtitlePerformanceAchievements.type,
                  },
                },
                body: {
                  variant: "bodyLarge",
                  as: "li",
                  text: [
                    "Reduced initial load with lazy image strategy and minimal re-renders.",
                    "Responsive, fluid transitions achieving smooth 60fps interactions.",
                  ],
                },
              },
              {
                heading: {
                  variant: "heading3",
                  text: "Key Learnings",
                  icon: {
                    svg: projectsSubtitleKeyLearnings.svg,
                    type: projectsSubtitleKeyLearnings.type,
                  },
                },
                body: {
                  variant: "bodyLarge",
                  as: "li",
                  text: [
                    "Gained experience in scalable full-stack architecture and UI/UX consistency.",
                    "Improved workflow for converting design systems into reusable code.",
                  ],
                },
              },
              {
                heading: {
                  variant: "heading3",
                  text: "Future Scope",
                  icon: {
                    svg: projectsSubtitleFutureScope.svg,
                    type: projectsSubtitleFutureScope.type,
                  },
                },
                body: {
                  variant: "bodyLarge",
                  as: "li",
                  text: [
                    "Integration of blog or CMS and SEO improvements.",
                    "Advanced analytics, project filtering, and multi-language support.",
                  ],
                },
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
    },

    demoProjectsRow(2, 2),
    demoProjectsRow(3, 3),
    demoProjectsRow(4, 4),
    demoProjectsRow(5, 5),
    
  ],
};

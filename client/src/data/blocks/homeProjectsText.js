import { 
    projectsSubtitleChallengesSolved,
    projectsSubtitleFutureScope,
    projectsSubtitleIndustryBestPractices,
    projectsSubtitleKeyFeatures,
    projectsSubtitleKeyLearnings,
    projectsSubtitlePerformanceAchievements,
    projectsSubtitleProjectGoal,
    projectsSubtitleTechstack,
    projectsTitleTextblock 
} from "../../assets/icons/content";

import { 
    HeartReactIcon,
    HeartReactIconType,
    TagEyeIcon, 
    TagEyeIconType, 
    TagHeartFillIcon,
    TagHeartFillIconType
} from "../../assets/icons/system";

export const homeProjectsText = {
    heading: {
        variant: "heading2",
        text: "Devfolio – Scalable MERN Stack Portfolio",
        icon: {
            svg: projectsTitleTextblock.svg,
            type: projectsTitleTextblock.type
        }
    },

    tags: [
        {
            label: "15 Aug 2025"
        },
        {
            label: "618",
            iconLeft: TagEyeIcon,
            iconLeftType: TagEyeIconType
        },
        {
            label: "80",
            iconLeft: TagHeartFillIcon,
            iconLeftType: TagHeartFillIconType
        },
        {
            label: "MERN",
        },
        {
            label: "Backend",
        }
    ],

    overview: {
        variant: "bodyLarge",
        text: "A professional full‑stack portfolio designed to showcase my work, optimized for performance, scalability, and an engaging recruiter experience."
    },

    ctaDefault: [
        {
            id: "projects-view-details-toggle",
            role: "toggle",
            variant: "secondary",
            labels: {
                collapsed: "View details",
                expanded: "Show less",
            },
            onClick: () => {}
        },
        {
            id: "projects-case-study-link",
            role: "primary-action",
            variant: "primary",
            label: "Full Case Study",
            onClick: () => {}
        },
        {
            id: "projects-like",
            role: "utility",
            variant: "overlay",
            iconsLeft: {
                default: HeartReactIcon,
                active: TagHeartFillIcon
            },
            iconsLeftType: {
                default: HeartReactIconType,
                active: TagHeartFillIconType
            },
            labels: {
                default: "Like",
                active: "Liked"
            },
            onClick: () => {}
        }
    ],

    description: [
        {
            heading: {
                variant: "heading3",
                text: "Project Goal",
                icon: {
                    svg: projectsSubtitleProjectGoal.svg,
                    type: projectsSubtitleProjectGoal.type
                }
            },
            body: {
            variant: "bodyLarge",
            as: "li",
            text: [
                "Build a modern, professional portfolio to presvent my MERN skills",
                "Deliver a recruiter‑friendly experience with clear project demos.",
                "Focus on scalability and industry‑standard development practices."
            ]
            }
        },
        {
            heading: {
                variant: "heading3",
                text: "Key Features",
                icon: {
                    svg: projectsSubtitleKeyFeatures.svg,
                    type: projectsSubtitleKeyFeatures.type
                }
            },
            body: {
            variant: "bodyLarge",
            as: "li",
            text: [
                "Build a modern, professional portfolio to present my MERN skills.",
                "Deliver a recruiter‑friendly experience with clear project demos.",
                "Focus on scalability and industry‑standard development practices."
            ]
            }
        },
        {
            heading: {
                variant: "heading3",
                text: "Tech Stack",
                icon: {
                    svg: projectsSubtitleTechstack.svg,
                    type: projectsSubtitleTechstack.type
                }
            },
            body: {
            variant: "bodyLarge",
            as: "li",
            text: [
                "React · Node.js · Express · MongoDB · TailwindCSS",
                "Atomic design principles with Figma‑to‑code workflow."
            ]
            }
        },
        {
            heading: {
                variant: "heading3",
                text: "Industry Best Practices",
                icon: {
                    svg: projectsSubtitleIndustryBestPractices.svg,
                    type: projectsSubtitleIndustryBestPractices.type
                }
            },
            body: {
            variant: "bodyLarge",
            as: "li",
            text: [
                "Clean, scalable folder structure with reusable components.",
                "Lazy loading, code splitting, and performance‑focused architecture.",
                "Adhered to industry‑standard coding styles and accessibility guidelines."
            ]
            }
        },
        {
            heading: {
                variant: "heading3",
                text: "Challenges Solved",
                icon: {
                    svg: projectsSubtitleChallengesSolved.svg,
                    type: projectsSubtitleChallengesSolved.type
                }
            },
            body: {
            variant: "bodyLarge",
            as: "li",
            text: [
                "Ensured image contrast across dark & light themes.",
                "Optimized carousel performance without affecting responsiveness.",
                "Maintained design consistency across 3 breakpoints using atomic components."
            ]
            }
        },
        {
            heading: {
                variant: "heading3",
                text: "Performance Achievements",
                icon: {
                    svg: projectsSubtitlePerformanceAchievements.svg,
                    type: projectsSubtitlePerformanceAchievements.type
                }
            },
            body: {
            variant: "bodyLarge",
            as: "li",
            text: [
                "Reduced initial load with lazy image strategy and minimal re-renders.",
                "Responsive, fluid transitions achieving smooth 60fps interactions."
            ]
            }
        },
        {
            heading: {
                variant: "heading3",
                text: "Key Learnings",
                icon: {
                    svg: projectsSubtitleKeyLearnings.svg,
                    type: projectsSubtitleKeyLearnings.type
                }
            },
            body: {
            variant: "bodyLarge",
            as: "li",
            text: [
                "Gained experience in scalable full‑stack architecture and UI/UX consistency.",
                "Improved workflow for converting design systems into reusable code."
            ]
            }
        },
        {
            heading: {
                variant: "heading3",
                text: "Future Scope",
                icon: {
                    svg: projectsSubtitleFutureScope.svg,
                    type: projectsSubtitleFutureScope.type
                }
            },
            body: {
            variant: "bodyLarge",
            as: "li",
            text: [
                "Integration of blog or CMS and SEO improvements.",
                "Advanced analytics, project filtering, and multi‑language support."
            ]
            }
        },
    ],

    ctaExpanded: [
        {
            id: "projects-live-demo-link",
            role: "primary-action",
            variant: "primary",
            label: "Live demo",
            onClick: () => {}
        },
        {
            id: "projects-source-code-link",
            role: "secondary-action",
            variant: "secondary",
            label: "Source code",
            onClick: () => {}
        },
        {
            id: "projects-design-file-link",
            role: "secondary-action",
            variant: "secondary",
            label: "Design file",
            onClick: () => {}
        },
        {
            id: "projects-case-study-link",
            role: "secondary-action",
            variant: "secondary",
            label: "Full case study",
            onClick: () => {}
        },
        {
            id: "projects-view-less-toggle",
            role: "toggle",
            variant: "secondary",
            label: "Show less",
            onClick: () => {}
        },
    ]
};
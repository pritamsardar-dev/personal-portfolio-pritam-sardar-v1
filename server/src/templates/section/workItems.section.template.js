import { pulmoAiProjectRow } from "./workitems-content/pulmoai.js";
import { taskFlowProjectRow } from "./workitems-content/taskflow.js";
import { blogSpaceProjectRow } from "./workitems-content/blogspace.js";
import { vidFlowProjectRow } from "./workitems-content/vidflow.js";
import { fullstackDeveloper01Row } from "./workitems-content/fullstackDeveloper01.js";
import { personalPortfolioProjectRow } from "./workitems-content/personalPortfolio.js";

export const workItemsSectionTemplate = {
  id: "work-items",
  type: "workItems",
  assetFolder: "work-items",

  alignment: {
    project: {
      heading: "center",
      cta: "center",
    },
    experience: {
      heading: "center",
      cta: "center",
      pagination: "center",
    },
    caseStudy: {
      heading: "center",
      cta: "center",
      pagination: "center",
    },
  },

  heading: {
    project: {
      variants: {
        homePage: "heading1",
        subPage: "heading1Subpage",
        fullScreenPage: "heading2",
      },
      texts: {
        default: "Portfolio Projects",
        fullScreenPage: "Related Projects",
      },
      icons: {
        default: {
          src: "icons/content/projects-heading.svg",
          public_id: "",
          type: "stroke",
        },
        fullscreenPage: {
          src: "icons/content/projects-heading.svg",
          public_id: "",
          type: "stroke",
        },
      },
    },
    experience: {
      variant: {
        home: "heading1",
        workExperience: "heading1Subpage",
      },
      text: "Work Experience",
      icon: {
        src: "icons/content/work-experience-heading.svg",
        public_id: "",
        type: "stroke",
      },
    },
    caseStudy: {
      variants: {
        subPage: "heading1Subpage",
        fullScreenPage: "heading2",
      },
      texts: {
        default: "Case Studies",
        fullScreenPage: "Related Case Studies",
      },
      icons: {
        default: {
          src: "icons/content/case-studies-heading.svg",
          public_id: "",
          type: "stroke",
        },
        fullscreenPage: {
          src: "icons/content/case-studies-heading.svg",
          public_id: "",
          type: "stroke",
        },
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
          { value: "top", label: "Top" },
          { value: "newest", label: "Newest" },
          { value: "popular", label: "Popular" },
        ],
        error: "",
      },
      clearButtonProps: {
        id: "action-clear",
        variant: "tag",
        label: "Clear",
      },
    },
    caseStudy: {
      selectProps: {
        variant: "selectCustom",
        label: "",
        name: "choice",
        placeholder: "Select one",
        options: [
          { value: "top", label: "Top" },
          { value: "newest", label: "Newest" },
          { value: "popular", label: "Popular" },
        ],
        error: "",
      },
      clearButtonProps: {
        id: "action-clear",
        variant: "tag",
        label: "Clear",
      },
    },
  },

  workExperienceHighlightsCtaProps: {
    variant: {
      home: "secondary",
      workExperience: "primary",
    },
    label: "View Full Case Study",
    icon: "ChevronRight",
    action: "navigate",
    target: "/full-case-study",
  },

  WorkExperienceHomeCtaProps: {
    variant: "secondary",
    label: "View All Work Experience",
    icon: "ChevronRight",
    action: "navigate",
    target: "/work-experience",
  },

  projectsHomeCtaProps: {
    variant: "secondary",
    label: "View All Projects",
    icon: "ChevronRight",
    action: "navigate",
    target: "/projects",
  },

  carouselBlockButtonProps: [
    {
      id: "arrow-left",
      role: "navigation",
      variant: "iconOnlyCircularOverlay",
    },
    {
      id: "arrow-right",
      role: "navigation",
      variant: "iconOnlyCircularOverlay",
    },
    {
      id: "play",
      role: "utility",
      variant: "iconOnlyCircularOverlay",
    },
    {
      id: "pause",
      role: "utility",
      variant: "iconOnlyCircularOverlay",
    },
    {
      id: "fullscreen",
      role: "utility",
      variant: "iconOnlyRectangularOverlay",
    },
    {
      id: "close-fullscreen",
      role: "utility",
      variant: "iconOnlyRectangularOverlay",
    },
    {
      id: "live-demo-link",
      order: 1,
      role: "cta",
      variant: "overlayDefault",
      label: "Live Site",
      action: "external",
    },
    {
      id: "source-code-link",
      order: 1,
      role: "cta",
      variant: "overlayDefault",
      label: "Source Code",
      action: "external",
    },
    {
      id: "design-file-link",
      order: 3,
      role: "cta",
      variant: "overlayDefault",
      label: "Design File",
      action: "external",
    },
  ],

  textBlockCtaProps: [
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
      icon: {
        expanded: "ChevronUp",
      },
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
          expanded: "primary",
          full: "primary",
        },
      },
      label: {
        project: "Full Case Study",
        caseStudy: {
          collapsed: "Read",
          expanded: "Full Case Study",
        },
      },
      icon: "ChevronRight",
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
        },
      },
      label: "Live demo",
      icon: "ChevronUpRight",
      action: "external",
    },
    {
      id: "source-code-link",
      order: {
        project: {
          expanded: 2,
        },
        caseStudy: 2,
      },
      role: "secondary-action",
      variant: "secondary",
      label: "Source code",
      icon: "ChevronUpRight",
      action: "external",
    },
    {
      id: "design-file-link",
      order: {
        project: {
          expanded: 3,
        },
        caseStudy: 2,
      },
      role: "secondary-action",
      variant: "secondary",
      label: "Design file",
      icon: "ChevronUpRight",
      action: "external",
    },
  ],

  relatedWorkItemsCtas: [
    {
      id: "load-more",
      role: "action",
      variant: "overlay",
      label: "Load More",
      icon: "ChevronDown",
    },
    {
      id: "return-to-source",
      role: "navigation",
      variant: "overlay",
      label: "Return to Source",
      icon: "ChevronLeft",
    },
  ],

  rows: [
    // Projects Fast Update Rows
    pulmoAiProjectRow,
    taskFlowProjectRow,
    blogSpaceProjectRow,
    vidFlowProjectRow,
    personalPortfolioProjectRow,
    

    // Row-1 Project Template
    // {
    //   id: "project-row-your-project",
    //   title: "Your Project Title: Short Tagline",
    //   enabled: true,
    //   domain: "project",
    //   order: 10,
    //   topOrder: 10,
    //   createdAt: "YYYY-MM-DDT00:00:00.000Z",
    //   primaryCategory: { key: "primary-category-key", label: "Primary Category" },
    //   secondaryCategories: [
    //     { key: "secondary-category-key-1", label: "Secondary Category 1" },
    //     { key: "secondary-category-key-2", label: "Secondary Category 2" },
    //   ],
    //   featured: true,

    //   links: {
    //     liveDemo: {
    //       url: "",
    //       message: {
    //         title: "Live Demo Not Available",
    //         text: "Replace with a reason the live demo is not available, or remove this message if a URL is provided.",
    //       },
    //     },
    //     sourceCode: {
    //       url: "",
    //       message: {
    //         title: "Source Code Private",
    //         text: "Replace with a reason the source code is not public, or remove this message if a URL is provided.",
    //       },
    //     },
    //     designFile: {
    //       url: "",
    //       message: {
    //         title: "Design File Not Public",
    //         text: "Replace with a reason the design file is not available, or remove this message if a URL is provided.",
    //       },
    //     },
    //   },

    //   blocks: [
    //     {
    //       id: "images-your-project",
    //       type: {
    //         project: "carouselBlock",
    //         caseStudy: "imageBlock",
    //       },
    //       enabled: true,
    //       order: 1,
    //       data: {
    //         coverImageId: "hero",
    //         images: [
    //           {
    //             id: "hero",
    //             sources: {
    //               light: { src: "images/workitems/project-template-hero-light.png", public_id: "" },
    //               dark: { src: "images/workitems/project-template-hero-dark.png", public_id: "" },
    //             },
    //             alt: "Primary project showcase screenshot",
    //             caption: "Replace with the most important screenshot of your project. This should immediately communicate what the product does and why it matters.",
    //           },
    //           {
    //             id: "feature-1",
    //             sources: {
    //               light: { src: "images/workitems/project-template-feature-1-light.png", public_id: "" },
    //               dark: { src: "images/workitems/project-template-feature-1-dark.png", public_id: "" },
    //             },
    //             alt: "Feature workflow screenshot",
    //             caption: "Replace with a screenshot demonstrating a key workflow, user journey, dashboard, form, management panel, or core feature.",
    //           },
    //           {
    //             id: "feature-2",
    //             sources: {
    //               light: { src: "images/workitems/project-template-feature-2-light.png", public_id: "" },
    //               dark: { src: "images/workitems/project-template-feature-2-dark.png", public_id: "" },
    //             },
    //             alt: "Results or secondary feature screenshot",
    //             caption: "Replace with a screenshot showing results, analytics, reports, outputs, visualizations, settings, or another important capability.",
    //           },
    //         ],
    //       },
    //     },
    //     {
    //       id: "text-your-project",
    //       type: "workItemsTextBlock",
    //       enabled: true,
    //       order: 2,
    //       data: {
    //         heading: {
    //           variant: {
    //             project: "heading2",
    //             caseStudy: {
    //               preview: "heading2",
    //               full: "heading1Subpage",
    //             },
    //           },
    //           text: "Your Project Title: Short Tagline",
    //           icon: {
    //             src: "icons/content/projects-title-textblock.svg",
    //             public_id: "",
    //             type: "stroke",
    //           },
    //         },
    //         tags: [
    //           { label: "DD Mon YYYY", icon: "CalendarEvent", tooltip: "Project creation date" },
    //           {
    //             id: "duration",
    //             label: { project: "XX hrs", caseStudy: "X min read" },
    //             icon: "Clock",
    //             tooltip: "Build time / read time",
    //           },
    //           { id: "views", label: "0", icon: "Eye", tooltip: "Total views" },
    //           { label: "Core Tech 1", icon: "BrandReact", tooltip: "Replace with tech role e.g. Frontend framework" },
    //           { label: "Core Tech 2", tooltip: "Replace with tech role" },
    //           { label: "Primary Category", tooltip: "Project category" },
    //           { label: "Secondary Category", tooltip: "Project domain" },
    //         ],
    //         overview: {
    //           variant: "bodyLarge",
    //           text: "Replace with one to two sentences: what the project is, what problem it solves, who it is for, and the scale at which it operates. Scale means number of users, customers, requests per day, dataset size, or team size whichever number makes the scope legible. A project with 10 users and one with 10,000 read very differently. Make the scale clear from the first sentence. Writing rules that apply to every field in this entire template: write 'used', not 'leveraged' or 'utilized'. Write what you built and what changed because of it, not that you 'delivered impactful solutions'. Write in first person. 'I built' is stronger than 'the system was built'. Never write 'passionate about'. A recruiter is not a marketing audience.",
    //         },
    //         description: [
    //           {
    //             enabled: {
    //               preview: false,
    //               full: true,
    //             },
    //             order: 1,
    //             heading: {
    //               variant: "heading2",
    //               text: "Executive Summary",
    //               icon: {
    //                 src: "icons/content/projects-subtitle-executive-summary.svg",
    //                 public_id: "",
    //                 type: "stroke",
    //               },
    //             },
    //             body: [
    //               {
    //                 type: "text",
    //                 variant: "bodyLarge",
    //                 text: "Replace with 2 to 3 sentences describing what you built and the core problem it addresses. State the problem clearly before the solution. A recruiter should understand the project from this paragraph alone.",
    //               },
    //               {
    //                 type: "text",
    //                 variant: "bodyLarge",
    //                 text: "Replace with 2 to 3 sentences on the main architectural or technical decision that defines this project. Explain how that decision solves the problem and why it was the right call for this specific context.",
    //               },
    //               {
    //                 type: "text",
    //                 variant: "bodyLarge",
    //                 text: "Replace with one sentence connecting the approach to your working style or a broader professional value.",
    //               },
    //             ],
    //           },
    //           {
    //             enabled: {
    //               preview: true,
    //               full: true,
    //             },
    //             order: {
    //               preview: 1,
    //               full: 2,
    //             },
    //             heading: {
    //               variant: {
    //                 preview: "heading3",
    //                 full: "heading2",
    //               },
    //               text: "Project Goals",
    //               icon: {
    //                 src: "icons/content/projects-subtitle-project-goal.svg",
    //                 public_id: "",
    //                 type: "stroke",
    //               },
    //             },
    //             body: [
    //               {
    //                 enabled: {
    //                   preview: true,
    //                   full: false,
    //                 },
    //                 type: "list",
    //                 variant: "bodyLarge",
    //                 as: "li",
    //                 texts: [
    //                   "Replace with goal 1 in one short sentence",
    //                   "Replace with goal 2 in one short sentence",
    //                   "Replace with goal 3 in one short sentence",
    //                 ],
    //               },
    //               {
    //                 enabled: {
    //                   preview: false,
    //                   full: true,
    //                 },
    //                 type: "text",
    //                 variant: "bodyLarge",
    //                 text: "Replace with one sentence stating the primary objective of this project.",
    //               },
    //               {
    //                 enabled: {
    //                   preview: false,
    //                   full: true,
    //                 },
    //                 type: "list",
    //                 variant: "bodyLarge",
    //                 as: "li",
    //                 texts: [
    //                   "Replace with goal 1",
    //                   "Replace with goal 2",
    //                   "Replace with goal 3",
    //                   "Replace with goal 4",
    //                   "Replace with goal 5",
    //                 ],
    //               },
    //               {
    //                 enabled: {
    //                   preview: false,
    //                   full: true,
    //                 },
    //                 type: "text",
    //                 variant: "bodyLarge",
    //                 text: "Replace with one or two sentences explaining where these goals came from. Was this a problem you personally experienced, a gap you spotted in the market, or a limitation you hit in an earlier project? Goals that have a real origin feel genuine. Goals with no context feel invented.",
    //               },
    //             ],
    //           },
    //           {
    //             enabled: {
    //               preview: false,
    //               full: true,
    //             },
    //             order: 3,
    //             heading: {
    //               variant: "heading2",
    //               text: "Architecture and Approach",
    //               icon: {
    //                 src: "icons/content/projects-subtitle-architecture-approach.svg",
    //                 public_id: "",
    //                 type: "stroke",
    //               },
    //             },
    //             body: [
    //               {
    //                 type: "text",
    //                 variant: "bodyLarge",
    //                 text: "Replace with one sentence naming the core architectural decision or design pattern that drives this project.",
    //               },
    //               {
    //                 type: "text",
    //                 variant: "bodyLarge",
    //                 text: "Replace with one short sentence introducing the structural decisions below. For example: the system is built around four key ideas that work together.",
    //               },
    //               {
    //                 type: "list",
    //                 as: "li",
    //                 variant: "bodyLarge",
    //                 texts: [
    //                   "Replace with architectural decision 1 and its purpose",
    //                   "Replace with architectural decision 2 and its purpose",
    //                   "Replace with architectural decision 3 and its purpose",
    //                   "Replace with architectural decision 4 and its purpose",
    //                 ],
    //               },
    //               {
    //                 type: "text",
    //                 variant: "bodyLarge",
    //                 text: "Replace with one sentence summarizing what this approach achieves and why it was the right choice for this specific project.",
    //               },
    //               {
    //                 type: "text",
    //                 variant: "bodyLarge",
    //                 text: "Replace with one or two sentences describing what alternatives you evaluated before landing on this approach. For example: you might have considered a different state management tool, a different data model, or a different rendering strategy. Name what you looked at and why you moved past it. A senior reader wants to see that you weighed the options, not just that you picked one.",
    //               },
    //               {
    //                 type: "list",
    //                 as: "li",
    //                 variant: "bodyLarge",
    //                 texts: [
    //                   "Replace with alternative 1 you considered and one sentence on why you ruled it out",
    //                   "Replace with alternative 2 you considered and one sentence on why you ruled it out",
    //                   "Replace with alternative 3 you considered and one sentence on why you ruled it out",
    //                 ],
    //               },
    //               {
    //                 type: "text",
    //                 variant: "bodyLarge",
    //                 text: "Replace with one sentence on what you gave up or traded off by going with the chosen approach. Every good decision has a cost. Naming the trade-off shows that you understood the full picture.",
    //               },
    //             ],
    //           },
    //           {
    //             enabled: {
    //               preview: true,
    //               full: true,
    //             },
    //             order: {
    //               preview: 2,
    //               full: 4,
    //             },
    //             heading: {
    //               variant: {
    //                 preview: "heading3",
    //                 full: "heading2",
    //               },
    //               text: "Key Features",
    //               icon: {
    //                 src: "icons/content/projects-subtitle-key-features.svg",
    //                 public_id: "",
    //                 type: "stroke",
    //               },
    //             },
    //             body: [
    //               {
    //                 enabled: {
    //                   preview: true,
    //                   full: false,
    //                 },
    //                 type: "list",
    //                 variant: "bodyLarge",
    //                 as: "li",
    //                 texts: [
    //                   "Replace with feature 1 in one line",
    //                   "Replace with feature 2 in one line",
    //                   "Replace with feature 3 in one line",
    //                 ],
    //               },
    //               {
    //                 enabled: {
    //                   preview: false,
    //                   full: true,
    //                 },
    //                 type: "list",
    //                 variant: "bodyLarge",
    //                 as: "li",
    //                 texts: [
    //                   "Replace with feature 1 and a brief detail about what it does and why it matters",
    //                   "Replace with feature 2 and a brief detail about what it does and why it matters",
    //                   "Replace with feature 3 and a brief detail about what it does and why it matters",
    //                   "Replace with feature 4 and a brief detail about what it does and why it matters",
    //                   "Replace with feature 5 and a brief detail about what it does and why it matters",
    //                   "Replace with feature 6 and a brief detail about what it does and why it matters",
    //                 ],
    //               },
    //             ],
    //           },
    //           {
    //             enabled: {
    //               preview: true,
    //               full: true,
    //             },
    //             order: {
    //               preview: 3,
    //               full: 5,
    //             },
    //             heading: {
    //               variant: {
    //                 preview: "heading3",
    //                 full: "heading2",
    //               },
    //               text: {
    //                 preview: "Tech Stack",
    //                 full: "Technology and Tools",
    //               },
    //               icon: {
    //                 src: "icons/content/projects-subtitle-technology-and-tools.svg",
    //                 public_id: "",
    //                 type: "stroke",
    //               },
    //             },
    //             body: [
    //               {
    //                 enabled: {
    //                   preview: true,
    //                   full: false,
    //                 },
    //                 type: "list",
    //                 variant: "bodyLarge",
    //                 as: "li",
    //                 texts: [
    //                   "Replace with your main technologies listed in one line",
    //                   "Replace with any design tools, workflows, or supporting tools",
    //                 ],
    //               },
    //               {
    //                 enabled: {
    //                   preview: false,
    //                   full: true,
    //                 },
    //                 type: "text",
    //                 variant: "bodyLarge",
    //                 text: "Replace with one or two sentences on why this specific stack was chosen for this specific project. Do not just say it balances speed and scalability. Explain what problem or business need made this stack the right fit here, and why the obvious alternatives did not work as well.",
    //               },
    //               {
    //                 enabled: {
    //                   preview: false,
    //                   full: true,
    //                 },
    //                 type: "labelValueList",
    //                 as: "li",
    //                 variant: "bodyLarge",
    //                 modifiers: ["strong"],
    //                 texts: [
    //                   {
    //                     label: "Frontend:",
    //                     value: "Replace with frontend technology, how it is used in this project, and why it was chosen over the most common alternative. For example: React was chosen over Vue because the component reuse pattern fit the case study data model better.",
    //                   },
    //                   {
    //                     label: "Styling:",
    //                     value: "Replace with styling approach, any specific system or methodology used, and why this approach was right for this project rather than a different one.",
    //                   },
    //                   {
    //                     label: "Backend:",
    //                     value: "Replace with backend technology, what it handles in this project, and one reason why this runtime or framework was the right call here.",
    //                   },
    //                   {
    //                     label: "Database:",
    //                     value: "Replace with database technology and a clear reason why this database fits the data model for this project. What would a different database have made harder?",
    //                   },
    //                   {
    //                     label: "Performance Optimization:",
    //                     value: "Replace with specific techniques used to keep the app fast. Name the technique and what problem it solved.",
    //                   },
    //                 ],
    //               },
    //               {
    //                 enabled: {
    //                   preview: false,
    //                   full: true,
    //                 },
    //                 type: "text",
    //                 variant: "bodyLarge",
    //                 text: "Replace with one sentence on what this stack makes possible long term, or what it would make harder to change if requirements shifted.",
    //               },
    //             ],
    //           },
    //           {
    //             enabled: {
    //               preview: true,
    //               full: true,
    //             },
    //             order: {
    //               preview: 4,
    //               full: 6,
    //             },
    //             heading: {
    //               variant: {
    //                 preview: "heading3",
    //                 full: "heading2",
    //               },
    //               text: {
    //                 preview: "Challenges Solved",
    //                 full: "Challenges and Solutions",
    //               },
    //               icon: {
    //                 src: "icons/content/projects-subtitle-challenges-solved.svg",
    //                 public_id: "",
    //                 type: "stroke",
    //               },
    //             },
    //             body: [
    //               {
    //                 enabled: {
    //                   preview: true,
    //                   full: false,
    //                 },
    //                 type: "labelValueList",
    //                 variant: "bodyLarge",
    //                 modifiers: ["strong"],
    //                 as: "li",
    //                 texts: [
    //                   { label: "Challenge 1:", value: "Replace with how you solved it in one sentence." },
    //                   { label: "Challenge 2:", value: "Replace with how you solved it in one sentence." },
    //                   { label: "Challenge 3:", value: "Replace with how you solved it in one sentence." },
    //                 ],
    //               },
    //               {
    //                 enabled: {
    //                   preview: false,
    //                   full: true,
    //                 },
    //                 type: "labelValueList",
    //                 variant: "bodyLarge",
    //                 modifiers: ["strong"],
    //                 as: "li",
    //                 texts: [
    //                   {
    //                     label: "Replace with challenge 1:",
    //                     value: "Replace with the context of the problem, how you approached it, and the outcome. Be specific. Vague challenges like 'performance was slow' are less useful than 'initial load time was over four seconds on mobile because of unoptimized image loading, which we fixed by implementing lazy loading and converting images to WebP.'",
    //                   },
    //                   {
    //                     label: "Replace with challenge 2:",
    //                     value: "Replace with the context of the problem, how you approached it, and the outcome.",
    //                   },
    //                   {
    //                     label: "Replace with challenge 3:",
    //                     value: "Replace with the context of the problem, how you approached it, and the outcome.",
    //                   },
    //                   {
    //                     label: "Replace with challenge 4:",
    //                     value: "Replace with the context of the problem, how you approached it, and the outcome.",
    //                   },
    //                 ],
    //               },
    //               {
    //                 enabled: {
    //                   preview: false,
    //                   full: true,
    //                 },
    //                 type: "text",
    //                 variant: "bodyLarge",
    //                 text: "Replace with one sentence on the common mindset or principle behind how you approached these challenges.",
    //               },
    //             ],
    //           },
    //           {
    //             enabled: {
    //               preview: true,
    //               full: true,
    //             },
    //             order: {
    //               preview: 5,
    //               full: 7,
    //             },
    //             heading: {
    //               variant: {
    //                 preview: "heading3",
    //                 full: "heading2",
    //               },
    //               text: "Performance and Achievements",
    //               icon: {
    //                 src: "icons/content/projects-subtitle-performance-achievements.svg",
    //                 public_id: "",
    //                 type: "stroke",
    //               },
    //             },
    //             body: [
    //               {
    //                 enabled: {
    //                   preview: true,
    //                   full: false,
    //                 },
    //                 type: "list",
    //                 variant: "bodyLarge",
    //                 as: "li",
    //                 texts: [
    //                   "Replace with your single strongest result and lead with the number. Examples: reduced load time from 4s to 0.8s, increased conversion by 22%, served 50k concurrent users with zero downtime. If you have no number, name the clearest observable outcome. The preview is scanned first. Put the most convincing evidence here, not in the full view.",
    //                   "Replace with a second concrete result. One line only. Numbers carry more weight in preview than anywhere else in the template.",
    //                 ],
    //               },
    //               {
    //                 enabled: {
    //                   preview: false,
    //                   full: true,
    //                 },
    //                 type: "list",
    //                 variant: "bodyLarge",
    //                 as: "li",
    //                 texts: [
    //                   "Replace with achievement 1. Use a metric or specific outcome where possible. Numbers matter here: percentages, load times, reduction in lines of code, reduction in errors, user counts, or time saved.",
    //                   "Replace with achievement 2. Use a metric or specific outcome where possible.",
    //                   "Replace with achievement 3. Use a metric or specific outcome where possible.",
    //                   "Replace with achievement 4. Use a metric or specific outcome where possible.",
    //                   "Replace with achievement 5. Use a metric or specific outcome where possible.",
    //                 ],
    //               },
    //               {
    //                 enabled: {
    //                   preview: false,
    //                   full: true,
    //                 },
    //                 type: "image",
    //                 imageId: "feature-1",
    //               },
    //               {
    //                 enabled: {
    //                   preview: false,
    //                   full: true,
    //                 },
    //                 type: "text",
    //                 variant: "bodyLarge",
    //                 text: "Replace with one sentence summarizing what this project became by the end.",
    //               },
    //             ],
    //           },
    //           {
    //             enabled: {
    //               preview: false,
    //               full: true,
    //             },
    //             order: 8,
    //             type: {
    //               preview: "list",
    //               full: "text",
    //             },
    //             heading: {
    //               variant: {
    //                 preview: "heading3",
    //                 full: "heading2",
    //               },
    //               text: "Key Learnings",
    //               icon: {
    //                 src: "icons/content/projects-subtitle-key-learnings.svg",
    //                 public_id: "",
    //                 type: "stroke",
    //               },
    //             },
    //             body: [
    //               {
    //                 type: "list",
    //                 variant: "bodyLarge",
    //                 as: "li",
    //                 texts: [
    //                   "Replace with learning 1. Write it as a principle, not a task. For example: strong data modeling prevents long-term architectural debt. Not: I learned to model data better.",
    //                   "Replace with learning 2. Write it as a principle, not a task.",
    //                   "Replace with learning 3. Write it as a principle, not a task.",
    //                   "Replace with learning 4. Write it as a principle, not a task.",
    //                   "Replace with learning 5. Write it as a principle, not a task.",
    //                 ],
    //               },
    //               {
    //                 type: "text",
    //                 variant: "bodyLarge",
    //                 text: "Replace with one sentence on how this project changed the way you think or work.",
    //               },
    //               {
    //                 type: "text",
    //                 variant: "bodyLarge",
    //                 text: "Replace with one honest paragraph on what you would have done differently if you started this project over. Be specific. Name a decision you made early that created friction later, or something you underestimated. This is not a weakness to hide. Hiring managers trust a candidate more when they can acknowledge imperfection than when every section reads as though everything went perfectly.",
    //               },
    //             ],
    //           },
    //           {
    //             enabled: {
    //               preview: false,
    //               full: true,
    //             },
    //             order: 9,
    //             heading: {
    //               variant: {
    //                 preview: "heading3",
    //                 full: "heading2",
    //               },
    //               text: "Future Scope",
    //               icon: {
    //                 src: "icons/content/projects-subtitle-future-scope.svg",
    //                 public_id: "",
    //                 type: "stroke",
    //               },
    //             },
    //             body: [
    //               {
    //                 type: "text",
    //                 variant: "bodyLarge",
    //                 text: "Replace with one or two sentences on what you would build or improve next and why that is the right priority. A plain list of features tells the reader what you thought of. A reasoned answer tells them how you think. Ask yourself: what is the highest leverage thing to do next, and what would it unlock? Answer that question here instead of listing wishes.",
    //               },
    //               {
    //                 type: "list",
    //                 variant: "bodyLarge",
    //                 as: "li",
    //                 texts: [
    //                   "Replace with next priority 1 and one sentence on why it is the right thing to do now",
    //                   "Replace with next priority 2 and one sentence on what it would enable or unblock",
    //                   "Replace with next priority 3 and one sentence on why it follows logically from what is already built",
    //                   "Replace with next priority 4 and one sentence on the business or user value it would deliver",
    //                   "Replace with next priority 5 and one sentence on why it is lower priority than the ones above",
    //                 ],
    //               },
    //             ],
    //           },
    //         ],
    //       },
    //     },
    //   ],
    // },

    // Work Experience Fast Update Rows
    fullstackDeveloper01Row,

    // Row-2 Work Experience Template
    // {
    //   id: "your-role-company",
    //   title: "Your Job Title",
    //   enabled: false,
    //   domain: "experience",
    //   order: 10,
    //   topOrder: 10,
    //   createdAt: "YYYY-MM-DDT00:00:00.000Z",
    //   featured: true,
    //   primaryCategory: { key: "primary-category-key", label: "Primary Category" },
    //   secondaryCategories: [
    //     { key: "secondary-category-key-1", label: "Secondary Category 1" },
    //     { key: "secondary-category-key-2", label: "Secondary Category 2" },
    //   ],

    //   buttonProps: {
    //     variant: {
    //       home: "primary",
    //       workExperience: "secondary",
    //     },
    //     label: "View Company Name Case Study",
    //     icon: "ChevronRight",
    //   },

    //   tags: [
    //     { label: "Mon YYYY to Present", icon: "CalendarEvent", tooltip: "Employment period" },
    //     { id: "duration", label: "X min read", icon: "Clock", tooltip: "Case study read time" },
    //     { id: "views", label: "0", icon: "Eye", tooltip: "Total views" },
    //   ],

    //   fullCaseStudy: [
    //     {
    //       enabled: true,
    //       order: 1,
    //       heading: {
    //         variant: "heading2",
    //         text: "Executive Summary",
    //         icon: {
    //           src: "icons/content/projects-subtitle-executive-summary.svg",
    //           public_id: "",
    //           type: "stroke",
    //         },
    //       },
    //       body: [
    //         {
    //           type: "text",
    //           variant: "bodyLarge",
    //           text: "Replace with 2 to 3 sentences describing the company and what it builds. Then explain your role and which areas you worked across. A reader who knows nothing about the company should understand the context from this paragraph alone.",
    //         },
    //         {
    //           type: "text",
    //           variant: "bodyLarge",
    //           text: "Replace with 1 to 2 sentences on the overall impact your work had on the business or the team. Be specific about the scale or outcome where you can.",
    //         },
    //       ],
    //     },
    //     {
    //       enabled: true,
    //       order: 2,
    //       heading: {
    //         variant: "heading2",
    //         text: "Business Context",
    //         icon: {
    //           src: "icons/content/work-experience-subtitle-business-context.svg",
    //           public_id: "",
    //           type: "stroke",
    //         },
    //       },
    //       body: [
    //         {
    //           type: "text",
    //           variant: "bodyLarge",
    //           text: "Replace with one sentence describing the company stage and the pressures that came with it. Name the stage explicitly: early stage startup, Series B growth phase, established enterprise, bootstrapped, post-acquisition, or whichever term fits. That single label reframes every decision described below. A call made at a 12-person startup reads differently to the same call at a 2,000-person company. State the stage and the pressure before listing any challenges.",
    //         },
    //         {
    //           type: "list",
    //           as: "li",
    //           variant: "bodyLarge",
    //           texts: [
    //             "Replace with a business challenge the engineering team was facing",
    //             "Replace with another challenge the business needed to solve",
    //             "Replace with another challenge the business needed to solve",
    //             "Replace with another challenge the business needed to solve",
    //           ],
    //         },
    //         {
    //           type: "text",
    //           variant: "bodyLarge",
    //           text: "Replace with one sentence connecting these pressures to the importance of engineering decisions at this company.",
    //         },
    //       ],
    //     },
    //     {
    //       enabled: true,
    //       order: 3,
    //       heading: {
    //         variant: "heading2",
    //         text: "Role and Scope of Responsibility",
    //         icon: {
    //           src: "icons/content/work-experience-subtitle-role-and-scope-of-responsibility.svg",
    //           public_id: "",
    //           type: "stroke",
    //         },
    //       },
    //       body: [
    //         {
    //           type: "text",
    //           variant: "bodyLarge",
    //           text: "Replace with one sentence describing the team structure and how your role fit into it.",
    //         },
    //         {
    //           type: "list",
    //           as: "li",
    //           variant: "bodyLarge",
    //           texts: [
    //             "Replace with area of responsibility 1",
    //             "Replace with area of responsibility 2",
    //             "Replace with area of responsibility 3",
    //             "Replace with area of responsibility 4",
    //             "Replace with area of responsibility 5",
    //           ],
    //         },
    //         {
    //           type: "text",
    //           variant: "bodyLarge",
    //           text: "Replace with one sentence describing how your responsibilities grew or shifted over time.",
    //         },
    //       ],
    //     },
    //     {
    //       enabled: true,
    //       order: 4,
    //       heading: {
    //         variant: "heading2",
    //         text: "Key Contributions and Business Impact",
    //         icon: {
    //           src: "icons/content/work-experience-subtitle-key-contributions-and-business-impact.svg",
    //           public_id: "",
    //           type: "stroke",
    //         },
    //       },
    //       body: [
    //         {
    //           type: "labelValueList",
    //           as: "li",
    //           modifiers: ["strong"],
    //           variant: "bodyLarge",
    //           texts: [
    //             {
    //               label: "Replace with contribution area 1:",
    //               value: "Replace with what you built or improved and the outcome it produced. Include a metric if possible.",
    //             },
    //             {
    //               label: "Replace with contribution area 2:",
    //               value: "Replace with what you built or improved and the outcome it produced.",
    //             },
    //             {
    //               label: "Replace with contribution area 3:",
    //               value: "Replace with what you built or improved and the outcome it produced.",
    //             },
    //             {
    //               label: "Replace with contribution area 4:",
    //               value: "Replace with what you built or improved and the outcome it produced.",
    //             },
    //           ],
    //         },
    //         {
    //           type: "text",
    //           variant: "bodyLarge",
    //           modifiers: ["strong"],
    //           text: "Business Impact:",
    //         },
    //         {
    //           type: "text",
    //           variant: "bodyLarge",
    //           text: "Replace with 1 to 2 sentences summarizing the combined business impact of your contributions. Connect engineering work to business outcomes. Before finalising every contribution entry above, apply this test: could a non-technical hiring manager understand why this mattered to the business? If not, rewrite it. The reader does not need to understand how it was built. They need to understand what changed because it was built.",
    //         },
    //       ],
    //     },
    //     {
    //       enabled: true,
    //       order: 5,
    //       heading: {
    //         variant: "heading2",
    //         text: "Challenges and Solutions",
    //         icon: {
    //           src: "icons/content/projects-subtitle-challenges-solved.svg",
    //           public_id: "",
    //           type: "stroke",
    //         },
    //       },
    //       body: [
    //         {
    //           type: "labelValueList",
    //           as: "li",
    //           variant: "bodyLarge",
    //           modifiers: ["strong"],
    //           texts: [
    //             {
    //               label: "Replace with challenge 1:",
    //               value: "Replace with the context of the problem, the approach you took, and the measurable outcome. Avoid vague descriptions. A good entry names the actual technical or operational problem, not a category.",
    //             },
    //             {
    //               label: "Replace with challenge 2:",
    //               value: "Replace with the context of the problem, how you approached it, and the outcome.",
    //             },
    //             {
    //               label: "Replace with challenge 3:",
    //               value: "Replace with the context of the problem, how you approached it, and the outcome.",
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //     {
    //       enabled: true,
    //       order: 6,
    //       heading: {
    //         variant: "heading2",
    //         text: "Technology and Tools",
    //         icon: {
    //           src: "icons/content/projects-subtitle-technology-and-tools.svg",
    //           public_id: "",
    //           type: "stroke",
    //         },
    //       },
    //       body: [
    //         {
    //           type: "text",
    //           variant: "bodyLarge",
    //           text: "Replace with one sentence on how the stack was chosen and what constraints or requirements it needed to meet. If you inherited the stack, say so and describe what you added or changed and why.",
    //         },
    //         {
    //           type: "labelValueList",
    //           as: "li",
    //           variant: "bodyLarge",
    //           modifiers: ["strong"],
    //           texts: [
    //             {
    //               label: "Frontend:",
    //               value: "Replace with frontend technology, how it was used in this role, and any relevant reason it was the right fit for the product.",
    //             },
    //             {
    //               label: "Backend:",
    //               value: "Replace with backend technology and what it was responsible for in this system.",
    //             },
    //             {
    //               label: "Database:",
    //               value: "Replace with database technology and why it fit the use case or data model at this company.",
    //             },
    //             {
    //               label: "Infrastructure:",
    //               value: "Replace with deployment and infrastructure tools used.",
    //             },
    //             {
    //               label: "CI/CD:",
    //               value: "Replace with pipeline tools and what they automated.",
    //             },
    //           ],
    //         },
    //         {
    //           type: "text",
    //           variant: "bodyLarge",
    //           text: "Replace with one sentence on how this stack held up under real production conditions and what you would reconsider if starting fresh.",
    //         },
    //       ],
    //     },
    //     {
    //       enabled: true,
    //       order: 7,
    //       heading: {
    //         variant: "heading2",
    //         text: "Achievements and Recognition",
    //         icon: {
    //           src: "icons/content/projects-subtitle-performance-achievements.svg",
    //           public_id: "",
    //           type: "stroke",
    //         },
    //       },
    //       body: [
    //         {
    //           type: "labelValueList",
    //           as: "li",
    //           variant: "bodyLarge",
    //           modifiers: ["strong"],
    //           texts: [
    //             {
    //               label: "Role Progression:",
    //               value: "Replace with any title change or promotion and what it was based on.",
    //             },
    //             {
    //               label: "Responsibility Growth:",
    //               value: "Replace with examples of expanded ownership or scope over time.",
    //             },
    //             {
    //               label: "Trust and Reliability:",
    //               value: "Replace with examples of high-stakes tasks you were trusted with.",
    //             },
    //             {
    //               label: "Team Impact:",
    //               value: "Replace with how you contributed to or influenced the wider team.",
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //     {
    //       enabled: true,
    //       order: 8,
    //       heading: {
    //         variant: "heading2",
    //         text: "Outcomes and Learnings",
    //         icon: {
    //           src: "icons/content/projects-subtitle-key-learnings.svg",
    //           public_id: "",
    //           type: "stroke",
    //         },
    //       },
    //       body: [
    //         {
    //           type: "text",
    //           variant: "bodyLarge",
    //           text: "Replace with one sentence framing what this experience built in you as an engineer or collaborator.",
    //         },
    //         {
    //           type: "list",
    //           as: "li",
    //           variant: "bodyLarge",
    //           texts: [
    //             "Replace with a skill or capability this role developed. Write it as a principle, not a task.",
    //             "Replace with a skill or capability this role developed. Write it as a principle, not a task.",
    //             "Replace with a skill or capability this role developed. Write it as a principle, not a task.",
    //             "Replace with a skill or capability this role developed. Write it as a principle, not a task.",
    //           ],
    //         },
    //         {
    //           type: "text",
    //           variant: "bodyLarge",
    //           text: "Replace with one sentence on what this role changed about how you think about engineering or product work.",
    //         },
    //         {
    //           type: "text",
    //           variant: "bodyLarge",
    //           text: "Replace with one honest sentence or two on what you would have approached differently with hindsight. Name a specific decision, assumption, or process. Honesty here builds more trust with a reader than a conclusion that reads as though every choice was correct.",
    //         },
    //       ],
    //     },
    //   ],

    //   blocks: [
    //     {
    //       id: "work-experience-image-block",
    //       type: "imageBlock",
    //       enabled: true,
    //       order: 1,
    //       data: {
    //         coverImageId: "hero",
    //         images: [
    //           {
    //             id: "hero",
    //             sources: {
    //               light: { src: "images/workitems/experience-template-hero-light.png", public_id: "" },
    //               dark: { src: "images/workitems/experience-template-hero-dark.png", public_id: "" },
    //             },
    //             alt: "Primary work experience showcase image",
    //             caption: "Replace with an image representing your role, workplace, product, dashboard, team contribution, architecture, workflow, achievement, or the most important visual related to this experience.",
    //           },
    //           {
    //             id: "feature-1",
    //             sources: {
    //               light: { src: "images/workitems/experience-template-feature-1-light.png", public_id: "" },
    //               dark: { src: "images/workitems/experience-template-feature-1-dark.png", public_id: "" },
    //             },
    //             alt: "Work experience contribution showcase image",
    //             caption: "Replace with an image showing a major contribution, system architecture, workflow, operational process, analytics dashboard, internal tool, product feature, team achievement, or another meaningful artifact from this experience.",
    //           },
    //         ],
    //       },
    //     },
    //     {
    //       id: "work-experience-meta-info",
    //       type: "workExperienceMetaInfo",
    //       enabled: true,
    //       order: 2,
    //       data: {
    //         alignment: {
    //           body: "left",
    //         },
    //         bodyItems: [
    //           {
    //             id: "metaInfo",
    //             heading: {
    //               variant: {
    //                 experience: "heading3",
    //                 caseStudy: {
    //                   preview: "heading2",
    //                   full: "heading1Subpage",
    //                 },
    //               },
    //               text: "Your Job Title",
    //               icon: {
    //                 src: "icons/content/work-experience-subtitle-job-role.svg",
    //                 public_id: "",
    //                 type: "stroke",
    //               },
    //             },
    //             body: {
    //               timeline: {
    //                 variant: "bodyBase",
    //                 text: "Mon YYYY to Present",
    //               },
    //               labelValueItems: [
    //                 {
    //                   id: "organization",
    //                   label: { variant: "bodyBase", modifiers: ["strong"], text: "Organization:" },
    //                   value: {
    //                     variant: "link",
    //                     label: "Company Name",
    //                     icon: "ChevronUpRight",
    //                     action: "external",
    //                     target: "https://company-website.com",
    //                   },
    //                 },
    //                 {
    //                   label: { variant: "bodyBase", modifiers: ["strong"], text: "Location:" },
    //                   value: { variant: "bodyBase", text: "City, Country (Remote / Hybrid / On-site)" },
    //                 },
    //                 {
    //                   label: {
    //                     variant: "bodyBase",
    //                     modifiers: ["strong"],
    //                     text: "Employment Type:",
    //                   },
    //                   value: { variant: "bodyBase", text: "Full-time / Contract / Freelance" },
    //                 },
    //                 {
    //                   label: { variant: "bodyBase", modifiers: ["strong"], text: "Domain:" },
    //                   value: { variant: "bodyBase", text: "Replace with the industry or product domain" },
    //                 },
    //               ],
    //               techStack: {
    //                 label: { variant: "bodyBase", modifiers: ["strong"], text: "Tech Stack:" },
    //                 value: {
    //                   variant: "bodyBaseTag",
    //                   texts: ["Technology 1", "Technology 2", "Technology 3", "Technology 4"],
    //                 },
    //               },
    //             },
    //           },
    //         ],
    //       },
    //     },
    //     {
    //       id: "work-experience-highlights",
    //       type: "workExperienceHighlights",
    //       enabled: true,
    //       order: 3,
    //       data: {
    //         alignment: {
    //           heading: "left",
    //           body: "left",
    //         },
    //         bodyItems: [
    //           {
    //             id: "keyContributionsAndBusinessImpact",
    //             enabled: true,
    //             heading: {
    //               variant: {
    //                 home: "heading3",
    //                 workExperience: "bodyLarge",
    //               },
    //               modifiers: ["strong"],
    //               text: "Key Contributions and Business Impact",
    //               icon: {
    //                 src: "icons/content/work-experience-subtitle-key-contributions-and-business-impact.svg",
    //                 public_id: "",
    //                 type: "stroke",
    //               },
    //             },
    //             overview: {
    //               variant: "bodyLarge",
    //               text: {
    //                 home: "Replace with one to two sentences: the division or area you worked in, the type of systems or product, and the scale team size, user count, traffic volume, or operational scope. Scale is not optional here. A recruiter cannot calibrate the significance of your contributions without knowing how large or complex the environment was.",
    //                 workExperience: null,
    //               },
    //             },
    //             highlights: {
    //               variant: "bodyLarge",
    //               as: "li",
    //               texts: {
    //                 home: [
    //                   "Replace with highlight 1. Keep to one line and include a metric if possible.",
    //                   "Replace with highlight 2. Keep to one line and include a metric if possible.",
    //                   "Replace with highlight 3. Keep to one line and include a metric if possible.",
    //                   "Replace with highlight 4. Keep to one line and include a metric if possible.",
    //                 ],
    //                 workExperience: [
    //                   "Replace with contribution 1: include the technology used, what you built, and the measurable result.",
    //                   "Replace with contribution 2: include the technology used, what you built, and the measurable result.",
    //                   "Replace with contribution 3: include the technology used, what you built, and the measurable result.",
    //                   "Replace with contribution 4: include what you collaborated on, with whom, and what was delivered.",
    //                   "Replace with contribution 5: include a security, compliance, or quality achievement if applicable.",
    //                 ],
    //               },
    //             },
    //             caseStudyAtAGlance: {
    //               variant: "bodyLarge",
    //               text: {
    //                 home: "Replace with one sentence describing what the full case study covers beyond these highlights.",
    //                 workExperience: null,
    //               },
    //             },
    //           },
    //           {
    //             id: "challengesAndProblemSolving",
    //             enabled: {
    //               home: false,
    //               workExperience: true,
    //             },
    //             heading: {
    //               variant: {
    //                 home: "heading3",
    //                 workExperience: "bodyLarge",
    //               },
    //               modifiers: ["strong"],
    //               text: "Challenges and Problem-Solving",
    //               icon: {
    //                 src: "icons/content/projects-subtitle-challenges-solved.svg",
    //                 public_id: "",
    //                 type: "stroke",
    //               },
    //             },
    //             highlights: {
    //               variant: "bodyLarge",
    //               as: "li",
    //               texts: [
    //                 "Replace with challenge 1: describe the technical or operational problem, your approach, and the result. Include metrics where possible.",
    //                 "Replace with challenge 2: describe the technical or operational problem, your approach, and the result. Include metrics where possible.",
    //               ],
    //             },
    //           },
    //         ],
    //       },
    //     },
    //   ],
    // },
  ],
};
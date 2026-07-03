export const personalPortfolioProjectRow = {
  id: "project-row-personal-portfolio-site",
  title: "Personal Portfolio: CMS Driven App with Live Admin Editor and Inbox Management",
  enabled: true,
  domain: "project",
  order: 15,
  topOrder: 15,
  createdAt: "2025-06-01T00:00:00.000Z",
  primaryCategory: { key: "cms", label: "CMS" },
  secondaryCategories: [
    { key: "admin-panel", label: "Admin Panel" },
    { key: "authentication", label: "Authentication" },
    { key: "contact-management", label: "Contact Management" },
  ],
  featured: true,

  links: {
    liveDemo: {
      url: "",
      active: true,
      message: {
        title: "You're already viewing the live portfolio.",
        text: "This is the deployed version of my personal portfolio site. You can also explore the source code and Figma files to understand the design decisions and development process behind my work.",
      },
    },
    sourceCode: {
      url: "https://github.com/pritamsardar-dev/personal-portfolio-pritam-sardar-v1",
    },
    designFile: {
      url: "https://www.figma.com/design/v0BGWJPWQgJxp2vqtjBmPV/personal-portfolio-pritam-sardar-v1?node-id=0-1",
    },
  },

  blocks: [
    {
      id: "images-personal-portfolio-site",
      type: {
        project: "carouselBlock",
        caseStudy: "imageBlock",
      },
      enabled: true,
      order: 1,
      data: {
        coverImageId: "hero",
        images: [
          {
            id: "hero",
            sources: {
              light: { src: "images/personal-portfolio/personal-portfolio-hero-light.png", public_id: "" },
              dark: { src: "images/personal-portfolio/personal-portfolio-hero-dark.png", public_id: "" },
            },
            alt: "Personal portfolio site cover image showing three device frames in light mode: a desktop screen with the project view details page, a tablet screen with the projects listing page, and a mobile screen with the contact page",
            caption: "The site cover image shown across three device frames. The desktop frame shows the project view details page with the full description column open on the left and a related projects list on the right, similar to a video detail layout. The tablet frame shows the projects listing page with project cards in a grid. The mobile frame shows the contact page with the contact form. All three pages render from the same MongoDB-backed CMS.",
          },
          {
            id: "feat-home",
            sources: {
              light: { src: "images/personal-portfolio/feat-home-light.png", public_id: "" },
              dark: { src: "images/personal-portfolio/feat-home-dark.png", public_id: "" },
            },
            alt: "Portfolio home page showing the work experience section and featured projects section with image carousel cards and tech stack tags below the hero",
            caption: "The home page below the hero. The work experience section pulls a featured row from the API. Below it the projects section renders collapsed project cards with image carousels and view counts. The section nav panel is visible on the left edge and updates its active indicator as the page scrolls. All content comes from MongoDB and none of it is hardcoded.",
          },
          {
            id: "feat-admin-editor-open",
            sources: {
              light: { src: "images/personal-portfolio/feat-admin-editor-open-light.png", public_id: "" },
              dark: { src: "images/portfpersonal-portfolioolio/feat-admin-editor-open-dark.png", public_id: "" },
            },
            alt: "Admin editor panel floating over the portfolio site showing dropdown selectors for page, section, and row alongside dot-notation key-value fields for inline editing",
            caption: "The admin editor panel. It renders as a React portal so it floats above the page without affecting the document flow. The editor flattens the selected CMS document to a dot-notation key-value map and renders each pair as an editable field. Section and row dropdowns update the form in real time. Window position, size, and selection state persist across page reloads via localStorage. Image drafts persist in IndexedDB so uploads survive navigation during a draft session.",
          },
          {
            id: "feat-work-experience",
            sources: {
              light: { src: "images/personal-portfolio/feat-work-experience-light.png", public_id: "" },
              dark: { src: "images/personal-portfolio/feat-work-experience-dark.png", public_id: "" },
            },
            alt: "Work experience page showing a single experience row with a meta info block on the left containing timeline and tech stack tags, and a highlights block on the right with contribution summaries",
            caption: "The work experience page. Each row has two blocks: a meta info block on the left with timeline, organization, and tech stack tags, and a highlights block on the right with contribution summaries and case study links. Both blocks are CMS-driven. Clicking a case study link navigates to the full case study read page with inline images and prev or next navigation between related items.",
          },
          {
            id: "feat-case-studies",
            sources: {
              light: { src: "images/personal-portfolio/feat-case-studies-light.png", public_id: "" },
              dark: { src: "images/personal-portfolio/feat-case-studies-dark.png", public_id: "" },
            },
            alt: "Case studies listing page showing project cards in a two-column grid with carousel thumbnails, view counts, tags, overview text, and view details and full case study CTA buttons",
            caption: "The case studies listing page. Filter tabs narrow by primary and secondary category. Sort order and pagination are maintained in the URL so filtered views are bookmarkable and survive a page refresh. Each card shows the thumbnail carousel, tech tags, unique view count, and a truncated overview. The view counter uses IP-hashed deduplication on the server so each visitor is counted once across all sessions.",
          },
          {
            id: "feat-carousel-fullscreen",
            sources: {
              light: { src: "images/personal-portfolio/feat-carousel-full-screen-light.png", public_id: "" },
              dark: { src: "images/personal-portfolio/feat-carousel-full-screen-dark.png", public_id: "" },
            },
            alt: "Fullscreen carousel showing a project screenshot filling the entire viewport with navigation arrows at the bottom, dot indicators, CTA link buttons in the top left, and a close button in the top right",
            caption: "The fullscreen carousel. It expands from the card position using a CSS transform origin animation anchored to where the click happened. Arrow navigation, dot indicators, keyboard arrow keys, touch swipe with swipe-down to close, autoplay with pause on interaction, and CTA link buttons with active status indicators are all supported. Pressing the center of the image or spacebar toggles play and pause with a brief animated feedback icon.",
          },
          {
            id: "feat-admin-inbox",
            sources: {
              light: { src: "images/personal-portfolio/feat-admin-inbox-light.png", public_id: "" },
              dark: { src: "images/personal-portfolio/feat-admin-inbox-dark.png", public_id: "" },
            },
            alt: "Admin contact inbox showing a sidebar with filter tabs for All Mail, Unread, Read, Responded, and Spam with per-tab counts, and a message list with sender names, subjects, and dates",
            caption: "The admin contact inbox. The sidebar shows per-tab counts that update live after any status change. Selecting a filter resets to page one and fetches the matching messages. The two-column layout collapses to a single column on mobile where opening a message replaces the list and a back button returns to it.",
          },
          {
            id: "feat-admin-inbox-message-open",
            sources: {
              light: { src: "images/personal-portfolio/feat-admin-inbox-message-open-light.png", public_id: "" },
              dark: { src: "images/personal-portfolio/feat-admin-inbox-message-open-dark.png", public_id: "" },
            },
            alt: "Admin inbox with a message open showing sender name, email address, subject line, date, message body, and a toolbar with actions for read, respond, spam, forward, and delete",
            caption: "The message detail view. Opening a message marks it as read automatically via the getMessage endpoint. Toolbar actions update status via individual PATCH endpoints and refresh the counts. The reply button opens the default email client with the subject pre-filled. Deletion shows a confirmation modal before the API call. The mainPanelView state is derived entirely from filter match and message selection, with no effects needed for view transitions.",
          },
          {
            id: "feat-skills",
            sources: {
              light: { src: "images/personal-portfolio/feat-skills-light.png", public_id: "" },
              dark: { src: "images/personal-portfolio/feat-skills-dark.png", public_id: "" },
            },
            alt: "Skills page showing an at-a-glance section with highlight cards, effectiveness notes, and a toolbelt of technology tags, followed by individual skill rows with overview and detail blocks",
            caption: "The skills page. The at-a-glance block at the top aggregates highlights, an effectiveness summary, and a technology toolbelt drawn from across all skill rows. Below it each individual skill has its own overview and detail blocks stored as separate CMS section rows. The section nav panel expands on this page to show each skill row as a named navigation target.",
          },
          {
            id: "feat-contact",
            sources: {
              light: { src: "images/personal-portfolio/feat-contact-light.png", public_id: "" },
              dark: { src: "images/personal-portfolio/feat-contact-dark.png", public_id: "" },
            },
            alt: "Contact page showing a contact info block on the left with links and per-item copy buttons, and a contact form on the right with name, email, subject, and message fields",
            caption: "The contact page. The text block on the left lists contact links with individual clipboard copy buttons and a brief copied confirmation. The form on the right uses React Hook Form with Zod validation and persists the draft to localStorage between visits. Submissions are rate-limited to 3 per 24 hours per IP, configurable via environment variables. A successful submission triggers a Resend API auto-reply email to the sender.",
          },
          {
            id: "feat-about",
            sources: {
              light: { src: "images/personal-portfolio/feat-about-light.png", public_id: "" },
              dark: { src: "images/personal-portfolio/feat-about-dark.png", public_id: "" },
            },
            alt: "About page showing the hero section with a subpage heading and tagline followed by a journey section with developer and academic timeline cards",
            caption: "The about page. It shares the HeroSection component with all other subpages but resolves a different variant through resolveProps, giving each page its own heading, tagline, and hero image without duplicating content in the database. Below the hero the journey section renders developer journey and academic journey blocks, each stored as a CMS row with its own card layout.",
          },
          {
            id: "feat-admin-login",
            sources: {
              light: { src: "images/personal-portfolio/feat-admin-login-light.png", public_id: "" },
              dark: { src: "images/personal-portfolio/feat-admin-login-dark.png", public_id: "" },
            },
            alt: "Admin login page showing a centered card form with email or username and password fields and a submit button",
            caption: "The admin login page. Authentication uses a JWT stored in an httpOnly cookie. A session hint boolean in localStorage is checked on app mount and skips the auth check API call for non-admin visitors entirely, avoiding an unnecessary round trip on every page load. Protected routes on the backend reject unauthenticated requests at the middleware layer before reaching any controller.",
          },
          {
            id: "feat-message-limit-popup",
            sources: {
              light: { src: "images/personal-portfolio/feat-message-limit-reached-popup-light.png", public_id: "" },
              dark: { src: "images/personal-portfolio/feat-message-limit-reached-popup-dark.png", public_id: "" },
            },
            alt: "Rate limit error popup dialog showing an info icon and a message explaining that the 24-hour contact form submission limit has been reached",
            caption: "The rate limit popup. When a visitor exceeds the per-IP submission limit the backend returns a 429 with a specific message. The frontend displays it as a centered dialog that auto-dismisses after 10 seconds. The limit count, time window, and error message text are all configurable through environment variables without a code change.",
          },
          {
            id: "feat-confirmation-mail",
            sources: {
              light: { src: "images/personal-portfolio/feat-confirmation-mail-light.png", public_id: "" },
              dark: { src: "images/personal-portfolio/feat-confirmation-mail-light.png", public_id: "" },
            },
            alt: "Auto-reply confirmation email rendered in an email client showing a branded header, a personalized greeting with the sender name, confirmation that the message was received, and a footer with contact links",
            caption: "The contact form auto-reply email. It is sent via the Resend API as a fire-and-forget call after the message is saved to MongoDB, so a failed email send does not block the 201 response to the client. The template uses nested HTML tables and inline styles on every element so it renders consistently across email clients that ignore flexbox, grid, and external stylesheets.",
          },
          {
            id: "feat-figma-overview",
            sources: {
              light: { src: "images/personal-portfolio/figma-design-overview.png", public_id: "" },
              dark: { src: "images/personal-portfolio/figma-design-overview.png", public_id: "" },
            },
            alt: "Figma design canvas overview showing section layout planning, color token documentation, the hero image diagram card with a pipeline SDLC layout, and component breakdowns for the portfolio site",
            caption: "The Figma design work for the portfolio. Section layouts, spacing decisions, color token planning for both themes, and the hero image pipeline diagram were all worked out in Figma before implementation. The hero image diagram is a 1600x900 SDLC pipeline layout that doubles as the project card cover image for this row in the portfolio.",
          },
        ],
      },
    },
    {
      id: "text-personal-portfolio-site",
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
          text: "Personal Portfolio: CMS Driven App with Live Admin Editor and Inbox Management",
          icon: {
            src: "favicons/personal-portfolio-favicon.svg",
            public_id: "",
            type: "stroke",
          },
        },
        tags: [
          { label: "01 Jan 25", icon: "CalendarEvent", tooltip: "Project creation date" },
          {
            id: "duration",
            label: { project: "600+ hrs", caseStudy: "15 min read" },
            icon: "Clock",
            tooltip: {
              project: "Estimated total build time",
              caseStudy: "Estimated read time",
            },
          },
          { id: "views", label: "0", icon: "Eye", tooltip: "Unique visits" },
          { label: "React", icon: "BrandReact", tooltip: "Frontend framework" },
          { label: "Node.js", icon: "BrandNodejs", tooltip: "Backend runtime" },
          { label: "MongoDB", icon: "BrandMongodb", tooltip: "Database" },
          { label: "Express", icon: "Server2", tooltip: "Project domain" },
          { label: "Admin Editor", icon: "Edit", tooltip: "Live CMS editor" },
          { label: "Resend", icon: "Mail", tooltip: "Email delivery" },
          { label: "Figma", icon: "BrandFigma", tooltip: "UI design tool" },
          { label: "JWT", icon: "ShieldLock", tooltip: "Auth standard" },
          { label: "Cloudinary", icon: "Cloud", tooltip: "Media and storage" },
        ],
        overview: {
          variant: "bodyLarge",
          text: "Personal Portfolio is a full stack CMS driven application built end to end, frontend and backend. Content is stored in MongoDB and fetched through a page, section, and block API. The frontend uses a renderer pattern, PageRenderer resolves the active variant and BlockRenderer maps block type keys to React components, no page content is hardcoded. The admin editor is a floating, draggable, resizable panel built as a React portal, with inline editable fields, image upload, IndexedDB draft persistence, and a live preview overlay.",
        },
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
              icon: {
                src: "icons/content/projects-subtitle-executive-summary.svg",
                public_id: "",
                type: "stroke",
              },
            },
            body: [
              {
                type: "text",
                variant: "bodyLarge",
                text: "This portfolio site is a full-stack application built end to end, frontend and backend. Every piece of visible content is stored in MongoDB and fetched through a page, section, and block API. The frontend walks that data using a renderer pattern where PageRenderer resolves the active variant through a recursive resolveProps utility and BlockRenderer maps block type keys to React components. No page content is hardcoded in the frontend.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "The main decision early on was to make MongoDB the single source of truth for the content, and to build a live admin editor directly into the site instead of using a separate CMS interface. The editor is a floating, draggable, resizable panel that renders as a React portal above the page. It flattens any selected CMS document to a dot-notation key-value map, renders each key as an inline editable field with image upload support, persists drafts to IndexedDB so images survive page reloads, and provides live preview through a context-driven overlay that replaces the section's fetched data with the current draft state.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "I built this from start to finish. That included Mongoose schema design with variant compatible data structures, MongoDB aggregation pipelines for work item queries and view counting, Cloudinary upload and delete handling across admin media endpoints, JWT authentication with httpOnly cookies, Resend email integration for contact form replies, a CSS custom property based design token system with dark and light themes, and a React frontend across nine pages with skeleton loading for every section.",
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
              icon: {
                src: "icons/content/projects-subtitle-project-goal.svg",
                public_id: "",
                type: "stroke",
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
                  "Build a CMS-driven content system where all visible page content is stored in MongoDB and editable through an in-browser admin panel without a code deploy",
                  "Implement a live admin editor as a floating draggable panel with flatten-based field editing that works on any document structure without a custom form per section type",
                  "Design a block renderer that maps CMS block type keys to React components so adding a new block type requires registering one mapping and no existing render logic needs to change",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "The goal here was for the portfolio site itself to show full-stack work, not just list project screenshots on a static page. Every technical decision had to hold up as something I would stand behind.",
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
                  "Build a CMS-driven content system where pages, sections, and rows are stored in MongoDB and served through a structured API, with no visible page content hardcoded in the frontend",
                  "Implement a live admin editor as a floating draggable panel that edits flattened key-value mirrors of CMS documents, persists image drafts in IndexedDB, and provides real-time preview through a context-driven overlay without a separate admin interface",
                  "Write a recursive resolveProps utility that collapses variant-keyed objects at runtime so a single section data structure can serve multiple page contexts, block variants, and display modes without duplicating content in the database",
                  "Design a block renderer that maps CMS block type keys to React components so adding a new block type requires registering one key-to-component mapping and no existing render code needs to change",
                  "Build a work items section that handles four distinct display modes (collapsed cards, expanded detail, fullscreen modal, full case study read) from a single variant-resolved data structure",
                  "Implement IP-hashed view counting using a RowView collection with a compound unique index so each visitor is counted exactly once per row across all sessions and server restarts",
                  "Cover the full contact lifecycle: rate-limited form submission, HMAC-hashed IP spam protection, Resend API auto-reply email, and a paginated admin inbox with read, spam, and responded status management",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "These goals came from wanting the site to answer a different question than a static portfolio usually does. A static site shows what projects were built. This one also shows how they were built, and whether those same decisions hold up under real constraints.",
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
              text: "Architecture and Approach",
              icon: {
                src: "icons/content/projects-subtitle-architecture-approach.svg",
                public_id: "",
                type: "stroke",
              },
            },
            body: [
              {
                type: "text",
                variant: "bodyLarge",
                text: "The core decision was to make MongoDB the single source of truth for all visible content and to build everything else around that constraint. Content delivery, preview, editing, and rendering are each separate concerns handled by different layers.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "The content delivery system works in three layers. Pages store ordered section definitions with ObjectId references to Section documents. The API populates those references on request and returns fully resolved page data in a single response. The frontend walks that structure in PageRenderer, calls resolveProps to collapse the active variant for each section, and delegates each section and block to the correct React component via SECTION_MAP and BLOCK_MAP lookups.",
              },
              {
                type: "list",
                as: "li",
                variant: "bodyLarge",
                texts: [
                  "resolveProps as the central variant resolver: a recursive function that checks if the current context key exists on a value before recursing into it, collapsing variant boundaries at the right level so a single MongoDB document can serve different content for hero headings, tag labels, button variants, and block visibility rules across multiple page contexts",
                  "Flat object editing in the admin editor: the editor runs flattenObject on the selected CMS document to produce a dot-notation key-value map, renders each pair as an inline editable field, and calls unflattenObject before submitting, so the form handles any document structure without a custom form per section or block type",
                  "IndexedDB for draft image storage: uploaded files are stored as File objects in IndexedDB under a draftKey-prefixed path per field, rehydrated as blob URLs on mount, converted to multipart form data on save, and explicitly deleted and revoked on draft clear or selection change to prevent memory leaks",
                  "Aggregation pipelines for all work item queries: featured rows, paginated lists with filter and sort params, related row queries with relevance scoring, and view count recording all run as single MongoDB aggregation pipelines with no sequential find calls",
                ],
              },
              {
                type: "image",
                imageId: "feat-admin-editor-open",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "Before settling on this approach I considered simpler alternatives. Hardcoded page content in the frontend would have been faster to build initially but requires a code deploy for any text change. A traditional headless CMS solves content management but removes the backend and system design work from the portfolio demonstration entirely. A single flat section schema without block types works for simple layouts but breaks when new visual patterns need to be added since each addition would require a schema change rather than a new renderer mapping.",
              },
              {
                type: "list",
                as: "li",
                variant: "bodyLarge",
                texts: [
                  "Hardcoded page content: faster initial build but forces a code deploy for every text change and does not demonstrate CMS capability as part of the project",
                  "Third-party headless CMS: solves content management but removes the backend design, aggregation work, and admin tooling from what the portfolio is actually showing",
                  "Single flat section model without block types: simpler schema but brittle when adding new layout types since each new visual pattern would require a schema migration rather than registering a new component mapping",
                ],
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "The main trade-off of the resolveProps approach is that the content shape is entirely implicit. A call like resolveProps(data, 'home') returns a different structure than resolveProps(data, 'caseStudy'), and that difference is only visible by reading the MongoDB documents. For a solo project this is manageable. For a team it would need TypeScript discriminated unions to make the variant contracts explicit.",
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
              icon: {
                src: "icons/content/projects-subtitle-key-features.svg",
                public_id: "",
                type: "stroke",
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
                  "Live admin editor as a floating draggable panel with flatten-based field editing, IndexedDB draft image persistence, live preview via context overlay, and persisted window position and selection state across page reloads",
                  "CMS-driven section and block renderer where all visible page content comes from MongoDB and is rendered by mapping block type keys to React components, with no page content hardcoded in the frontend",
                  "Serial carousel coordination that sequences autoplay across all carousels on a page using IntersectionObserver and a module-level coordinator with intro phase, serial handoff on cycle completion, and full interaction detection",
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
                  "Live admin editor panel: a React portal rendering a floating, draggable, resizable window with position and size persisted to localStorage. The editor flattens any selected CMS document to a dot-notation key-value map, renders each key as an inline editable field with image upload support, and compares the live form state against the fetched API data to control save and clear button enabled state. Image uploads go to IndexedDB during the draft session and are read back as multipart form data on save. Live preview mode replaces the active section data with the current draft state through a context-driven overlay without a page refresh.",
                  "CMS-driven renderer architecture: PageRenderer walks the page section definitions, calls resolveProps with the current variant context, and delegates to SectionRenderer and BlockRenderer via SECTION_MAP and BLOCK_MAP lookups. Adding a new section or block type requires registering one key-to-component mapping. No existing render logic needs to change when a new type is introduced.",
                  "Work items section with four display modes: collapsed cards on the projects and case studies listing pages, expanded detail on the view-details page, a fullscreen lightbox modal for image carousels expanding from the card origin, and full case study read mode with inline images and prev or next case study navigation. All four modes are served by the same data structure with block type and section visibility resolved per variant at render time via resolveProps.",
                  "Serial carousel coordination: a module-level coordinator manages which carousel section is animating using IntersectionObserver and a section-keyed Map. When multiple carousels scroll into view, the first receives an intro signal, plays through its slides, then hands off to the next in a serial sequence. User interaction anywhere pauses the sequence. The coordinator lives outside the React component tree so it survives remounts and route transitions without losing coordination state.",
                  "Section nav panel: a fixed sidebar that dynamically builds navigation items from the current page's resolved section definitions. It tracks the active section by finding the element whose vertical midpoint is closest to 45 percent of the viewport height on scroll. For pages with multiple skill rows or experience rows it expands into row-level items so each piece of content is directly reachable from the sidebar.",
                  "Contact system with rate limiting, IP hashing, and auto-reply email: the form enforces a per-IP message limit configurable via environment variables, saves messages to MongoDB with HMAC-hashed IP storage, and triggers a Resend API auto-reply to the sender as a fire-and-forget call. The admin inbox provides filter tabs with per-tab counts, paginated message list with sender metadata, message detail view with toolbar actions, and a confirmation modal before deletion.",
                  "IP-hashed view counting: each work item row tracks unique visits using a RowView collection with a compound unique index on rowId and ipHash. The view counter increments once per visitor across all sessions. A batch attachViewedFlag utility determines whether the current visitor has seen each row in a single query across the entire response, so a listing page of eight cards makes one view check query rather than eight.",
                  "Dark and light theme with no flash of unstyled content: a theme-init.js script in the public folder reads the theme preference from localStorage before the first React render and sets both the document background color inline and the dark class on the root element. The full design token system uses CSS custom properties across three token files: core primitive values, semantic role mappings, and dark theme overrides on the html.dark selector.",
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
                full: "Technology and Tools",
              },
              icon: {
                src: "icons/content/projects-subtitle-technology-and-tools.svg",
                public_id: "",
                type: "stroke",
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
                  "React 19, Vite 5, Tailwind CSS v4, React Router v7, React Hook Form, Zod, clsx for the frontend",
                  "Node.js, Express 5, MongoDB, Mongoose, JWT, bcrypt, Cloudinary, Multer, Resend API for the backend",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "Each piece was chosen because it matched a specific constraint in this project. The frontend needed a component model that fit the renderer architecture. The backend needed file upload handling, aggregation pipeline support, and external API calls without a heavy framework. The theme system needed to work in CSS computed values and inline styles where Tailwind utility classes are not an option, which ruled out a JavaScript theme object as the foundation.",
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
                    label: "Frontend:",
                    value: "React 19 with Vite 5. The component model suits the renderer architecture where each section and block is a self-contained component resolved by a string key. React Router v7 handles client-side routing across nine pages with URL-based filter and pagination state. React Hook Form with Zod handles contact form validation with schema-driven error messages. React fit these patterns better than Vue: portal-based editor panels, IntersectionObserver hooks for section nav and carousel coordination, and context-driven live preview.",
                  },
                  {
                    label: "Styling:",
                    value: "Tailwind CSS v4 with CSS custom properties for all design tokens across three token files: core primitive values, semantic role mappings, and dark theme overrides on the html.dark selector. The dark theme is applied with a class toggle rather than a media query, which allows the theme-init.js script to set the correct state before the first paint and gives explicit control over when the switch happens. Color mixing via CSS color-mix() is used throughout for transparency-based tokens that need to adapt to both themes without hardcoded RGBA values.",
                  },
                  {
                    label: "Backend:",
                    value: "Node.js with Express 5. Express 5 gives native async error propagation in route handlers so unhandled promise rejections reach the error middleware rather than hanging silently. The API organizes routes by resource with admin routes protected by a JWT middleware layer. All work item queries run as aggregation pipelines rather than sequential find and populate chains.",
                  },
                  {
                    label: "Database:",
                    value: "MongoDB with Mongoose. The section document uses Schema.Types.Mixed for block data, which gives the flexibility needed for diverse block type structures without requiring a separate schema per block type. Work item queries use $facet to return paginated data and a total count in a single round trip. The RowView model uses a compound unique index on rowId and ipHash to enforce one view per visitor per row at the database level.",
                  },
                  {
                    label: "Media:",
                    value: "Cloudinary for cloud storage and delivery, Multer with memory storage for file upload handling before the Cloudinary upload runs. Both url and public_id are stored in every media schema field. Every admin media update reads the existing public_id, calls cloudinary.uploader.destroy, and rejects the update if the delete returns an unexpected status, so no orphaned assets accumulate across image update operations.",
                  },
                  {
                    label: "Auth:",
                    value: "JWT stored in an httpOnly cookie on login. A session hint boolean in localStorage tells the app whether to make the auth check API call on mount. Non-admin visitors skip the call entirely, which avoids a network round trip on every page load for the majority of visitors who are not logged in. Admin routes on the backend require the JWT cookie and return 401 before reaching any controller for unauthenticated requests.",
                  },
                  {
                    label: "Email:",
                    value: "Resend API for contact form auto-replies. Nodemailer with an SMTP server was considered but Resend provides reliable delivery without server configuration. The email template uses nested HTML tables and inline styles on every element for consistent rendering across email clients that do not support flexbox, grid, or external stylesheets. The send runs as a fire-and-forget call after the message is saved to MongoDB so a failed email delivery does not affect the API response.",
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
                text: "The part of the stack most likely to need replacing first as this project grows is the section schema. Schema.Types.Mixed for block data gives full flexibility but removes validation at the schema level. As the number of block types increases, a discriminated union schema per block type would catch data shape errors before they reach the renderer.",
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
                full: "Challenges and Solutions",
              },
              icon: {
                src: "icons/content/projects-subtitle-challenges-solved.svg",
                public_id: "",
                type: "stroke",
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
                    label: "Admin editor draft image lifecycle:",
                    value: "Uploaded images needed to survive page reloads before form submission. IndexedDB storage keyed by a draftKey-field path solved this, with blob URL rehydration on mount, revocation on unmount, and full IndexedDB cleanup on draft clear.",
                  },
                  {
                    label: "Serial carousel coordination across route transitions:",
                    value: "Moving coordination state into React context caused carousels to lose their position in the animation sequence when components remounted on navigation. Moving it to a module-level Map keyed by section ID fixed this since module state survives component remounts.",
                  },
                  {
                    label: "Scroll lock persisting after navigation:",
                    value: "Visited row state was initially stored in localStorage, which conflicted with body scroll lock on navigation away from a work item detail page. Replacing localStorage with a module-level Set and a pub-sub onRowViewed listener removed the conflict entirely.",
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
                    label: "Admin editor draft image lifecycle:",
                    value: "Images uploaded during a draft session needed to be accessible across page reloads before the form was submitted. React refs do not survive navigation. localStorage cannot store binary data. The solution was IndexedDB using a draftKey-prefixed field path as the storage key. On mount, the editor scans all form values for indexeddb:// references and rehydrates each one as a blob URL. On save, it reads each File from IndexedDB and appends it to the FormData. On clear or selection change, it deletes all matching IndexedDB entries and revokes any outstanding blob URLs. A ref mirror of the blob URL map is used in the cleanup effect so the revocation logic always sees the current URLs without a stale closure causing a memory leak.",
                  },
                  {
                    label: "Serial carousel coordination across route transitions:",
                    value: "The first version of the carousel coordination system used React context and state to track which carousel was animating. When a user navigated away and back, the carousels remounted and the coordinator reset because React context is torn down and rebuilt with the component tree. Moving the coordinator to a module-level Map keyed by section ID outside the React tree solved this. Carousels register and unregister with the coordinator on mount and unmount. The Map persists across remounts so a carousel that remounts can re-register without losing its place in the sequence. An unregister cleanup on unmount handles any orphaned entries left by sections that unmount during an active animation.",
                  },
                  {
                    label: "Scroll lock persisting after navigation:",
                    value: "The view tracking feature initially stored visited row IDs in localStorage to persist the visited indicator across browser sessions. This caused a body scroll lock to persist after navigating from a work item detail page back to a listing page. The recovery of localStorage visited state on mount triggered a re-render that conflicted with the scroll unlock cleanup in a way that was hard to trace because it looked like a navigation bug rather than a state management issue. The fix was to remove localStorage entirely and replace it with a module-level Set for session-scoped visited state and a simple pub-sub onRowViewed listener. The visited indicator updates reactively within the session via the subscription, the body scroll lock is no longer part of any state restoration path, and visited state from previous sessions no longer needs to be recovered.",
                  },
                  {
                    label: "HTML email template rendering:",
                    value: "The contact form auto-reply initially used CSS flexbox for layout and class-based styles. It rendered correctly in browser-based email preview tools but broke in several widely used email clients that ignore flex layout and external stylesheets entirely. The fix was rewriting the template using nested HTML table elements for all layout, inline styles on every element, and no class attributes or external CSS references. The result renders consistently across all email clients tested. This is the standard email-safe approach but it means writing CSS that would not pass review anywhere else in the codebase.",
                  },
                  {
                    label: "resolveProps collapsing at the wrong level:",
                    value: "An early version of the resolveProps utility called the recursive function on a value first and then checked whether the context key existed. This meant objects without a variant key at the current level could trigger a resolution at a deeper nested level, returning the wrong value for the context. The correct behavior is to check whether the context key exists at the current level first. If it does, resolve and return. If not, recurse into each property of the object normally. This ensures variant boundaries are respected at the intended level and not at whatever depth happens to match.",
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
                text: "The pattern across all five: the failures that are hardest to catch are the ones that succeed silently. A wrong resolveProps call returns data without throwing. A stale blob URL reference leaks memory without an error. A scroll lock that persists after navigation looks like a routing bug. Reproducing the exact sequence of user actions that triggers each failure was more useful than the fix itself.",
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
              text: "Performance and Achievements",
              icon: {
                src: "icons/content/projects-subtitle-performance-achievements.svg",
                public_id: "",
                type: "stroke",
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
                  "All work item list queries run as single MongoDB aggregation pipelines using $facet to return paginated data and a total count in one round trip, eliminating the two-query pattern that is common in paginated list endpoints",
                  "Zero flash of unstyled content: a theme-init.js script in the public folder reads localStorage and sets the document background color and root class before the first React render, so the page is already in the correct theme state when content appears",
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
                  "All work item queries run as single MongoDB aggregation pipelines using $facet to return paginated data and total count in one round trip, avoiding the two-query pattern that is common in paginated list implementations",
                  "Zero flash of unstyled content: the theme-init.js script in the public folder reads theme preference from localStorage and sets both the document background color inline and the dark class on the root element before the first React render, so the page never appears in the wrong theme state",
                  "Backdrop blur disabled during active scroll and re-enabled after a configurable idle timeout via a custom useScrolling hook, reducing paint cost across the header, card wrappers, and carousel overlays which all use blur",
                  "Skeleton loading components for every section and block type with layouts that match the actual content dimensions so the page does not shift or reflow when data loads from the API",
                  "Admin editor draft change detection compares the live form state against the flattened API data on each keystroke, with draft saves debounced to 1500ms so localStorage writes do not occur on every character during active editing",
                  "IP-hashed view counting resolved in a single batch query per response via the attachViewedFlag utility, so a listing page of eight project cards makes one RowView query rather than eight separate lookups",
                  "Contact form rate limiting enforced at the database level by counting matching IP hash documents within the configured time window, which is accurate across multiple server instances without a shared in-memory store",
                  "Cloudinary asset lifecycle management across all admin media endpoints so no orphaned images accumulate across avatar, hero, or project image updates, with early rejection of any upload if the delete of the old asset returns an unexpected result",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "image",
                imageId: "feat-admin-inbox",
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "This site ended up showing the engineering decisions behind it just as much as it shows the projects listed on it. The admin editor, the renderer architecture, the theme system, and the aggregation pipelines are all visible in the source code and testable on the live site.",
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
              full: "text",
            },
            heading: {
              variant: {
                preview: "heading3",
                full: "heading2",
              },
              text: "Key Learnings",
              icon: {
                src: "icons/content/projects-subtitle-key-learnings.svg",
                public_id: "",
                type: "stroke",
              },
            },
            body: [
              {
                type: "list",
                variant: "bodyLarge",
                as: "li",
                texts: [
                  "A block renderer pattern is one of the cleanest ways to separate CMS content from presentation logic. The cost is one BLOCK_MAP lookup per block type. The benefit is that no existing render code needs to change when a new block type is added, which becomes meaningful when the block type count grows past ten.",
                  "IndexedDB is the right tool for storing binary draft data in the browser, but it adds coordination surface that is easy to underestimate. Every consumer needs to handle the async read on mount, revoke blob URLs on unmount, and clean up entries on clear. Most of this only becomes clear when it surfaces as a memory leak or a race condition during a specific navigation sequence.",
                  "Module-level state for cross-component coordination avoids the remount problem that React context cannot solve cleanly. If a piece of state needs to outlive the component tree that uses it, moving it outside React entirely is the right approach, not working around component lifecycle with complex refs and effects.",
                  "Email HTML is a different environment from web HTML. Writing a template that renders consistently means table-based layout, inline styles on every element, and no modern CSS. This is a hard constraint of the email rendering environment, not something styling skill can work around.",
                  "CSS custom properties are a more flexible foundation for a design token system than a JavaScript theme object. They work in computed values, inline styles, and CSS functions like color-mix(), which a JS object cannot do. The overhead is learning the token vocabulary up front, but that cost is unavoidable regardless of the approach chosen.",
                  "A recursive variant resolver like resolveProps is powerful but entirely implicit. The caller has no type safety on what the return shape will be, and a mismatched context key returns the original object rather than an error. This is manageable in a solo project but would need TypeScript discriminated union types to be maintainable in a team or as the block type count grows.",
                ],
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "This project changed how I approach any content-heavy application. CMS-first design from the beginning eliminates a whole category of refactoring later, even when the initial setup takes significantly longer.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "If I started this over I would add TypeScript from the beginning, starting with the renderer layer and the resolveProps utility. The variant contracts in the current build are entirely implicit. A developer reading the codebase for the first time has no way to know what shape resolveProps(data, 'home') returns without tracing through multiple MongoDB documents. TypeScript discriminated unions on the block data types would have caught mismatches at compile time rather than as a blank section or a missing field at runtime in production. The initial cost would have been higher but the debugging time saved would have far outweighed it. That was the first shortcut I took and it would be the first thing I changed.",
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
                src: "icons/content/projects-subtitle-future-scope.svg",
                public_id: "",
                type: "stroke",
              },
            },
            body: [
              {
                type: "text",
                variant: "bodyLarge",
                text: "The highest priority next step is TypeScript adoption starting at the renderer layer and the resolveProps utility, where implicit contracts cause the most friction in the current build. After that the admin editor should be extended to support creating and deleting work item rows directly, since adding a new project currently requires either a direct database edit or a seed script.",
              },
              {
                type: "list",
                variant: "bodyLarge",
                as: "li",
                texts: [
                  "TypeScript migration starting at the renderer layer and resolveProps utility, adding discriminated union types for block data so variant mismatches are caught at compile time rather than rendering as blank sections at runtime",
                  "Admin editor extension to support creating, reordering, and deleting work item rows directly through the editor panel, removing the current dependency on a seed script or direct database edit when adding a new project or case study",
                  "Analytics dashboard in the admin panel surfacing view counts per work item row, contact form submission rates, and most visited pages, built directly from the existing RowView and Message collections without a third-party analytics integration",
                  "Real-time preview sync using server-sent events so a change saved through the admin editor reflects in a separate browser tab immediately, making the live editing workflow useful for drafting and reviewing content changes without a manual page refresh",
                  "Image optimization at upload time converting files to a compressed format via Cloudinary transformation parameters and storing the optimized version for delivery, reducing transfer size for work item carousels without changing the existing upload integration",
                ],
              },
            ],
          },
        ],
      },
    },
  ],
};
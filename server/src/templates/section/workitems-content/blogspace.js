export const blogSpaceProjectRow = {
  id: "project-row-blogspace",
  title: "BlogSpace: Full-Stack Blog Publishing Platform",
  enabled: true,
  domain: "project",
  order: 12,
  topOrder: 12,
  createdAt: "2024-03-01T00:00:00.000Z",
  primaryCategory: { key: "cms", label: "CMS" },
  secondaryCategories: [
    { key: "authentication", label: "Authentication" },
    { key: "text-editor", label: "Text Editor" },
    { key: "media-upload", label: "Media Upload" },
  ],
  featured: true,

  links: {
    liveDemo: {
      url: "https://blogspace.pritamsardar.dev/",
    },
    sourceCode: {
      url: "https://github.com/pritamsardar-dev/portfolio-creator-blog-platform-v1",
    },
    designFile: {
      url: "",
      message: {
        title: "No Design File for This Project",
        text: "BlogSpace was built directly in code without a separate design phase. The focus was on the backend integration with Appwrite, the TinyMCE editor setup, and the auth and routing architecture. Layout and visual decisions were made iteratively in React and Tailwind CSS while building each feature. No Figma file was part of the process.",
      },
    },
  },

  blocks: [
    {
      id: "images-blogspace",
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
              light: { src: "images/blogspace/blogspace-hero-light.png", public_id: "" },
              dark: { src: "images/blogspace/blogspace-hero-dark.png", public_id: "" },
            },
            alt: "BlogSpace home page showing the hero section with platform tagline, Explore Posts and Write a Post buttons, a hero illustration, and a grid of featured post cards below with title, author, date, and image",
            caption: "The home page. The hero section shows the platform description and two primary actions. Below it, the latest active posts are displayed in a three-column card grid. Each card shows the featured image, author, date, title, and a text preview stripped from the HTML content.",
          },
          {
            id: "feat-all-posts",
            sources: {
              light: { src: "images/blogspace/feat-all-posts-light.png", public_id: "" },
              dark: { src: "images/blogspace/feat-all-posts-dark.png", public_id: "" },
            },
            alt: "BlogSpace all posts page showing a paginated grid of post cards with a header displaying total post count, and previous and next pagination buttons at the bottom",
            caption: "The all posts page. Posts are fetched nine at a time using offset-based Appwrite queries. The header shows the total post count. Pagination buttons at the bottom move between pages. The page scrolls to the top on each navigation via a ScrollToTop component that watches the current page number.",
          },
          {
            id: "feat-post-detail-part-1",
            sources: {
              light: { src: "images/blogspace/feat-post-detail-part-1-light.png", public_id: "" },
              dark: { src: "images/blogspace/feat-post-detail-part-1-dark.png", public_id: "" },
            },
            alt: "BlogSpace post detail page top section showing the post title, author name, update date, status badge, edit and delete buttons for the owner, and the featured image with a fullscreen expand button",
            caption: "The top of the post detail page. The title, author, last updated date, and status badge are shown above the featured image. If the current user is the post owner, edit and delete buttons appear. The featured image has a fullscreen expand button in the top right corner and a zoom-in cursor to signal it is clickable.",
          },
          {
            id: "feat-post-detail-part-2",
            sources: {
              light: { src: "images/blogspace/feat-post-detail-part-2-light.png", public_id: "" },
              dark: { src: "images/blogspace/feat-post-detail-part-2-dark.png", public_id: "" },
            },
            alt: "BlogSpace post detail page lower section showing the parsed rich text content with headings and paragraphs, followed by a related posts grid with a View All link",
            caption: "The lower section of the post detail page. The TinyMCE HTML content is rendered using html-react-parser with blog-specific typography styles applied through a blog-content class. Below the article, a related posts grid shows the latest active posts excluding the current one, with a View All link to the full post listing.",
          },
          {
            id: "feat-editor",
            sources: {
              light: { src: "images/blogspace/feat-editor-light.png", public_id: "" },
              dark: { src: "images/blogspace/feat-editor-dark.png", public_id: "" },
            },
            alt: "BlogSpace post editor page showing the two-column layout with the TinyMCE rich text editor on the left and the sidebar on the right containing the file upload field, image preview, status select, and publish button",
            caption: "The post editor. The left column holds the title, slug, and TinyMCE editor. The right sidebar holds the featured image upload, a preview of the current image when editing, the status selector, and the publish button. The TinyMCE editor switches between oxide-dark and oxide skins to match the current app theme.",
          },
          {
            id: "feat-my-posts",
            sources: {
              light: { src: "images/blogspace/feat-my-posts-light.png", public_id: "" },
              dark: { src: "images/blogspace/feat-my-posts-dark.png", public_id: "" },
            },
            alt: "BlogSpace my posts dashboard showing a header with total post count out of 12, and a grid of post cards belonging to the current user with edit and delete action labels visible on each card",
            caption: "The my posts page. Accessible only to authenticated users, this view fetches all posts belonging to the current user and displays them with a post count in the header. Each card shows edit and delete labels since the current user is the owner. The limit of 12 posts is displayed next to the count.",
          },
          {
            id: "feat-auth",
            sources: {
              light: { src: "images/blogspace/feat-auth-light.png", public_id: "" },
              dark: { src: "images/blogspace/feat-auth-dark.png", public_id: "" },
            },
            alt: "BlogSpace authentication page showing the AuthShell card with the BlogSpace logo, a page title, a subtitle, and the login or signup form with labeled input fields and a submit button",
            caption: "The auth pages. Login and signup share the same AuthShell wrapper with the platform logo, a title, and a subtitle. The forms use React Hook Form for validation with field-level error messages. A red error banner below the fields shows API-level errors from Appwrite such as duplicate accounts or signup limit reached.",
          },
          {
            id: "feat-image-preview",
            sources: {
              light: { src: "images/blogspace/feat-image-preview-light.png", public_id: "" },
              dark: { src: "images/blogspace/feat-image-preview-dark.png", public_id: "" },
            },
            alt: "BlogSpace fullscreen image preview modal showing a post featured image at maximum viewport size with a close button in the top right corner on a dark backdrop",
            caption: "The image preview modal. Clicking the featured image on the post detail page opens this fullscreen overlay with a dark backdrop and blur. The image scales to fit the viewport. The close button sits in the top right corner and clicking anywhere on the image also closes the modal.",
          },
          {
            id: "feat-delete-modal",
            sources: {
              light: { src: "images/blogspace/feat-delete-modal-light.png", public_id: "" },
              dark: { src: "images/blogspace/feat-delete-modal-dark.png", public_id: "" },
            },
            alt: "BlogSpace delete confirmation modal showing a blurred backdrop, a card with Delete Post heading, a warning message about the action being irreversible, and Cancel and Delete Post buttons",
            caption: "The delete confirmation modal. When the post owner clicks delete, this overlay appears before any data is removed. Confirming deletes both the post document from the Appwrite database and the associated featured image file from Appwrite Storage. Cancelling closes the modal without any changes.",
          },
          {
            id: "feat-guest-gate",
            sources: {
              light: { src: "images/blogspace/feat-guest-gate-light.png", public_id: "" },
              dark: { src: "images/blogspace/feat-guest-gate-dark.png", public_id: "" },
            },
            alt: "BlogSpace guest gate card showing a title prompting the user to sign in, a description explaining why an account is needed, and Sign In and Sign Up buttons",
            caption: "The guest gate. Unauthenticated users who reach the my posts or add post pages see this card instead of the protected content. The title and description change based on which page triggered the gate. The Sign In and Sign Up buttons navigate to the respective auth pages.",
          },
        ],
      },
    },
    {
      id: "text-blogspace",
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
          text: "BlogSpace: Multi User Blog Publishing App",
          icon: {
            src: "favicons/blog-space-favicon.svg",
            public_id: "",
            type: "stroke",
          },
        },
        tags: [
          { label: "15 Jan 25", icon: "CalendarEvent", tooltip: "Project creation date" },
          {
            id: "duration",
            label: { project: "210+ hrs", caseStudy: "12 min read" },
            icon: "Clock",
            tooltip: {
              project: "Estimated total build time",
              caseStudy: "Estimated read time",
            },
          },
          { id: "views", label: "0", icon: "Eye", tooltip: "Unique visits" },
          { label: "React", icon: "BrandReact", tooltip: "Frontend framework" },
          { label: "Appwrite", icon: "BrandAppwrite", tooltip: "Backend as a service" },
          { label: "TinyMCE", icon: "Edit", tooltip: "Rich text editor" },
          { label: "CMS", icon: "LayoutDashboard", tooltip: "Project domain" },
        ],
        overview: {
          variant: "bodyLarge",
          text: "BlogSpace is a solo portfolio project and a full-stack blog publishing platform built with React 19 and Appwrite as the backend. Users can sign up, write posts in a TinyMCE rich text editor, upload a featured image, set a post status, and publish to a shared feed. The backend handles authentication, database storage, and file storage through Appwrite's SDK without any custom server. The platform enforces a per-user post limit of 12 and a per-device signup limit of 3 accounts using Appwrite database queries before each operation.",
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
                text: "BlogSpace is a content publishing platform where users create accounts, write blog posts in a rich text editor, and share them on a public feed. The app is built on React 19 with Appwrite serving as the complete backend for authentication, the posts database, and file storage. There is no custom server. All backend interaction happens through the Appwrite JavaScript SDK called directly from the browser using project credentials stored in environment variables.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "The main architectural decision was to use the post slug as the Appwrite document ID. This means slug uniqueness is enforced at the database level rather than in application logic, and the post URL is stable as long as the document exists. The trade-off is that slugs cannot be changed after creation because Appwrite document IDs are immutable.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "Built end to end as a solo project: React 19 with Redux Toolkit for global auth state, React Router v7 for routing and route protection, React Hook Form for form handling and validation, TinyMCE for rich text editing with light and dark theme sync, and Appwrite SDK 17 for all backend operations.",
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
                  "Build a working publishing platform with real auth sessions, cloud file storage, and a shared post feed backed by Appwrite without writing any custom server code",
                  "Implement a rich text editor that stays in sync with the app theme at all times, switching skins when the user toggles light and dark mode",
                  "Enforce per-user post limits and per-device signup limits using Appwrite database queries so the checks cannot be bypassed by clearing client-side state",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "The goal was to build a project where the backend interactions were real and not mocked, without the overhead of writing and deploying a custom API layer.",
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
                  "Build a working auth system with session persistence, email and password accounts, and auto-login after signup using Appwrite's account API",
                  "Implement a rich text editor with automatic light and dark theme sync so the editor skin matches the app theme without requiring the user to do anything",
                  "Store posts in a real database with slug-based document IDs so slug uniqueness is enforced at the database level rather than in the app",
                  "Handle featured image uploads to cloud storage and retrieve them via CDN URLs so images are served from Appwrite's storage layer rather than embedded in the document",
                  "Enforce a per-user post limit and a per-device signup limit using Appwrite queries before each operation so the limits are harder to bypass than a client-only check",
                  "Build skeleton loading states for every async view so the UI never shows blank or partially loaded content during data fetches",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "These goals came from wanting to build a project with real cloud infrastructure without spending time on a custom server. Appwrite gave that without sacrificing the depth needed to demonstrate backend integration.",
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
                text: "The core architectural decision was to use Appwrite as the single backend rather than building a custom server. All database, auth, and storage calls go through the Appwrite SDK instantiated once in two service classes and imported as singletons throughout the app.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "The system is built around four responsibilities with clear owners:",
              },
              {
                type: "list",
                as: "li",
                variant: "bodyLarge",
                texts: [
                  "AuthService handles all account operations: createAccount, login, logout, getCurrentUser, and getCurrentUserProfile. It also queries the device_registry collection before creating an account to enforce the per-device limit. The service is called from components and the App root but never holds state itself.",
                  "Service handles all post and file operations: createPost, updatePost, deletePost, getPost, getUserPosts, getPosts, getFeaturedPosts, getPaginatedPosts, getRelatedPosts, uploadFile, deleteFile, getFilePreview, and getFileView. It enforces the per-user post limit by querying the posts collection before createPost completes.",
                  "Redux store (auth slice) holds the current user object and a boolean auth status. The App component restores the Appwrite session on mount and dispatches login or logout depending on whether getCurrentUser returns a user. All protected components read from this slice.",
                  "AuthLayout is a route wrapper component that reads auth status from Redux and redirects. Routes that require auth use authentication={true}. Guest-only routes like login and signup use authentication={false} to redirect logged-in users away.",
                ],
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "The per-device signup limit adds a layer on top of Appwrite's native account system. When a user signs up, the app reads or generates a device ID from localStorage, queries the device_registry Appwrite collection for that ID, and rejects the request if the count is already 3. This makes the limit harder to bypass than checking a local counter.",
              },
              {
                type: "image",
                imageId: "feat-editor",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "Before settling on Appwrite, two alternatives were considered. A custom Express backend would give full control over API logic but adds deployment infrastructure and hosting cost that is not justified for a portfolio project at this scale. Firebase is comparable as a BaaS and was the other realistic option, but Appwrite's document database model is closer to a traditional relational schema and the SDK structure matched the post data model more naturally. The trade-off of choosing Appwrite is that the free tier has cold start delays on idle projects, which was addressed with a keep-alive ping component.",
              },
              {
                type: "list",
                as: "li",
                variant: "bodyLarge",
                texts: [
                  "Custom Express backend: full control but requires a separate deployment and adds operational overhead that is not justified without a real production use case",
                  "Firebase: comparable BaaS with Firestore for the database, but Appwrite's document model fit the post schema more directly and self-hosting is an option if the project ever needs to move off the free tier",
                  "JWT in localStorage: a common pattern for auth in SPAs, but more fragile than server-managed Appwrite sessions that can be revoked and do not expire unless explicitly deleted",
                ],
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "The main trade-off of using the slug as the document ID is that post URLs are permanent. If a title has a typo, fixing the title does not fix the URL because the document ID cannot be changed. A better design would use a UUID as the document ID and store the slug as a separate indexed field, which would allow slug updates without deleting and recreating the post.",
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
                  "TinyMCE rich text editor with automatic theme sync, switching between oxide-dark and oxide skins by observing root class changes via a MutationObserver",
                  "Per-device signup limit and per-user post limit enforced by Appwrite database queries before each operation, making them harder to bypass than client-only checks",
                  "Slug-based Appwrite document IDs with auto-generation from the post title, enforcing uniqueness at the database level with duplicate detection mapped to clear user errors",
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
                  "TinyMCE rich text editor with theme sync: the editor is configured with plugins for images, tables, links, code blocks, media, and full-screen mode. A MutationObserver watches the document root class list and updates the isDark state when the theme changes. This drives a key prop on the Editor component, causing React to remount the editor with the correct skin while the Controller preserves the content.",
                  "Post creation and editing with featured image upload: new posts require a title, slug, content, and featured image. On edit, the image is optional and the old file is deleted from Appwrite Storage only after the new one uploads successfully, so the post is never left with a missing image.",
                  "Per-device signup limit: a device_registry collection in Appwrite stores device ID to user ID mappings. Before creating an account, the app queries this collection and rejects the request if the device has already registered three accounts.",
                  "Per-user post limit: before createPost writes to the database, getUserPosts runs first and checks the total against the limit of 12. The check runs both on the client (via Redux post count) and server-side through the Appwrite query so neither layer can be skipped independently.",
                  "Post visibility control: posts set to inactive are treated as private. The post detail page redirects non-owners away from inactive posts before rendering any content. The post card shows a Private badge when the owner views their own inactive posts.",
                  "Skeleton loading states: every async view has a matching skeleton that mirrors the layout of the loaded state. The skeleton grid uses the same column count and aspect ratios as the real post cards so there is no layout shift when content arrives.",
                  "Image preview modal and delete confirmation modal: the post image opens in a fullscreen overlay with a close button and zoom-out cursor. Post deletion requires confirmation through a modal that blocks the action until the user explicitly confirms.",
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
                  "React 19, Vite, Tailwind CSS v4, Redux Toolkit, React Router v7, React Hook Form, clsx for the frontend",
                  "Appwrite SDK 17 for auth, database, and file storage, TinyMCE for the rich text editor, html-react-parser for rendering post content",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "Each choice was made to match a specific need. The app needed a real backend without building one. It needed a capable editor that could follow the app theme. It needed form validation that worked cleanly with both standard inputs and a controlled third-party editor component.",
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
                    value: "React 19 with Vite. Most async logic lives in individual page components rather than shared hooks because the data requirements of each page are different enough that a shared abstraction would not simplify much. React Router v7 handles routing with nested routes under the App layout component.",
                  },
                  {
                    label: "Styling:",
                    value: "Tailwind CSS v4 with CSS custom properties for design tokens. Dark mode is the default. Light mode is toggled by adding a light class to the document root element. A theme-init.js script in the public folder applies the saved theme before React renders to prevent a flash of the wrong background on page load.",
                  },
                  {
                    label: "State management:",
                    value: "Redux Toolkit with a single auth slice. Auth state is the only global state in the app. Everything else is local component state via useState. The auth slice is populated on app mount from an Appwrite session check and updated on login and logout.",
                  },
                  {
                    label: "Backend:",
                    value: "Appwrite SDK 17 called directly from the browser. No proxy layer sits between React and Appwrite. The project credentials are stored in environment variables and the SDK is configured once in each service class. Using Appwrite directly without a server means all validation and rate limiting must be expressed as Appwrite queries or SDK constraints.",
                  },
                  {
                    label: "Editor:",
                    value: "TinyMCE with the React wrapper. The editor is configured with 15 plugins covering the expected formatting features. The skin is driven by an isDark state value that is updated by a MutationObserver watching the documentElement class list. A key prop on the Editor component forces a remount when the theme changes.",
                  },
                  {
                    label: "Form handling:",
                    value: "React Hook Form for signup, login, and post forms. Standard fields use register. The TinyMCE editor is a controlled component and uses Controller with a custom validate function that strips HTML before checking if the content is empty.",
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
                text: "The Appwrite free tier cold start delay is the most visible operational constraint. The KeepAlive component fires a lightweight posts query on mount to warm up the project before a real user interaction triggers the delay.",
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
                    label: "TinyMCE not observing app theme changes:",
                    value: "A MutationObserver watches the document root class list and updates isDark state. That value drives a key prop on the Editor component, causing React to remount the editor with the correct skin while the Controller preserves the written content.",
                  },
                  {
                    label: "Old image file cleanup on post edit:",
                    value: "The update flow uploads the new file first, then deletes the old one only if the upload succeeded. If the upload fails, the old file stays in place and the post is not updated, so the post is never left with a missing image reference.",
                  },
                  {
                    label: "Appwrite cold starts on the free tier:",
                    value: "A KeepAlive component fires a lightweight getPosts call on mount to warm up the Appwrite project before the first real user interaction triggers a visible delay.",
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
                    label: "TinyMCE theme sync:",
                    value: "TinyMCE loads its own skin assets and does not observe document-level class changes. When the user toggles the app theme, the editor skin does not update automatically. The fix was to drive a key prop from the isDark state. A MutationObserver watches the documentElement class list and calls setIsDark when the theme class changes. When isDark changes, the key changes, React unmounts the old editor and mounts a new one with the correct skin and content_css values. The content is preserved through the Controller value prop so nothing written in the editor is lost on theme toggle.",
                  },
                  {
                    label: "Old file cleanup on post edit:",
                    value: "When a user edits a post and uploads a new image, the old file in Appwrite Storage needs to be deleted separately because Appwrite Storage does not handle that automatically. The update flow uploads the new file first, then deletes the old one only if the upload succeeded and the post document was updated. If either step fails, the error is caught and the old file is left in place. This means the post is never updated to reference a file that failed to upload.",
                  },
                  {
                    label: "Slug as document ID creating a permanent URL:",
                    value: "Using the slug as the Appwrite document ID means the post URL is fixed at creation time. Appwrite document IDs cannot be changed after creation, so a slug typo in the title auto-generation is permanent. The slugTransform function trims, lowercases, removes non-alphanumeric characters, collapses spaces to hyphens, and truncates to 36 characters. When a conflict occurs at write time, Appwrite returns a vague error about documentId that the app catches and maps to a user-readable message about trying a different title.",
                  },
                  {
                    label: "Per-device signup limit without a custom server:",
                    value: "A client-only check using localStorage can be bypassed by clearing storage. The fix was a device_registry collection in Appwrite. When a user signs up, the device ID is read or generated in localStorage, and the app queries device_registry for that ID before calling account.create. If the count is already 3, the request is rejected before any account operation runs. This is not unbypassable on a public platform but it adds real friction.",
                  },
                  {
                    label: "Appwrite cold starts on the free tier:",
                    value: "Appwrite's free tier spins down idle projects and the first request after idle can take several seconds. A KeepAlive component in the router fires a lightweight getPosts call on mount. This warms up the Appwrite project before a real user action like login or post fetch reaches it, reducing the perceived cold start delay for the first visitor.",
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
                text: "The common thread across all five: using a BaaS directly from the browser without a custom server means constraints that would normally be handled in middleware, such as rate limits, file cleanup, and error mapping, have to be expressed in the client code around the SDK calls.",
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
                  "Paginated post feed fetching nine posts per page via offset-based Appwrite queries so the database returns only the current page slice rather than the full collection",
                  "Skeleton loading states across every async view match the real layout dimensions so there are no layout shifts or blank flashes during data fetches",
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
                  "Offset-based pagination: the AllPosts page queries Appwrite with a limit of 9 and an offset computed from the current page number so only the requested slice is returned from the database",
                  "Skeleton loading states matching the real layout: every async view has a dedicated skeleton that uses the same column count, aspect ratios, and spacing as the loaded state so there are no layout shifts when content arrives",
                  "Orphan-free file storage: deleting a post also deletes the associated file from Appwrite Storage so files do not accumulate in the bucket after their parent document is removed",
                  "Theme persistence without flash: theme-init.js applies the saved class and background color before React renders, so the correct theme is active before any React component mounts",
                  "Session persistence on reload: App.jsx calls getCurrentUser on mount and dispatches the result to Redux so auth state is restored from the Appwrite session without requiring a second login",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "image",
                imageId: "feat-my-posts",
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "By the end this became a working platform where multiple users can sign up, write, and publish, with real data in Appwrite and real files in cloud storage.",
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
                  "A BaaS removes the need to write server code but it shifts where the constraints live. Document ID limits, query filters, collection permissions, and SDK error messages become the design surface instead of API routes and middleware.",
                  "Using a business key as a database primary key creates permanent constraints. The slug as the Appwrite document ID means the post URL is fixed forever and there is no way to update it without deleting and recreating the post.",
                  "Third-party editors embedded in a React app need careful handling when the app has dynamic theming. The key prop remount approach works but the editor re-initializes on every theme toggle. A more robust approach would update only the skin without a full remount.",
                  "Skeleton states are more useful when designed before the real UI, not retrofitted after. Building the skeleton first forces you to commit to the real layout dimensions early, which reduces the chance of needing to redesign the skeleton later.",
                  "Per-device limits on a public platform add friction but not a hard barrier. A motivated user can bypass localStorage-based device IDs. The value is in reducing accidental or casual abuse, not in preventing determined abuse.",
                ],
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "This project changed how I think about backend integration without a custom server. The question is not just which BaaS to use but what constraints it imposes at the data model level and whether those constraints are acceptable for the lifetime of the project.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "If I started this over, I would not use the slug as the Appwrite document ID. I chose it because it simplified the routing and querying code, but it created a permanent constraint that is obvious in hindsight. I would generate a UUID as the document ID and store the slug as a separate indexed field. That adds one extra query to resolve a slug to a document ID but it means post URLs can be updated if needed, which is a basic requirement for any real publishing platform.",
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
                text: "The highest priority next step is a comment system. Without comments the platform is read-only for non-authors and there is no way for readers to respond to content. Comments would make the platform feel like a community rather than a one-way publishing tool, and they are the natural next step once the core publishing flow is stable.",
              },
              {
                type: "list",
                variant: "bodyLarge",
                as: "li",
                texts: [
                  "Comment system backed by a comments collection in Appwrite so authenticated readers can reply to posts without needing to publish their own content",
                  "Post search and category or tag filtering on the all-posts page, because the current paginated view has no way to find posts on a specific topic without reading through every page",
                  "Draft status separate from the current inactive status so authors can save work in progress without it appearing as a Private post on their dashboard",
                  "Forgot password flow using Appwrite's password recovery API, because the current login error message already mentions it is coming and there is no recovery path for a lost password",
                  "Author profile pages listing all published posts by a given user, because there is no way to browse posts by a specific author beyond spotting the name on individual cards",
                ],
              },
            ],
          },
        ],
      },
    },
  ],
};
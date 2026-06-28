export const vidFlowProjectRow = {
  id: "project-row-vidflow",
  title: "VidFlow: Video Streaming Platform",
  enabled: true,
  domain: "project",
  order: 14,
  topOrder: 14,
  createdAt: "2024-09-01T00:00:00.000Z",
  primaryCategory: { key: "video-streaming", label: "Video Streaming" },
  secondaryCategories: [
    { key: "authentication", label: "Authentication" },
    { key: "media-upload", label: "Media Upload" },
    { key: "database-aggregation", label: "Database Aggregation" },
  ],
  featured: true,

  links: {
    liveDemo: {
      url: "",
      message: {
        title: "No Live Demo Available",
        text: "VidFlow is a backend-only project. There is no frontend to open in a browser. The full API is accessible through the source code repository. The Figma UI designs are available through the design file link, and a React frontend built from those designs is planned for the next release.",
      },
    },
    sourceCode: {
      url: "https://github.com/pritamsardar-dev/portfolio-video-stream-platform-v1",
    },
    designFile: {
      url: "https://www.figma.com/design/UPHqdVgpojdSB9w2AHVGUF/portfolio-video-stream-v1?node-id=0-1",
    },
  },

  blocks: [
    {
      id: "images-vidflow",
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
              light: { src: "images/vidflow/vidflow-hero-light.png", public_id: "" },
              dark: { src: "images/vidflow/vidflow-hero-dark.png", public_id: "" },
            },
            alt: "VidFlow shown across laptop, tablet, and mobile screens displaying the home feed in light mode",
            caption: "VidFlow across screen sizes. The full UI was designed in Figma before a single line of backend code was written, covering every feature screen from the home feed to channel analytics. The screenshots shown throughout this case study are from those completed designs. The backend is the full scope of this release. The React frontend implementation is planned for the next version.",
          },
          {
            id: "feat-home",
            sources: {
              light: { src: "images/vidflow/feat-home-light.png", public_id: "" },
              dark: { src: "images/vidflow/feat-home-dark.png", public_id: "" },
            },
            alt: "VidFlow home feed showing a grid of video thumbnails with channel avatars, video titles, view counts, and upload timestamps",
            caption: "The home feed. Video cards show thumbnail, title, channel name, view count, and upload time. The left sidebar holds primary navigation including subscriptions, history, playlists, and channel management. The backend serves this data through separate video and channel endpoints.",
          },
          {
            id: "feat-video-details",
            sources: {
              light: { src: "images/vidflow/feat-video-details-light.png", public_id: "" },
              dark: { src: "images/vidflow/feat-video-details-dark.png", public_id: "" },
            },
            alt: "VidFlow video detail page showing the video player, title, description, like and dislike counts, and a comment section below",
            caption: "The video detail page. The backend serves like counts, comment lists, and subscription status through separate endpoints. Channel subscriber count and whether the viewing user is already subscribed are both resolved in a single aggregation pipeline that joins the subscriptions collection twice.",
          },
          {
            id: "feat-channel-home",
            sources: {
              light: { src: "images/vidflow/feat-channel-home-light.png", public_id: "" },
              dark: { src: "images/vidflow/feat-channel-home-dark.png", public_id: "" },
            },
            alt: "VidFlow channel profile page showing a banner image, channel avatar, channel name, subscriber count, subscribed-to count, and tab navigation for Videos, Playlists, Posts, and About",
            caption: "The channel profile page. Subscriber count, subscribed-to count, and whether the viewing user is already subscribed are resolved in one aggregation pipeline with no sequential queries. The pipeline joins the subscriptions collection twice and uses a $cond with $in to match the requesting user's ObjectId against the embedded subscriber array.",
          },
          {
            id: "feat-channel-videos",
            sources: {
              light: { src: "images/vidflow/feat-channel-videos-light.png", public_id: "" },
              dark: { src: "images/vidflow/feat-channel-videos-dark.png", public_id: "" },
            },
            alt: "VidFlow channel videos tab showing a grid of uploaded videos with thumbnails, titles, view counts, and upload dates",
            caption: "The channel videos tab. The Video model includes the mongooseAggregatePaginate plugin so the videos endpoint can serve paginated queries without a schema change when the video controller is added in the next release.",
          },
          {
            id: "feat-channel-playlist",
            sources: {
              light: { src: "images/vidflow/feat-channel-playlists-light.png", public_id: "" },
              dark: { src: "images/vidflow/feat-channel-playlist-dark.png", public_id: "" },
            },
            alt: "VidFlow channel playlists tab showing playlist cards arranged in a grid, each with a thumbnail collage from the first few videos and the total video count",
            caption: "The channel playlists tab. Each playlist card shows a thumbnail collage and the total video count. The Playlist model stores video references as an ordered array of ObjectIds, ready for full CRUD operations in the next release.",
          },
          {
            id: "feat-channel-view-full-playlist",
            sources: {
              light: { src: "images/vidflow/feat-channel-view-full-playlists-light.png", public_id: "" },
              dark: { src: "images/vidflow/feat-channel-view-full-playlist-dark.png", public_id: "" },
            },
            alt: "VidFlow expanded playlist view showing all videos in a playlist listed in sequential order with numbered positions, thumbnails, titles, and duration",
            caption: "The expanded playlist view lists all videos in order with numbered positions and metadata. The Playlist schema stores videos as an ordered array so the sequence is preserved and can be reordered without a schema migration.",
          },
          {
            id: "feat-channel-playlist-player",
            sources: {
              light: { src: "images/vidflow/feat-channel-playlists-player-light.png", public_id: "" },
              dark: { src: "images/vidflow/feat-channel-playlist-player-dark.png", public_id: "" },
            },
            alt: "VidFlow playlist player showing the video playing on the left and the playlist queue listed on the right with the active video highlighted",
            caption: "The playlist player. The queue sidebar shows all videos in the playlist with the currently playing one highlighted. The backend serves the playlist and its video data through a single endpoint that populates the video references.",
          },
          {
            id: "feat-channel-post",
            sources: {
              light: { src: "images/vidflow/feat-channel-post-light.png", public_id: "" },
              dark: { src: "images/vidflow/feat-channel-post-dark.png", public_id: "" },
            },
            alt: "VidFlow community posts tab showing text posts from the channel with like counts, comment counts, and post timestamps",
            caption: "The community posts tab. Posts are stored in the Tweet model with a reference to the owner user. The Like model is polymorphic and covers likes on videos, comments, and posts from a single collection using optional reference fields for each target type.",
          },
          {
            id: "feat-subscriptions-home",
            sources: {
              light: { src: "images/vidflow/feat-subsciptions-home-light.png", public_id: "" },
              dark: { src: "images/vidflow/feat-subsciptions-home-dark.png", public_id: "" },
            },
            alt: "VidFlow subscriptions feed showing recent videos from channels the user has subscribed to, displayed in a grid with thumbnails and metadata",
            caption: "The subscriptions feed. The Subscription model stores subscriber and channel as separate ObjectId references to the User collection, so a feed query can join subscriptions and videos in a single aggregation pipeline without a separate subscriptions lookup per video.",
          },
          {
            id: "feat-subscriptions-manage",
            sources: {
              light: { src: "images/vidflow/feat-subsciptions-manage-light.png", public_id: "" },
              dark: { src: "images/vidflow/feat-subsciptions-manage-dark.png", public_id: "" },
            },
            alt: "VidFlow manage subscriptions page listing all subscribed channels in rows with channel avatar, name, subscriber count, and an unsubscribe button",
            caption: "The manage subscriptions page. Each row shows the channel avatar and subscriber count. Subscription status on the channel profile is resolved inside the same aggregation pipeline that computes the subscriber count, so there is no extra query per channel view.",
          },
          {
            id: "feat-history",
            sources: {
              light: { src: "images/vidflow/feat-history-light.png", public_id: "" },
              dark: { src: "images/vidflow/feat-history-home-dark.png", public_id: "" },
            },
            alt: "VidFlow watch history page showing recently watched videos in reverse chronological order with thumbnails, titles, channel names, and view timestamps",
            caption: "The watch history page. History entries are stored as an array of Video ObjectIds on the User document. The watch history endpoint resolves each entry with its full video details and owner data using a nested lookup pipeline, returning the complete list in a single round trip.",
          },
          {
            id: "feat-history-comment",
            sources: {
              light: { src: "images/vidflow/feat-history-comment-light.png", public_id: "" },
              dark: { src: "images/vidflow/feat-history-comment-dark.png", public_id: "" },
            },
            alt: "VidFlow watch history page with an expanded comment thread shown below a video entry, displaying user avatars, comment text, and like counts",
            caption: "The history page with an expanded comment thread. Comments are stored in a separate collection with a reference to the parent video. The Comment model includes the mongooseAggregatePaginate plugin so comment queries can be paginated as threads grow.",
          },
          {
            id: "feat-playlists",
            sources: {
              light: { src: "images/vidflow/feat-playlists-light.png", public_id: "" },
              dark: { src: "images/vidflow/feat-playlists-dark.png", public_id: "" },
            },
            alt: "VidFlow user playlists page showing the current user's created and saved playlists as cards with thumbnail collages, playlist names, and video counts",
            caption: "The user playlists page. The Playlist schema is in place with name, description, video array, and owner fields. Full CRUD operations for creating, editing, and deleting playlists are planned for the next release.",
          },
          {
            id: "feat-my-activity",
            sources: {
              light: { src: "images/vidflow/feat-my-activity-home-light.png", public_id: "" },
              dark: { src: "images/vidflow/feat-my-activity-home-dark.png", public_id: "" },
            },
            alt: "VidFlow activity dashboard showing sections for liked videos, recent comments, and community post interactions",
            caption: "The activity dashboard aggregates liked content, recent comments, and post interactions. All three are backed by separate models: Like, Comment, and Tweet. Each model stores an owner reference to the User collection so per-user activity queries are straightforward.",
          },
          {
            id: "feat-my-channel-manage",
            sources: {
              light: { src: "images/vidflow/feat-my-channel-manage-light.png", public_id: "" },
              dark: { src: "images/vidflow/feat-my-channel-manage-videos-dark.png", public_id: "" },
            },
            alt: "VidFlow channel management panel showing a table of uploaded videos with thumbnails, titles, view counts, publish status toggles, and action buttons",
            caption: "The channel management panel. Publish status is a boolean field on the Video model that controls visibility. The video upload and management controller is planned for the next release alongside the frontend implementation.",
          },
          {
            id: "feat-my-channel-analytics",
            sources: {
              light: { src: "images/vidflow/feat-my-channel-analytics-light.png", public_id: "" },
              dark: { src: "images/vidflow/feat-my-channel-analytics-dark.png", public_id: "" },
            },
            alt: "VidFlow channel analytics page showing total view count, subscriber count, total likes, and graphs for subscriber growth and per-video performance over time",
            caption: "The channel analytics dashboard. View counts are stored on the Video document. Subscriber totals come from the Subscription collection. Analytics queries use aggregation to compute totals and trends across both collections in a single pipeline per metric.",
          },
          {
            id: "feat-my-channel-customisation",
            sources: {
              light: { src: "images/vidflow/feat-my-channel-customisation-light.png", public_id: "" },
              dark: { src: "images/vidflow/feat-my-channel-customisation-dark.png", public_id: "" },
            },
            alt: "VidFlow channel customisation panel showing fields for updating the channel name, description, and buttons to change the avatar and banner image",
            caption: "The channel customisation panel. Avatar and cover image updates go through the full Cloudinary lifecycle: the old asset is deleted by its stored public ID before the new upload begins. If the delete returns anything other than ok or not found, the update is rejected before any new file is written.",
          },
          {
            id: "feat-settings",
            sources: {
              light: { src: "images/vidflow/feat-settings-change-email-password-light.png", public_id: "" },
              dark: { src: "images/vidflow/feat-settings-change-email-password-dark.png", public_id: "" },
            },
            alt: "VidFlow account settings page with a form for changing the email address and a separate form for updating the account password",
            caption: "The account settings page. Password changes require the old password to be verified with bcrypt before the new one is accepted. Both the change-password and update-account endpoints are protected by the JWT auth middleware so unauthenticated requests are rejected before reaching the controller.",
          },
          {
            id: "feat-figma-design-overview",
            sources: {
              light: { src: "images/vidflow/figma-design-overview.png", public_id: "" },
              dark: { src: "images/vidflow/figma-design-overview.png", public_id: "" },
            },
            alt: "Overview of the VidFlow Figma design file showing multiple feature screens and component layouts arranged side by side on the design canvas",
            caption: "The Figma design overview. Every feature screen is designed and covers the full user journey: home feed, video detail, channel pages, playlist player, subscriptions, watch history, activity dashboard, channel management, analytics, customisation, and account settings. The design is the source of truth for the frontend implementation planned in the next release.",
          },
        ],
      },
    },
    {
      id: "text-vidflow",
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
          text: "VidFlow: Backend API for a Video Streaming Platform",
          icon: {
            src: "favicons/vid-flow-favicon.svg",
            public_id: "",
            type: "stroke",
          },
        },
        tags: [
          { label: "01 Apr 25", icon: "CalendarEvent", tooltip: "Project creation date" },
          {
            id: "duration",
            label: { project: "360+ hrs", caseStudy: "13 min read" },
            icon: "Clock",
            tooltip: {
              project: "Estimated total build time",
              caseStudy: "Estimated read time",
            },
          },
          { id: "views", label: "0", icon: "Eye", tooltip: "Unique visits" },
          { label: "Node.js", icon: "BrandNodejs", tooltip: "Runtime environment" },
          { label: "Express", icon: "Server", tooltip: "Backend framework" },
          { label: "MongoDB", icon: "BrandMongodb", tooltip: "Database" },
          { label: "JWT", icon: "ShieldLock", tooltip: "Auth standard" },
          { label: "Figma", icon: "BrandFigma", tooltip: "UI design tool" },
          { label: "Video Streaming", icon: "Server", tooltip: "Project domain" },
        ],
        overview: {
          variant: "bodyLarge",
          text: "VidFlow is the backend REST API for a video streaming platform. The API covers user authentication with JWT access and refresh tokens stored in httpOnly cookies, avatar and cover image management through Cloudinary with lifecycle cleanup of old assets on every update, channel profiles with subscriber counts and subscription status resolved via MongoDB aggregation pipelines, and watch history populated with nested video and owner data in a single round trip. The Figma designs for the frontend are complete and cover every feature screen. A React implementation is planned for the next release.",
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
                text: "VidFlow is the backend for a video streaming platform. Users can register, log in, manage their profile media, view channel pages with subscriber data, and track watch history through a REST API built on Node.js, Express, and MongoDB. The project does not include a live frontend. The Figma UI designs are complete and a React implementation is planned for the next release.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "The main architectural decision was to build authentication around two tokens rather than one. A short-lived access token handles request authorization. A long-lived refresh token is persisted to MongoDB and stored in an httpOnly cookie. Revocation works at the database level: clearing the stored refresh token immediately invalidates any outstanding sessions, regardless of when the access token would naturally expire.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "I built this solo from the ground up, covering MongoDB schema design with pre-save password hashing and instance methods for token generation, two-stage aggregation pipelines for channel and history data, Cloudinary upload and delete lifecycle management across all media endpoints, JWT verification middleware, and a standardized error and response wrapper applied consistently across every route.",
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
                  "Build a dual-token JWT authentication system where session revocation works at the database level, not just at token expiry",
                  "Handle avatar and cover image lifecycle correctly so old Cloudinary assets are removed before new ones are stored, with no orphaned files left behind",
                  "Resolve channel profiles and watch history in single aggregation pipelines rather than multiple sequential queries",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "The goal was to build a backend that goes beyond tutorial-level auth and CRUD, and addresses the problems that appear in real production backends: orphaned media assets, stale session tokens, and N+1 query patterns in social data.",
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
                  "Build JWT access and refresh token authentication with database-level session revocation by persisting and comparing the refresh token on every refresh request",
                  "Handle Cloudinary media lifecycle so every update correctly removes the old asset by public ID before storing the new one, with the update rejected early if the delete fails",
                  "Resolve channel profile data and watch history with single aggregation pipelines that compute social counts and subscription status without sequential database round trips",
                  "Design the schema to support subscriptions, playlists, likes, comments, and community posts from the start, even where the controllers are planned for a later release",
                  "Apply a consistent error class, response wrapper, and async handler across all routes so every endpoint behaves predictably on both success and failure",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "These goals came from working through backend tutorials that stop at a single access token, never clean up media files, and resolve social data with sequential find and populate calls. Each of those is a real production problem. This project addresses all of them in one place.",
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
                text: "The core structural decision was to separate concerns clearly across layers. Models own schema definitions and business logic methods. Controllers handle request parsing and response shaping. Utilities cover cross-cutting concerns like Cloudinary operations and error handling. Middleware handles auth and file processing before the request reaches the controller.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "Four decisions define how the backend is built:",
              },
              {
                type: "list",
                as: "li",
                variant: "bodyLarge",
                texts: [
                  "Refresh token persistence in MongoDB: the token is stored in the user document and compared on every refresh request. Clearing it from the database immediately invalidates the session regardless of token expiry, giving server-side revocation control that a stateless access token alone cannot provide",
                  "Cloudinary lifecycle pairing: every media update reads the existing public ID, deletes the old Cloudinary asset, and only proceeds with the new upload if the delete returns ok or not found. A failed delete rejects the update early before any new file is written",
                  "Aggregation for social data: the channel profile and watch history endpoints are built as single aggregation pipelines. The channel pipeline joins the subscriptions collection twice, computes subscriber and subscribed-to counts, and resolves subscription status using $cond with $in, all in one database round trip",
                  "Consistent response and error shape: ApiResponse and ApiError are used across every endpoint so the client always receives a predictable structure regardless of which route it calls",
                ],
              },
              {
                type: "image",
                imageId: "feat-figma-design-overview",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "Before settling on this approach I considered simpler alternatives. For auth, a long-lived access token with no refresh mechanism is common in tutorials. It eliminates the refresh endpoint but gives no revocation control. For media management, overwriting the database reference without deleting the old Cloudinary asset is simpler but accumulates orphaned files over time with no way to recover them. For social data, using Mongoose populate across multiple find calls works but creates N+1 patterns as the dataset grows.",
              },
              {
                type: "list",
                as: "li",
                variant: "bodyLarge",
                texts: [
                  "Single access token with long expiry: simpler to implement but provides no server-side revocation, so a stolen token stays valid until it naturally expires",
                  "Media update without Cloudinary cleanup: simpler controller logic but leaves an orphaned asset on every update, with no path to recover those files without an external audit script",
                  "Sequential find and populate for social data: readable and easy to write but requires four or more database round trips to return what the aggregation pipeline resolves in one",
                ],
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "The main trade-off of the aggregation approach is readability. The channel profile pipeline that joins subscriptions twice, computes counts, and resolves subscription status inside a $cond is harder to follow at a glance than a sequence of find calls. For the data this project needs to serve that trade-off is worth it.",
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
                  "JWT dual-token authentication with httpOnly cookies and database-level session revocation via stored refresh token comparison",
                  "Avatar and cover image lifecycle management: the old Cloudinary asset is deleted by public ID before any new upload begins, with early rejection if the delete fails",
                  "Channel profile API resolving subscriber count, subscribed-to count, and current user subscription status from a single MongoDB aggregation pipeline",
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
                  "JWT dual-token auth: access token and refresh token issued at login, both stored in httpOnly cookies, with the refresh token persisted to MongoDB. Revocation works by clearing the stored value from the database, which invalidates the session on the next refresh attempt regardless of token expiry",
                  "Avatar and cover image management: files go through Multer to a temp directory then to Cloudinary. Every update first deletes the old asset using its stored public ID. If the Cloudinary delete returns anything other than ok or not found, the update is rejected before the new upload runs. Temp files are deleted from disk after every upload attempt whether it succeeds or fails",
                  "Channel profile endpoint: resolves full name, username, avatar, cover image, subscriber count, subscribed-to count, and whether the requesting user is subscribed in a single aggregation pipeline. The pipeline joins the subscriptions collection twice and uses $cond with $in to match the requesting user's ObjectId against the embedded subscriber array",
                  "Watch history endpoint: returns fully populated history entries with nested video details and owner data via a sub-pipeline lookup inside the main aggregation, with no separate find and populate calls",
                  "Password management: the old password is verified with bcrypt before the new one is accepted. Passwords are hashed in a Mongoose pre-save hook with an isModified guard so re-hashing does not occur when unrelated fields are saved",
                  "Aggregate paginate plugin on Video and Comment models for efficient pagination of large result sets without loading entire collections into memory",
                  "Polymorphic like schema supporting likes across videos, comments, and community posts from a single collection, using optional reference fields for each target type",
                  "Standardized ApiResponse and ApiError classes with async error forwarding via asyncHandler, applied across all 10 endpoints so every route returns the same shape on success and failure",
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
                  "Node.js, Express 5, MongoDB, Mongoose, JWT, bcrypt, Cloudinary, Multer for the backend API",
                  "Figma for the complete UI design, with React 19 and Tailwind CSS v4 planned for the frontend implementation",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "Each piece was chosen for a specific reason. Node.js and Express gave a lightweight runtime for a REST API without the overhead of a heavier framework. MongoDB with Mongoose fit the document structure of user profiles, channel data, and social metadata well. JWT handled stateless auth with refresh token rotation. Cloudinary removed the need to manage file storage, resizing, and CDN delivery manually.",
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
                    label: "Backend:",
                    value: "Node.js with Express 5. Express 5 was chosen over Express 4 because it ships with native async error propagation in route handlers. The project also uses a custom asyncHandler wrapper for consistency, but Express 5 means unhandled promise rejections in async routes are forwarded to the error middleware rather than silently swallowed.",
                  },
                  {
                    label: "Database:",
                    value: "MongoDB with Mongoose. The document model fits user profiles and channel metadata well. The social feature schema benefits from flexible reference fields across the Like, Subscription, and Playlist models. Mongoose adds schema validation, pre-save hooks for password hashing, instance methods for token generation, and the mongooseAggregatePaginate plugin on Video and Comment for efficient paginated queries.",
                  },
                  {
                    label: "Auth:",
                    value: "JWT for token generation and verification, bcrypt for password hashing at a cost factor of 10. Argon2 was considered but bcrypt has more widely documented guidance on cost factor tuning for Node.js and integrates more cleanly as Mongoose instance methods without additional native binary dependencies.",
                  },
                  {
                    label: "Media:",
                    value: "Cloudinary for cloud storage and delivery, Multer with disk storage for temp file handling before the upload runs. Both url and publicId are stored in every media schema field so assets can be deleted precisely on update, without a Cloudinary API listing call to find the old file.",
                  },
                  {
                    label: "UI Design:",
                    value: "Figma. The full interface across every feature screen is designed and covers the complete user journey. The React 19 and Tailwind CSS v4 implementation is planned for the next release, using these completed designs as the source of truth.",
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
                text: "The part of the stack most likely to need replacing first in a production system is the Multer temp disk approach. Writing files to disk before uploading to Cloudinary adds a disk I/O step and requires cleanup on every attempt, success or failure. A direct stream from the incoming request to Cloudinary, or memory storage for smaller files, would remove that intermediate step entirely.",
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
                    label: "ObjectId type mismatch in aggregation:",
                    value: "The subscription status check inside the channel pipeline always returned false until the user ID was explicitly constructed as a MongoDB ObjectId before being passed into the $cond with $in comparison. The failure was silent: no error, just always returning isSubscribed as false.",
                  },
                  {
                    label: "Cloudinary orphaned assets:",
                    value: "Solved by storing publicId alongside url in every media schema field and deleting the old asset by that ID before accepting any new upload, with early rejection if the delete returns an unexpected result.",
                  },
                  {
                    label: "Pre-save hook re-hashing:",
                    value: "Without the isModified check, saving any unrelated user field triggered bcrypt to re-hash an already-hashed password. The isModified guard is one line but without it every partial save silently corrupts the password.",
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
                    label: "ObjectId type mismatch in aggregation:",
                    value: "The channel profile pipeline joins the subscriptions collection, builds a subscribers array, and uses $cond with $in to check whether the requesting user appears in that array. During testing the check always returned false even when the user was clearly subscribed. The cause was that req.user._id is a string at the point it was passed into the pipeline, and a string does not match a BSON ObjectId inside an aggregation stage. MongoDB does not throw an error on the comparison. It just returns no match. The fix was to construct new mongoose.Types.ObjectId(String(req.user._id)) before the pipeline runs and pass that value into $cond. The issue was entirely silent: the query succeeded, returned results, and always set isSubscribed to false.",
                  },
                  {
                    label: "Cloudinary asset lifecycle on media updates:",
                    value: "Updating an avatar or cover image without deleting the old Cloudinary asset leaves an orphaned file with no reference. Over time those accumulate and cannot be recovered without an external audit. The solution was to store both url and publicId in the avatar and coverImage schema fields from the start. Update handlers read the existing publicId, call cloudinary.uploader.destroy with invalidate: true, and check the result. The delete can return not found for accounts that predated the publicId field, so not found is treated as valid and the upload proceeds. Anything else rejects the update before the new file is written.",
                  },
                  {
                    label: "Pre-save hook re-hashing on partial saves:",
                    value: "The password hashing pre-save hook runs on every save call, not just at registration. Calling user.save({ validateBeforeSave: false }) to persist a refresh token after login was re-hashing the already-hashed password because there was no isModified guard. The fix is one line but the failure mode is serious: the password is silently replaced with a hash of a hash, which breaks all subsequent logins for that user until they reset their password. The failure does not appear until the next login attempt, so it looks unrelated to the save that caused it.",
                  },
                  {
                    label: "Error shape consistency across controllers:",
                    value: "Without a shared error class, controllers in different files throw differently structured errors: some pass a status code as a string, some omit the message field, and some do not forward to Express error middleware at all. The ApiError class enforces statusCode, message, and errors as a fixed structure. The asyncHandler wrapper catches any thrown ApiError or unhandled promise rejection and forwards it to Express so no controller needs its own try-catch block and the client always receives the same error shape.",
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
                text: "The pattern across all four: the failure modes that matter most in a backend are the silent ones. Incorrect ObjectId comparisons, orphaned assets, corrupted passwords, and inconsistent error shapes all succeed without throwing an error. They only surface when observed behavior does not match expected behavior.",
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
                  "Channel profile and watch history resolved in single aggregation pipelines, reducing database round trips from 4 or more sequential queries down to 1",
                  "10 endpoints shipped with consistent ApiResponse and ApiError wrapping across every route, so both success and failure always return the same shape to the client",
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
                  "Channel profile and watch history queries resolved in single aggregation pipelines with no sequential find and populate calls, reducing database round trips from 4 or more to 1 per request",
                  "10 endpoints across user auth, media management, profile updates, channel data, and watch history, all returning the same ApiResponse shape with consistent error handling via ApiError and asyncHandler",
                  "Cloudinary lifecycle management applied to all media update endpoints so no orphaned assets accumulate across avatar and cover image operations",
                  "Refresh token comparison implemented at the database level so clearing the stored token immediately invalidates the session, with no dependency on token expiry timing",
                  "Mongoose pre-save hook with isModified guard prevents bcrypt re-hashing on partial saves, keeping password integrity across all token refresh and profile update flows",
                  "mongooseAggregatePaginate plugin on Video and Comment models so paginated queries are ready for future controllers without any schema changes",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "image",
                imageId: "feat-my-channel-analytics",
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "By the end this became a backend that handles the real problems of a social platform rather than just the happy path of a tutorial. The auth flow revokes at the database level, the media lifecycle is clean, and the social data resolves efficiently in single round trips.",
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
                  "MongoDB aggregation pipelines are significantly more efficient than populate chains for social data, but the pipeline syntax requires knowing the exact data types before writing it. The ObjectId type mismatch in the subscription status check was not obvious from the documentation and only surfaced through testing, because MongoDB returned a successful result with incorrect data rather than an error.",
                  "Storing public IDs alongside URLs for every Cloudinary asset should be a default schema decision, not an afterthought. Adding it after records exist requires a backfill migration and a script to audit or recover orphaned assets. It costs nothing to add at schema design time.",
                  "Mongoose pre-save hooks are the right place for password hashing, but the isModified guard is not optional. Without it, every partial save silently corrupts the password, and the failure does not appear until the next login attempt, making it difficult to trace back to the save that caused it.",
                  "A shared error class and async wrapper eliminate an entire category of inconsistency across endpoints. Once ApiError and asyncHandler are in place, every controller fails the same way and writing a new endpoint does not require thinking about error shape at all.",
                  "Dual-token auth provides meaningful control over stateless auth, but the security guarantee is only as strong as the refresh token handling. A rotation strategy where each use issues a new token and immediately invalidates the old one closes the window where a compromised token remains valid until the user manually logs out.",
                ],
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "This project changed how I approach API design. Consistency of error shape and response structure is now a first decision when starting a new backend, not a cleanup task at the end.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "If I started this over I would implement refresh token rotation from the beginning. The current system stores a single refresh token and compares it on use but does not replace it on a successful refresh. Issuing a new token on every use and immediately invalidating the old one reduces the window where a compromised token stays valid. The implementation cost is low and the security improvement is meaningful. It was the first shortcut I took and it would be the first thing I changed.",
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
                text: "The highest priority next step is the frontend implementation. The Figma designs cover every feature screen and are ready to build from. After that, the remaining API controllers for video upload, comments, likes, playlists, and subscriptions complete the full API surface that the existing Mongoose models already define.",
              },
              {
                type: "list",
                variant: "bodyLarge",
                as: "li",
                texts: [
                  "Frontend implementation in React 19 with Tailwind CSS v4 using the completed Figma designs as the source of truth, covering the home feed, video detail page, channel pages, playlist player, subscriptions feed, watch history, activity dashboard, channel management, analytics, customisation, and account settings",
                  "Video upload and streaming through Cloudinary video resource support, which requires extending the current upload utility to handle video as the resource type and extracting the duration from the Cloudinary response to store on the Video document",
                  "Remaining API controllers for video CRUD, comments, likes, playlists, and subscriptions to complete the full API surface that the existing Mongoose models already define and that the Figma designs already account for",
                  "Refresh token rotation so each successful use of a refresh token issues a new one and immediately invalidates the old one, reducing the validity window for any compromised token without requiring the user to log out and back in",
                  "Rate limiting on the login and refresh-token endpoints to prevent brute force attempts against credentials and active session tokens, which is the most straightforward security improvement left unaddressed in the current build",
                ],
              },
            ],
          },
        ],
      },
    },
  ],
};
export const fullstackDeveloper01Row = {
  id: "experience-fullstack-developer-01",
  title: "Full Stack Developer 01",
  enabled: true,
  domain: "experience",
  order: 1,
  topOrder: 1,
  createdAt: "2025-06-01T00:00:00.000Z",
  featured: true,
  primaryCategory: { key: "full-stack-developer", label: "Full Stack Developer" },
  secondaryCategories: [
    { key: "ecommerce", label: "E-commerce" },
  ],

  buttonProps: {
    variant: {
      home: "primary",
      workExperience: "secondary",
    },
    label: "View Full Case Study",
    icon: "ChevronRight",
  },

  tags: [
    { label: "Jun 25 to Jun 26", icon: "CalendarEvent", tooltip: "Employment period" },
    { id: "duration", label: "8 min read", icon: "Clock", tooltip: "Estimated read time" },
    { id: "views", label: "0", icon: "Eye", tooltip: "Unique visits" },
  ],

  fullCaseStudy: [
    {
      enabled: true,
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
          text: "Worked as a full stack developer from June 2025 to June 2026, taking on paid contract projects for small businesses through personal contacts and referrals. There was no formal employment structure or offer letter. The work was independent and remote, with a full time commitment across the twelve months. Projects covered e-commerce platforms, business management tools, and web applications built on MongoDB, Express, React, and Node.js. Most clients were based in the UK and US, which is why Stripe handled all payment integrations.",
        },
        {
          type: "text",
          variant: "bodyLarge",
          text: "The main value of the year was working on client requirements and deadlines instead of controlled solo projects. Clients changed requirements during active builds, timelines shifted, and some features that seemed simple in planning required significant rework. That kind of friction does not show up in solo portfolio work, and it shaped how I approach scoping, documentation, and feature implementation now.",
        },
        {
          type: "text",
          variant: "bodyLarge",
          text: "This period was a deliberate step taken after completing my studies, to build development experience before joining a formal full time role. Academic work does not prepare you for production software work, and the year of client work did.",
        },
      ],
    },

    {
      enabled: true,
      order: 2,
      heading: {
        variant: "heading2",
        text: "Business Context",
        icon: {
          src: "icons/content/work-experience-subtitle-business-context.svg",
          public_id: "",
          type: "stroke",
        },
      },
      body: [
        {
          type: "text",
          variant: "bodyLarge",
          text: "The work was freelance from the start. Projects came through personal contacts and referrals, clients were small businesses with limited budgets, and the expectation on every project was fast delivery.",
        },
        {
          type: "list",
          as: "li",
          variant: "bodyLarge",
          texts: [
            "Clients typically expected a working product within a few weeks of initial scoping, which left little room for extended discovery or documentation phases",
            "Requirements were often informal at the start and shifted once clients saw early builds in action",
            "No formal QA or staging environment was available for most projects, so I was responsible for testing my own work before pushing to production",
            "All tools and services were on free tiers or open source, which shaped decisions around platforms like Vercel, MongoDB Atlas, and Cloudinary",
          ],
        },
        {
          type: "text",
          variant: "bodyLarge",
          text: "These constraints made certain decisions harder, but they also meant every architecture and tooling choice was driven by what actually worked within those limits.",
        },
      ],
    },

    {
      enabled: true,
      order: 3,
      heading: {
        variant: "heading2",
        text: "Role and Scope of Responsibility",
        icon: {
          src: "icons/content/work-experience-subtitle-role-and-scope-of-responsibility.svg",
          public_id: "",
          type: "stroke",
        },
      },
      body: [
        {
          type: "text",
          variant: "bodyLarge",
          text: "The scope varied by project. Early work was primarily frontend in React. As more projects came in, the work expanded to cover backend API design, database schema decisions, third party integrations, and full deployment setup from scratch.",
        },
        {
          type: "list",
          as: "li",
          variant: "bodyLarge",
          texts: [
            "Building responsive React UIs with Tailwind CSS using modern JavaScript (ES6+) for client facing products across different domains",
            "Designing and implementing RESTful APIs with Node.js and Express",
            "MongoDB schema design for e-commerce, user management, and web applications",
            "Integrating Stripe for payment checkout on e-commerce projects, including webhook handling and order verification",
            "Implementing JWT authentication with access and refresh tokens, httpOnly cookie storage, and token verification middleware",
            "Configuring Vercel deployments connected to MongoDB Atlas and Cloudinary for production releases",
            "Managing source code with Git across all projects, including branching for features and maintaining a clean commit history before pushing to production",
          ],
        },
        {
          type: "text",
          variant: "bodyLarge",
          text: "By the second half of the year I was handling full stack delivery independently on most projects, from the initial database schema through to the production deployment configuration.",
        },
      ],
    },

    {
      enabled: true,
      order: 4,
      heading: {
        variant: "heading2",
        text: "Key Contributions and Business Impact",
        icon: {
          src: "icons/content/work-experience-subtitle-key-contributions-and-business-impact.svg",
          public_id: "",
          type: "stroke",
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
              label: "E-commerce platforms:",
              value: "Built full stack e-commerce sites for small business clients with Stripe payment integration, product listing with filtering and sorting, cart and checkout flow, and order management. Authentication was JWT based with protected routes on both the React frontend and the Express API.",
            },
            {
              label: "Reusable authentication system:",
              value: "Designed a JWT authentication pattern with access and refresh tokens, httpOnly cookie storage, and token management handled at the Mongoose level. The same pattern was adapted across multiple client projects without significant changes each time. Session revocation worked by clearing the stored refresh token at the database level.",
            },
            {
              label: "Business management dashboards:",
              value: "Built multi user internal dashboard applications with role based access control, user management panels, data entry forms, and data tables for clients in retail and service businesses. These were internal tools with separate admin and user permission layers.",
            },
            {
              label: "Production deployment configuration:",
              value: "Configured production environments for every project: Vercel for hosting, MongoDB Atlas for the database with environment separated connections, and Cloudinary for media uploads and delivery. Set up .env conventions and deployment pipelines from the start of each project.",
            },
          ],
        },
        {
          type: "text",
          variant: "bodyLarge",
          modifiers: ["strong"],
          text: "Business Impact:",
        },
        {
          type: "text",
          variant: "bodyLarge",
          text: "Delivered multiple complete, deployed web applications for small business clients over twelve months, covering different domains and use cases. Each was live in production with working user authentication and, on the e-commerce builds, live payment processing through Stripe. Delivering that volume of shipped work across different client requirements was the most direct way to build practical skills that solo portfolio projects alone could not provide.",
        },
      ],
    },

    {
      enabled: true,
      order: 5,
      heading: {
        variant: "heading2",
        text: "Challenges and Solutions",
        icon: {
          src: "icons/content/projects-subtitle-challenges-solved.svg",
          public_id: "",
          type: "stroke",
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
              label: "Scope changes during active builds:",
              value: "Clients regularly changed requirements after seeing early builds. Initial projects suffered because feature scope was agreed informally and verbally. After losing time to rework on one e-commerce project where the product filtering requirements changed three times, I started writing a brief feature spec before beginning each piece of work and asking for written agreement before coding started. Scope changes continued but they became negotiated changes with agreed timelines rather than surprise additions.",
            },
            {
              label: "Stripe webhook duplicate processing:",
              value: "Payment confirmation from Stripe arrives via a webhook after the user completes checkout. On one project a network retry caused the webhook to fire twice for the same order, which would have marked the order as confirmed twice. The fix was to check the order status in the database before processing the webhook and reject any request for an order already marked as confirmed. A simple idempotency check, but the failure only appeared under conditions that did not occur in local development.",
            },
            {
              label: "Production environment setup on first deployment:",
              value: "The first production deployment took significantly longer than expected because local and production environments had different Node.js versions and environment variable handling was not configured correctly. After that, every project started with a working Vercel deployment and a complete .env.example file before any feature work began, so environment issues surfaced at the start of each project rather than at the end.",
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
        text: "Technology and Tools",
        icon: {
          src: "icons/content/projects-subtitle-technology-and-tools.svg",
          public_id: "",
          type: "stroke",
        },
      },
      body: [
        {
          type: "text",
          variant: "bodyLarge",
          text: "The stack across all projects was MERN: MongoDB for the database, Express for the API layer, React for the frontend, and Node.js as the runtime. Tailwind CSS, JWT, Cloudinary, and Vercel were present in almost every build. Stripe was added on projects that required payment processing, which fit the UK and US client base without any additional setup overhead on the client side.",
        },
        {
          type: "labelValueList",
          as: "li",
          variant: "bodyLarge",
          modifiers: ["strong"],
          texts: [
            {
              label: "Frontend:",
              value: "React with Vite and Tailwind CSS, written in modern JavaScript throughout (ES6+, async/await, destructuring, modules). State management stayed at the component level using useState and useContext for most projects. Redux Toolkit was brought in on one larger dashboard project where auth state and user preferences needed to be shared across multiple views. The choice between the two came down to whether the cross component state problem actually existed in that project.",
            },
            {
              label: "Backend:",
              value: "Node.js with Express. All APIs were REST with JSON responses. Middleware layers handled JWT token verification, file uploads via Multer before Cloudinary, and error response standardization. Express 5 was used toward the end of the year for its native async error forwarding, which removed the need for manual try catch blocks in every async controller.",
            },
            {
              label: "Database:",
              value: "MongoDB with Mongoose across all projects. Schema design varied by domain: e-commerce projects needed product, cart, order, and user collections; dashboard projects needed user, role, and entity collections with relationship references. Aggregation pipelines were used where computed counts or joins were required rather than chaining multiple find and populate calls.",
            },
            {
              label: "Authentication:",
              value: "JWT with access and refresh tokens. Access tokens lasted one hour. Refresh tokens were persisted in MongoDB and stored in httpOnly cookies. Revocation worked by clearing the database record, which invalidated the session immediately regardless of token expiry timing. Passwords were hashed with bcrypt inside a Mongoose pre save hook with an isModified guard to prevent re hashing on unrelated field saves.",
            },
            {
              label: "Infrastructure:",
              value: "Vercel for hosting with serverless function support for the Express API. MongoDB Atlas with IP restricted connections and separate development and production clusters per project. Cloudinary for file uploads and media delivery on projects that required asset storage, with both the URL and public ID stored in the database so old assets could be deleted precisely on update.",
            },
          ],
        },
        {
          type: "text",
          variant: "bodyLarge",
          text: "The main limitation of this stack at the client project scale was Vercel function cold starts on projects with low traffic. For a production system handling consistent volume a persistent Node.js server would handle that better. At the scale these projects operated, it was an acceptable trade off for the zero config deployment experience.",
        },
      ],
    },

    {
      enabled: true,
      order: 7,
      heading: {
        variant: "heading2",
        text: "Achievements and Recognition",
        icon: {
          src: "icons/content/projects-subtitle-performance-achievements.svg",
          public_id: "",
          type: "stroke",
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
              label: "Role Progression:",
              value: "Started on primarily frontend tasks. By the midpoint was handling full stack delivery independently, including API design, database schemas, third party integrations, and deployment setup. The scope of responsibility expanded substantially across the twelve months.",
            },
            {
              label: "Responsibility Growth:",
              value: "Toward the end of the year was the primary developer on two projects from initial scoping through to production deployment, with direct client communication at each checkpoint.",
            },
            {
              label: "Trust and Reliability:",
              value: "The JWT authentication pattern built for the first e-commerce project was reused on later projects without significant changes. When something gets picked up and used again without modification, it is usually a sign the original was solid.",
            },
            {
              label: "Process Improvement:",
              value: "Introduced a shared .env.example convention and a standardized error response middleware after the first production deployment debugging session. Both were carried into all subsequent projects and cut down repeated setup work on every new build.",
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
        text: "Outcomes and Learnings",
        icon: {
          src: "icons/content/projects-subtitle-key-learnings.svg",
          public_id: "",
          type: "stroke",
        },
      },
      body: [
        {
          type: "text",
          variant: "bodyLarge",
          text: "A year of client work built habits that solo portfolio projects do not: writing feature specs before coding, testing error paths and not just the happy path, and treating deployment setup as the first step rather than something to sort out at the end.",
        },
        {
          type: "list",
          as: "li",
          variant: "bodyLarge",
          texts: [
            "Scope must be documented before work begins. Verbal agreements with clients lead to scope creep that is hard to push back on without a written reference point.",
            "Production deployments reveal environment issues that local development hides entirely. Starting with a deployed environment before building features catches those problems at the beginning rather than at the end.",
            "An idempotency check on any payment or state change endpoint is not optional. The failure case does not appear in local development and only shows up under real usage or retry conditions.",
            "Reusable authentication and file upload patterns pay off quickly across multiple projects. The first implementation takes time. After that, adapting it to a new project is much faster.",
          ],
        },
        {
          type: "text",
          variant: "bodyLarge",
          text: "This year changed how I approach project setup. Deployment configuration and environment separation are now first decisions instead of late ones.",
        },
        {
          type: "text",
          variant: "bodyLarge",
          text: "Looking back, the one thing I would change is writing feature scopes from day one instead of developing that habit through friction. If that had been the default from the start, a lot of the rework on early builds would not have happened.",
        },
      ],
    },
  ],

  blocks: [
    {
      id: "work-experience-image-block",
      type: "imageBlock",
      enabled: true,
      order: 1,
      data: {
        coverImageId: "hero",
        images: [
          {
            id: "hero",
            sources: {
              light: { src: "images/fullstack-developer-01/fullstack-developer-01-hero-light.png", public_id: "" },
              dark: { src: "images/fullstack-developer-01/fullstack-developer-01-hero-dark.png", public_id: "" },
            },
            alt: "Overview of a year of freelance full stack development on the MERN stack covering client projects in e-commerce, business management, and web applications",
            caption: "A year of freelance full stack development from June 2025 to June 2026. Client projects spanned e-commerce platforms with Stripe payment integration, multi user business management dashboards, and web applications. Each project was built and deployed end to end, from requirements to production on Vercel with MongoDB Atlas.",
          },
          {
            id: "feature-1",
            sources: {
              light: { src: "images/fullstack-developer-01/experience-template-feature-1-light.png", public_id: "" },
              dark: { src: "images/fullstack-developer-01/experience-template-feature-1-dark.png", public_id: "" },
            },
            alt: "The MERN stack and supporting tools used across client projects during the year including React, Node.js, Express, MongoDB, Cloudinary, Vercel, and Stripe",
            caption: "The stack stayed consistent across all client projects: React and Tailwind CSS on the frontend, Node.js and Express for the API layer, MongoDB with Mongoose for the database, and Vercel for deployment. JWT handled authentication. Cloudinary handled media uploads. Stripe handled checkout on e-commerce builds.",
          },
        ],
      },
    },

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
              text: "Full Stack Developer",
              icon: {
                src: "icons/content/work-experience-subtitle-job-role.svg",
                public_id: "",
                type: "stroke",
              },
            },
            body: {
              timeline: {
                variant: "bodyBase",
                text: "Jun 2025 to Jun 2026",
              },
              labelValueItems: [
                {
                  id: "organization",
                  label: { variant: "bodyBase", modifiers: ["strong"], text: "Organization:" },
                  value: {
                    variant: "link",
                    label: "Freelance (Personal Network Clients)",
                    icon: "ChevronUpRight",
                    action: "external",
                    target: "https://www.upwork.com",
                  },
                },
                {
                  label: { variant: "bodyBase", modifiers: ["strong"], text: "Location:" },
                  value: { variant: "bodyBase", text: "Remote (WFH), Kolkata, India" },
                },
                {
                  label: { variant: "bodyBase", modifiers: ["strong"], text: "Employment Type:" },
                  value: { variant: "bodyBase", text: "Freelance Contract (Paid)" },
                },
                {
                  label: { variant: "bodyBase", modifiers: ["strong"], text: "Domain:" },
                  value: { variant: "bodyBase", text: "Full Stack Development / Web Applications" },
                },
              ],
              techStack: {
                label: { variant: "bodyBase", modifiers: ["strong"], text: "Tech Stack:" },
                value: {
                  variant: "bodyBaseTag",
                  texts: [
                    "MongoDB",
                    "Express.js",
                    "React",
                    "Node.js",
                    "JWT",
                    "Tailwind CSS",
                    "Cloudinary",
                    "Vercel",
                    "Stripe",
                    "Git",
                  ],
                },
              },
            },
          },
        ],
      },
    },

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
            id: "keyContributionsAndBusinessImpact",
            enabled: true,
            heading: {
              variant: {
                home: "heading3",
                workExperience: "bodyLarge",
              },
              modifiers: ["strong"],
              text: "Key Contributions and Business Impact",
              icon: {
                src: "icons/content/work-experience-subtitle-key-contributions-and-business-impact.svg",
                public_id: "",
                type: "stroke",
              },
            },
            overview: {
              variant: "bodyLarge",
              text: {
                home: "One year of full stack development on the MERN stack, building and shipping client projects across e-commerce, business management, and web applications. I took this year deliberately to gain production experience before joining a company full time.",
                workExperience: null,
              },
            },
            highlights: {
              variant: "bodyLarge",
              as: "li",
              texts: {
                home: [
                  "Built e-commerce platforms with Stripe payment integration, JWT auth, product filtering, and order management for UK and US small business clients",
                  "Designed a reusable JWT auth pattern with refresh token persistence and session revocation at the database level, carried across multiple projects without rework",
                  "Handled full stack delivery independently on later projects, covering API design, MongoDB schema, Cloudinary media setup, and Vercel deployment",
                ],
                workExperience: [
                  "Built e-commerce platforms using React, Node.js, Express, and MongoDB with Stripe handling payment checkout, product filtering, cart management, and order tracking across both frontend and backend layers",
                  "Designed a reusable JWT authentication implementation with httpOnly cookie storage, refresh token persistence in MongoDB, and session revocation at the database level, adopted across multiple client projects without significant rework",
                  "Configured production deployment setups using Vercel for hosting, MongoDB Atlas for the database, and Cloudinary for media storage and delivery across every project in the year",
                  "Built multi user business management dashboards with role based access control, user management panels, data tables, and form based data entry for clients in retail and service businesses",
                  "Introduced a shared error response middleware and environment variable conventions that reduced setup overhead on every project that followed the first production deployment",
                ],
              },
            },
            caseStudyAtAGlance: {
              variant: "bodyLarge",
              text: {
                home: "The full case study covers the work in detail, including the authentication system, payment integration, deployment setup, scope management, the production issues that came up along the way, and more.",
                workExperience: null,
              },
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
              modifiers: ["strong"],
              text: "Challenges and Problem-Solving",
              icon: {
                src: "icons/content/projects-subtitle-challenges-solved.svg",
                public_id: "",
                type: "stroke",
              },
            },
            highlights: {
              variant: "bodyLarge",
              as: "li",
              texts: [
                "Scope changes during active builds caused rework on early projects. Fixed by writing brief feature specs before coding began and getting written client agreement before starting each piece of work, turning surprise additions into negotiated changes with defined timelines.",
                "A Stripe webhook retry on one e-commerce project would have processed a payment confirmation twice. Fixed with an idempotency check on the order status before processing any incoming webhook, rejecting duplicate requests for orders already marked as confirmed.",
              ],
            },
          },
        ],
      },
    },
  ],
};
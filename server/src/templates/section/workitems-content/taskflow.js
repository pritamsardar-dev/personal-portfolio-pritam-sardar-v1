export const taskFlowProjectRow = {
  id: "project-row-taskflow",
  title: "TaskFlow: Task Manager and Productivity Tracker",
  enabled: true,
  domain: "project",
  order: 13,
  topOrder: 13,
  createdAt: "2023-02-01T00:00:00.000Z",
  primaryCategory: { key: "tools", label: "Tools" },
  secondaryCategories: [
    { key: "task-management", label: "Task Management" },
    { key: "time-tracking", label: "Time Tracking" },
  ],
  featured: true,

  links: {
    liveDemo: {
      url: "https://taskflow.pritamsardar.dev",
    },
    sourceCode: {
      url: "https://github.com/pritamsardar-dev/portfolio-task-manager-v1",
    },
    designFile: {
      url: "",
      message: {
        title: "No Design File for This Project",
        text: "TaskFlow was designed directly in the browser. Layout decisions were made iteratively in React and Tailwind CSS without a separate Figma phase. The design system is built on CSS custom properties for theming, so token changes are visible immediately in the running app. A Figma file was never part of the process.",
      },
    },
  },

  blocks: [
    {
      id: "images-taskflow",
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
              light: { src: "images/taskflow/taskflow-hero-light.png", public_id: "" },
              dark: { src: "images/taskflow/taskflow-hero-dark.png", public_id: "" },
            },
            alt: "TaskFlow site cover image showing three device frames in light mode: a desktop screen with the main task list page, a tablet screen with the analytics page, and a mobile screen with the same task list page in its responsive mobile layout",
            caption: "The site cover image shown across three device frames. The desktop frame shows the main task list page with task cards containing priority pills, timers, and progress indicators. The tablet frame shows the analytics page with stat cards, the daily hours grid, and the productivity curve. The mobile frame shows the same task list page in its responsive single-column layout, with the card grid adapting cleanly to the smaller screen.",
          },
          {
            id: "feat-tasks-week",
            sources: {
              light: { src: "images/taskflow/feat-tasks-week-light.png", public_id: "" },
              dark: { src: "images/taskflow/feat-tasks-week-dark.png", public_id: "" },
            },
            alt: "TaskFlow task list filtered to Last 7 Days showing a mix of open and completed task cards, active filter pills for status and priority, a sort toggle, and pagination controls",
            caption: "The task list filtered to the last seven days. Filter pills for open, closed, high, medium, and low can be combined. The sort toggle switches between newest and oldest. Pinned open tasks stay at the top regardless of sort order. Completed tasks sort below open ones and display the completion timestamp.",
          },
          {
            id: "feat-analytics",
            sources: {
              light: { src: "images/taskflow/feat-analytics-light.png", public_id: "" },
              dark: { src: "images/taskflow/feat-analytics-dark.png", public_id: "" },
            },
            alt: "TaskFlow analytics view showing four stat cards for total tasks, total hours, hours spent, and productivity, a daily hours grid with color-coded cards from red through green, and a smooth SVG productivity curve below",
            caption: "The analytics view. The stat row shows total tasks, target hours, time spent, and a productivity percentage with a progress bar. The daily hours grid colors each day from red through green based on hours worked. The productivity curve below plots daily spent time against target time across the selected date range.",
          },
          {
            id: "feat-popup",
            sources: {
              light: { src: "images/taskflow/feat-popup-light.png", public_id: "" },
              dark: { src: "images/taskflow/feat-popup-dark.png", public_id: "" },
            },
            alt: "TaskFlow task completion popup with an animated SVG ring and checkmark, the task name, time spent, progress percentage, target minutes, and an auto-draining timer bar at the bottom",
            caption: "The completion popup. It fires when a task is checked off or when time spent reaches the target. The SVG check animates in with a ring draw and tick stroke sequence. Stats show time spent, progress, and target minutes. A timer bar drains over 5.5 seconds and the popup closes automatically or can be dismissed early.",
          },
          {
            id: "feat-saved",
            sources: {
              light: { src: "images/taskflow/feat-saved-light.png", public_id: "" },
              dark: { src: "images/taskflow/feat-saved-dark.png", public_id: "" },
            },
            alt: "TaskFlow saved tasks view showing a library of reusable task cards with name, details, and priority fields but no timer controls visible",
            caption: "The saved tasks view. Tasks created here act as reusable templates with no timer or run state. Clicking Import Saved Tasks on the main view copies all templates into the active task list with fresh IDs, reset timers, and the current timestamp as the creation date.",
          },
          {
            id: "feat-export",
            sources: {
              light: { src: "images/taskflow/feat-export-light.png", public_id: "" },
              dark: { src: "images/taskflow/feat-export-dark.png", public_id: "" },
            },
            alt: "TaskFlow export view with Export Excel CSV and Export JSON buttons, a date range filter, four stat cards, and a paginated preview table showing task name, details, priority, minutes, hours spent, status badge, created timestamp, and completed timestamp",
            caption: "The export view. Tasks are filtered by date range before exporting. CSV output is quoted and formatted for Excel. JSON exports the raw task array. The preview table below the export controls shows the same filtered data with status badges, priority labels, and full timestamps so the user can verify what will be included before downloading.",
          },
          {
            id: "feat-guide",
            sources: {
              light: { src: "images/taskflow/feat-guide-light.png", public_id: "" },
              dark: { src: "images/taskflow/feat-guide-dark.png", public_id: "" },
            },
            alt: "TaskFlow guide view showing ten numbered cards in a two-column grid, each with an icon, a short title, and a description covering features from adding tasks to exporting data",
            caption: "The guide view. Ten numbered cards cover every feature in the app. Each card has an icon, a title, and a short description. The layout is a two-column grid on wider screens and a single column on mobile.",
          },
          {
            id: "feat-account",
            sources: {
              light: { src: "images/taskflow/feat-account-light.png", public_id: "" },
              dark: { src: "images/taskflow/feat-account-dark.png", public_id: "" },
            },
            alt: "TaskFlow account view with two side-by-side cards, one explaining that no account is required and data stays in the browser, and one listing upcoming version two features including team workspaces and cloud sync",
            caption: "The account view. The left card explains that the app requires no account and stores all data in the browser with no external access. The right card lists the team and cloud features planned for version two including shared boards, real-time collaboration, cross-device sync, and role-based access.",
          },
        ],
      },
    },
    {
      id: "text-taskflow",
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
          text: "TaskFlow: Task and Productivity Management App",
          icon: {
            src: "favicons/task-flow-favicon.svg",
            public_id: "",
            type: "stroke",
          },
        },
        tags: [
          { label: "01 Mar 25", icon: "CalendarEvent", tooltip: "Project creation date" },
          {
            id: "duration",
            label: { project: "240+ hrs", caseStudy: "11 min read" },
            icon: "Clock",
            tooltip: {
              project: "Estimated total build time",
              caseStudy: "Estimated read time",
            },
          },
          { id: "views", label: "0", icon: "Eye", tooltip: "Unique visits" },
          { label: "React", icon: "BrandReact", tooltip: "Frontend framework" },
          { label: "Tools", icon: "HeartRateMonitor", tooltip: "Project domain" },
        ],
        overview: {
          variant: "bodyLarge",
          text: "TaskFlow is a client-side task manager built with React 19 and Vite 5. It runs entirely in the browser with no backend server. Tasks, timer state, daily time totals, and saved templates all persist through localStorage. The app supports real-time timer tracking with wall-clock accuracy across page reloads and tab switches, priority and status filtering, five date range presets plus a custom calendar picker, and CSV or JSON export.",
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
                text: "TaskFlow is a browser-based productivity app that lets you create tasks, run timers against them, track daily hours, and export the data. There is no backend and no account required. Everything lives in localStorage. The problem it solves is straightforward: most task timer tools either require a server or are too heavy for personal daily use. TaskFlow is a single-page React app that works offline and stores nothing outside the browser.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "The main architectural decision was to use wall-clock timestamps for timer accuracy rather than interval-based counting. Storing a start timestamp and computing elapsed time on every tick means the timer stays correct after tab switches, browser throttling, and page reloads. The persistence layer separates daily time totals from task totals so the analytics view can show how much time was worked on any given calendar day, independent of when the tasks were created.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "This was built with React 19 using custom hooks for all state logic, Tailwind CSS v4 with CSS custom properties for light and dark theming, and no third-party state management or UI component libraries.",
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
                  "Build a task timer that stays accurate across page reloads, tab switches, and browser throttling without a backend",
                  "Track daily working hours separately from task totals so the analytics view can show time per calendar day",
                  "Keep the entire app client-side with no account, no server, and no dependencies beyond React and Tailwind",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "The goal was to build a fully functional productivity tool without reaching for a backend as a shortcut.",
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
                  "Build a timer that stays accurate across page reloads, tab switches, and browser throttling using wall-clock timestamps rather than interval counting",
                  "Track daily time totals separately from task data so the analytics view can show how much time was worked on any given calendar day",
                  "Support a saved tasks library that acts as a reusable template system, importing fresh copies into the active list with reset timers each day",
                  "Build a filter and date range system that works across three separate views without shared state leaking between them",
                  "Keep everything client-side with no account, no server round trips, and no data leaving the browser",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "These goals came from using browser-based task tools that either dropped timer state on reload or required signing in before doing anything useful. I wanted to see how far a purely local app could go before the absence of a server became a real limitation.",
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
                text: "The core architectural decision was to separate timer accuracy from React state. Rather than incrementing a counter every second, the timer stores a start timestamp and a base elapsed value in localStorage when it begins. On every tick it computes the current time by subtracting the start timestamp from Date.now(). This means the display is always correct regardless of how long the tab was in the background or whether the page was reloaded mid-run.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "The system is built around four responsibilities that each have a clear owner:",
              },
              {
                type: "list",
                as: "li",
                variant: "bodyLarge",
                texts: [
                  "useTaskTimer handles wall-clock timing, throttled localStorage writes every 800ms during active tracking, and daily time delta accumulation using a separate per-date storage key so individual task totals do not need to be summed to produce the analytics data",
                  "useTasks owns the task array in React state, synchronises all writes to localStorage inside requestAnimationFrame to avoid layout thrashing, and handles the template import flow with fresh IDs and reset state",
                  "useCompletionNotifier watches task state for checkbox completion or 100% progress and fires the popup once per event, resetting the notification flag if the condition reverses so the popup can fire again if it genuinely reoccurs",
                  "usePageFilter isolates date range and custom date state per view, using namespaced localStorage keys and URL parameter names so the task list, analytics, and export views each maintain their own range without touching each other",
                ],
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "This approach keeps each concern in one place and means the timer works correctly even when React batches updates or the browser throttles the tab.",
              },
              {
                type: "image",
                imageId: "feat-analytics",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "Before settling on wall-clock timestamps, a simpler setInterval approach was considered. setInterval loses accuracy when the browser throttles background tabs and drops ticks when the machine is under load. Storing a start timestamp and computing elapsed time on every render eliminates that class of bug entirely. Zustand was considered for shared state but rejected because the app has no cross-component state that would benefit from a global store. Custom hooks and props cover every case cleanly.",
              },
              {
                type: "list",
                as: "li",
                variant: "bodyLarge",
                texts: [
                  "setInterval-based timer: simpler to implement but loses accuracy in background tabs and cannot recover state after a page reload without storing a timestamp anyway, so it does not avoid the complexity",
                  "Zustand for global state: would have been appropriate if the task list were shared across routes or if multiple views needed to subscribe to the same slice, but the single-page layout does not create that need",
                  "IndexedDB for storage: would allow larger payloads and binary data but adds async read complexity that localStorage avoids without any practical benefit at this data scale",
                ],
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "The main trade-off is that localStorage has a size limit of roughly five megabytes and synchronous reads block the main thread. For a single-user local app with text-only task data this is not a problem in practice, but it would be the first constraint to hit if the app grew beyond personal use.",
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
                  "Wall-clock timer that survives page reloads and tab switches without losing elapsed time, using a stored start timestamp rather than an interval counter",
                  "Per-view date range filters with five presets and a custom calendar picker, each isolated so changing the analytics range does not affect the task list",
                  "Saved tasks library that imports reusable templates into the active list with fresh IDs, reset timers, and the current creation timestamp",
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
                  "Wall-clock timer with page reload recovery: the timer stores a start timestamp and base elapsed seconds in localStorage when started so it recomputes the correct display on mount even after a reload or tab switch, with a visibilitychange listener that snaps the display back to the accurate value when the tab regains focus",
                  "Daily time tracking via a separate per-date map: addDailyTime writes time deltas to a YYYY-MM-DD keyed map in localStorage so the analytics view can show hours per calendar day without summing across task records",
                  "Priority and status filtering with multi-select: filter pills for open, closed, high, medium, and low can be combined; the sort toggle between newest and oldest applies within each group independently of pin state, and pinned open tasks always stay at the top",
                  "Saved tasks as a reusable template library: tasks created in the saved view have timers hidden and no run state; importing stamps each with a new ID and creation timestamp so they appear as fresh tasks in the active list",
                  "Completion popup with animated SVG check: fires once when a task is checked or reaches 100% progress, plays a soft audio cue, shows time spent and target stats, and auto-closes after 5.5 seconds with a draining timer bar",
                  "CSV and JSON export with date range filtering: CSV output is quoted for Excel compatibility and includes all task fields; JSON exports the full task array; both respect the selected date range before generating the file client-side",
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
                  "React 19, Vite 5, Tailwind CSS v4, clsx for the frontend",
                  "localStorage for all task and timer persistence with no backend or external services",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "Every choice was made to keep the project client-side without pulling in unnecessary dependencies. The stack needed to handle async timer state, CSS theming without a runtime library, and file generation without a server.",
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
                    value: "React 19 with Vite 5. The hooks model suited the timer and notification logic well. Each concern lives in its own custom hook and the component tree is shallow enough that prop drilling is not a problem. Vue was considered but the React hooks API was a better fit for the wall-clock timer pattern and the completion notification diffing logic.",
                  },
                  {
                    label: "Styling:",
                    value: "Tailwind CSS v4 with CSS custom properties for design tokens. Light and dark themes are driven by a class on the root element. All color, border, and background values reference CSS variables so the theme switches by toggling a single class rather than re-rendering a provider. This kept theming consistent across both Tailwind utility classes and inline styles.",
                  },
                  {
                    label: "State and storage:",
                    value: "localStorage for all persistence with no external state library. Task reads happen once on mount via a lazy useState initializer. Writes are batched inside requestAnimationFrame to avoid layout thrashing. Timer state is written at most every 800ms via a throttled useEffect to keep write frequency low during active tracking sessions.",
                  },
                  {
                    label: "Build:",
                    value: "Vite 5 with the React plugin. Build times are under two seconds in development mode. The output is a small static bundle with no server requirement so the app deploys directly to any static host.",
                  },
                  {
                    label: "Utility:",
                    value: "clsx for conditional class merging. Date formatting uses the native Intl API rather than a library like date-fns. No other runtime utility libraries.",
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
                text: "localStorage as the only persistence layer is the decision most likely to need replacing if the app extended to multi-device use. Syncing across devices requires a real backend and auth layer, which is the planned direction for version two.",
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
                    label: "Timer drift in background tabs:",
                    value: "Replaced interval counting with wall-clock timestamps. The timer always computes elapsed time from Date.now() minus the stored start time, so drift is impossible regardless of browser throttling.",
                  },
                  {
                    label: "Per-day analytics without a backend:",
                    value: "Built a separate localStorage map keyed by YYYY-MM-DD date strings. The timer writes time deltas to the current date bucket on every save so daily totals accumulate correctly without scanning the full task list.",
                  },
                  {
                    label: "Three views with independent filter state:",
                    value: "Isolated each view's range and custom dates into a separate usePageFilter hook instance with namespaced storage keys so changing one view does not affect the others.",
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
                    label: "Timer drift in background tabs:",
                    value: "Browsers throttle setInterval calls in background tabs to once per second or slower. An interval-based counter accumulates error over time and shows the wrong elapsed value when the tab comes back into focus. The fix was to store a start timestamp and a base elapsed value when the timer starts. Every tick calls Date.now() minus the start timestamp plus the base, so the displayed time is always correct regardless of how long the tab was inactive. A visibilitychange listener resets the display immediately when the tab regains focus.",
                  },
                  {
                    label: "Daily hours tracking without per-task date records:",
                    value: "Task records store a total spent seconds value but not a breakdown by calendar day. If a task runs across midnight or across multiple days the total cannot be split correctly by scanning task data alone. The fix was a separate localStorage map keyed by YYYY-MM-DD. The timer computes the delta between the previous and current spent total on every throttled write and adds that delta to the current date bucket. This means the daily map accumulates real working time per day independently of when or how tasks were created.",
                  },
                  {
                    label: "Completion popup firing on every re-render:",
                    value: "The useCompletionNotifier hook runs on every task state change. Without tracking which events had already fired a popup, a task sitting at exactly 100% progress would trigger a new popup on every re-render that touched task state. The fix was a notificationShown flag written to the task record when the popup fires. The hook checks this flag before firing and clears it if the task is unchecked or drops below 100%, so the popup can fire again if the condition genuinely reoccurs.",
                  },
                  {
                    label: "Filter state leaking between views:",
                    value: "The task list, analytics view, and export view all need date range filters. Sharing a single filter state would mean switching the analytics range also changes what the task list shows. The fix was a usePageFilter hook that takes namespaced localStorage keys and URL parameter names as arguments at call time. Each view instantiates its own copy of the hook with its own storage keys so the ranges are fully independent and persist separately across page loads.",
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
                text: "The common thread across all four: client-side state has more edge cases than it looks like on the happy path. The bugs only appeared when testing real usage patterns such as long running timer sessions, background tabs, and switching views mid-task.",
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
                  "App initialises from localStorage with no network requests after initial load, no auth step, and no loading screen regardless of task count",
                  "Timer accuracy is maintained across page reloads and background tabs because elapsed time is computed from a stored wall-clock timestamp rather than accumulated via an interval counter",
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
                  "No backend dependency: the app reads all task and timer state from localStorage on mount with no network requests, no auth flow, and no loading screen",
                  "Timer accuracy maintained across reloads and background tabs: wall-clock timestamps eliminate the drift that interval-based timers accumulate in throttled or backgrounded contexts",
                  "localStorage write frequency capped at 800ms during active timing: throttling keeps the write rate low without letting the displayed time diverge from the stored value",
                  "requestAnimationFrame batching for task writes: all task state writes are deferred to the next animation frame to avoid layout thrashing during rapid updates",
                  "Three fully independent filter states: each view maintains its own date range and custom dates with namespaced storage keys so interactions in one view have no effect on the others",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "image",
                imageId: "feat-tasks-week",
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "This became a tool I use personally for daily task tracking, which is a reasonable sign the core product decisions were correct.",
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
                  "Browser timers are not reliable for tracking elapsed time. Wall-clock timestamps produce accurate results regardless of tab state, browser throttling, or how React schedules renders.",
                  "Separating storage concerns prevents cross-cutting bugs. Daily time totals belong in their own data structure, not derived from task records at read time. Writing the delta at save time keeps each read simple and always correct.",
                  "Isolated filter state per view is worth the extra code. Sharing a single filter across multiple views creates bugs that only appear when a user switches views mid-session, and they are unpleasant to trace back.",
                  "requestAnimationFrame batching is a practical tool for high-frequency state writes. It reduces main thread pressure without requiring a debounce timer or a write queue.",
                  "Custom hooks are sufficient for moderately complex local state. This project has timer state, filter state, notification state, and task state, and none of it required a global store.",
                ],
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "This project changed how I think about client-side persistence. The question is not just where to store data but at what granularity and in what shape to write it so that future reads are always fast and correct.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "If I started this over I would design the daily time storage before writing any timer code. I added it after the timer was already working and had to retrofit the delta calculation into the throttled write loop. The logic is correct but it would have been cleaner if the daily map was part of the initial architecture rather than something added when the analytics view needed real data to display. That is the one decision I would reverse.",
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
                text: "The highest priority next step is adding a backend and account system so tasks sync across devices. Everything else is limited by the local-only constraint. Without sync the app is useful on one machine only, which limits how far the productivity tracking can go in practice.",
              },
              {
                type: "list",
                variant: "bodyLarge",
                as: "li",
                texts: [
                  "Backend and cloud sync for cross-device access, because localStorage is a hard boundary and everything planned for version two depends on breaking through it",
                  "Team workspaces with shared task boards, because the current account view already describes these features and they are the natural next step once auth exists",
                  "Recurring tasks with a configurable schedule, because the saved tasks import pattern already handles this manually but automating it on a daily or weekly basis would make the tool significantly more useful without adding much complexity",
                  "Notification reminders for tasks approaching their time target, because the completion popup already fires at 100% but there is no warning before that point and a nudge at 80% would be more actionable",
                  "Mobile app using the same React codebase, because the layout is already responsive and the localStorage API works identically in a WebView container",
                ],
              },
            ],
          },
        ],
      },
    },
  ],
};
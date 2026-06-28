export const pulmoAiProjectRow = {
  id: "project-row-pulmo-ai",
  title: "Pulmo AI: Respiratory Disease Diagnosis from Lung Audio",
  enabled: true,
  domain: "project",
  order: 11,
  topOrder: 11,
  createdAt: "2025-01-01T00:00:00.000Z",
  primaryCategory: { key: "ai-ml", label: "AI / ML" },
  secondaryCategories: [
    { key: "cnn-classification", label: "CNN Classification" },
    { key: "async-processing", label: "Async Processing" },
  ],
  featured: true,

  links: {
    liveDemo: {
      url: "https://pulmoai.pritamsardar.dev",
    },
    sourceCode: {
      url: "https://github.com/pritamsardar-dev/portfolio-respiratory-disease-diagnosis-ai-v1",
    },
    designFile: {
      url: "",
      message: {
        title: "No Design File for This Project",
        text: "Pulmo AI is primarily a machine learning and backend engineering project. The focus was on the CNN training pipeline, async job processing, and data handling. The UI was built directly in React with Tailwind CSS and CSS custom properties, with layout decisions made iteratively in code. No separate design phase or Figma file was part of the process.",
      },
    },
  },

  blocks: [
    {
      id: "images-pulmo-ai",
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
              light: { src: "images/pulmoai/pulmoai-hero-light.png", public_id: "" },
              dark: { src: "images/pulmoai/pulmoai-hero-dark.png", public_id: "" },
            },
            alt: "Pulmo AI main interface showing the two-panel diagnosis layout with file upload on the left and empty output state on the right",
            caption: "The main diagnosis interface. The left panel handles WAV file upload and submission. The right panel shows the diagnosis result with severity badge, clinical description, per-sample confidence scores, and export options. On mobile the panels stack vertically.",
          },
          {
            id: "feature-diagnose",
            sources: {
              light: { src: "images/pulmoai/feat-diagnose-light.png", public_id: "" },
              dark: { src: "images/pulmoai/feat-diagnose-dark.png", public_id: "" },
            },
            alt: "Pulmo AI upload panel with multiple WAV files selected, showing file names, sizes, preview buttons, and the Run Diagnosis action button",
            caption: "The upload panel with files queued for diagnosis. Up to 10 WAV files can be submitted per session. Each file shows its name and size, can be previewed via the audio player, and removed individually. The file list scrolls so the action button stays visible.",
          },
          {
            id: "feature-running",
            sources: {
              light: { src: "images/pulmoai/feat-running-light.png", public_id: "" },
              dark: { src: "images/pulmoai/feat-running-dark.png", public_id: "" },
            },
            alt: "Pulmo AI in the processing state showing the animated lung icon with pulse ring, elapsed timer, and the expandable real-time processing log below",
            caption: "Active inference state. The right panel shows the lung animation and elapsed timer while the backend processes each file through the spectrogram and CNN pipeline. The processing log expands to show each step as it arrives from the backend.",
          },
          {
            id: "feature-result",
            sources: {
              light: { src: "images/pulmoai/feat-result-healthy-light.png", public_id: "" },
              dark: { src: "images/pulmoai/feat-result-healthy-dark.png", public_id: "" },
            },
            alt: "Pulmo AI completed diagnosis result showing Healthy classification with Normal severity badge, clinical description, recommendation, and per-sample confidence score breakdown",
            caption: "A completed diagnosis for a Healthy lung recording. The result includes the severity badge, condition name, clinical description, recommendation, and per-sample confidence scores. Multiple files are combined through majority voting before the final result is displayed.",
          },
          {
            id: "feature-report",
            sources: {
              light: { src: "images/pulmoai/feat-report-modal-light.png", public_id: "" },
              dark: { src: "images/pulmoai/feat-report-modal-dark.png", public_id: "" },
            },
            alt: "Pulmo AI full report modal with session metadata, diagnosis heading, clinical description, recommendation, and a sortable sample breakdown table with filename, prediction, and confidence columns",
            caption: "The full report modal. It shows session metadata, the diagnosis with severity, clinical description, recommendation, and a breakdown table for every submitted sample. The PDF button exports a formatted report client-side using jsPDF with no server round trip.",
          },
          {
            id: "feature-samples",
            sources: {
              light: { src: "images/pulmoai/feat-samples-light.png", public_id: "" },
              dark: { src: "images/pulmoai/feat-samples-dark.png", public_id: "" },
            },
            alt: "Pulmo AI samples page showing condition cards for Healthy, COPD, and Pneumonia with description, untrained badge, accuracy warnings where relevant, and test diagnosis buttons",
            caption: "The samples page with pre-loaded recordings for three conditions. Each card describes the condition, shows whether the samples were held out of training, and flags classes with limited training data. One click loads all files from that class into the diagnosis page.",
          },
          {
            id: "feature-guide",
            sources: {
              light: { src: "images/pulmoai/feat-guide-light.png", public_id: "" },
              dark: { src: "images/pulmoai/feat-guide-dark.png", public_id: "" },
            },
            alt: "Pulmo AI guide page showing four numbered steps from audio upload to report download alongside a list of supported conditions and a sample diagnosis shortcut",
            caption: "The guide page. Four numbered steps cover the full flow from uploading audio to downloading the report. The right column lists all 8 detectable conditions and links to the sample diagnosis feature.",
          },
          {
            id: "feature-about",
            sources: {
              light: { src: "images/pulmoai/feat-about-light.png", public_id: "" },
              dark: { src: "images/pulmoai/feat-about-dark.png", public_id: "" },
            },
            alt: "Pulmo AI about page showing the AI pipeline steps with connected icons, supported conditions list, ICBHI 2017 training dataset details, system architecture breakdown, and tech stack grouped by category",
            caption: "The about page covers the full AI pipeline from WAV input to majority-vote output, the ICBHI 2017 training dataset, and the tech stack. The red disclaimer section at the bottom is deliberately prominent because the model has real limitations around dataset imbalance and recording quality.",
          },
        ],
      },
    },
    {
      id: "text-pulmo-ai",
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
          text: "Pulmo AI: Lung Audio Based Respiratory Disease Diagnosis App",
          icon: {
            src: "favicons/pulmo-ai-favicon.svg",
            public_id: "",
            type: "stroke",
          },
        },
        tags: [
          { label: "01 May 25", icon: "CalendarEvent", tooltip: "Project creation date" },
          {
            id: "duration",
            label: { project: "400+ hrs", caseStudy: "10 min read" },
            icon: "Clock",
            tooltip: {
              project: "Estimated total build time",
              caseStudy: "Estimated read time",
            },
          },
          { id: "views", label: "0", icon: "Eye", tooltip: "Unique visits" },
          { label: "React", icon: "BrandReact", tooltip: "Frontend framework" },
          { label: "FastAPI", icon: "Server", tooltip: "Backend framework" },
          { label: "TensorFlow", icon: "Brain", tooltip: "ML framework" },
          { label: "SQLite", icon: "Database", tooltip: "Job persistence database" },
          { label: "Librosa", icon: "WaveSine", tooltip: "Audio preprocessing library" },
          { label: "AI / ML", icon: "Sparkles", tooltip: "Project domain" },
        ],
        overview: {
          variant: "bodyLarge",
          text: "Pulmo AI classifies 8 respiratory diseases from lung audio recordings. The system covers the full pipeline: CNN model training on the ICBHI 2017 dataset (920 recordings, 126 patients), a FastAPI backend with async job processing and SQLite job persistence, and a React frontend built to handle real-world usage patterns including page navigation, tab switching, and server delays without losing state.",
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
                text: "Pulmo AI classifies respiratory diseases from lung audio recordings. The app takes WAV files, converts them to mel spectrograms, and runs them through a CNN to predict one of 8 conditions: Healthy, COPD, Asthma, Bronchiectasis, URTI, LRTI, Pneumonia, and Bronchiolitis. The model was trained on the ICBHI 2017 Respiratory Sound Database, a clinical dataset of 920 recordings from 126 patients. The data is heavily imbalanced, with COPD making up most samples, which made minority class prediction the central challenge on the training side.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "The main architectural decision on the backend was to separate inference from the HTTP response. Rather than blocking the request until the model finishes, the backend queues each job in SQLite, runs inference in a background thread, and lets the client poll for results. This made the system honest about processing time and let the frontend show live progress without a long-running connection.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "I handled the whole stack: model training in Python with TensorFlow and Keras, a FastAPI backend with SQLite job persistence using WAL mode, and a React frontend that handles async inference, majority-vote results across multiple files, session persistence via IndexedDB, and PDF report export via jsPDF.",
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
                  "Build a complete end-to-end AI pipeline from raw lung audio to a diagnosis with a downloadable report",
                  "Handle ICBHI 2017 dataset imbalance through augmentation without inflating the overall accuracy metric",
                  "Build a frontend that survives page navigation, reloads, and server delays without losing uploaded files or active diagnoses",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "The goal was to build a complete, honest AI diagnostic system, from raw audio to a readable report, without shortcuts on any layer of the stack.",
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
                  "Train a CNN on real clinical lung audio to classify 8 respiratory conditions using the ICBHI 2017 dataset",
                  "Address class imbalance during training without overfitting the augmented minority classes",
                  "Build an async backend that queues and processes inference jobs reliably without losing results to server restarts or client disconnections",
                  "Build a frontend that handles page navigation, tab switches, and server delays without losing uploaded files or in-progress diagnoses",
                  "Keep the output honest by showing per-sample confidence scores, a severity tag, and a clear disclaimer rather than a single confident answer with no context",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "These goals came from seeing many ML portfolio projects where the model is shown in isolation and the deployment and UX are ignored. Showing the full stack, including the edge cases and rough edges, felt more valuable than showing only the accuracy numbers.",
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
                text: "The core decision was to separate inference from the API response. The backend accepts the WAV files, creates a job record in SQLite, starts a background thread for processing, and immediately returns a job ID. The client polls that job every second until it gets a completed or failed status.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "The system is built around four components that each own a clear responsibility:",
              },
              {
                type: "list",
                as: "li",
                variant: "bodyLarge",
                texts: [
                  "WAV to mel spectrogram conversion via Librosa, using the same n_mels, fmax, and sample rate settings as training to avoid any preprocessing drift between training and inference",
                  "CNN inference on 128x128 grayscale spectrograms via TensorFlow, with per-file results written back to the SQLite job record as they complete",
                  "SQLite with WAL mode as the job store, chosen specifically so polling reads do not block inference writes",
                  "Majority voting on the client across all submitted files before showing a final diagnosis, so a single low-quality recording does not dominate the result",
                ],
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "This approach trades a simpler synchronous design for something that handles realistic server load, client reconnection, and page navigation without losing job state.",
              },
              {
                type: "image",
                imageId: "feature-about",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "Before settling on polling, Server-Sent Events and WebSockets were both considered. SSE would give a cleaner push-based update model, and a WebSocket would allow bidirectional communication, but both add reconnection complexity that is not justified for a single-user demo. The simple SQLite job table gave the same observable behavior with less code. A synchronous blocking response was also considered and ruled out because file processing can exceed typical HTTP timeout thresholds.",
              },
              {
                type: "list",
                as: "li",
                variant: "bodyLarge",
                texts: [
                  "Server-Sent Events: cleaner push model for status updates but more complex reconnection handling, ruled out for the scope of this project",
                  "WebSocket: overkill for a one-way status flow where the client only needs to read the job result, not send ongoing data",
                  "Synchronous blocking response: simpler code but fails when inference runs longer than the HTTP timeout threshold",
                ],
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "The main trade-off of polling is unnecessary requests when the server is idle or busy. For a production system this would need a smarter approach. For a portfolio project with predictable load it is an acceptable cost.",
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
                  "Multi-file WAV upload with majority voting across all submitted files for more reliable results on variable quality recordings",
                  "Real-time processing log with per-sample confidence scores and condition-based severity classification",
                  "Client-side PDF report generation with full sample breakdown table using jsPDF, no server round trip required",
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
                  "Multi-file upload with majority voting: up to 10 WAV files per session, each receives an independent prediction, and the most frequent class wins, reducing sensitivity to any single low-quality recording",
                  "Async job processing with live progress log: inference runs in a background thread while the client polls every second and renders each processing step as it arrives, with a blinking cursor to show activity",
                  "Mel spectrogram pipeline: each WAV is loaded at its native sample rate, converted to a 128-band mel spectrogram via Librosa, and saved as a 128x128 grayscale PNG before model inference, with all parameters matching training exactly",
                  "Severity classification: results are tagged Normal, Moderate, or High Risk based on the predicted condition, giving a quick triage indicator alongside the raw class prediction and clinical description",
                  "Client-side PDF export: jsPDF generates a structured report covering diagnosis, clinical recommendation, and a complete sample breakdown table in under one second with no server round trip",
                  "Session persistence via IndexedDB: uploaded files are written to IndexedDB at submission time and restored on mount, so files and in-progress diagnoses survive page navigation, tab switches, and accidental reloads",
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
                  "Python 3.11, TensorFlow / Keras, FastAPI, Librosa, SQLite (WAL mode) for model training and the backend",
                  "React 18, Vite 5, Tailwind CSS v4, jsPDF, clsx for the frontend",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "Each piece was chosen because it matched a specific constraint. Model training needed Python's ML ecosystem. The backend needed to be lightweight enough to run alongside the model process without a heavy runtime. The frontend needed to manage async state, file persistence, and client-side PDF export without pulling in a large framework.",
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
                    value: "React 18 with Vite 5. The component model suited the two-panel layout and the async state management needs of job polling. Vue was considered but familiarity with React hooks and the available jsPDF integration made React the faster choice here.",
                  },
                  {
                    label: "Styling:",
                    value: "Tailwind CSS v4 with CSS custom properties for design tokens. Light and dark mode are driven by CSS variables toggled on the root element with no theme provider library. This kept theming simple and made it easy to apply consistent token values directly in inline styles where Tailwind classes were not practical.",
                  },
                  {
                    label: "Backend:",
                    value: "FastAPI with Python 3.11+. It handles async routes cleanly and the automatic OpenAPI docs were useful during development. Flask was the alternative but FastAPI's type hints reduced request validation boilerplate and the async support was a better fit for the polling-based job model.",
                  },
                  {
                    label: "Database:",
                    value: "SQLite with WAL mode for job persistence. Write volume is very low so SQLite handles it comfortably. WAL mode was specifically chosen so polling reads during active inference do not block the write that saves the result. PostgreSQL would have been overengineering for a single-user demo.",
                  },
                  {
                    label: "ML Framework:",
                    value: "TensorFlow and Keras for the CNN. The ICBHI 2017 preprocessing pipeline had several existing Keras-based reference implementations, which made it easier to verify that the training parameters were applied correctly and that inference used the exact same settings.",
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
                text: "SQLite as a job store is the decision most likely to need replacing at any meaningful scale. A proper task queue like Celery with Redis, or a cloud-native queue, would be the right replacement if this project needed to handle concurrent users.",
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
                    label: "ICBHI class imbalance:",
                    value: "Applied targeted augmentation to underrepresented classes during training, improving minority class recall without distorting the overall accuracy metric.",
                  },
                  {
                    label: "Client state across navigation:",
                    value: "Persisted uploaded files in IndexedDB and active job IDs in localStorage so diagnoses survive page changes and reloads with no data loss.",
                  },
                  {
                    label: "Timer desync:",
                    value: "Python timestamps without a Z suffix were parsed as local time by JavaScript. Fixed by recording the start time on the client using Date.now() at submission and ignoring server timestamps for elapsed time.",
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
                    label: "ICBHI class imbalance:",
                    value: "COPD accounts for most samples in the ICBHI 2017 dataset. Early training runs showed the model predicting COPD for almost everything because it was statistically the safest guess. Augmentation was applied to underrepresented classes using pitch shifting, time stretching, and background noise addition. This improved recall across minority classes without inflating the overall accuracy number, which would have made the model look better than it actually was.",
                  },
                  {
                    label: "Client file and job persistence across navigation:",
                    value: "The browser File API does not persist across page navigations. When a user switches pages mid-diagnosis or reloads, the uploaded files and job context would normally be lost. The fix was to write selected files to IndexedDB at submission time and restore them on mount. Active job IDs are stored in localStorage, and on mount the app checks the backend for job status and reconnects if the job is still running, restoring the processing log as well.",
                  },
                  {
                    label: "Race condition between autoTestFiles and IndexedDB mount load:",
                    value: "When the Samples page passes a File array to DiagnosePage via props to trigger a test diagnosis, the component mounts and simultaneously starts an async IndexedDB read to restore previously saved files. The IDB callback could overwrite the freshly passed test files if it resolved after the prop was applied. A ref flag (runDiagnosisCalledRef) is set synchronously before the IDB read begins so the callback knows not to apply stale data when a fresh diagnosis has already started.",
                  },
                  {
                    label: "Processing timer desync between server and client:",
                    value: "Python's datetime.utcnow().isoformat() produces a timestamp without a trailing Z. JavaScript's Date constructor treats a timestamp without Z as local time rather than UTC. For a user in UTC+5:30 this made a 30-second inference appear to have taken over 330 minutes on the processing timer. The fix was to record the start time on the client using Date.now() at the moment of submission, persist it in localStorage, and use only that value for elapsed time calculations. No server-generated timestamp is used for the timer.",
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
                text: "The pattern across all four: async systems have more surface area for state to go wrong than they appear to on the happy path. Each of these came from a real interaction that the initial design did not account for.",
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
                  "Full pipeline from WAV upload to final diagnosis completes in under 10 seconds per file on the live server, covering spectrogram generation, PNG write, CNN inference, and SQLite result storage",
                  "CNN reaches over 70% overall accuracy on the ICBHI 2017 test split, with measurably improved recall on minority classes after augmentation compared to baseline training without it",
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
                  "Full pipeline latency under 10 seconds per file on the live server, covering WAV load at native sample rate, 128-band mel spectrogram generation, 128x128 PNG write, CNN inference, and SQLite result storage",
                  "CNN reaches over 70% overall accuracy on the ICBHI 2017 test split, with COPD and Healthy showing the strongest per-class performance as the best-represented classes in the training data",
                  "Minority classes including Pneumonia and Bronchiolitis show measurably improved recall after augmentation compared to a baseline model trained on the raw imbalanced split without it",
                  "IndexedDB-based session persistence means uploaded files and in-progress diagnoses survive page navigation, tab switches, and accidental reloads with no loss of state",
                  "Client-side PDF report generation via jsPDF runs in under one second with no server round trip, producing a formatted report with session metadata, diagnosis, recommendation, and a complete per-sample breakdown table",
                ],
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "image",
                imageId: "feature-running",
              },
              {
                enabled: {
                  preview: false,
                  full: true,
                },
                type: "text",
                variant: "bodyLarge",
                text: "By the end this became a deployable system that does what it says, handles the unhappy paths, and is upfront about what the model can and cannot do given the dataset it was trained on.",
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
                  "Dataset quality and class balance determine model behavior far more than architecture choices. Time spent auditing and augmenting the training data had more impact on prediction quality than any CNN layer tuning.",
                  "Async systems in the browser have more failure modes than they appear to on the happy path. File persistence, job reconnection, and timer accuracy each required a specific solution that only became clear when tested under real navigation patterns.",
                  "SQLite with WAL mode is underrated for small backend projects. It handles concurrent reads during polling without the setup overhead of a full database server, and WAL mode specifically prevents the read-write contention that would otherwise occur during active inference.",
                  "Honest output builds more trust than confident output. Showing per-sample confidence scores, a severity classification, and a prominent disclaimer does more for the user than a single bold diagnosis with no supporting context.",
                  "Matching preprocessing parameters exactly between training and inference is not optional. A mismatch in sample rate or mel spectrogram settings produces silently wrong predictions that are very difficult to trace back to the source.",
                ],
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "This project changed how I approach ML work. Every model project now starts with a data audit before any training code is written.",
              },
              {
                type: "text",
                variant: "bodyLarge",
                text: "If I started this over I would replace fixed one-second polling with a completion event from the beginning. I underestimated how many requests a one-second interval generates during a longer inference run. A server-sent event on job completion is not significantly more complex to implement and would have been the right call from the start. The polling interval was the most obvious shortcut I took and it would be the first thing I changed.",
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
                text: "The highest-priority next step is replacing fixed polling with a server-sent event on job completion. After that the model itself is the biggest constraint on prediction quality, and improving that means either a better dataset or a more principled approach to handling class imbalance during training.",
              },
              {
                type: "list",
                variant: "bodyLarge",
                as: "li",
                texts: [
                  "Server-sent events for job completion to replace fixed one-second polling, which would reduce unnecessary requests and cut the delay between inference finishing and the result appearing on screen",
                  "Model retraining with a larger or more balanced dataset, because the ICBHI 2017 training split is the primary constraint on minority class accuracy and no frontend improvement changes that",
                  "Per-class confidence threshold display in the result output, because a 52% confidence Pneumonia prediction should read differently to a 94% one and the current output does not make that distinction visible enough",
                  "In-browser audio recording via the Web Audio API to remove the requirement for a pre-recorded WAV file, which would make the demo accessible to users who do not have a separate recording ready",
                  "Admin interface for managing sample files, because adding a new sample condition currently requires editing the Vite glob import paths in source code and redeploying rather than uploading through a UI",
                ],
              },
            ],
          },
        ],
      },
    },
  ],
};
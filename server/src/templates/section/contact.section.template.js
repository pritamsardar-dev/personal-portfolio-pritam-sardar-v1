export const contactSectionTemplate = {
  id: "contact",
  type: "contact",
  enabled: true,
  order: 6,
  assetFolder: "contact",

  alignment: {
    headingContainer: "center",
    heading: "center",
    body: "left",
  },

  /* SECTION HEADING */
  heading: {
    variant: "heading1",
    text: "Contact Me",

    icon: {
      src: "icons/content/contact-heading.svg",
      public_id: "",
      type: "stroke",
    },
  },

  rows: [
    // Row 1
    {
      id: "contact-main-row",
      order: 1,
      enabled: true,

      blocks: [
        /* CONTACT TEXT BLOCK */
        {
          id: "contact-text-block",
          type: "contactTextBlock",
          enabled: true,
          order: 1,

          data: {
            alignment: {
              heading: "left",
              body: "left",
            },

            heading: {
              variant: "heading2",
              text: "Connect Directly",

              icon: {
                src: "icons/content/contact-title-textblock.svg",
                public_id: "",
                type: "stroke",
              },
            },

            contactLinks: [
              {
                id: "contact-phone",
                role: "contact-link",
                variant: "link",
                label: "+91 6297553930",
                action: "external",
                target: "tel:+916297553930",
                copyMessage: "Phone number copied!",
                tooltip: "Call me directly",
              },

              {
                id: "contact-email",
                role: "contact-link",
                variant: "link",
                label: "pritamsardar.dev@gmail.com",
                action: "external",
                target: "mailto:pritamsardar.dev@gmail.com",
                copyMessage: "Email address copied!",
                tooltip: "Send me an email",
              },

              {
                id: "contact-whatsapp",
                role: "contact-link",
                variant: "link",
                label: "Chat on WhatsApp",
                icon: "ChevronUpRight",
                action: "external",
                target: "https://wa.me/+916297553930",
                copyMessage: "WhatsApp link copied!",
                tooltip: "Open WhatsApp chat",
              },

              {
                id: "contact-github",
                role: "contact-link",
                variant: "link",
                label: "GitHub",
                icon: "ChevronUpRight",
                action: "external",
                target: "https://github.com/pritamsardar-dev",
                copyMessage: "GitHub profile link copied!",
                tooltip: "View my GitHub profile",
              },

              {
                id: "contact-linkedin",
                role: "contact-link",
                variant: "link",
                label: "LinkedIn",
                icon: "ChevronUpRight",
                action: "external",
                target: "https://linkedin.com/in/pritam-sardar-dev",
                copyMessage: "LinkedIn profile link copied!",
                tooltip: "Connect on LinkedIn",
              },

              {
                id: "contact-resume",
                role: "contact-link",
                variant: "link",
                label: "Resume",
                icon: "ChevronUpRight",
                action: "download",
                target: "/assets/resume.pdf",
                copyMessage: "Resume download link copied!",
                tooltip: "Download my resume as PDF",
              },

              {
                id: "contact-location",
                role: "contact-link",
                variant: "link",
                label: "Kolkata, India",
                icon: "ChevronUpRight",
                action: "external",
                target: "https://maps.google.com/?q=Kolkata",
                copyMessage: "Location map link copied!",
                tooltip: "View location on Google Maps",
              },
            ],
          },
        },

        /* CONTACT FORM BLOCK */
        {
          id: "contact-form-block",
          type: "contactFormBlock",
          enabled: true,
          order: 2,

          data: {
            alignment: {
              heading: "left",
              body: "left",
              form: "left",
              cta: "left",
            },

            heading: {
              variant: "heading2",
              text: "Send a Message",

              icon: {
                src: "icons/content/contact-title-cardblock.svg",
                public_id: "",
                type: "stroke",
              },
            },

            formFields: [
              {
                variant: "input",
                label: "Name",
                placeholder: "Your Name",
                name: "name",
              },

              {
                variant: "email",
                label: "Email",
                placeholder: "you@example.com",
                name: "email",
              },

              {
                variant: "input",
                label: "Subject",
                placeholder: "Your Subject",
                name: "subject",
              },

              {
                variant: "textarea",
                label: "Message",
                placeholder: "Your message...",
                name: "message",
                maxLength: 5000,
              },
            ],

            submitButton: {
              id: "contact-form-submit",
              role: "primary-action",
              type: "submit",
              variant: "primary",
              label: "Send Message",
            },

            popupMessages: [
              {
                id: "success",
                role: "success",
                title: "Message Sent",
                message:
                  "Thank you for reaching out! If your contact details are valid, I will get back to you as soon as possible.",
                variant: "success",
                autoCloseMs: 10000,
              },

              {
                id: "error",
                role: "error",
                title: "Submission Error",
                message:
                  "There was an error sending your request. Please check your details and try again.",
                variant: "error",
                autoCloseMs: 5000,
              },
            ],

            altContactButtons: [
              {
                id: "contact-whatsapp",
                label: "WhatsApp",
                type: "whatsapp",
                phone: "+916297553930",
                role: "secondary-action",
                action: "external",
                variant: "overlay",
                tooltip: "Send message via WhatsApp",
              },

              {
                id: "contact-email",
                label: "Email",
                type: "email",
                email: "pritamsardar.dev@gmail.com",
                action: "external",
                role: "secondary-action",
                variant: "overlay",
                tooltip: "Send message via Email",
              },
            ],

            toggleFullFormViewButton: {
              id: "toggle-form-full-view",
              type: "button",
              variant: "iconOnlyCircular",
              action: "scroll",
              target: "contact-form-block",
            },
          },
        },
      ],
    },
  ],
};

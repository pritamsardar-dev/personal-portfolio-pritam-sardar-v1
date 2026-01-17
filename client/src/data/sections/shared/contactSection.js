import {
  contactHeading,
  contactTitleCardblock,
} from "../../../assets/icons/content";

import {
  ContactLinkEmailIcon,
  ContactLinkEmailIconType,
  ContactLinkGithubIcon,
  ContactLinkGithubIconType,
  ContactLinkLinkedinIcon,
  ContactLinkLinkedinIconType,
  ContactLinkLocationIcon,
  ContactLinkLocationIconType,
  ContactLinkPhoneIcon,
  ContactLinkPhoneIconType,
  ContactLinkResumeIcon,
  ContactLinkResumeIconType,
  ContactLinkWhatsappIcon,
  ContactLinkWhatsappIconType,
} from "../../../assets/icons/system";

export const contactSection = {
  id: "contact-home",
  type: "contact",
  enabled: true,
  order: 6,

  alignment: {
    headingContainer: "center",
    heading: "center",
    body: "left",
  },

  /* ───────────────────────── SECTION HEADING ───────────────────────── */
  heading: {
    variant: "heading1",
    text: "Contact Me",
    icon: {
        svg: contactHeading.svg,
        type: contactHeading.type,
    },
  },

  overview: {
    variant: "bodyLarge",
    text:
      "Open to full-time opportunities where I can design, build, and deliver scalable MERN stack solutions that drive business results.",
  },

  blocks: [
    /* ───────────────────────── CONTACT TEXT BLOCK ───────────────────────── */
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
          text: "Let’s Talk",
          icon: {
            svg: contactTitleCardblock.svg,
            type: contactTitleCardblock.type,
          },
        },

        description: {
          variant: "bodyLarge",
          text:
            "Always glad to connect—feel free to reach out.",
        },

        contactLinks: [
          {
            id: "contact-phone",
            role: "contact-link",
            variant: "link",
            label: "+91 99999 99999",
            iconLeft: ContactLinkPhoneIcon,
            iconLeftType: ContactLinkPhoneIconType,
            onClick: () => {},
          },
          {
            id: "contact-email",
            role: "contact-link",
            variant: "link",
            label: "you@example.com",
            iconLeft: ContactLinkEmailIcon,
            iconLeftType: ContactLinkEmailIconType,
            onClick: () => {},
          },
          {
            id: "contact-whatsapp",
            role: "contact-link",
            variant: "link",
            label: "Chat on WhatsApp",
            iconLeft: ContactLinkWhatsappIcon,
            iconLeftType: ContactLinkWhatsappIconType,
            onClick: () => {},
          },
          {
            id: "contact-github",
            role: "contact-link",
            variant: "link",
            label: "GitHub",
            iconLeft: ContactLinkGithubIcon,
            iconLeftType: ContactLinkGithubIconType,
            onClick: () => {},
          },
          {
            id: "contact-linkedin",
            role: "contact-link",
            variant: "link",
            label: "LinkedIn",
            iconLeft: ContactLinkLinkedinIcon,
            iconLeftType: ContactLinkLinkedinIconType,
            onClick: () => {},
          },
          {
            id: "contact-resume",
            role: "contact-link",
            variant: "link",
            label: "Resume",
            iconLeft: ContactLinkResumeIcon,
            iconLeftType: ContactLinkResumeIconType,
            onClick: () => {},
          },
          {
            id: "contact-location",
            role: "contact-link",
            variant: "link",
            label: "Kolkata, India",
            iconLeft: ContactLinkLocationIcon,
            iconLeftType: ContactLinkLocationIconType,
            onClick: () => {},
          },
        ],
      },
    },

    /* ───────────────────────── CONTACT FORM BLOCK ───────────────────────── */
    {
      id: "contact-form-block",
      type: "contactFormBlock",
      enabled: true,
      order: 2,

      data: {
        alignment: {
          form: "left",
          cta: "left",
        },

        formFields: [
          {
            variant: "input",
            label: "Name",
            placeholder: "Your Name",
            name: "name",
            maxLength: 50,
          },
          {
            variant: "email",
            label: "Email",
            placeholder: "you@example.com",
            name: "email",
            maxLength: 50,
          },
          {
            variant: "textarea",
            label: "Message",
            placeholder: "Your message...",
            name: "message",
            maxLength: 1000,
          },
        ],

        submitButton: {
          id: "contact-form-submit",
          role: "primary-action",
          variant: "primary",
          label: "Send message",
          onClick: () => {},
        },
      },
    },
  ],
};

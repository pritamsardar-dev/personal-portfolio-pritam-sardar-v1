import {
  contactHeading,
  contactTitleCardblock,
} from "../../../assets/icons/content";

import {
  CollapseContentRoundedDiagonalIcon,
  CollapseContentRoundedDiagonalIconType,
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
  ExpandContentRoundedDiagonalIcon,
  ExpandContentRoundedDiagonalIconType,
} from "../../../assets/icons/system";

export const contactSection = {
  id: "contact",
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
          text: "Connect Directly",
          icon: {
            svg: contactTitleCardblock.svg,
            type: contactTitleCardblock.type,
          },
        },

        description: {
          variant: "bodyLarge",
          text:
            "Reach out through your preferred channel—whether it’s email, WhatsApp, or professional networks.",
        },

        contactLinks: [
          {
            id: "contact-phone",
            role: "contact-link",
            variant: "link",
            label: "+91 99999 99999",
            iconLeft: ContactLinkPhoneIcon,
            iconLeftType: ContactLinkPhoneIconType,
            action: "external",
            target: "tel:+919999999999",
            copyMessage: "Phone number copied!"
          },
          {
            id: "contact-email",
            role: "contact-link",
            variant: "link",
            label: "you@example.com",
            iconLeft: ContactLinkEmailIcon,
            iconLeftType: ContactLinkEmailIconType,
            action: "external",
            target: "mailto:you@example.com",
            copyMessage: "Email address copied!"
          },
          {
            id: "contact-whatsapp",
            role: "contact-link",
            variant: "link",
            label: "Chat on WhatsApp ↗",
            iconLeft: ContactLinkWhatsappIcon,
            iconLeftType: ContactLinkWhatsappIconType,
            action: "external",
            target: "https://wa.me/+917797303740",
            copyMessage: "WhatsApp link copied!"
          },
          {
            id: "contact-github",
            role: "contact-link",
            variant: "link",
            label: "GitHub ↗",
            iconLeft: ContactLinkGithubIcon,
            iconLeftType: ContactLinkGithubIconType,
            action: "external",
            target: "https://github.com/yourusername",
            copyMessage: "GitHub profile link copied!"
          },
          {
            id: "contact-linkedin",
            role: "contact-link",
            variant: "link",
            label: "LinkedIn ↗",
            iconLeft: ContactLinkLinkedinIcon,
            iconLeftType: ContactLinkLinkedinIconType,
            action: "external",
            target: "https://linkedin.com/in/yourusername",
            copyMessage: "LinkedIn profile link copied!"
          },
          {
            id: "contact-resume",
            role: "contact-link",
            variant: "link",
            label: "Resume ↗",
            iconLeft: ContactLinkResumeIcon,
            iconLeftType: ContactLinkResumeIconType,
            action: "download",
            target: "/assets/resume.pdf",
            copyMessage: "Resume download link copied!"
          },
          {
            id: "contact-location",
            role: "contact-link",
            variant: "link",
            label: "Kolkata, India ↗",
            iconLeft: ContactLinkLocationIcon,
            iconLeftType: ContactLinkLocationIconType,
            action: "external",
            target: "https://maps.google.com/?q=Kolkata",
            copyMessage: "Location map link copied!"
          },
        ]
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
          heading: "left",
          body: "left",
          form: "left",
          cta: "left",
        },

        heading: {
          variant: "heading2",
          text: "Send a Message",
          icon: {
            svg: contactTitleCardblock.svg,
            type: contactTitleCardblock.type,
          },
        },

        description: {
          variant: "bodyLarge",
          text:
            "Have a project, opportunity, or question? Drop a message and I’ll get back to you soon.",
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
            maxLength: 1000,
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
            message: "Thank you for reaching out! If your contact details are valid, I will get back to you as soon as possible.",
            variant: "success",
            autoCloseMs: 10000,
          },
         {
          
            id: "error",
            role: "error",
            title: "Submission Error",
            message: "There was an error sending your request. Please check your details and try again.",
            variant: "error",
            autoCloseMs: 5000,
          },
        ],
        altContactButtons: [
          {
            id: "contact-whatsapp",
            label: "WhatsApp",
            type: "whatsapp",
            phone: "917908137571",
            role: "secondary-action",
            action: "external",
            variant: "overlay",
            iconLeft: ContactLinkWhatsappIcon,
            iconLeftType: ContactLinkWhatsappIconType,
          },
          {
            id: "contact-email",
            label: "Email",
            type: "email",
            email: "you@example.com",
            action: "external",
            role: "secondary-action",
            variant: "overlay",
            iconLeft: ContactLinkEmailIcon,
            iconLeftType: ContactLinkEmailIconType,
          }
        ],
        toggleFullFormViewButton: {
          id: "toggle-form-full-view",
          type: "button",
          variant: "iconOnlyCircular",
          iconLeft: {
            expand: ExpandContentRoundedDiagonalIcon,
            collapse: CollapseContentRoundedDiagonalIcon
          },
          iconLeftType: {
            expand: ExpandContentRoundedDiagonalIconType,
            collapse: CollapseContentRoundedDiagonalIconType
          },
          action: "scroll",
          target: "contact-form-block"
        },
      },
    },
  ],
};

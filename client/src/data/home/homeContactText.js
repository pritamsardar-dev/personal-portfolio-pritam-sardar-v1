import { 
    contactTitleCardblock,
} from "../../assets/icons/content";

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
} from "../../assets/icons/system";

export const homeContactText = {
    heading: {
        variant: "heading2",
        text: "Let’s Talk",
        icon: {
            svg: contactTitleCardblock.svg,
            type: contactTitleCardblock.type
        }
    },

    description: {
        variant: "bodyLarge",
        text: "Whether you have a question or just want to connect—reach out!"
    },

    contactLinks: [
        {
            id: "contact-phone",
            role: "contact-link",
            variant: "link",
            label: "+91 99999 99999",
            iconLeft: ContactLinkPhoneIcon,
            iconLeftType: ContactLinkPhoneIconType,
            onClick: () => {}
        },
        {
            id: "contact-email",
            role: "contact-link",
            variant: "link",
            label: "you@example.com",
            iconLeft: ContactLinkEmailIcon,
            iconLeftType: ContactLinkEmailIconType,
            onClick: () => {}
        },
        {
            id: "contact-whatsapp",
            role: "contact-link",
            variant: "link",
            label: "Chat on WhatsApp",
            iconLeft: ContactLinkWhatsappIcon,
            iconLeftType: ContactLinkWhatsappIconType,
            onClick: () => {}
        },

        {
            id: "contact-github",
            role: "contact-link",
            variant: "link",
            label: "GitHub",
            iconLeft: ContactLinkGithubIcon,
            iconLeftType: ContactLinkGithubIconType,
            onClick: () => {}
        },
        {
            id: "contact-linkedIn",
            role: "contact-link",
            variant: "link",
            label: "LinkedIn",
            iconLeft: ContactLinkLinkedinIcon,
            iconLeftType: ContactLinkLinkedinIconType,
            onClick: () => {}
        },
        {
            id: "contact-resume",
            role: "contact-link",
            variant: "link",
            label: "Resume",
            iconLeft: ContactLinkResumeIcon,
            iconLeftType: ContactLinkResumeIconType,
            onClick: () => {}
        },
        {
            id: "contact-location",
            role: "contact-link",
            variant: "link",
            label: "Kolkata, India",
            iconLeft: ContactLinkLocationIcon,
            iconLeftType: ContactLinkLocationIconType,
            onClick: () => {}
        },
    ],
};
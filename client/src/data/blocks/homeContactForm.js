export const homeContactForm = {
    formFields: [
        {
            variant: "input",
            label: "Name",
            placeholder: "Your Name",
            name: "name",
            maxLength: 50
        },
        {
            variant: "email",
            label: "Email",
            placeholder: "you@example.com",
            name: "email",
            maxLength: 50
        },
        {
            variant: "textarea",
            label: "Message",
            placeholder: "Your message...",
            name: "message",
            maxLength: 1000
        }
    ],

    submitButton: {
        id: "contact-form-submit",
        role: "priamry-action",
        variant: "priamry",
        label: "Send message",
        onClick: () => {}
    }
};
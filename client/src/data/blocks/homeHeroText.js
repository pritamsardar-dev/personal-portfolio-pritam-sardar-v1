export const homeHeroText = {
    heroIntro: {
         variant: "heroIntro", 
         text: "welcome to my profile" 
        },
    heroHeading: { 
        variant: "heroHeading", 
        textParts: [
            { 
                text: "Hi, I’m Pritam", 
                color: "heading",
                breakAfter: true 
            }, 
            { 
                text: "MERN", 
                color: "primary" 
            },
            { 
                text: "Stack Developer", 
                color: "heading" 
            }
        ] 
    },
    heroTagline: { 
        variant: "heroTagline", 
        text: "Looking for a developer who solves real-world business problems? I build scalable MERN apps, tackle frontend and backend challenges, adapt quickly to new technologies, and design clean, user-friendly interfaces. Take a look — it might be the fit you're looking for." 
    },
    cta: [
        { 
            variant: "primary", 
            label: "See My Projects", 
            onClick: () => {} 
        },
        { 
            variant: "secondary", 
            label: "Get My Resume", onClick: () => {} 
        },
    ]
};
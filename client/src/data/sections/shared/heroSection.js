import {
    homeHeroImage,
    aboutHeroImage,
    workExperienceHeroImage,
    skillsHeroImage,
    projectsHeroImage,
    caseStudyHeroImage,
    contactHeroImage,
} from "../../../assets/images/hero"

export const heroSection = {
    id: "hero",
    type: "hero",

    rows: [
        //Row 1
        {
            id: "home-hero",
            type: "homeHero",
            blocks: [
                {
                    id: "hero-image",
                    enabled: true,
                    type: "heroImage",
                    order: 2,
                    data: {
                        src: homeHeroImage,
                        alt: "homeHeroImage",
                        aspect: "auto",
                        loading: "lazy",
                    },
                },
                
                {
                    id: "hero-text",
                    enabled: true,
                    type: "heroText",
                    order: 1,
                    data: {
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
                                label: "Featured Project ↓",
                                action: "scroll",
                                target: "work-items-projectsHomePage"
                            },
                            {
                                variant: "secondary",
                                label: "View Resume ↗",
                                action: "download",
                                target: "/resume/pritaм-resume.pdf"
                            }
                        ]
                    },
                },
            ]
        },

        //Row 2
        {
            id: "about-hero",
            type: "aboutHero",
            blocks: [
                {
                    id: "hero-image",
                    enabled: true,
                    type: "heroImage",
                    order: 2,
                    data: {
                        src: aboutHeroImage,
                        alt: "aboutHeroImage",
                        aspect: "auto",
                        loading: "lazy",
                    },
                },
                
                {
                    id: "hero-text",
                    enabled: true,
                    type: "heroText",
                    order: 1,
                    data: {
                        heroIntro: {
                            variant: "heroIntro", 
                            text: "About Me" 
                        },
                        heroHeading: { 
                            variant: "heroHeadingSubpage", 
                            textParts: [
                                { 
                                    text: "MERN Stack Developer", 
                                    color: "primary",
                                    breakAfter: true
                                }, 
                                { 
                                    text: "Crafting Real-World Solutions", 
                                    color: "heading" 
                                },
                            ] 
                        },
                        heroTagline: { 
                            variant: "heroTagline", 
                            text: "I’m a MERN stack developer with a strong foundation in data structures & algorithms, a portfolio of hands-on projects, and a passion for building impactful solutions. From concept to deployment, I create intuitive, high-performance web apps — blending clean, maintainable code with scalable architecture and user-focused design." 
                        },
                        cta: [
                            { 
                                variant: "primary", 
                                label: "View Projects →",
                                action: "navigate",
                                target: "/projects"
                            },
                            { 
                                variant: "secondary", 
                                label: "View Resume ↗",
                                action: "download",
                                target: "/resume/pritaм-resume.pdf"
                            },
                        ],
                    },
                },
            ]
        },

        //Row 3
        {
            id: "work-experience-hero",
            type: "workExperienceHero",
            blocks: [
                {
                    id: "hero-image",
                    enabled: true,
                    type: "heroImage",
                    order: 2,
                    data: {
                        src: workExperienceHeroImage,
                        alt: "workExperienceHeroImage",
                        aspect: "auto",
                        loading: "lazy",
                    },
                },
                
                {
                    id: "hero-text",
                    type: "heroText",
                    enabled: true,
                    order: 1,
                    data: {
                        heroIntro: {
                            variant: "heroIntro", 
                            text: "Work Experience" 
                        },
                        heroHeading: { 
                            variant: "heroHeadingSubpage", 
                            textParts: [
                                { 
                                    text: "Building Scalable Web Applications with the", 
                                    color: "heading",
                                }, 
                                { 
                                    text: "MERN Stack", 
                                    color: "primary" 
                                },
                            ] 
                        },
                        heroTagline: { 
                            variant: "heroTagline", 
                            text: "I have hands-on experience delivering full-stack web solutions for freelance clients and real-world projects — from building responsive React interfaces to developing secure, scalable Node.js backends. Every project is approached like production software, with version control, deployment workflows, performance optimization, and a strong focus on clean, reusable code and intuitive UI/UX." 
                        },
                        cta: [
                            { 
                                variant: "primary", 
                                label: "View Case Studies →",
                                action: "navigate",
                                target: "/case-studies"
                            },
                            { 
                                variant: "secondary", 
                                label: "View Projects →",
                                action: "navigate",
                                target: "/projects"
                            },
                        ],
                    },
                },
            ]
        },

        //Row 4
        {
            id: "skills-hero",
            type: "skillsHero",
            blocks: [
                {
                    id: "hero-image",
                    enabled: true,
                    type: "heroImage",
                    order: 2,
                    data: {
                        src: skillsHeroImage,
                        alt: "skillsHeroImage",
                        aspect: "auto",
                        loading: "lazy",
                    },
                },
                
                {
                    id: "hero-text",
                    enabled: true,
                    type: "heroText",
                    order: 1,
                    data: {
                        heroIntro: {
                            variant: "heroIntro", 
                            text: "My Skills" 
                        },
                        heroHeading: { 
                            variant: "heroHeadingSubpage", 
                            textParts: [
                                { 
                                    text: "MERN Stack Developer", 
                                    color: "primary",
                                }, 
                                { 
                                    text: "Skills & Strengths", 
                                    color: "heading" 
                                },
                            ] 
                        },
                        heroTagline: { 
                            variant: "heroTagline", 
                            text: "From React interfaces to Node.js backends, I work across the full MERN stack to deliver scalable web apps. My toolkit spans MongoDB, Express, React, Node.js, plus UI/UX design, data structures & algorithms, and problem-solving. I value clean code, reusable components, and performance — the foundations of building products that last." 
                        },
                        cta: [
                            { 
                                variant: "primary", 
                                label: "View Skills ↓",
                                action: "scroll",
                                target: "skills-home"
                            },
                            { 
                                variant: "secondary", 
                                label: "Highlights & Links ↓",
                                action: "scroll",
                                target: "proof-highlights"
                            },
                        ],
                    },
                },
            ]
        },

        //Row 5
        {
            id: "projects-hero",
            type: "projectsHero",
            blocks: [
                {
                    id: "hero-image",
                    enabled: true,
                    type: "heroImage",
                    order: 2,
                    data: {
                        src: projectsHeroImage,
                        alt: "projectsHeroImage",
                        aspect: "auto",
                        loading: "lazy",
                    },
                },
                
                {
                    id: "hero-text",
                    enabled: true,
                    type: "heroText",
                    order: 1,
                    data: {
                        heroIntro: {
                            variant: "heroIntro", 
                            text: "Projects" 
                        },
                        heroHeading: { 
                            variant: "heroHeadingSubpage", 
                            textParts: [
                                { 
                                    text: "Delivering", 
                                    color: "heading" 
                                },
                                { 
                                    text: "Scalable, Business-Ready", 
                                    color: "primary",
                                }, 
                                { 
                                    text: "Web Solutions", 
                                    color: "heading" 
                                },
                            ] 
                        },
                        heroTagline: { 
                            variant: "heroTagline", 
                            text: [
                                "Each project here demonstrates my ability to turn requirements into high-performance MERN stack applications — from designing efficient architectures to implementing features that solve real problems. I focus on clean, maintainable code, responsive design, and performance that scales, ensuring every build is ready for real-world use.",
                                "Explore my portfolio to see how I approach challenges, optimize for business goals, and deliver solutions that work.",
                            ],
                        },
                        cta: [
                            { 
                                variant: "primary", 
                                label: "View All Projects ↓",
                                action: "scroll",
                                target: "work-items-projectsPage"
                            },
                            { 
                                variant: "secondary", 
                                label: "View Case Studies →",
                                action: "navigate",
                                target: "/case-studies"
                            },
                        ],
                    },
                },
            ]
        },

        //Row 6
        {
            id: "case-study-hero",
            type: "caseStudyHero",
            blocks: [
                {
                    id: "hero-image",
                    enabled: true,
                    type: "heroImage",
                    order: 2,
                    data: {
                        src: caseStudyHeroImage,
                        alt: "caseStudyHeroImage",
                        aspect: "auto",
                        loading: "lazy",
                    },
                },
                
                {
                    id: "hero-text",
                    enabled: true,
                    type: "heroText",
                    order: 1,
                    data: {
                        heroIntro: {
                            variant: "heroIntro", 
                            text: "case study" 
                        },
                        heroHeading: { 
                            variant: "heroHeadingSubpage", 
                            textParts: [
                                { 
                                    text: "Turning Real-World Challenges into", 
                                    color: "heading",
                                },
                                { 
                                    text: "Scalable Digital Solutions", 
                                    color: "primary",
                                }, 
                            ] 
                        },
                        heroTagline: { 
                            variant: "heroTagline", 
                            text: [
                                "Each case study shows how I transform business needs into high-impact MERN stack products — combining smart architecture, user-focused design, and performance that scales. Beyond the build, I share the decisions, trade-offs, and strategies that deliver results built to last.",
                                "Explore my case studies to see how strategic design and clean engineering drive measurable business growth.",
                            ],
                        },
                        cta: [
                            { 
                                variant: "primary", 
                                label: "View All Case Studies ↓",
                                action: "scroll",
                                target: "work-items-caseStudyPage"
                            },
                            { 
                                variant: "secondary", 
                                label: "View Projects →",
                                action: "navigate",
                                target: "/projects"
                            },
                        ],
                    },
                },
            ]
        },

        //Row 7
        {
            id: "contact-hero",
            type: "contactHero",
            blocks: [
                {
                    id: "hero-image",
                    enabled: true,
                    type: "heroImage",
                    order: 2,
                    data: {
                        src: contactHeroImage,
                        alt: "contactHeroImage",
                        aspect: "auto",
                        loading: "lazy",
                    },
                },
                
                {
                    id: "hero-text",
                    enabled: true,
                    type: "heroText",
                    order: 1,
                    data: {
                        heroIntro: {
                            variant: "heroIntro", 
                            text: "Contact Me" 
                        },
                        heroHeading: { 
                            variant: "heroHeadingSubpage", 
                            textParts: [
                                { 
                                    text: "MERN Stack Developer", 
                                    color: "primary",
                                }, 
                                { 
                                    text: "Building Solutions That Deliver Results", 
                                    color: "heading" 
                                },
                            ] 
                        },
                        heroTagline: { 
                            variant: "heroTagline", 
                            text: "I bring a solid foundation in the MERN stack and data structures & algorithms, backed by real, hands-on project work. My focus is on building fast, reliable, and user-friendly web applications that meet business goals. Whether it’s creating new features, improving performance, or ensuring scalability, I’m ready to contribute to your team’s success from day one.",
                        },
                        cta: [
                            { 
                                variant: "primary", 
                                label: "Reach Out ↓",
                                action: "scroll",
                                target: "contact"
                            },
                            { 
                                variant: "secondary", 
                                label: "View Projects →",
                                action: "navigate",
                                target: "/projects"
                            },
                        ],
                    },
                },
            ]
        },
    ]
};

export const currentSkillsSnapshotTemplate = {
  id: "current-skills-snapshot",
  type: "currentSkillsSnapshot",
  enabled: true,
  order: 4,
  assetFolder: "current-skills-snapshot",

  alignment: {
    heading: "center",
    cta: "center",
  },

  // heading: {
  //   variant: "heading1Subpage",
  //   text: "Skills Snapshot",

  //   icon: {
  //     src: "icons/content/skills-title-cardblock.svg",
  //     public_id: "",
  //     type: "stroke",
  //   },
  // },

  buttonProps: {
    variant: "secondary",
    label: "View Full Skills",
    icon: "ChevronRight",
    action: "navigate",
    target: "/skills",
  },

  rows: [
    {
      id: "current-skills-snapshot-main-row",
      order: 1,
      enabled: true,

      blocks: [
        {
          id: "current-skills-snapshot-overview",
          type: "currentSkillsSnapshotOverview",
          enabled: true,
          order: 1,

          data: {
            alignment: {
              heading: "center",
              body: "center",
            },

            bodyItems: [
              {
                id: "overview",

                body: {
                  variant: "bodyBase",
                  text: "The technologies, tools and stack I work with are covered in detail on the Skills page.",
                },
              },
            ],
          },
        },

        {
          id: "current-skills-snapshot-skills",
          type: "currentSkillsSnapshotSkills",
          enabled: false,
          order: 2,

          data: {
            alignment: {
              heading: "left",
              body: "center",
            },

            bodyItems: [
              {
                id: "skillsTag",

                body: {
                  variant: "bodyBase",

                  texts: [
                    "React.js",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Redux Toolkit",
                    "Tailwind CSS",
                    "REST APIs",
                    "Authentication & Security",
                    "Mongoose",
                    "Git & GitHub",
                    "Problem Solving & DSA",
                    "JavaScript (ES6+)",
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  ],
};
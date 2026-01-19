import {
  skillsTitleCardblock,
} from '../../../assets/icons/content';

export const currentSkillsSnapshot = {
  id: "current-skills-snapshot",
  type: "currentSkillsSnapshot", 
  enabled: true,
  order: 4,
  alignment: {
    heading: "center",
    cta: "center",
  },
  heading: {
    variant: "heading1Subpage",
    text: "Current Skills Snapshot",
    icon: {
        svg: skillsTitleCardblock.svg,
        type: skillsTitleCardblock.type,
    },
  },
  buttonProps: {
    variant: "secondary",
    label: "View Full Skills →",
    onClick: () => {},
  },
  blocks: [
    /* ───────────────────────── Text BLOCK ───────────────────────── */
    {
      id: "current-skills-snapshot-overview",
      type: "currentSkillsSnapshotOverview",
      enabled: true,
      order: 1,
      data: {
        alignment: {
          heading: "left",
          body: "left",
        },
        bodyItems: [
          {
            id: "overview",
            body: {
              variant: "bodyBase",
              text:
                "I specialize in building scalable, performant web applications with the MERN stack. A strong foundation in data structures and algorithms complements my hands-on development experience. Here are some highlights:",
            },
          },
        ],
      },
    },
    /* ───────────────────────── CARD BLOCK ───────────────────────── */
    {
      id: "current-skills-snapshot-skills",
      type: "currentSkillsSnapshotSkills",
      enabled: true,
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
                "Express.js",
                "MongoDB",
                "Node.js",
                "React.js",
                "JavaScript (ES6+)",
                "REST APIs",
                "Auth & Authz",
                "Problem Solving & DSA",
                "Java",
              ],
            },
          },
        ],
      },
    },
  ],
};

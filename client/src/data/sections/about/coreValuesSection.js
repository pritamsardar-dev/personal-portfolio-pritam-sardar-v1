import {
  aboutPageTitleCoreValues,
  aboutPageSubtitleAdaptablity,
  aboutPageSubtitleProblemSolving,
  aboutPageSubtitleWorkEthic,
  aboutPageSubtitleCommunication,
} from '../../../assets/icons/content';

export const coreValuesSection = {
  id: "core-values",
  type: "coreValues", 
  enabled: true,
  order: 3,
  alignment: {
    heading: "center",
  },
  heading: {
    variant: "heading1Subpage",
    text: "Core Values",
    icon: {
        svg: aboutPageTitleCoreValues.svg,
        type: aboutPageTitleCoreValues.type,
    },
  },
  blocks: [
    {
      id: "core-values",
      type: "coreValues",
      enabled: true,
      order: 1,
      data: {
        alignment: {
          heading: "left",
          body: "left",
        },
        bodyItems: [
          {
            id: "adaptability",
            heading: {
              variant: "heading3",
              text: "Spark of Curiosity",
              icon: {
                svg: aboutPageSubtitleAdaptablity.svg,
                type: aboutPageSubtitleAdaptablity.type,
              },
            },
            body: {
              variant: "bodyBase",
              text:
                "I embrace change and learn quickly, thriving in fast-paced environments and evolving technologies to deliver effective solutions.",
            },
          },
          {
            id: "problemSolving",
            heading: {
              variant: "heading3",
              text: "Problem Solving",
              icon: {
                svg: aboutPageSubtitleProblemSolving.svg,
                type: aboutPageSubtitleProblemSolving.type,
              },
            },
            body: {
              variant: "bodyBase",
              text:
                "I approach challenges methodically, breaking down complex problems into manageable parts and crafting elegant, efficient solutions.",
            },
          },
          {
            id: "communication",
            heading: {
              variant: "heading3",
              text: "Communication",
              icon: {
                svg: aboutPageSubtitleCommunication.svg,
                type: aboutPageSubtitleCommunication.type,
              },
            },
            body: {
              variant: "bodyBase",
              text:
                "Clear and timely communication is key. I ensure transparency and collaboration within teams and with clients to align goals and expectations.",
            },
          },
          {
            id: "workEthic",
            heading: {
              variant: "heading3",
              text: "Work Ethic",
              icon: {
                svg: aboutPageSubtitleWorkEthic.svg,
                type: aboutPageSubtitleWorkEthic.type,
              },
            },
            body: {
              variant: "bodyBase",
              text:
                "Driven by passion and responsibility, I commit fully to every project, meeting deadlines and striving for quality in every line of code.",
            },
          },
        ],
      },
    },
  ],
};

export const resolveSkillsBlocks = (data) => {
  const {
    rows,
    metadataHome,
    headingHome,
  } = data;
  const skillSetItems = [];
  const narrativeItems = [];
  rows
    .forEach(row => {
      row.blocks
        .filter(block => block.id === "skill-overview")
        .forEach(block => {
          block.data?.bodyItems?.forEach(item => {
            /* ---------- Skill Set block ---------- */
            const isSkillSetEnabled =
              block.enabled?.skillSet !== undefined
                ? block.enabled.skillSet
                : true;

            if (isSkillSetEnabled && item.heading && item.scopeSet) {
              skillSetItems.push({
                heading: item.heading,
                body: item.scopeSet,
              });
            }

            /* ---------- Narrative block ---------- */
            const isStrengthsEnabled =
              block.enabled?.strengths !== undefined
                ? block.enabled.strengths
                : true;

            const narratives = Array.isArray(item.homeNarratives)
              ? item.homeNarratives
              : [item.homeNarratives];

            narratives.forEach(narrative => {
              if (isStrengthsEnabled && item.homeNarratives) {
                narrativeItems.push({
                  heading: narrative?.heading || item?.heading,
                  body: narrative?.body,
                });
              }
            });
          });
        });
    });

  return [
    {
      ...metadataHome.skillSet,
      data: {
        heading: headingHome.skillSet,
        alignment: metadataHome.alignment,
        bodyItems: skillSetItems,
      },
    },
    {
      ...metadataHome.strengths,
      data: {
        heading: headingHome.strengths,
        alignment: metadataHome.alignment,
        bodyItems: narrativeItems,
      },
    },
  ];
};

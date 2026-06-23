export const currentSkillsSnapshotSectionLayoutConfig = {
  sectionContainer: `
    flex flex-col w-full items-center justify-center
    lg:max-w-(--size-section-wrapper-desktop-max-width)
    px-(--spacing-section-wrapper-mobile-padding-x)
    sm:px-(--spacing-section-wrapper-tablet-padding-x)
    lg:px-(--spacing-section-wrapper-desktop-padding-x)
    gap-(--spacing-section-wrapper-mobile-gap)
    sm:gap-(--spacing-section-wrapper-tablet-gap)
    lg:gap-(--spacing-section-wrapper-desktop-gap)
  `,

  sectionHeadingWrapper: `
    flex flex-col w-full
    gap-(--spacing-heading-1-heading-2-mobile-gap)
    sm:gap-(--spacing-heading-1-heading-2-tablet-gap)
    lg:gap-(--spacing-heading-1-heading-2-desktop-gap)
  `,

  blocksContainer: `
    flex w-full items-center justify-center
    gap-(--spacing-section-wrapper-mobile-gap)
    sm:gap-(--spacing-section-wrapper-tablet-gap)
    lg:gap-(--spacing-section-wrapper-desktop-gap)
  `,

  textAlignMap: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  },

  flexAlignMap: {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  },
};

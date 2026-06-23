export const skillsRowsSectionLayoutConfig = {
  sectionContainer: `
    flex flex-col w-full
    sm:max-w-(--size-section-wrapper-tablet-max-width)
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

  subHeadingContainer: `
    flex flex-col w-full
    gap-(--spacing-heading-3-body-mobile-gap)
    sm:gap-(--spacing-heading-3-body-tablet-gap)
    lg:gap-(--spacing-heading-3-body-desktop-gap)
  `,

  rowsContainer: `
    flex flex-col w-full items-center
    gap-(--spacing-section-wrapper-mobile-gap)
    sm:gap-(--spacing-section-wrapper-tablet-gap)
    lg:gap-(--spacing-section-wrapper-desktop-gap)
  `,

  blocksContainer: `
    flex flex-col w-full
    items-center
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
    py-(--spacing-text-container-mobile-padding-y)
    sm:py-(--spacing-text-container-tablet-padding-y)
    lg:py-(--spacing-text-container-desktop-padding-y)
    bg-(--color-card-container-background)
    border-(length:--border-card-container-base-width)
    border-(--color-card-container-border)
    shadow-(--shadow-card-container)
    rounded-(--radius-card-container-base)
    transform-gpu will-change-transform contain-layout contain-paint
    gap-(--spacing-block-block-mobile-gap)
    sm:gap-(--spacing-block-block-tablet-gap)
    lg:gap-(--spacing-block-block-desktop-gap)
  `,

  atAGlanceBlocksColumn: `
    flex flex-col sm:flex-row w-full
    gap-(--spacing-block-block-mobile-gap)
    sm:gap-(--spacing-block-block-tablet-gap)
    lg:gap-(--spacing-block-block-desktop-gap)
  `,

  textAlignMap: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  },
};

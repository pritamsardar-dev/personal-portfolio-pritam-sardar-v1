export const projectsSectionLayoutConfig = {
  sectionContainer: `
    flex flex-col lg:flex-row w-full
    lg:max-w-(--size-section-wrapper-desktop-max-width)
    px-(--spacing-section-wrapper-mobile-padding-x)
    sm:px-(--spacing-section-wrapper-tablet-padding-x)
    lg:px-(--spacing-section-wrapper-desktop-padding-x)
    py-(--spacing-section-wrapper-mobile-padding-y)
    sm:py-(--spacing-section-wrapper-tablet-padding-y)
    lg:py-(--spacing-section-wrapper-desktop-padding-y)
    gap-(--spacing-section-wrapper-mobile-gap)
    sm:gap-(--spacing-section-wrapper-tablet-gap)
    lg:gap-(--spacing-section-wrapper-desktop-gap)
  `,

  sectionBlockContainer: `
    flex flex-col w-full
    gap-(--spacing-section-wrapper-mobile-gap)
    sm:gap-(--spacing-section-wrapper-tablet-gap)
    lg:gap-(--spacing-section-wrapper-desktop-gap)
  `,

  headingWrapper: {
    section: `
      flex flex-col
      gap-(--spacing-heading-1-heading-2-mobile-gap)
      sm:gap-(--spacing-heading-1-heading-2-tablet-gap)
      lg:gap-(--spacing-heading-1-heading-2-desktop-gap)
    `,
    block: `
      flex flex-col
      gap-(--spacing-heading-2-heading-3-mobile-gap)
      sm:gap-(--spacing-heading-2-heading-3-tablet-gap)
      lg:gap-(--spacing-heading-2-heading-3-desktop-gap)
    `,
  },

  rowsContainer: {
    default: `
      w-full grid grid-cols-1 sm:grid-cols-2
      gap-(--spacing-section-wrapper-mobile-gap)
      sm:gap-(--spacing-section-wrapper-tablet-gap)
      lg:gap-(--spacing-section-wrapper-desktop-gap)
    `,
    relatedProjects: `
      w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1
      xl:max-w-(--size-block-wrapper-mobile-max-width)
      xl:min-w-(--size-block-wrapper-mobile-max-width)
      lg:min-w-[calc(var(--size-block-wrapper-mobile-max-width)*0.8)]
      lg:max-w-[calc(var(--size-block-wrapper-mobile-max-width)*0.8)]
      gap-(--spacing-card-media-content-mobile-gap)
      lg:gap-(--spacing-card-media-content-tablet-gap)
    `,
  },

  blocksContainer: {
    base: `
      flex flex-col w-full
      gap-(--spacing-card-media-content-mobile-gap)
      sm:gap-(--spacing-card-media-content-tablet-gap)
      lg:gap-(--spacing-card-media-content-desktop-gap)
      py-(--spacing-card-container-mobile-padding-y)
      sm:py-(--spacing-card-container-tablet-padding-y)
      lg:py-(--spacing-card-container-desktop-padding-y)
      bg-(--color-card-container-background)
      border-(--color-card-container-border)
      border-(length:--border-card-container-base-width)
      rounded-(--radius-card-container-base)
      shadow-(--shadow-card-container)
      transform-gpu
      will-change-transform
    `,
    default: `
    `,
    relatedProjects: `
      h-fit
    `,
  },

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

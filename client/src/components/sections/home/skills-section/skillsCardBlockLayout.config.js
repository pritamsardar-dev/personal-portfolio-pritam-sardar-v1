export const skillsCardBlockLayoutConfig = {
  blockContainer: `
    flex flex-col w-full
    sm:max-w-(--size-block-wrapper-single-tablet-max-width)
    lg:max-w-(--size-block-wrapper-single-desktop-max-width)
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
    gap-(--spacing-heading-2-heading-3-mobile-gap)
    sm:gap-(--spacing-heading-2-heading-3-tablet-gap)
    lg:gap-(--spacing-heading-2-heading-3-desktop-gap)
  `,

  bodyItemsContainer: `
    flex flex-col w-full h-auto
    gap-(--spacing-block-wrapper-mobile-gap)
    sm:gap-(--spacing-block-wrapper-tablet-gap)
    lg:gap-(--spacing-block-wrapper-desktop-gap)
  `,

  bodyItemContainer: `
    flex flex-col w-full h-auto
    gap-(--spacing-heading-3-body-mobile-gap)
    sm:gap-(--spacing-heading-3-body-tablet-gap)
    lg:gap-(--spacing-heading-3-body-desktop-gap)
  `,

  skillsetContainer: `
    w-full flex flex-wrap h-auto
    gap-x-(--spacing-interactive-interactive-mobile-gap-horizontal)
    sm:gap-x-(--spacing-interactive-interactive-tablet-gap-horizontal)
    lg:gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
    gap-y-(--spacing-interactive-interactive-mobile-gap-vertical)
    sm:gap-y-(--spacing-interactive-interactive-tablet-gap-vertical)
    lg:gap-y-(--spacing-interactive-interactive-desktop-gap-vertical)
  `,

  techStackTagStyle: `
    bg-(--color-card-wrapper-fill)
    border-(length:--border-card-wrapper-base-width)
    border-(--color-card-wrapper-stroke)
    shadow-(--shadow-card-wrapper)
    rounded-(--radius-card-skill-wrapper-base)
    transform-gpu will-change-transform
    contain-layout contain-paint
    px-(--spacing-card-wrapper-skill-mobile-padding-x)
    sm:px-(--spacing-card-wrapper-skill-tablet-padding-x)
    lg:px-(--spacing-card-wrapper-skill-desktop-padding-x)
    px-(--spacing-card-wrapper-skill-mobile-padding-y)
    sm:py-(--spacing-card-wrapper-skill-tablet-padding-y)
    lg:py-(--spacing-card-wrapper-skill-desktop-padding-y)
  `,

  alignmentClassesMap: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  },
};

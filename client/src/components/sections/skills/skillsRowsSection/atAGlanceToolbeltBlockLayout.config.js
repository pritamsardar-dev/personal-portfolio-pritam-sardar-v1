export const atAGlanceToolbeltBlockLayoutConfig = {
  blockContainer: `
    flex flex-col w-full
    gap-(--spacing-heading-2-heading-3-mobile-gap)
    sm:gap-(--spacing-heading-2-heading-3-tablet-gap)
    lg:gap-(--spacing-heading-2-heading-3-desktop-gap)
  `,

  subHeadingContainer: `
    flex flex-col w-full
    gap-(--spacing-heading-3-body-mobile-gap)
    sm:gap-(--spacing-heading-3-body-tablet-gap)
    lg:gap-(--spacing-heading-3-body-desktop-gap)
  `,

  skillsetContainer: `
    w-full flex flex-wrap
    gap-x-(--spacing-interactive-interactive-mobile-gap-horizontal)
    sm:gap-x-(--spacing-interactive-interactive-tablet-gap-horizontal)
    lg:gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
    gap-y-(--spacing-interactive-interactive-mobile-gap-vertical)
    sm:gap-y-(--spacing-interactive-interactive-tablet-gap-vertical)
    lg:gap-y-(--spacing-interactive-interactive-desktop-gap-vertical)
  `,

  skillsTagStyle: `
    bg-(--color-card-wrapper-fill)
    border-(length:--border-card-wrapper-base-width)
    border-(--color-card-wrapper-stroke)
    shadow-(--shadow-card-wrapper)
    rounded-(--radius-card-skill-wrapper-base)
    transform-gpu will-change-transform contain-layout contain-paint
    px-(--spacing-card-wrapper-skill-mobile-padding-x)
    sm:px-(--spacing-card-wrapper-skill-tablet-padding-x)
    lg:px-(--spacing-card-wrapper-skill-desktop-padding-x)
    px-(--spacing-card-wrapper-skill-mobile-padding-y)
    sm:py-(--spacing-card-wrapper-skill-tablet-padding-y)
    lg:py-(--spacing-card-wrapper-skill-desktop-padding-y)
  `,

  bodyItemContainer: `
    flex flex-col w-full h-full
    p-(--spacing-text-container-inner-1-mobile-padding)
    sm:p-(--spacing-text-container-inner-1-tablet-padding)
    lg:p-(--spacing-text-container-inner-1-desktop-padding)
    gap-(--spacing-item-item-mobile-gap)
    sm:gap-(--spacing-item-item-tablet-gap)
    lg:gap-(--spacing-item-item-desktop-gap)
    bg-(-color-badge-neutral-background)
    border-(length:--border-card-wrapper-base-width)
    border-(--color-badge-neutral-border)
    rounded-(--radius-badge-base)
  `,

  bodyItemsContainer: `
    flex flex-col w-full h-full
    gap-(--spacing-block-wrapper-mobile-gap)
    sm:gap-(--spacing-block-wrapper-tablet-gap)
    lg:gap-(--spacing-block-wrapper-desktop-gap)
  `,

  alignmentMap: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  },
};

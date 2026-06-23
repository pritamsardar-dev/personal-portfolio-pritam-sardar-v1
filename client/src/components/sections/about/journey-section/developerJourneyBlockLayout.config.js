export const developerJourneyBlockLayoutConfig = {
  blockOuterContainer: `
    flex justify-center
    w-full
    sm:max-w-(--size-section-wrapper-tablet-max-width)
    lg:max-w-(--size-section-wrapper-desktop-max-width)
    py-(--spacing-text-container-mobile-padding-y)
    sm:py-(--spacing-text-container-tabelt-padding-y)
    lg:py-(--spacing-text-container-desktop-padding-y)
    bg-(--color-card-container-background)
    border-(length:--border-card-container-base-width)
    border-(--color-card-container-border)
    shadow-(--shadow-card-container)
    rounded-(--radius-card-container-base)
    transform-gpu will-change-transform contain-layout contain-paint
  `,

  blockInnerContainer: `
    flex flex-col w-full h-auto
    sm:max-w-(--size-block-wrapper-single-tablet-max-width)
    lg:max-w-(--size-block-wrapper-single-desktop-max-width)
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
    py-(--spacing-text-container-mobile-padding-y)
    sm:py-(--spacing-text-container-tablet-padding-y)
    lg:py-(--spacing-text-container-desktop-padding-y)
    gap-(--spacing-heading-2-heading-3-mobile-gap)
    sm:gap-(--spacing-heading-2-heading-3-tablet-gap)
    lg:gap-(--spacing-heading-2-heading-3-desktop-gap)
  `,

  bodyItemsContainer: `
    flex flex-col w-full
    gap-(--spacing-item-item-mobile-gap)
    sm:gap-(--spacing-item-item-tablet-gap)
    lg:gap-(--spacing-item-item-desktop-gap)
  `,

  bodyItemContainer: `
    flex flex-col w-full
    gap-(--spacing-heading-3-body-mobile-gap)
    sm:gap-(--spacing-heading-3-body-tablet-gap)
    lg:gap-(--spacing-heading-3-body-desktop-gap)
  `,

  alignmentMap: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  },
};

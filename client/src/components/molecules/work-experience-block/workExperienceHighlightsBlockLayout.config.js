export const workExperienceHighlightsBlockLayoutConfig = {
  blockContainer: {
    base: "flex flex-col w-full",

    home: `
      sm:max-w-(--size-block-wrapper-tablet-max-width)
      lg:max-w-(--size-block-wrapper-desktop-max-width)
    `,

    workExperience: `
      sm:max-w-(--size-block-wrapper-single-tablet-max-width)
      lg:max-w-(--size-block-wrapper-single-desktop-max-width)
    `,
  },

  blockHeading: `
    flex flex-col w-full
    gap-(--spacing-heading-2-body-mobile-gap)
    sm:gap-(--spacing-heading-2-body-tablet-gap)
    lg:gap-(--spacing-heading-2-body-desktop-gap)
  `,

  bodyItemsContainer: `
    flex flex-col w-full
    gap-(--spacing-block-block-mobile-gap)
    sm:gap-(--spacing-block-block-tablet-gap)
    lg:gap-(--spacing-block-block-desktop-gap)
  `,

  bodyItemContainer: {
    base: `
      flex flex-col w-full
      px-(--spacing-text-container-mobile-padding-x)
      sm:px-(--spacing-text-container-tablet-padding-x)
      lg:px-(--spacing-text-container-desktop-padding-x)
      gap-(--spacing-list-item-mobile-gap)
      sm:gap-(--spacing-list-item-tablet-gap)
      lg:gap-(--spacing-list-item-desktop-gap)
    `,

    workExperience: `
      bg-(--color-badge-neutral-background)
      border-(length:--border-card-wrapper-base-width)
      border-(--color-badge-neutral-border)
      rounded-(--radius-badge-base)
      py-(--spacing-text-container-mobile-padding-y)
      sm:py-(--spacing-text-container-tablet-padding-y)
      lg:py-(--spacing-text-container-desktop-padding-y)
    `,

    home: "",
  },

  ctaClass: `
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
  `,

  alignmentMap: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  },
};

export const workExperienceMetaInfoBlockLayoutConfig = {
  blockContainer: {
    base: `
      flex flex-col w-full
      gap-(--spacing-block-block-mobile-gap)
      sm:gap-(--spacing-block-block-tablet-gap)
      lg:gap-(--spacing-block-block-desktop-gap)
    `,

    home: `
      sm:max-w-(--size-block-wrapper-tablet-max-width)
      lg:max-w-(--size-block-wrapper-desktop-max-width)
    `,

    workExperience: `
      sm:max-w-(--size-block-wrapper-single-tablet-max-width)
      lg:max-w-(--size-block-wrapper-single-desktop-max-width)
    `,
  },

  bodyItemsContainer: `
    flex flex-col w-full
    gap-(--spacing-item-item-mobile-gap)
    sm:gap-(--spacing-item-item-tablet-gap)
    lg:gap-(--spacing-item-item-desktop-gap)
  `,

  cardContainer: {
    base: `
      flex flex-col w-full
      gap-(--spacing-list-item-mobile-gap)
      sm:gap-(--spacing-list-item-tablet-gap)
      lg:gap-(--spacing-list-item-desktop-gap)
    `,

    home: `
      px-(--spacing-text-container-mobile-padding-x)
      sm:px-(--spacing-text-container-tablet-padding-x)
      lg:px-(--spacing-text-container-desktop-padding-x)
      bg-(--color-card-wrapper-fill)
      border-(length:--border-card-wrapper-base-width)
      border-(--color-card-wrapper-stroke)
      shadow-(--shadow-card-wrapper)
      rounded-(--radius-card-wrapper-base)
      py-(--spacing-text-container-mobile-padding-y)
      sm:py-(--spacing-text-container-tablet-padding-y)
      lg:py-(--spacing-text-container-desktop-padding-y)
    `,

    workExperience: `
      px-(--spacing-text-container-mobile-padding-x)
      sm:px-(--spacing-text-container-tablet-padding-x)
      lg:px-(--spacing-text-container-desktop-padding-x)
    `,
  },

  techStackContainer: `
    flex flex-wrap w-full
    gap-(--spacing-tech-stack-tag-mobile-gap)
    sm:gap-(--spacing-tech-stack-tag-tablet-gap)
    lg:gap-(--spacing-tech-stack-tag-desktop-gap)
  `,

  labelValueRowClasses: `
    [&>*]:inline
    [&>*+*]:ml-(--spacing-inline-text-gap)
  `,

  alignmentMap: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  },
};

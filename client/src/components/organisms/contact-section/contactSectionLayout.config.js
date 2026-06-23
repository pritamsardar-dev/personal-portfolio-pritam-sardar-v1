export const contactSectionLayoutConfig = {
  sectionContainer: `
    flex flex-col
    w-full
    sm:max-w-(--size-section-wrapper-tablet-max-width)
    lg:max-w-(--size-section-wrapper-desktop-max-width)
    px-(--spacing-section-wrapper-mobile-padding-x)
    sm:px-(--spacing-section-wrapper-tablet-padding-x)
    lg:px-(--spacing-section-wrapper-desktop-padding-x)
    gap-(--spacing-heading-1-heading-2-mobile-gap)
    sm:gap-(--spacing-heading-1-heading-2-tablet-gap)
    lg:gap-(--spacing-heading-1-heading-2-desktop-gap)
  `,

  sectionHeadingContainer: `
    flex flex-col w-full
    gap-(--spacing-heading-1-body-mobile-gap)
    sm:gap-(--spacing-heading-1-body-tablet-gap)
    lg:gap-(--spacing-heading-1-body-desktop-gap)
  `,

  blockWrapperSingle: `
    flex
    sm:max-w-(--size-block-wrapper-single-tablet-max-width)
    lg:max-w-(--size-block-wrapper-single-desktop-max-width)
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
  `,

  blocksContainer: `
    w-full flex
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
    center: "justify-center items-center",
    right: "justify-end",
  },
};

export const footerLayoutConfig = {
  footerOuterShell: `
    relative overflow-hidden
    w-full flex flex-col items-center
    bg-(--color-footer-section-background)
    sm:max-w-(--size-navigation-header-tablet-width)
    lg:max-w-(--size-navigation-header-desktop-width)
    gap-(--spacing-block-block-mobile-gap)
    sm:gap-(--spacing-block-block-tablet-gap)
    lg:gap-(--spacing-block-block-desktop-gap)
    px-(--spacing-navigation-header-padding-x-mobile)
    sm:px-(--spacing-navigation-header-padding-x-tablet)
    lg:px-(--spacing-navigation-header-padding-x-desktop)
    py-(--spacing-section-wrapper-mobile-padding-y)
    sm:py-(--spacing-section-wrapper-tablet-padding-y)
    lg:py-(--spacing-section-wrapper-desktop-padding-y)
    mt-(--spacing-section-wrapper-mobile-padding-y)
    sm:mt-(--spacing-section-wrapper-tablet-padding-y)
    lg:mt-(--spacing-section-wrapper-desktop-padding-y)
    rounded-(--radius-header-base)
  `,

  footerInnerShell: `
    w-full flex flex-col sm:flex-row lg:flex-row
    gap-(--spacing-section-wrapper-mobile-gap)
    sm:gap-(--spacing-section-wrapper-tablet-gap)
    lg:gap-(--spacing-section-wrapper-desktop-gap)
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
  `,

  headingToList: `
    w-full flex flex-col
    gap-(--spacing-footer-heading-list-mobile-gap)
    sm:gap-(--spacing-footer-heading-list-tablet-gap)
    lg:gap-(--spacing-footer-heading-list-desktop-gap)
  `,

  listToList: `
    w-full flex flex-col
    gap-(--spacing-footer-list-list-mobile-gap)
    sm:gap-(--spacing-footer-list-list-tablet-gap)
    lg:gap-(--spacing-footer-list-list-desktop-gap)
  `,
};

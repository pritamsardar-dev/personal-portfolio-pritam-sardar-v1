export const aboutCardBlockLayoutConfig = {
  blockContainer: `
    flex flex-col w-full h-auto
    sm:max-w-(--size-block-wrapper-tablet-max-width)
    lg:max-w-(--size-block-wrapper-desktop-max-width)
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

  animatedHeightWrapper: `
    overflow-hidden
    transition-[max-height]
    duration-500
    px-(--spacing-card-wrapper-buffer-padding-x)
    pt-(--spacing-card-wrapper-buffer-padding-top)
    pb-(--spacing-card-wrapper-buffer-padding-bottom)
  `,

  textAlignMap: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  },
};

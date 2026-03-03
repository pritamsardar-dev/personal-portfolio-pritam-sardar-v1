export const caseStudyImageBlockLayoutConfig = {
  outerContainerPaddingX: `
    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
  `,

  outerContainer: {
    base: `
      relative group w-full flex flex-col
      z-0
      cursor-zoom-in transition-transform duration-300 hover:scale-105 
    `,

    compact: `
      relative w-full flex flex-col
      px-(--spacing-text-container-mobile-padding-x)
      z-0
    `,

    fullscreen: `
      fixed inset-0
      w-[100dvw] h-[100dvh]
      flex items-center justify-center
      bg-(--color-surface-media-dark)
      z-50
      cursor-zoom-out
    `,
  },

  imageWrapper: `
    w-full
    aspect-16/9
    overflow-hidden
    rounded-(--radius-image-base)
    shadow-(--color-carousal-viewport-shadow)
    bg-(--color-surface-media-dark)
  `,

  utilityContainer: `
    absolute 
    pointer-events-none
    z-20
    right-(--spacing-carousel-utility-mobile-offset)
    sm:right-(--spacing-carousel-utility-tablet-offset)
    lg:right-(--spacing-carousel-utility-desktop-offset)

    top-(--spacing-carousel-utility-mobile-offset)
    sm:top-(--spacing-carousel-utility-tablet-offset)
    lg:top-(--spacing-carousel-utility-desktop-offset)
  `,

  captionWrapper: `
    w-full
    pt-3 pb-2
  `,
};

export const caseStudyImageBlockLayoutConfig = {
  outerContainerPaddingX: `
    px-(--spacing-text-container-mobile-padding-x)
  `,

  outerContainer: {
    base: `
      relative group w-full flex flex-col
      z-0 hover:z-10
      cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]
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
    border-(--color-card-container-border)
    border-(length:--border-card-container-base-width)
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

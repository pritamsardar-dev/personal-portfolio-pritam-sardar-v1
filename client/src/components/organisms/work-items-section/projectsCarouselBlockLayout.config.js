export const projectsCarouselBlockLayoutConfig = {
  outerContainer: {
    collapsed: {
      default: `
        relative w-full flex flex-col
        sm:max-w-(--size-block-wrapper-tablet-max-width)
        lg:max-w-(--size-block-wrapper-desktop-max-width)

        px-(--spacing-text-container-mobile-padding-x)
        sm:px-(--spacing-text-container-tablet-padding-x)
        lg:px-(--spacing-text-container-desktop-padding-x)

        z-0
      `,

      compact: `
        relative w-full flex flex-col
        px-(--spacing-text-container-mobile-padding-x)
        z-0
      `,
    },

    base: `
      flex flex-col w-full relative
      px-(--spacing-text-container-mobile-padding-x)
      sm:px-(--spacing-text-container-tablet-padding-x)
      lg:px-(--spacing-text-container-desktop-padding-x)

      z-0
    `,

    fullscreen: `
      flex flex-col fixed w-[100dvw] h-[100dvh] 
      z-50
    `,
  },

  slidesViewport: {
    base: `
      relative w-full h-auto overflow-hidden aspect-16/9
      rounded-(--radius-image-base)
      shadow-(--color-carousal-viewport-shadow)
      focus:outline-none focus-visible:outline-none
     
      z-0
    `,
    fullscreen: `
      relative w-[100dvw] h-[100dvh] overflow-hidden 
      shadow-(--color-carousal-viewport-shadow)
      focus:outline-none focus-visible:outline-none
      z-0
    `,
  },

  slidesTrack: {
    base: `
      w-full h-full flex
      will-change-transform
      transform-gpu
      z-0
    `,
    fullscreen: `
      w-full h-full flex
      absolute top-1/2 -translate-y-1/2
      will-change-transform
      transform-gpu
      z-0
    `,
  },

  carouselDotContainer: {
    base:  `
      flex absolute
      left-1/2 -translate-x-1/2
      z-10
  `,
    default:  `
        gap-(--spacing-carousel-dot-mobile-gap)
        sm:gap-(--spacing-carousel-dot-tablet-gap)
        lg:gap-(--spacing-carousel-dot-desktop-gap)
        bottom-(--spacing-carousel-dot-mobile-offset)
        sm:bottom-(--spacing-carousel-dot-tablet-offset)
        lg:bottom-(--spacing-carousel-dot-desktop-offset)
    `,
    compact:  `
        gap-(--spacing-carousel-dot-mobile-gap)
        lg:gap-(--spacing-carousel-dot-tablet-gap)
        bottom-(--spacing-carousel-dot-mobile-offset)
    `,
  },

  carouselArrowContainer: {
    base: `
      absolute inset-0
      flex items-center justify-between
      pointer-events-none
      z-10
    `,
    fullscreen: `
      pointer-events-none
      absolute flex flex-wrap left-1/2 -translate-x-1/2
      bottom-(--spacing-carousel-arrow-fullscreen-mobile-offset)
      sm:bottom-(--spacing-carousel-arrow-fullscreen-tablet-offset)
      lg:bottom-(--spacing-carousel-arrow-fullscreen-desktop-offset)

      gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)

      z-10
    `,
  },

  carouselCtaContainer: {
    base: {
      base: `
      w-[70%]
      flex flex-wrap
      absolute top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2
      items-center justify-center
      pointer-events-none
      z-10
    `,
      default: `
        gap-x-(--spacing-interactive-interactive-mobile-gap-horizontal)
        sm:gap-x-(--spacing-interactive-interactive-tablet-gap-horizontal)
        lg:gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
        gap-y-(--spacing-interactive-interactive-mobile-gap-vertical)
        sm:gap-y-(--spacing-interactive-interactive-tablet-gap-vertical)
        lg:gap-y-(--spacing-interactive-interactive-desktop-gap-vertical)
      `,
      compact: `
        gap-x-(--spacing-interactive-interactive-mobile-gap-horizontal)
        gap-y-(--spacing-interactive-interactive-mobile-gap-vertical)
      `,
    },

    fullscreen: `
      absolute flex flex-wrap flex-col sm:flex-row lg:flex-row
      pointer-events-none

      left-(--spacing-carousel-cta-fullscreen-mobile-offset)
      sm:left-(--spacing-carousel-cta-fullscreen-tablet-offset)
      lg:left-(--spacing-carousel-cta-fullscreen-desktop-offset)

      top-(--spacing-carousel-cta-fullscreen-mobile-offset)
      sm:top-(--spacing-carousel-cta-fullscreen-tablet-offset)
      lg:top-(--spacing-carousel-cta-fullscreen-desktop-offset)

      gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
      gap-y-(--spacing-interactive-interactive-desktop-gap-vertical)

      z-10
    `,
  },

  carouselUtilityContainer: {
    base: `
    absolute flex
    pointer-events-none
    z-20
  `,
  default: `
    right-(--spacing-carousel-utility-mobile-offset)
    sm:right-(--spacing-carousel-utility-tablet-offset)
    lg:right-(--spacing-carousel-utility-desktop-offset)

    top-(--spacing-carousel-utility-mobile-offset)
    sm:top-(--spacing-carousel-utility-tablet-offset)
    lg:top-(--spacing-carousel-utility-desktop-offset)
  `,
  compact: `
    right-(--spacing-carousel-utility-mobile-offset)
    top-(--spacing-carousel-utility-mobile-offset)
  `,
  }
};

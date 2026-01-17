export const baseButton = `
    inline-flex items-center justify-center
    gap-(--spacing-button-content-mobile-gap)
    sm:gap-(--spacing-button-content-tablet-gap)
    lg:gap-(--spacing-button-content-desktop-gap)
    select-none whitespace-nowrap
    transition-all duration-300 ease-in-out
    cursor-pointer disabled:cursor-default
    u-focus-visible-outline
    min-w-fit
`;

export const variantMap = {
  primary: {
    baseClasses: `
      bg-(--color-button-primary-background-default)
      hover:bg-(--color-button-primary-background-hover)
      active:bg-(--color-button-primary-background-active)
      disabled:bg-(--color-button-primary-background-disabled)

      text-(--color-button-primary-text-default)
      disabled:text-(--color-button-primary-text-disabled)

      font-(--text-button-font-weight)
      rounded-(--radius-button-base)
    `,

    sizes: {
      default: `
        px-(--size-button-mobile-padding-x)
        sm:px-(--size-button-tablet-padding-x)
        lg:px-(--size-button-desktop-padding-x)

        h-(--size-button-mobile-height)
        sm:h-(--size-button-tablet-height)
        lg:h-(--size-button-desktop-height)

        text-(length:--text-button-mobile-font-size)
        sm:text-(length:--text-button-tablet-font-size)
        lg:text-(length:--text-button-desktop-font-size)
      `,
      compact: `
        px-(--size-button-mobile-padding-x)
        h-(--size-button-mobile-height)
        text-(length:--text-button-mobile-font-size)
      `,
    },

    iconClasses: ``,
  },

  secondary: {
    baseClasses: `
      border-(--color-button-secondary-border-default)
      hover:bg-(--color-button-secondary-background-hover)
      active:bg-(--color-button-secondary-background-active)
      disabled:bg-(--color-button-secondary-background-disabled)

      text-(--color-button-secondary-text-default)
      hover:text-(--color-button-secondary-text-hover)
      active:text-(--color-button-secondary-text-active)
      disabled:text-(--color-button-secondary-text-disabled)

      font-(--text-button-font-weight)
      rounded-(--radius-button-base)
      border-(length:--border-button-secondary-width)
    `,

    sizes: {
      default: `
        px-(--size-button-mobile-padding-x)
        sm:px-(--size-button-tablet-padding-x)
        lg:px-(--size-button-desktop-padding-x)

        h-(--size-button-mobile-height)
        sm:h-(--size-button-tablet-height)
        lg:h-(--size-button-desktop-height)

        text-(length:--text-button-mobile-font-size)
        sm:text-(length:--text-button-tablet-font-size)
        lg:text-(length:--text-button-desktop-font-size)
      `,
      compact: `
        px-(--size-button-mobile-padding-x)
        h-(--size-button-mobile-height)
        text-(length:--text-button-mobile-font-size)
      `,
    },

    iconClasses: ``,
  },

  overlayDefault: {
    baseClasses: `
      border-(--color-button-overlay-border-default-default)
      bg-(--color-button-overlay-background-default-defualt)
      hover:bg-(--color-button-overlay-background-default-hover)
      hover:scale-[1.1]
      active:bg-(--color-button-overlay-background-default-hover)
      active:scale-[1.1]

      text-(--color-button-overlay-text-default-default)

      font-(--text-button-font-weight)
      rounded-(--radius-button-overlay-base)
      border-(length:--border-button-overlay-width)
    `,

    sizes: {
      default: `
        px-(--spacing-button-overlay-mobile-padding-x)
        sm:px-(--spacing-button-overlay-tablet-padding-x)
        lg:px-(--spacing-button-overlay-desktop-padding-x)

        py-(--spacing-button-overlay-mobile-padding-y)
        sm:py-(--spacing-button-overlay-tablet-padding-y)
        lg:py-(--spacing-button-overlay-desktop-padding-y)

        h-(--size-button-overlay-mobile-height)
        sm:h-(--size-button-overlay-tablet-height)
        lg:h-(--size-button-overlay-desktop-height)

        text-(length:--text-button-small-mobile-font-size)
        sm:text-(length:--text-button-small-tablet-font-size)
        lg:text-(length:--text-button-small-desktop-font-size)
      `,
      compact: `
        px-(--spacing-button-overlay-mobile-padding-x)
        py-(--spacing-button-overlay-mobile-padding-y)
        h-(--size-button-overlay-mobile-height)
        text-(length:--text-button-small-mobile-font-size)
      `,
    },

    iconClasses: {
      default: `
        stroke-(length:--border-icon-base-width)
        w-(--size-icon-button-element-mobile-diameter)
        sm:w-(--size-icon-button-element-tablet-diameter)
        lg:w-(--size-icon-button-element-desktop-diameter)
        h-auto
      `,
      compact: `
        stroke-(length:--border-icon-base-width)
        w-(--size-icon-button-element-mobile-diameter)
        h-auto
      `,
    },
  },
  
  overlay: {
    baseClasses: `
      border-(--color-button-overlay-border)
      bg-(--color-button-overlay-background-default)
      hover:bg-(--color-button-overlay-background-hover)
      active:scale-[1.1]
      active:bg-(--color-button-overlay-background-active)
      hover:scale-[1.1]
    
      text-(--color-button-overlay-text-default)
      hover:text-(--color-button-overlay-text-hover)
      active:text-(--color-button-overlay-text-active)

      font-(--text-button-font-weight)
      rounded-(--radius-button-overlay-base)
      border-(length:--border-button-overlay-width)
    `,

    sizes: {
      default: `
        px-(--spacing-button-overlay-mobile-padding-x)
        sm:px-(--spacing-button-overlay-tablet-padding-x)
        lg:px-(--spacing-button-overlay-desktop-padding-x)

        py-(--spacing-button-overlay-mobile-padding-y)
        sm:py-(--spacing-button-overlay-tablet-padding-y)
        lg:py-(--spacing-button-overlay-desktop-padding-y)

        h-(--size-button-overlay-mobile-height)
        sm:h-(--size-button-overlay-tablet-height)
        lg:h-(--size-button-overlay-desktop-height)

        text-(length:--text-button-small-mobile-font-size)
        sm:text-(length:--text-button-small-tablet-font-size)
        lg:text-(length:--text-button-small-desktop-font-size)
      `,

      compact: `
        px-(--spacing-button-overlay-mobile-padding-x)
        py-(--spacing-button-overlay-mobile-padding-y)
        h-(--size-button-overlay-mobile-height)
        text-(length:--text-button-small-mobile-font-size)
      `,
    },

    iconClasses: {
      default: `
        stroke-(length:--border-icon-base-width)
        w-(--size-icon-button-element-mobile-diameter)
        sm:w-(--size-icon-button-element-tablet-diameter)
        lg:w-(--size-icon-button-element-desktop-diameter)
        h-auto
      `,
      compact: `
        stroke-(length:--border-icon-base-width)
        w-(--size-icon-button-element-mobile-diameter)
        h-auto
      `,
    },
  },

  tag: {
    baseClasses: `
      border-(--color-button-overlay-border)
      bg-(--color-button-overlay-background-default)
      hover:bg-(--color-button-overlay-background-hover)
      active:bg-(--color-button-overlay-background-active)
    
      text-(--color-button-overlay-text-default)
      hover:text-(--color-button-overlay-text-hover)
      active:text-(--color-button-overlay-text-active)
      
      px-(--spacing-button-overlay-mobile-padding-x)
      sm:px-(--spacing-button-overlay-tablet-padding-x)
      lg:px-(--spacing-button-overlay-desktop-padding-x)

      py-(--spacing-button-overlay-mobile-padding-y)
      sm:py-(--spacing-button-overlay-tablet-padding-y)
      lg:py-(--spacing-button-overlay-desktop-padding-y)

      h-(--size-button-overlay-mobile-height)
      sm:h-(--size-button-overlay-tablet-height)
      lg:h-(--size-button-overlay-desktop-height)

      text-(length:--text-button-small-mobile-font-size)
      sm:text-(length:--text-button-small-tablet-font-size)
      lg:text-(length:--text-button-small-desktop-font-size)

      font-(--text-button-font-weight)
      rounded-(--radius-button-tag-clickable)
      border-(length:--border-button-overlay-width)
    `,

    iconClasses: `
      stroke-(length:--border-icon-base-width)
      w-(--size-icon-button-element-mobile-diameter)
      sm:w-(--size-icon-button-element-tablet-diameter)
      lg:w-(--size-icon-button-element-desktop-diameter)
      h-auto
    `,
  },

  iconOnlyCircularDefault: {
    baseClasses: `
      bg-(--color-button-overlay-background-default-defualt)
      hover:bg-(--color-button-overlay-background-default-hover)
    
      text-(--color-button-overlay-text-default-default)

      w-(--size-button-overlay-desktop-height)
      
      h-(--size-button-overlay-desktop-height)
     
      font-(--text-button-font-weight)
      rounded-(--radius-icon-button-overlay)
    `,

    iconClasses: `
      fill-transparent
      text-inherit
      stroke-(length:--border-icon-base-width)
      w-[70%]
      h-auto
    `,
  },

  iconOnlyCircular: {
    baseClasses: `
      hover:bg-(--color-button-overlay-background-hover)
      active:bg-(--color-button-overlay-background-hover)
   
      text-(--color-button-overlay-text-default-default)

      w-(--size-button-overlay-desktop-height)
      
      h-(--size-button-overlay-desktop-height)
     
      font-(--text-button-font-weight)
      rounded-(--radius-icon-button-overlay)
    `,

    iconClasses: `
      fill-(--color-icon-button-icon-only)
      text-(--color-icon-button-icon-only)
      stroke-[(length:--border-icon-base-width)]
      w-(--size-icon-only-circular-button-element-large-mobile-diameter)
      sm:w-(--size-icon-only-circular-button-element-large-tablet-diameter)
      lg:w-(--size-icon-only-circular-button-element-large-desktop-diameter)
      h-auto
    `,
  },

  iconOnlyCircularOverlay: {
    baseClasses: `
      bg-(--color-button-overlay-background-default-defualt)
      hover:bg-(--color-button-overlay-background-default-hover)
      hover:scale-[1.1]
      active:bg-(--color-button-overlay-background-default-hover)
      active:scale-[1.1]

      text-(--color-button-overlay-text-default-default)

      font-(--text-button-font-weight)
      rounded-(--radius-icon-button-overlay)
    `,

    sizes: {
      default: `
        w-(--size-button-overlay-mobile-height)
        sm:w-(--size-button-overlay-tablet-height)
        lg:w-(--size-button-overlay-desktop-height)

        h-(--size-button-overlay-mobile-height)
        sm:h-(--size-button-overlay-tablet-height)
        lg:h-(--size-button-overlay-desktop-height)
      `,

      compact: `
        w-(--size-button-overlay-mobile-height)
        h-(--size-button-overlay-mobile-height)
      `,
    },

    iconClasses: {
      default: `
        stroke-(length:--border-icon-base-width)
        w-(--size-icon-button-element-mobile-diameter)
        sm:w-(--size-icon-button-element-tablet-diameter)
        lg:w-(--size-icon-button-element-desktop-diameter)
        h-auto
      `,
      compact: `
        stroke-(length:--border-icon-base-width)
        w-(--size-icon-button-element-mobile-diameter)
        h-auto
      `,
    },
  },

  iconOnlyRectangularOverlay: {
    baseClasses: `
      bg-(--color-button-overlay-background-default-defualt)
      hover:bg-(--color-button-overlay-background-default-hover)
      active:bg-(--color-button-overlay-background-default-hover)
      hover:scale-[1.1]
      active:scale-[1.1]

      text-(--color-button-overlay-text-default-default)

      font-(--text-button-font-weight)
      rounded-(--radius-button-overlay-base)
    `,

    sizes: {
      default: `
        w-(--size-button-overlay-mobile-height)
        sm:w-(--size-button-overlay-tablet-height)
        lg:w-(--size-button-overlay-desktop-height)

        h-(--size-button-overlay-mobile-height)
        sm:h-(--size-button-overlay-tablet-height)
        lg:h-(--size-button-overlay-desktop-height)
      `,

      compact: `
        w-(--size-button-overlay-mobile-height)
        h-(--size-button-overlay-mobile-height)
      `,
    },

    iconClasses: {
      default: `
        stroke-(length:--border-icon-base-width)
        w-(--size-icon-button-element-mobile-diameter)
        sm:w-(--size-icon-button-element-tablet-diameter)
        lg:w-(--size-icon-button-element-desktop-diameter)
        h-auto
      `,
      compact: `
        stroke-(length:--border-icon-base-width)
        w-(--size-icon-button-element-mobile-diameter)
        h-auto
      `,
    },
  },

  carouselDot: {
    baseClasses: `
      bg-(--color-carousal-dot-default)
      hover:bg-(--color-carousal-dot-hover)
      hover:scale-[1.5]
      active:bg-(--color-carousal-dot-active)
      active:scale-[1.5]
      border-(--color-carousal-dot-border)
    
      text-(--color-button-overlay-text-default-default)

      w-(--size-carousel-dot-all-diameter)
      
      h-(--size-carousel-dot-all-diameter)
      
      font-(--text-button-font-weight)
      rounded-(--radius-icon-button-overlay)
      border-(length:--border-carousel-dot-all-width)
    `,

    iconClasses: `
    `,
  },

  react: {
    baseClasses: `
      text-(--color-text-body)
      
      px-(--spacing-button-overlay-mobile-padding-x)
      sm:px-(--spacing-button-overlay-tablet-padding-x)
      lg:px-(--spacing-button-overlay-desktop-padding-x)

      py-(--spacing-button-overlay-mobile-padding-y)
      sm:py-(--spacing-button-overlay-tablet-padding-y)
      lg:py-(--spacing-button-overlay-desktop-padding-y)

      h-(--size-button-overlay-mobile-height)
      sm:h-(--size-button-overlay-tablet-height)
      lg:h-(--size-button-overlay-desktop-height)

      text-(length:--text-body-large-mobile-font-size)
      sm:text-(length:--text-body-large-tablet-font-size)
      lg:text-(length:--text-body-large-desktop-font-size)

      font-(-text-body-large-font-weight)
      rounded-(--radius-button-overlay-base)
      group
    `,

    iconClasses: `
      text-(--color-button-icon-react-background-default)
      group-hover:text-(--color-button-icon-react-background-hover)
      group-active:text-(--color-button-icon-react-background-active) 

      group-active:fill-(--color-button-icon-react-background-active)
      stroke-(length:--border-icon-base-width)
      w-(--size-icon-button-element-large-mobile-diameter)
      sm:w-(--size-icon-button-element-large-tablet-diameter)
      lg:w-(--size-icon-button-element-large-desktop-diameter)
      h-auto
    `,
  },

  link: {
    baseClasses: `
      text-(--color-text-body)

      px-(--spacing-button-overlay-mobile-padding-x)
      sm:px-(--spacing-button-overlay-tablet-padding-x)
      lg:px-(--spacing-button-overlay-desktop-padding-x)

      py-(--spacing-button-overlay-mobile-padding-y)
      sm:py-(--spacing-button-overlay-tablet-padding-y)
      lg:py-(--spacing-button-overlay-desktop-padding-y)

      h-(--size-button-overlay-mobile-height)
      sm:h-(--size-button-overlay-tablet-height)
      lg:h-(--size-button-overlay-desktop-height)

      text-(length:--text-body-large-mobile-font-size)
      sm:text-(length:--text-body-large-tablet-font-size)
      lg:text-(length:--text-body-large-desktop-font-size)

      font-(-text-body-large-font-weight)
      rounded-(--radius-button-overlay-base)
      
      underline
      decoration-(--color-text-primary)
      decoration-transparent

      hover:decoration-(--color-text-primary)
      active:decoration-(--color-text-primary)
    `,

    iconClasses: `
      text-(--color-button-icon-link-background-default)
      stroke-(length:--border-icon-base-width)
      w-(--size-icon-button-element-large-mobile-diameter)
      sm:w-(--size-icon-button-element-large-tablet-diameter)
      lg:w-(--size-icon-button-element-large-desktop-diameter)
      h-auto
    `,
  },

  linkSmall: {
    baseClasses: `
      text-(--color-text-body)

      h-(--size-button-overlay-mobile-height)
      sm:h-(--size-button-overlay-tablet-height)
      lg:h-(--size-button-overlay-desktop-height)

      text-(length:--text-body-small-mobile-font-size)
      sm:text-(length:--text-body-small-tablet-font-size)
      lg:text-(length:--text-body-small-desktop-font-size)

      font-(-text-body-small-font-weight)
      rounded-(--radius-button-overlay-base)
      
      underline
      decoration-(--color-text-primary)
      decoration-transparent

      hover:decoration-(--color-text-primary)
      active:decoration-(--color-text-primary)
    `,

    iconClasses: `
      text-(--color-button-icon-link-background-default)
      stroke-(length:--border-icon-base-width)
      w-(--size-icon-button-element-large-mobile-diameter)
      sm:w-(--size-icon-button-element-large-tablet-diameter)
      lg:w-(--size-icon-button-element-large-desktop-diameter)
      h-auto
    `,
  },
};
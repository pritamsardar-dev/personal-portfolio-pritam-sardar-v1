export const baseTag = `
  inline-flex items-center justify-center
  gap-(--spacing-button-content-mobile-gap)
  sm:gap-(--spacing-button-content-tablet-gap)
  lg:gap-(--spacing-button-content-desktop-gap)
  whitespace-nowrap
  transition-all duration-300 ease-in-out
`;

export const variantMap = {
  overlay: {
    baseClasses: `
      border-(--color-button-overlay-border)
      bg-(--color-button-overlay-background-default)
      text-(--color-button-overlay-text-default)

      font-(--text-button-font-weight)
      rounded-(--radius-tag-overlay-base)
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

        h-(--size-tag-overlay-mobile-height)
        sm:h-(--size-tag-overlay-tablet-height)
        lg:h-(--size-tag-overlay-desktop-height)

        text-(length:--text-button-small-mobile-font-size)
        sm:text-(length:--text-button-small-tablet-font-size)
        lg:text-(length:--text-button-small-desktop-font-size)
      `,

      compact: `
        px-(--spacing-button-overlay-mobile-padding-x)
        py-(--spacing-button-overlay-mobile-padding-y)
        h-(--size-tag-overlay-mobile-height)
        text-(length:--text-button-small-mobile-font-size)
      `,
    },

    iconClasses: {
      default: `
        fill-(--color-tag-icon-defualt)
        text-(--color-tag-icon-defualt)
        stroke-(length:--border-icon-base-width)
        w-(--size-icon-button-element-mobile-diameter)
        sm:w-(--size-icon-button-element-tablet-diameter)
        lg:w-(--size-icon-button-element-desktop-diameter)
        h-auto
      `,

      compact: `
        fill-(--color-tag-icon-defualt)
        text-(--color-tag-icon-defualt)
        stroke-(length:--border-icon-base-width)
        w-(--size-icon-button-element-mobile-diameter)
        h-auto
      `,
    },
  },
};

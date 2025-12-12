export const baseNavigationItem = `
    inline-flex items-center justify-center
    gap-(--spacing-button-content-mobile-gap)
    sm:gap-(--spacing-button-content-tablet-gap)
    lg:gap-(--spacing-button-content-desktop-gap)
    select-none whitespace-nowrap
    transition-all duration-300 ease-in-out
    cursor-pointer
`;

export const variantMap = {
  header: {
    baseClasses: `
      text-(--color-navigation-text-default)
      hover:text-(--color-navigation-text-hover)

      text-(length:--text-navigation-link-mobile-font-size)
      sm:text-(length:--text-navigation-link-tablet-font-size)
      lg:text-(length:--text-navigation-link-desktop-font-size)

      font-(--text-navigation-link-mobile-font-weight)
      sm:font-(--text-navigation-link-tablet-font-weight)
      lg:font-(--text-navigation-link-desktop-font-weight)
      rounded-(--radius-button-base)
    `,

    activeClasses: `
      text-[var(--color-navigation-text-active)] 
    `,

    iconClasses: `
      fill-transparent
      text-inherit
      stroke-(length:--border-icon-base-width)
      w-(--size-icon-button-element-mobile-diameter)
      sm:w-(--size-icon-button-element-tablet-diameter)
      lg:w-(--size-icon-button-element-desktop-diameter)
      h-auto
    `,
  },

  footer: {
    baseClasses: `
      text-(--color-navigation-text-default)
      hover:text-(--color-navigation-text-hover)

      text-(length:--text-navigation-link-footer-mobile-font-size)
      sm:text-(length:--text-navigation-link-footer-tablet-font-size)
      lg:text-(length:--text-navigation-link-footer-desktop-font-size)

      font-(--text-navigation-link-footer-mobile-font-weight)
      rounded-(--radius-button-base)
       u-focus-visible-outline
    `,

    activeClasses: `
      text-[var(--color-navigation-text-active)] 
    `,

    iconClasses: `
    `,
  },

  buttonStyle: {
    baseClasses: `
      bg-(--color-button-primary-background-default)
      hover:bg-(--color-button-primary-background-hover)
    
      text-(--color-button-primary-text-default)
     
      px-(--size-button-mobile-padding-x)
      sm:px-(--size-button-tablet-padding-x)
      lg:px-(--size-button-desktop-padding-x)

      h-(--size-button-mobile-height)
      sm:h-(--size-button-tablet-height)
      lg:h-(--size-button-desktop-height)

      text-(length:--text-navigation-link-mobile-font-size)
      sm:text-(length:--text-navigation-link-tablet-font-size)
      lg:text-(length:--text-navigation-link-desktop-font-size)

      font-(--text-navigation-link-mobile-font-weight)
      sm:font-(--text-navigation-link-tablet-font-weight)
      lg:font-(--text-navigation-link-desktop-font-weight)
      
      rounded-(--radius-button-base)
    `,

    activeClasses: `
      bg-[var(--color-button-primary-background-active)] 
    `,

    iconClasses: `
    `,
  },


};
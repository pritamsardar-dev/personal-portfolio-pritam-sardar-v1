export const colorTokens = {
  primary: "text-(--color-text-primary)",
  heading: "text-(--color-text-heading)",
};

export const baseText = `
  block
`;

export const iconWrapperClassesBase = `
  inline-flex items-center justify-center flex-shrink-0
  bg-(--color-text-primary)
  mr-(--spacing-button-content-mobile-gap)
  sm:mr-(--spacing-button-content-tablet-gap)
  lg:mr-(--spacing-button-content-desktop-gap)
  rounded-(--radius-icon-contaniner-base)
`;

export const variantMap = {
  heroIntro: {
    baseClasses: `
      text-(--color-text-body)
      text-(length:--text-hero-intro-mobile-font-size)
      sm:text-(length:--text-hero-intro-tablet-font-size)
      lg:text-(length:--text-button-desktop-font-size)
      font-(--text-hero-intro-font-weight)
      uppercase
    `,
    semanticTag: "p",
    iconClasses: `
    `,
  },

  heroHeading: {
    baseClasses: `
      text-(length:--text-hero-heading-mobile-font-size)
      sm:text-(length:--text-hero-heading-tablet-font-size)
      lg:text-(length:--text-hero-heading-desktop-font-size)
      font-(--text-hero-heading-font-weight)
      capitalize
    `,
    semanticTag: "h1",
    iconClasses: `
    `,
  },

  heroHeadingSubpage: {
    baseClasses: `
      text-(length:--text-hero-heading-subpage-mobile-font-size)
      sm:text-(length: --text-hero-heading-subpage-tablet-font-size)
      lg:text-(length:--text-hero-heading-subpage-desktop-font-size)
      font-(--text-hero-heading-subpage-font-weight)
      capitalize
    `,
    semanticTag: "h1",
    iconClasses: `
    `,
  },

  heroTagline: {
    baseClasses: `
      text-(--color-text-body)
      text-(length:--text-hero-tagline-mobile-font-size)
      sm:text-(length:--text-hero-tagline-tablet-font-size)
      lg:text-(length:--text-hero-tagline-desktop-font-size)
      font-(--text-hero-tagline-font-weight)
    `,
    semanticTag: "p",
    iconClasses: `
    `,
  },

  heading1: {
    baseClasses: `
      text-(--color-text-primary)
      text-(length:--text-heading-1-mobile-font-size)
      sm:text-(length:--text-heading-1-tablet-font-size)
      lg:text-(length:--text-heading-1-desktop-font-size)
      font-(--text-heading-1-font-weight)
    `,
    semanticTag: "h1",
    iconWrapperClasses: `
      ${iconWrapperClassesBase}
      bg-(--color-text-primary)
      w-(--size-icon-container-heading-1-mobile-diameter)
      sm:w-(--size-icon-container-heading-1-tablet-diameter)
      lg:w-(--size-icon-container-heading-1-desktop-diameter)
      h-(--size-icon-container-heading-1-mobile-diameter)
      sm:h-(--size-icon-container-heading-1-tablet-diameter)
      lg:h-(--size-icon-container-heading-1-desktop-diameter)
    `,
    iconClasses: `
      text-(--color-content-icon-stroke-default)
      w-(--size-icon-heading-1-mobile)
      sm:w-(--size-icon-heading-1-tablet)
      lg:w-(--size-icon-heading-1-desktop)
      h-auto
      stroke-(length:--border-icon-base-width)
    `,
  },

  heading1Subpage: {
    baseClasses: `
      text-(--color-text-primary)
      text-(length:--text-heading-1-subpage-mobile-font-size)
      sm:text-(length:--text-heading-1-subpage-tablet-font-size)
      lg:text-(length:--text-heading-1-subpage-desktop-font-size)
      font-(--text-heading-1-subpage-font-weight)
    `,
    semanticTag: "h1",
    iconWrapperClasses: `
      ${iconWrapperClassesBase}
      bg-(--color-text-primary)
      w-(--size-icon-container-heading-1-subpage-mobile-diameter)
      sm:w-(--size-icon-container-heading-1-subpage-tablet-diameter)
      lg:w-(--size-icon-container-heading-1-subpage-desktop-diameter)
      h-(--size-icon-container-heading-1-subpage-mobile-diameter)
      sm:h-(--size-icon-container-heading-1-subpage-tablet-diameter)
      lg:h-(--size-icon-container-heading-1-subpage-desktop-diameter)
    `,
    iconClasses: `
      text-(--color-content-icon-stroke-default)
      w-(--size-icon-heading-1-subpage-mobile)
      sm:w-(--size-icon-heading-1-subpage-tablet)
      lg:w-(--size-icon-heading-1-subpage-desktop)
      h-auto
      stroke-(length:--border-icon-base-width)
    `,
  },

  heading2: {
    baseClasses: `
      text-(--color-text-heading)
      text-(length:--text-heading-2-mobile-font-size)
      sm:text-(length:--text-heading-2-tablet-font-size)
      lg:text-(length:--text-heading-2-desktop-font-size)
      font-(--text-heading-2-font-weight)
    `,
    semanticTag: "h2",
    iconWrapperClasses: `
      ${iconWrapperClassesBase}
      inline-flex items-center justify-center
      bg-(--color-text-primary)
      w-(--size-icon-container-heading-2-mobile-diameter)
      sm:w-(--size-icon-container-heading-2-tablet-diameter)
      lg:w-(--size-icon-container-heading-2-desktop-diameter)
      h-(--size-icon-container-heading-2-mobile-diameter)
      sm:h-(--size-icon-container-heading-2-tablet-diameter)
      lg:h-(--size-icon-container-heading-2-desktop-diameter)
      rounded-(--radius-icon-contaniner-base)
    `,
    iconClasses: `
      text-(--color-content-icon-stroke-default)
      w-(--size-icon-heading-2-mobile)
      sm:w-(--size-icon-heading-2-tablet)
      lg:w-(--size-icon-heading-2-desktop)
      h-auto
      stroke-(length:--border-icon-base-width)
    `,
  },

  heading3: {
    baseClasses: `
      text-(--color-text-heading)
      text-(length:--text-heading-3-mobile-font-size)
      sm:text-(length:--text-heading-3-tablet-font-size)
      lg:text-(length:--text-heading-3-desktop-font-size)
      font-(--text-heading-3-font-weight)
    `,
    semanticTag: "h3",
    iconWrapperClasses: `
      ${iconWrapperClassesBase}
      inline-flex items-center justify-center
      bg-(--color-text-primary)
      w-(--size-icon-container-heading-3-mobile-diameter)
      sm:w-(--size-icon-container-heading-3-tablet-diameter)
      lg:w-(--size-icon-container-heading-3-desktop-diameter)
      h-(--size-icon-container-heading-3-mobile-diameter)
      sm:h-(--size-icon-container-heading-3-tablet-diameter)
      lg:h-(--size-icon-container-heading-3-desktop-diameter)
      rounded-(--radius-icon-contaniner-base)
    `,
    iconClasses: `
      text-(--color-content-icon-stroke-default)
      w-(--size-icon-heading-3-mobile)
      sm:w-(--size-icon-heading-3-tablet)
      lg:w-(--size-icon-heading-3-desktop)
      h-auto
      stroke-(length:--border-icon-base-width)
    `,
  },

  bodyLarge: {
    baseClasses: `
      text-(--color-text-body)
      text-(length:--text-body-large-desktop-font-size)
      sm:text-(length:--text-body-large-tablet-font-size)
      lg:text-(length:--text-body-large-mobile-font-size)
      font-(--text-body-large-font-weight)
    `,
    semanticTag: "p",
    iconWrapperClasses: `
    `,
    iconClasses: `
    `,
  },

  bodyBase: {
    baseClasses: `
      text-(--color-text-body)
      text-(length:--text-body-base-desktop-font-size)
      sm:text-(length:--text-body-base-tablet-font-size)
      lg:text-(length:--text-body-base-mobile-font-size)
      font-(--text-body-base-font-weight)
    `,
    semanticTag: "p",
    iconWrapperClasses: `
    `,
    iconClasses: `
    `,
  },

  bodySmall: {
    baseClasses: `
      text-(--color-text-body)
      text-(length:--text-body-small-desktop-font-size)
      sm:text-(length:--text-body-small-tablet-font-size)
      lg:text-(length:--text-body-small-mobile-font-size)
      font-(--text-body-small-font-weight)
    `,
    semanticTag: "p",
    iconWrapperClasses: `
    `,
    iconClasses: `
    `,
  },

  captionDefault: {
    baseClasses: `
      text-(--color-text-body)
      text-(length:--text-caption-default-desktop-font-size)
      sm:text-(length:--text-caption-default-tablet-font-size)
      lg:text-(length:--text-caption-default-mobile-font-size)
      font-(--text-caption-default-font-weight)
    `,
    semanticTag: "p",
    iconWrapperClasses: `
    `,
    iconClasses: `
    `,
  },

  labelDefault: {
    baseClasses: `
      text-(--color-text-body)
      text-(length:--text-label-default-desktop-font-size)
      sm:text-(length:--text-label-default-tablet-font-size)
      lg:text-(length:--text-label-default-mobile-font-size)
      font-(--text-label-default-font-weight)
    `,
    semanticTag: "p",
    iconWrapperClasses: `
    `,
    iconClasses: `
    `,
  },






  

  
};
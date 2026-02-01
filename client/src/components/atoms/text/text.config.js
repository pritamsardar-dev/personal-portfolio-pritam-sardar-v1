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
    semanticTag: "h2",

    baseClasses: `
      text-(--color-text-heading)
      font-(--text-heading-2-font-weight)
    `,

    sizes: {
      default: `
        text-(length:--text-heading-2-mobile-font-size)
        sm:text-(length:--text-heading-2-tablet-font-size)
        lg:text-(length:--text-heading-2-desktop-font-size)
      `,

      compact: `
        text-(length:--text-heading-2-mobile-font-size)
      `,
    },

    iconWrapperClasses: {
      default: `
        ${iconWrapperClassesBase}
        bg-(--color-text-primary)
        w-(--size-icon-container-heading-2-mobile-diameter)
        sm:w-(--size-icon-container-heading-2-tablet-diameter)
        lg:w-(--size-icon-container-heading-2-desktop-diameter)
        h-(--size-icon-container-heading-2-mobile-diameter)
        sm:h-(--size-icon-container-heading-2-tablet-diameter)
        lg:h-(--size-icon-container-heading-2-desktop-diameter)
      `,

      compact: `
        ${iconWrapperClassesBase}
        bg-(--color-text-primary)
        w-(--size-icon-container-heading-2-mobile-diameter)
        h-(--size-icon-container-heading-2-mobile-diameter)
      `,
    },

    iconClasses: {
      default: `
        text-(--color-content-icon-stroke-default)
        w-(--size-icon-heading-2-mobile)
        sm:w-(--size-icon-heading-2-tablet)
        h-auto
      `,

      compact: `
        text-(--color-content-icon-stroke-default)
        w-(--size-icon-heading-2-mobile)
        h-auto
      `,
    },
  },


  heading3: {
    semanticTag: "h3",

    baseClasses: `
      text-(--color-text-heading)
      font-(--text-heading-3-font-weight)
    `,

    sizes: {
      default: `
        text-(length:--text-heading-3-mobile-font-size)
        sm:text-(length:--text-heading-3-tablet-font-size)
        lg:text-(length:--text-heading-3-desktop-font-size)
      `,

      compact: `
        text-(length:--text-heading-3-mobile-font-size)
      `,
    },

    iconWrapperClasses: {
      default: `
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

      compact: `
        ${iconWrapperClassesBase}
        inline-flex items-center justify-center
        bg-(--color-text-primary)
        w-(--size-icon-container-heading-3-mobile-diameter)
        h-(--size-icon-container-heading-3-mobile-diameter)
        rounded-(--radius-icon-contaniner-base)
      `,
    },

    iconClasses: {
      default: `
        text-(--color-content-icon-stroke-default)
        w-(--size-icon-heading-3-mobile)
        sm:w-(--size-icon-heading-3-tablet)
        lg:w-(--size-icon-heading-3-desktop)
        h-auto
      `,

      compact: `
        text-(--color-content-icon-stroke-default)
        w-(--size-icon-heading-3-mobile)
        h-auto
      `,
    },
  },


  bodyLarge: {
    semanticTag: "p",

    baseClasses: `
      text-(--color-text-body)
    `,

    sizes: {
      default: `
        text-(length:--text-body-large-mobile-font-size)
        sm:text-(length:--text-body-large-tablet-font-size)
        lg:text-(length:--text-body-large-desktop-font-size)
      `,

      compact: `
        text-(length:--text-body-large-mobile-font-size)
      `,
    },

    modifiers: {
      default: `
        font-(--text-body-large-font-weight)
      `,

      strong: `
        font-(--text-body-base-strong-font-weight)
      `,
    },

    iconWrapperClasses: {
      default: `
        ${iconWrapperClassesBase}
        inline-flex items-center justify-center
        bg-(--color-text-primary)
        w-(--size-icon-container-heading-4-mobile-diameter)
        sm:w-(--size-icon-container-heading-4-tablet-diameter)
        lg:w-(--size-icon-container-heading-4-desktop-diameter)
        h-(--size-icon-container-heading-4-mobile-diameter)
        sm:h-(--size-icon-container-heading-4-tablet-diameter)
        lg:h-(--size-icon-container-heading-4-desktop-diameter)
        rounded-(--radius-icon-contaniner-base)
      `,

      compact: `
        ${iconWrapperClassesBase}
        inline-flex items-center justify-center
        bg-(--color-text-primary)
        w-(--size-icon-container-heading-4-mobile-diameter)
        h-(--size-icon-container-heading-4-mobile-diameter)
        rounded-(--radius-icon-contaniner-base)
      `,
    },

    iconClasses: {
      default: `
        text-(--color-content-icon-stroke-default)
        w-(--size-icon-heading-4-mobile)
        sm:w-(--size-icon-heading-4-tablet)
        lg:w-(--size-icon-heading-4-desktop)
        h-auto
      `,

      compact: `
        text-(--color-content-icon-stroke-default)
        w-(--size-icon-heading-4-mobile)
        h-auto
      `,
    },
  },


  bodyBase: {
    semanticTag: "p",

    baseClasses: `
      text-(--color-text-body)
    `,

    sizes: {
      default: `
        text-(length:--text-body-base-mobile-font-size)
        sm:text-(length:--text-body-base-tablet-font-size)
        lg:text-(length:--text-body-base-desktop-font-size)
      `,
    },

    modifiers: {
      default: `
        font-(--text-body-base-font-weight)
      `,
      strong: `
        font-(--text-body-base-strong-font-weight)
      `,
    },

    iconWrapperClasses: {},
    iconClasses: {},
  },


  bodyBaseTag: {
    semanticTag: "span",

    baseClasses: `
      text-(--color-text-body)
      bg-(--color-tech-stack-tag-background-default)
      rounded-(--radius-tech-stack-tag)
      inline-flex items-center
    `,

    sizes: {
      default: `
        px-(--spacing-tech-stack-tag-mobile-padding-x)
        sm:px-(--spacing-tech-stack-tag-tablet-padding-x)
        lg:px-(--spacing-tech-stack-tag-desktop-padding-x)

        text-(length:--text-body-base-mobile-font-size)
        sm:text-(length:--text-body-base-tablet-font-size)
        lg:text-(length:--text-body-base-desktop-font-size)
      `,
    },

    modifiers: {
      default: `
        font-(--text-body-base-font-weight)
      `,
      strong: `
        font-(--text-body-base-strong-font-weight)
      `,
    },

    iconWrapperClasses: {},
    iconClasses: {},
  },


  bodySmall: {
    baseClasses: `
      text-(--color-text-body)
      text-(length:--text-body-small-mobile-font-size)
      sm:text-(length:--text-body-small-tablet-font-size)
      lg:text-(length:--text-body-small-desktop-font-size)
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
      text-(length:--text-caption-default-mobile-font-size)
      sm:text-(length:--text-caption-default-tablet-font-size)
      lg:text-(length:--text-caption-default-desktop-font-size)
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
      text-(length:--text-label-default-mobile-font-size)
      sm:text-(length:--text-label-default-tablet-font-size)
      lg:text-(length:--text-label-default-desktop-font-size)
      font-(--text-label-default-font-weight)
    `,
    semanticTag: "p",
    iconWrapperClasses: `
    `,
    iconClasses: `
    `,
  },
};
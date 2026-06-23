export const workItemsTextBlockLayoutConfig = {
  outerContainer: {
    collapsed: {
      default: `
        relative w-full flex flex-col flex-1 min-w-0
        sm:max-w-(--size-block-wrapper-tablet-max-width)
        lg:max-w-(--size-block-wrapper-desktop-max-width)
        px-(--spacing-text-container-mobile-padding-x)
      `,

      compact: `
        relative w-full flex flex-col flex-1 min-w-0
        px-(--spacing-text-container-mobile-padding-x)
      `,
    },

    expanded: `
      relative w-full flex flex-col
      sm:max-w-(--size-block-wrapper-single-tablet-max-width)
      lg:max-w-(--size-block-wrapper-single-desktop-max-width)
      px-(--spacing-text-container-mobile-padding-x)
    `,
  },

  textBlockHeading2ToHeading3: {
    base: `
      w-full flex flex-col min-w-0
    `,

    default: `
      gap-(--spacing-heading-2-heading-3-mobile-gap)
    `,

    compact: `
      gap-(--spacing-heading-2-heading-3-mobile-gap)
    `,
  },

  headerBlock: {
    base: `
      w-full flex
    `,

    default: `
      gap-(--spacing-block-block-mobile-gap)
      sm:gap-(--spacing-block-block-tablet-gap)
      lg:gap-(--spacing-block-block-desktop-gap)
    `,

    compact: `
      gap-(--spacing-block-block-mobile-gap)
    `,
  },

  textBlockToBlock: {
    base: `
      w-full flex flex-col
    `,

    default: `
      gap-(--spacing-block-block-mobile-gap)
      sm:gap-(--spacing-block-block-tablet-gap)
      lg:gap-(--spacing-block-block-desktop-gap)
    `,

    compact: `
      gap-(--spacing-block-block-mobile-gap)
    `,
  },

  textBlockItemToItem: {
    base: `
      w-full flex flex-col
    `,

    default: `
      gap-(--spacing-item-item-mobile-gap)
      sm:gap-(--spacing-item-item-tablet-gap)
      lg:gap-(--spacing-item-item-desktop-gap)
    `,

    compact: `
      gap-(--spacing-item-item-mobile-gap)
    `,
  },

  textBlockInteractiveToInteractive: {
    base: `
      w-full flex flex-wrap items-center
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

  textBlockHeading3ToBody: {
    base: `
      w-full flex flex-col
    `,

    default: `
      gap-(--spacing-heading-3-body-mobile-gap)
      sm:gap-(--spacing-heading-3-body-tablet-gap)
      lg:gap-(--spacing-heading-3-body-desktop-gap)
    `,

    compact: `
      gap-(--spacing-heading-3-body-mobile-gap)
    `,
  },

  tagContainer: {
    base: `
      flex min-w-0 scroll-smooth
      overflow-x-auto overflow-y-hidden
      u-scrollbar-hide
    `,

    default: `
      gap-x-(--spacing-interactive-interactive-mobile-gap-horizontal)
      sm:gap-x-(--spacing-interactive-interactive-tablet-gap-horizontal)
      lg:gap-x-(--spacing-interactive-interactive-desktop-gap-horizontal)
    `,

    compact: `
      gap-x-(--spacing-interactive-interactive-mobile-gap-horizontal)
    `,
  },

  cardContainerPaddingBottom: `
    pb-(--spacing-text-container-mobile-padding-x)
    sm:pb-(--spacing-text-container-tablet-padding-x)
    lg:pb-(--spacing-text-container-desktop-padding-x)
  `,
};

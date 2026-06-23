const contactInboxLayoutConfig = {
  page: `
        w-full h-[100dvh]
        flex flex-col
        lg:max-w-(--size-section-wrapper-desktop-max-width)
        px-(--spacing-section-wrapper-mobile-padding-x)
        sm:px-(--spacing-section-wrapper-tablet-padding-x)
        lg:px-(--spacing-section-wrapper-desktop-padding-x)
        gap-(--spacing-section-wrapper-mobile-gap)
        sm:gap-(--spacing-section-wrapper-tablet-gap)
        lg:gap-(--spacing-section-wrapper-desktop-gap)
    `,

  shell: `
        w-full h-full
        grid grid-cols-1
        lg:grid-cols-[240px_minmax(0,1fr)]
        overflow-hidden
        border border-(--color-card-wrapper-stroke)
        rounded-(--radius-card-wrapper-base)
        bg-(--color-card-wrapper-background)
        shadow-(--shadow-card-wrapper)
        backdrop-blur-(--effect-card-wrapper-background-blur)
    `,

  // Left nav panel
  sidebar: `
        flex flex-col
        min-h-0
        bg-(--color-navigation-panel-mobile-background)
    `,

  // Right main panel
  detailsPanel: `
        hidden lg:flex
        flex-col
        min-h-0
        bg-(--color-card-wrapper-background)
    `,

  toolbar: `
        flex flex-wrap items-center
        gap-2
        px-4 pt-4 pb-2
    `,

  navFilterList: `
        flex flex-col
        gap-1
        px-3
        py-2
    `,

  navFilterItem: `
        flex items-center gap-3
        w-full
        px-3 py-2
        rounded-(--radius-card-wrapper-base)
        text-start
        transition-all duration-200
        hover:bg-(--color-card-wrapper-header-fill)
        cursor-pointer
    `,

  navFilterItemActive: `
        bg-(--color-card-wrapper-header-fill)
        font-semibold
    `,

  messageList: `
        flex flex-col
        min-h-0
        overflow-y-auto
        u-custom-scrollbar
    `,

  messageCard: `
        relative
        flex flex-col
        gap-2
        px-(--spacing-card-wrapper-education-mobile-padding-x)
        py-4
        border border-(--color-card-wrapper-stroke)
        rounded-(--radius-card-wrapper-base)
        bg-(--color-card-wrapper-background)
        shadow-(--shadow-card-wrapper)
        transition-all duration-200
        hover:bg-(--color-card-wrapper-header-fill)
        cursor-pointer
        mx-4
        mb-2
    `,

  selectedMessageCard: `
        bg-(--color-card-wrapper-header-fill)
    `,

  unreadIndicator: `
        absolute left-0 top-0
        h-full w-1
        rounded-l-(--radius-card-wrapper-base)
        bg-(--color-brand-primary)
    `,

  detailsContent: `
        flex flex-col
        min-h-0
        overflow-y-auto
        gap-6
        px-(--spacing-card-wrapper-education-mobile-padding-x)
        py-(--spacing-card-wrapper-education-mobile-padding-y)
        sm:px-(--spacing-card-wrapper-education-tablet-padding-x)
        lg:px-(--spacing-card-wrapper-education-desktop-padding-x)
        u-custom-scrollbar
    `,

  detailsActions: `
        flex flex-wrap
        gap-3
        pt-2
    `,
};

export default contactInboxLayoutConfig;

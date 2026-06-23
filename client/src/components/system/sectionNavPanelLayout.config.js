export const sectionNavPanelLayoutConfig = {
  // Panel hugs the left edge; left-[1px]/[2px]/[3px] keeps it within the margin space
  panelContainer: `
    fixed z-(--z-sticky)
    left-[1px] sm:left-[2px] lg:left-[3px]
    top-1/2 -translate-y-1/2
    flex flex-col items-start
    gap-1.5 sm:gap-2
    select-none
  `,

  navItem: `
    flex flex-row items-center justify-start gap-2
    cursor-pointer
    group
  `,

  // Icon sizes: 14px mobile (16px margin), 28px tablet (32px), 36px desktop (64px)
  iconWrapper: `
    flex-shrink-0 inline-flex items-center justify-center
    w-5 h-5
    sm:w-7 sm:h-7
    lg:w-9 lg:h-9
    rounded-(--radius-icon-button-overlay)
    bg-(--color-card-wrapper-fill)
    border-(length:--border-card-wrapper-base-width)
    border-(--color-card-wrapper-stroke)
    shadow-(--shadow-card-wrapper)
    backdrop-blur-(--effect-card-wrapper-background-blur)
    transition-all duration-300 ease-in-out
    text-(--color-text-body)
    group-hover:bg-(--color-button-overlay-background-hover)
    group-hover:scale-105
    u-focus-visible-outline
  `,

  // Use ! to force white icon color on the solid brand bg
  iconWrapperActive: `
    !bg-(--color-text-primary)
    border-transparent
    !text-(--color-button-primary-text-default)
    scale-105
    shadow-(--shadow-card-wrapper)
    group-hover:!bg-(--color-text-primary)
    group-hover:scale-110
  `,

  iconStyle: `
    w-[65%] h-[65%]
    stroke-[1.5px]
    transition-none
  `,

  label: `
    max-w-0 opacity-0
    overflow-hidden whitespace-nowrap
    transition-all duration-300 ease-in-out
    text-(--color-text-body)
    text-(length:--text-label-default-mobile-font-size)
    sm:text-(length:--text-label-default-tablet-font-size)
    lg:text-(length:--text-label-default-desktop-font-size)
    font-(--text-label-default-font-weight)
    leading-none
    bg-(--color-card-wrapper-fill)
    border-(length:--border-card-wrapper-base-width)
    border-(--color-card-wrapper-stroke)
    shadow-(--shadow-card-wrapper)
    rounded-(--radius-button-tag-clickable)
    px-(--spacing-button-overlay-mobile-padding-x)
    py-(--spacing-button-overlay-mobile-padding-y)
    backdrop-blur-(--effect-card-wrapper-background-blur)
  `,

  labelActive: `
    text-(--color-text-primary)
    font-(--text-body-base-strong-font-weight)
  `,

  labelExpanded: `
    max-w-[200px] opacity-100
  `,
};
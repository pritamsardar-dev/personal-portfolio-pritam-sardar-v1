// Parent container (label + field + error)
export const baseParentField = `
  flex flex-col w-full
  gap-(--spacing-form-field-stack-mobile-gap)
  sm:gap-(--spacing-form-field-stack-tablet-gap)
  lg:gap-(--spacing-form-field-stack-desktop-gap)
`;

// Input element itself
export const baseField = `
  w-full
  transition-all duration-250
  outline-none
  bg-transparent

`;

// Base label text (shared)
export const baseLabelText = `
  text-(--color-text-body)
  text-(length:--text-body-small-mobile-font-size)
  sm:text-(length:--text-body-small-tablet-font-size)
  lg:text-(length:--text-body-small-desktop-font-size)
  font-(--text-body-small-font-weight)
`;

// Base error text (shared)
export const baseErrorText = `
  text-(--color-form-field-border-warning)
  text-(length:--text-body-small-mobile-font-size)
  sm:text-(length:--text-body-small-tablet-font-size)
  lg:text-(length:--text-body-small-desktop-font-size)
  font-(--text-body-small-font-weight)
`;

// Base icon (shared)
export const baseIcon = `
  flex items-center pointer-events-none
`;

export const variantMap = {
  input: {
    baseClasses: `
      border-(length:--border-form-field-width)
      border-(--color-form-field-border-default)
      hover:border-(--color-form-field-border-focus)
      focus:ring-(length:--border-form-field-focus-width)
      focus:ring-(--color-form-field-border-focus)

      h-(--size-form-field-single-line-mobile-height)
      sm:h-(--size-form-field-single-line-tablet-height)
      lg:h-(--size-form-field-single-line-desktop-height)

      px-(--spacing-form-field-mobile-padding-x)
      sm:px-(--spacing-form-field-tablet-padding-x)
      lg:px-(--spacing-form-field-desktop-padding-x)

      py-(--spacing-form-field-mobile-padding-y)
      sm:py-(--spacing-form-field-tablet-padding-y)
      lg:py-(--spacing-form-field-desktop-padding-y)

      rounded-(--radius-form-field-base)
    
      text-(--color-text-body)
      text-(length:--text-body-large-mobile-font-size)
      sm:text-(length:--text-body-large-tablet-font-size)
      lg:text-(length:--text-body-large-desktop-font-size)
      font-(--text-body-large-font-weight)

      placeholder:text-(--color-text-placeholder-default)
      placeholder:opacity-100
    `,

    errorClasses: `
      border-(--color-form-field-border-warning)
      focus:ring-(--color-form-field-border-warning)
      hover:border-(--color-form-field-border-warning)
    `,

    labelClasses: baseLabelText,

    iconClasses: baseIcon,

    errorTextClasses: baseErrorText,
  },

  email: {
    baseClasses: `
      border-(length:--border-form-field-width)
      border-(--color-form-field-border-default)
      hover:border-(--color-form-field-border-focus)
      focus:ring-(length:--border-form-field-focus-width)
      focus:ring-(--color-form-field-border-focus)

      h-(--size-form-field-single-line-mobile-height)
      sm:h-(--size-form-field-single-line-tablet-height)
      lg:h-(--size-form-field-single-line-desktop-height)

      px-(--spacing-form-field-mobile-padding-x)
      sm:px-(--spacing-form-field-tablet-padding-x)
      lg:px-(--spacing-form-field-desktop-padding-x)

      py-(--spacing-form-field-mobile-padding-y)
      sm:py-(--spacing-form-field-tablet-padding-y)
      lg:py-(--spacing-form-field-desktop-padding-y)

      rounded-(--radius-form-field-base)
    
      text-(--color-text-body)
      text-(length:--text-body-large-mobile-font-size)
      sm:text-(length:--text-body-large-tablet-font-size)
      lg:text-(length:--text-body-large-desktop-font-size)
      font-(--text-body-large-font-weight)

      placeholder:text-(--color-text-placeholder-default)
      placeholder:opacity-100
    `,

    errorClasses: `
      border-(--color-form-field-border-warning)
      focus:ring-(--color-form-field-border-warning)
      hover:border-(--color-form-field-border-warning)
    `,

    labelClasses: baseLabelText,

    iconClasses: baseIcon,

    errorTextClasses: baseErrorText,
  },

  password: {
    baseClasses: `
      border-(length:--border-form-field-width)
      border-(--color-form-field-border-default)
      hover:border-(--color-form-field-border-focus)
      focus:ring-(length:--border-form-field-focus-width)
      focus:ring-(--color-form-field-border-focus)

      h-(--size-form-field-single-line-mobile-height)
      sm:h-(--size-form-field-single-line-tablet-height)
      lg:h-(--size-form-field-single-line-desktop-height)

      px-(--spacing-form-field-mobile-padding-x)
      sm:px-(--spacing-form-field-tablet-padding-x)
      lg:px-(--spacing-form-field-desktop-padding-x)

      py-(--spacing-form-field-mobile-padding-y)
      sm:py-(--spacing-form-field-tablet-padding-y)
      lg:py-(--spacing-form-field-desktop-padding-y)

      rounded-(--radius-form-field-base)

      text-(--color-text-body)
      text-(length:--text-body-large-mobile-font-size)
      sm:text-(length:--text-body-large-tablet-font-size)
      lg:text-(length:--text-body-large-desktop-font-size)
      font-(--text-body-large-font-weight)

      placeholder:text-(--color-text-placeholder-default)
      placeholder:opacity-100
    `,

    errorClasses: `
      border-(--color-form-field-border-warning)
      focus:ring-(--color-form-field-border-warning)
      hover:border-(--color-form-field-border-warning)
    `,

    labelClasses: baseLabelText,

    iconClasses: baseIcon,

    errorTextClasses: baseErrorText,
  },

  textarea: {
    baseClassesWrapper: `
      relative w-full 
      border-(length:--border-form-field-width)
      border-(--color-form-field-border-default)
      hover:border-(--color-form-field-border-focus)
      focus-within:ring-(length:--border-form-field-focus-width)
      focus-within:ring-(--color-form-field-border-focus)

      px-(--spacing-form-field-mobile-padding-x)
      sm:px-(--spacing-form-field-tablet-padding-x)
      lg:px-(--spacing-form-field-desktop-padding-x)

      py-(--spacing-form-field-mobile-padding-y)
      sm:py-(--spacing-form-field-tablet-padding-y)
      lg:py-(--spacing-form-field-desktop-padding-y)
  
      rounded-(--radius-form-field-base)
      transition all duration-250
    `,

    baseClasses: `
      w-full
      resize-none outline-none
      min-h-(--size-form-field-expandable-mobile-min-height)
      sm:min-h-(--size-form-field-expandable-tablet-min-height)
      lg:min-h-(--size-form-field-expandable-desktop-min-height)

      max-h-(--size-form-field-expandable-mobile-max-height)
      sm:max-h-(--size-form-field-expandable-tablet-max-height)
      lg:max-h-(--size-form-field-expandable-desktop-max-height)

      text-(--color-text-body)
      text-(length:--text-body-large-mobile-font-size)
      sm:text-(length:--text-body-large-tablet-font-size)
      lg:text-(length:--text-body-large-desktop-font-size)
      font-(--text-body-large-font-weight)

      placeholder:text-(--color-text-placeholder-default)
      placeholder:opacity-100
      u-custom-scrollbar 
    `,

    errorClasses: `
      border-(--color-form-field-border-warning)
      focus-within:ring-(--color-form-field-border-warning)
      hover:border-(--color-form-field-border-warning)
    `,

     counterClasses: `
      absolute bottom-0 right-1 opacity-70 pointer-events-none
    `,

    labelClasses: baseLabelText,

    iconClasses: baseIcon,

    errorTextClasses: baseErrorText,
  },

  textareaNative: {
    baseClasses: `
      resize-none
      border-(length:--border-form-field-width)
      border-(--color-form-field-border-default)
      hover:border-(--color-form-field-border-focus)
      focus:ring-(length:--border-form-field-focus-width)
      focus:ring-(--color-form-field-border-focus)

      min-h-(--size-form-field-expandable-mobile-min-height)
      sm:min-h-(--size-form-field-expandable-tablet-min-height)
      lg:min-h-(--size-form-field-expandable-desktop-min-height)

      max-h-(--size-form-field-expandable-mobile-max-height)
      sm:max-h-(--size-form-field-expandable-tablet-max-height)
      lg:max-h-(--size-form-field-expandable-desktop-max-height)
      min-w-20

      px-(--spacing-form-field-mobile-padding-x)
      sm:px-(--spacing-form-field-tablet-padding-x)
      lg:px-(--spacing-form-field-desktop-padding-x)

      py-(--spacing-form-field-mobile-padding-y)
      sm:py-(--spacing-form-field-tablet-padding-y)
      lg:py-(--spacing-form-field-desktop-padding-y)

      rounded-(--radius-form-field-base)

      text-(--color-text-body)
      text-(length:--text-body-large-mobile-font-size)
      sm:text-(length:--text-body-large-tablet-font-size)
      lg:text-(length:--text-body-large-desktop-font-size)
      font-(--text-body-large-font-weight)

      placeholder:text-(--color-text-placeholder-default)
      placeholder:opacity-100

      u-custom-scrollbar
     
    `,

    errorClasses: `
      border-(--color-form-field-border-warning)
      focus:ring-(--color-form-field-border-warning)
    `,

    labelClasses: baseLabelText,

    iconClasses: baseIcon,

    errorTextClasses: baseErrorText,
  },
};

// Custom select element
export const customSelectClasses = {
  wrapper: `
    w-full relative
    text-(length:--text-body-large-mobile-font-size)
    sm:text-(length:--text-body-large-tablet-font-size)
    lg:text-(length:--text-body-large-desktop-font-size)
    font-(--text-body-large-font-weight)
  `,
  selectedBoxParent: `
    group relative cursor-pointer
  `,
  selectedBox: `
    group flex justify-between items-center
    whitespace-nowrap 

    gap-(--spacing-select-content-mobile-gap)
    sm:gap-(--spacing-select-content-tablet-gap)
    lg:gap-(--spacing-select-content-desktop-gap)

    border-(length:--border-form-field-width)
    border-(--color-select-border-defualt)

    focus:border-[var(--color-select-border-focus)]

    hover:bg-(--color-select-background-hover)
    focus:bg-(--color-select-background-focus)

    h-(--size-select-mobile-height)
    sm:h-(--size-select-tablet-height)
    lg:h-(--size-select-desktop-height)
    px-(--spacing-select-padding-x)
    rounded-(--radius-form-field-base)

    u-focus-visible-outline
  `,
  selectedBoxTextDefault: `
    text-(--color-text-placeholder-default)
    group-hover:text-(--color-select-text-contrast-on-brand)
  `,
  selectedBoxTextSelected: `
    text-(--color-select-text-defualt)
    group-hover:text-(--color-select-text-contrast-on-brand)
  `,
  iconClasses: `
    transform transition-transform duration-250
    fill-(--color-icon-dropdown-defualt)
    group-hover:fill-(--color-icon-dropdown-hover)
    group-focus:fill-(--color-icon-dropdown-hover)
    w-(--size-icon-button-element-mobile-diameter)
    sm:w-(--size-icon-button-element-tablet-diameter)
    lg:w-(--size-icon-button-element-desktop-diameter)
    h-auto
  `,
  iconClassesOpened: `
    rotate-180
  `,
  dropdownList: `
    absolute z-10 overflow-y-auto w-full h-auto
    border-(length:--border-form-field-width)
    border-(--color-select-border-defualt)
    bg-(--color-select-background-default)
    
    max-h-30
    sm:max-h-(--size-select-tablet-max-width)
    lg:max-h-15
    shadow-(--shadow-select-dropdown)
    rounded-(--radius-form-field-base)

    u-custom-scrollbar
  `,
  option: `
    flex items-center cursor-pointer whitespace-nowrap
    hover:bg-(--color-select-background-hover)
    focus:bg-(--color-select-background-focus)

    text-(--color-select-text-defualt)
    hover:text-(--color-select-text-contrast-on-brand)

    h-(--size-select-mobile-height)
    sm:h-(--size-select-tablet-height)
    lg:h-(--size-select-desktop-height)

    px-(--spacing-select-padding-x)

    u-focus-visible-bg
  `,
  selectedOption: `
    bg-(--color-select-background-focus)
    text-(--color-select-text-contrast-on-brand)
  `,
};

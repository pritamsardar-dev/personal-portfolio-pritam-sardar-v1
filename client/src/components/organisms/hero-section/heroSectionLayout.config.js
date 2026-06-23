export const heroSectionShellClasses = `
    overflow-hidden items-stretch justify-center
    w-full flex flex-col sm:flex-row lg:flex-row 
    [&>*:first-child]:sm:flex-[3] [&>*:first-child]:lg:flex-[3]
    [&>*:last-child]:sm:flex-[2] [&>*:last-child]:lg:flex-[2]

    sm:max-w-(--size-section-wrapper-tablet-max-width)
    lg:max-w-(--size-section-wrapper-desktop-max-width)

    px-(--spacing-section-wrapper-mobile-padding-x)
    sm:px-(--spacing-section-wrapper-tablet-padding-x)
    lg:px-(--spacing-section-wrapper-desktop-padding-x)

    gap-(--spacing-section-wrapper-mobile-gap)
    sm:gap-(--spacing-section-wrapper-tablet-gap)
    lg:gap-(--spacing-section-wrapper-desktop-gap)
`;
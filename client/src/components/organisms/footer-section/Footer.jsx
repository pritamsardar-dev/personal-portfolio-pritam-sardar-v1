import React from "react";
import clsx from "clsx";
import Logo from "../../atoms/logo/Logo";
import NavigationList from "../../../molecules/navigationlist/NavigationList";
import ThemeToggle from "../../atoms/toggle/ThemeToggle";
import Button from "../../atoms/button/Button";
import Text from "../../atoms/text/Text";

const footerOuterShellClasses = `
    relative overflow-hidden
    w-full flex flex-col items-center
    bg-(--color-footer-section-background)
    max-w-(--size-navigation-header-mobile-width)
    sm:max-w-(--size-navigation-header-tablet-width)
    lg:max-w-(--size-navigation-header-desktop-width)

    gap-(--spacing-block-block-mobile-gap)
    sm:gap-(--spacing-block-block-tablet-gap)
    lg:gap-(--spacing-block-block-desktop-gap)

    px-(--spacing-navigation-header-padding-x-mobile)
    sm:px-(--spacing-navigation-header-padding-x-tablet)
    lg:px-(--spacing-navigation-header-padding-x-desktop)

    py-(--spacing-section-wrapper-mobile-padding-y)
    sm:py-(--spacing-section-wrapper-tablet-padding-y)
    lg:py-(--spacing-section-wrapper-desktop-padding-y)

    rounded-(--radius-header-base)
`;

const footerInnerShellClasses = `
    w-full flex flex-col sm:flex-row lg:flex-row
    gap-(--spacing-section-wrapper-mobile-gap)
    sm:gap-(--spacing-section-wrapper-tablet-gap)
    lg:gap-(--spacing-section-wrapper-desktop-gap)

    px-(--spacing-text-container-mobile-padding-x)
    sm:px-(--spacing-text-container-tablet-padding-x)
    lg:px-(--spacing-text-container-desktop-padding-x)
`;

const headingToListClasses = `
    w-full flex flex-col
    gap-(--spacing-footer-heading-list-mobile-gap)
    sm:gap-(--spacing-footer-heading-list-tablet-gap)
    lg:gap-(--spacing-footer-heading-list-desktop-gap)
`;

const ListToListClasses = `
    w-full flex flex-col
    gap-(--spacing-footer-list-list-mobile-gap)
    sm:gap-(--spacing-footer-list-list-tablet-gap)
    lg:gap-(--spacing-footer-list-list-desktop-gap)
`;

const Footer = ({
    navigationItems = {items: []},
    brandTagline = {},
    quickLinksHeading = {},
    contactLinksHeading = {},
    contactLinks = [],
    availabilityHeading = {},
    availabilityTagline = {},
    copyright,
    className,
    ...props
}) => {

    return (
        <footer className={clsx(
                    footerOuterShellClasses,
                    className
                )}
            {...props}
            >

            <div className={clsx(footerInnerShellClasses)}>
                <div className={clsx(headingToListClasses)}>
                    <Logo />
                    <Text {...brandTagline} />
                </div>

                <div className={clsx(headingToListClasses)}>
                    <Text {...quickLinksHeading} />
                    <nav>
                        <NavigationList {...navigationItems} />
                    </nav>
                </div>

                <div className={clsx(headingToListClasses)}>
                    <Text {...contactLinksHeading} />
                    <ul className={clsx(ListToListClasses)}>
                        {contactLinks.map((item) => (
                            <li key={item.id}>
                                <Button {...item} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={clsx(headingToListClasses)}>
                    <Text {...availabilityHeading} />
                    <Text {...availabilityTagline} />
                </div>
            </div>

            <hr
            aria-hidden="true"
            className={clsx(" w-full border-none h-px bg-(--color-divider-background)")}
            />

            <Text {...copyright} />
        </footer>
    );
};

export default Footer;
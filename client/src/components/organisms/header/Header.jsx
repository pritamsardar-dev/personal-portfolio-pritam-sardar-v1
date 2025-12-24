import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import Logo from "../../atoms/logo/Logo";
import NavigationList from "../../molecules/navigationlist/NavigationList";
import ThemeToggle from "../../atoms/toggle/ThemeToggle";
import Button from "../../atoms/button/Button";
import { 
    HamburgerIcon,
    HamburgerIconType,
    CrossFilledIcon,
    CrossFilledIconType
     
} from "../../../assets/icons/system";
import useMediaQuery from "../../../hooks/useMediaQuery";

const headerShellClasses = `
    relative sticky top-0 z-50
    w-full flex items-center
    bg-(--color-app-background)
    shadow-(--shadow-select-bottom)
    sm:max-w-(--size-navigation-header-tablet-width)
    lg:max-w-(--size-navigation-header-desktop-width)
    sm:min-h-(--size-navigation-header-tablet-height)
    lg:min-h(--size-navigation-header-desktop-height)
    sm:gap-(--spacing-navigation-link-group-tablet-gap)
    lg:gap-(--spacing-navigation-link-group-desktop-gap)
    sm:px-(--spacing-navigation-header-padding-x-tablet)
    lg:px-(--spacing-navigation-header-padding-x-desktop)
    rounded-(--radius-header-base)
`;

const headerNavClasses = `
    w-full flex flex-row items-center
    sm:gap-(--spacing-navigation-link-group-tablet-gap)
    lg:gap-(--spacing-navigation-link-group-desktop-gap)
`;

const mobileheaderTopRowClasses = `
    w-full flex justify-between items-center
`;

const mobileHeaderShellClasses = `
    relative sticky top-0 z-50
    w-full flex flex-col justify-center items-start
    bg-(--color-card-wrapper-fill)
    border border-(--color-card-wrapper-stroke) 
    shadow-(--shadow-card-wrapper)
    px-(--spacing-closet-panel-mobile-padding-x)
    py-(--spacing-closet-panel-mobile-padding-x)
    rounded-(--radius-closet-panel-mobile)
    transform-gpu
    will-change-transform
    contain-layout contain-paint
`;

const mobileMenuPanelClasses = `
    flex flex-col items-start
    gap-(--spacing-closet-panel-mobile-section-gap)
    transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
`;

const Header = ({
    navigationItems = {
        variant: "", 
        items: [], 
        splitLastItem: true, 
        showCenterGroup: true
    },
    showThemeToggle = true,
    className,
    ...props
}) => {
    const isMobile = useMediaQuery("(max-width: 639px)");

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const mobileHeaderRef = useRef(null);

    const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isMobile || !isMobileMenuOpen) return;

    const handlePointerDown = (event) => {
        if (!mobileHeaderRef.current) return;

        if (!mobileHeaderRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
        document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMobile, isMobileMenuOpen]);

    return (
        <header className={clsx(
                    isMobile ? mobileHeaderShellClasses :
                    headerShellClasses,
                    className
                )}
            {...props}
            ref={mobileHeaderRef}
            >

            <div className={clsx(isMobile && mobileheaderTopRowClasses)}>
                <Logo />

                {isMobile && (
                    <Button
                        variant="iconOnlyCircular"
                        iconLeft={isMobileMenuOpen ? CrossFilledIcon : HamburgerIcon}
                        iconType={isMobileMenuOpen ? CrossFilledIconType : HamburgerIconType}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="primary-navigation"
                    />
                )}
            </div>

            {!isMobile && (
                <nav 
                aria-label="Primary navigation"
                className={clsx(headerNavClasses)}
                >
                    <NavigationList {...navigationItems} />
    
                    {showThemeToggle && <ThemeToggle />}
                </nav>
            )}
            
            {isMobile && (
                <nav
                    id="primary-navigation"
                    aria-label="Primary navigation"
                    className={clsx(
                        mobileMenuPanelClasses,
                        isMobileMenuOpen && `
                            pt-(--spacing-closet-panel-mobile-padding-top)
                            pb-(--spacing-closet-panel-mobile-padding-bottom)
                        `,
                        isMobileMenuOpen ? "opacity-100 max-h-[800px]" 
                        : "opacity-0 max-h-0 pointer-events-none"
                    )}
                >
                    <NavigationList {...navigationItems} />
                    
                    {showThemeToggle && <ThemeToggle />}
                </nav>
            )}
        </header>
    );
};

export default Header;
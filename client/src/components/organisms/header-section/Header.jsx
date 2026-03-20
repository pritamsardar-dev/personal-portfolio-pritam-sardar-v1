import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import Logo from "../../atoms/logo/Logo";
import NavigationList from "../../molecules/navigation-list/NavigationList";
import ThemeToggle from "../../atoms/toggle/ThemeToggle";
import Button from "../../atoms/button/Button";
import useRefs from "../../../hooks/useRefs";

import { 
    HamburgerIcon,
    HamburgerIconType,
    CrossFilledIcon,
    CrossFilledIconType
     
} from "../../../assets/icons/system";
import useMediaQuery from "../../../hooks/useMediaQuery";

const headerShellClasses = `
    relative sticky top-0 z-(--z-dropdown)
    w-[95%] flex items-center
    border border-(--color-card-wrapper-stroke)
    bg-(--color-card-wrapper-fill)
    shadow-(--shadow-card-wrapper)

    backdrop-blur-(--effect-card-wrapper-background-blur)
    sm:max-w-(--size-navigation-header-tablet-width)
    lg:max-w-(--size-navigation-header-desktop-width)
    sm:min-h-(--size-navigation-header-tablet-height)
    lg:min-h-(--size-navigation-header-desktop-height)
    sm:gap-(--spacing-navigation-link-group-tablet-gap)
    lg:gap-(--spacing-navigation-link-group-desktop-gap)
    sm:px-(--spacing-navigation-header-padding-x-tablet)
    lg:px-(--spacing-navigation-header-padding-x-desktop)
    rounded-4xl
    sm:py-(--spacing-navigation-header-padding-y-tablet)
    lg:py-(--spacing-navigation-header-padding-y-desktop)
`;

const headerNavClasses = `
    w-full flex flex-row items-center 
    sm:gap-(--spacing-navigation-link-group-tablet-gap)
    lg:gap-(--spacing-navigation-link-group-desktop-gap)
`;

const mobileheaderTopRowClasses = `
    relative z-(--z-sticky)
    w-full flex justify-between items-center 
`;

const mobileHeaderShellClasses = `
    relative sticky overflow-visible z-(--z-dropdown)
    top-0 mb-2  
    w-[95%] flex flex-col justify-center items-start
    shadow-(--shadow-card-wrapper)
    px-(--spacing-closet-panel-mobile-padding-x)
    py-(--spacing-closet-panel-mobile-padding-y)
    rounded-4xl 
`;

const mobileMenuPanelClasses = `
    absolute z-(--z-dropdown)
    w-full flex flex-col items-start
    left-0 right-0 top-0 
    pt-(--spacing-closet-panel-mobile-padding-top)
    bg-(--color-card-wrapper-fill)
    border border-(--color-card-wrapper-stroke) 
    shadow-(--shadow-card-wrapper)
    px-(--spacing-closet-panel-mobile-padding-x)
    py-(--spacing-closet-panel-mobile-padding-y)
    rounded-4xl
    overflow-hidden
    gap-(--spacing-closet-panel-mobile-section-gap)
    transition-[max-height] duration-600 ease-out
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
    const [isVisible, setIsVisible] = useState(true);
    const [topOffset, setTopOffset] = useState("1rem"); // top-4 default
    const lastScrollY = useRef(0);

    const shouldShowHeader = isMobileMenuOpen || isVisible;

    const { formToggleInProgressRef } = useRefs();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
        // setIsSticky((prev) => !prev);
    };

    // Pass this callback from Header → NavigationList → NavigationItem
    const handleNavigationClick = () => {
        setIsMobileMenuOpen(false);
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

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (formToggleInProgressRef?.current) return; // ignore scroll during toggle
            const currentScrollY = window.scrollY;

            // Auto-hide header logic
            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
            setIsVisible(false);
            setTopOffset("0");
            } else {
            setIsVisible(true);
            setTopOffset("0");
            }

            // Reset top at page start
            if (currentScrollY === 0) {
            setTopOffset("1rem");
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobileMenuOpen, formToggleInProgressRef]);

    return (
        <header 
            className={clsx(
                isMobile ? mobileHeaderShellClasses : headerShellClasses,

                isMobile && [
                    isMobileMenuOpen
                        ? "bg-(--color-navigation-panel-mobile-background)"
                        : "bg-(--color-card-wrapper-fill) backdrop-blur-(--effect-card-wrapper-background-blur)",

                    "border",
                    isMobileMenuOpen
                        ? "border-transparent"
                        : "border-(--color-card-wrapper-stroke)",
                ],

                !isMobileMenuOpen &&
                    "transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]",

                shouldShowHeader ? "translate-y-0" : "-translate-y-[120%]",

                className
            )}
            style={{ 
                top: topOffset,
            }}
            {...props}
            ref={mobileHeaderRef}
            >

            <div className={clsx(isMobile && mobileheaderTopRowClasses)}>
                <Logo variant="header" />

                {isMobile && (
                    <Button
                        variant="iconOnlyCircular"
                        iconLeft={isMobileMenuOpen ? CrossFilledIcon : HamburgerIcon}
                        iconLeftType={isMobileMenuOpen ? CrossFilledIconType : HamburgerIconType}
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
                            backdrop-blur-(--effect-card-wrapper-background-blur)
                        `,
                        isMobileMenuOpen 
                            ? "opacity-100 max-h-[100vh]"
                            : "opacity-0 max-h-0 pointer-events-none"
                    )}
                >
                    <NavigationList 
                        {...navigationItems}
                        onItemClick={handleNavigationClick}
                    />
                    
                    {showThemeToggle && <ThemeToggle onClick={handleNavigationClick} />}
                </nav>
            )}
        </header>
    );
};

export default Header;
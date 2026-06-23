import React, { useState, useEffect, useRef } from "react";

import clsx from "clsx";
import { useNavigate, useLocation } from "react-router-dom";

import useRefs from "../../../hooks/useRefs";
import useAdminEditor from "../../../hooks/useAdminEditor";
import useMediaQuery from "../../../hooks/useMediaQuery";

import {
  MenuDeepIcon,
  MenuDeepIconType,
  XIcon,
  XIconType,
  EditIcon,
  EditIconType,
  LogoutIcon,
  LogoutIconType,
  MailIcon,
} from "../../../assets/icons/system";

import Logo from "../../atoms/logo/Logo";
import ThemeToggle from "../../atoms/toggle/ThemeToggle";
import Button from "../../atoms/button/Button";
import NavigationList from "../../molecules/navigation-list/NavigationList";
import NavigationListSkeleton from "./skeletons/NavigationListSkeleton";

const headerShellClasses = `
    relative sticky top-0 z-(--z-dropdown) sm:flex-wrap lg:flex-nowrap 
    w-[96%] flex items-center
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
    sm:px-5
    rounded-(--radius-2xl-plus)
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
    relative sticky overflow-visible  
    top-0 mb-2  
    w-[95%] flex flex-col justify-center items-start
    shadow-(--shadow-card-wrapper)
    px-(--spacing-closet-panel-mobile-padding-x)
    py-(--spacing-closet-panel-mobile-padding-y)
    rounded-(--radius-2xl-plus)
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
    rounded-(--radius-2xl-plus)
    overflow-hidden
    gap-(--spacing-closet-panel-mobile-section-gap)
    transition-[max-height] duration-600 ease-out
`;

const Header = ({
  data = {},
  isLoading,
  className,
  isAuthenticated,
  onLogout,
  unreadMessagesCount,
  ...props
}) => {
  const navigationItems = data?.navigationItems || {
    variant: "",
    items: [],
    splitLastItem: true,
    showCenterGroup: true,
  };

  const showThemeToggle = data?.showThemeToggle ?? true;

  const isMobile = useMediaQuery("(max-width: 639px)");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileHeaderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [topOffset, setTopOffset] = useState("1rem");
  const lastScrollY = useRef(0);

  const { setIsEditorOpen, isEditorOpen } = useAdminEditor();
  const navigate = useNavigate();
  const location = useLocation();

  const shouldShowHeader = isMobileMenuOpen || isVisible;
  const isInboxPage = location.pathname === "/admin/inbox";

  const { formToggleInProgressRef } = useRefs();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close mobile menu when a nav item is clicked
  const handleNavigationClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on outside tap
  useEffect(() => {
    if (!isMobile || !isMobileMenuOpen) return;

    const handlePointerDown = (event) => {
      if (!mobileHeaderRef.current) return;
      if (!mobileHeaderRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isMobile, isMobileMenuOpen]);

  // Lock body scroll while mobile menu is open
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

  // Auto hide header on scroll down, reveal on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (formToggleInProgressRef?.current) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
        setTopOffset("0");
      } else {
        setIsVisible(true);
        setTopOffset("0");
      }

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
      ref={mobileHeaderRef}
      className={clsx(
        isMobileMenuOpen ? "z-(--z-admin-dropdown)" : "z-(--z-dropdown)",
        isMobile ? mobileHeaderShellClasses : headerShellClasses,
        isMobile && [
          isMobileMenuOpen
            ? "bg-(--color-navigation-panel-mobile-background)"
            : "bg-(--color-card-wrapper-fill) backdrop-blur-(--effect-card-wrapper-background-blur)",
          "border",
          isMobileMenuOpen ? "border-transparent" : "border-(--color-card-wrapper-stroke)",
        ],
        !isMobileMenuOpen && "transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]",
        shouldShowHeader ? "translate-y-0" : "-translate-y-[120%]",
        className,
      )}
      style={{ top: topOffset }}
      {...props}
    >
      {/* Logo and Mobile Menu Toggle */}
      <div className={clsx(isMobile && mobileheaderTopRowClasses)}>
        <Logo variant="header" />

        {isMobile && (
          <Button
            variant="iconOnlyCircular"
            iconLeft={isMobileMenuOpen ? XIcon : MenuDeepIcon}
            iconLeftType={isMobileMenuOpen ? XIconType : MenuDeepIconType}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation"
            className="!text-(--color-icon-button-icon-only)"
          />
        )}
      </div>

      {/* Desktop Navigation */}
      {!isMobile && (
        <nav aria-label="Primary navigation" className={clsx(headerNavClasses)}>
          {isLoading ? (
            <NavigationListSkeleton splitLastItem={navigationItems.splitLastItem} />
          ) : (
            <NavigationList {...navigationItems} />
          )}

          {isAuthenticated && (
            <Button
              variant="tag"
              label="Admin"
              iconLeft={EditIcon}
              iconLeftType={EditIconType}
              onClick={() => setIsEditorOpen((prev) => !prev)}
              className={clsx(isEditorOpen && "!bg-(--color-button-overlay-background-active)")}
            />
          )}

          {isAuthenticated && (
            <div className="relative">
              <Button
                variant="tag"
                label="Inbox"
                iconLeft={MailIcon}
                onClick={() => navigate("/admin/inbox")}
                className={clsx(isInboxPage && "!bg-(--color-button-overlay-background-active)")}
              />

              {/* Unread Badge */}
              {unreadMessagesCount > 0 && (
                <span
                  className={clsx(
                    "absolute -top-2 -right-2",
                    "min-w-5 h-5 px-1",
                    "flex items-center justify-center",
                    "rounded-full",
                    "bg-red-500 text-white",
                    "text-[10px] font-bold",
                    "pointer-events-none",
                  )}
                >
                  {unreadMessagesCount > 99 ? "99+" : unreadMessagesCount}
                </span>
              )}
            </div>
          )}

          {isAuthenticated && (
            <Button
              variant="tag"
              label=""
              iconLeft={LogoutIcon}
              iconLeftType={LogoutIconType}
              onClick={onLogout}
              className={clsx(isAuthenticated && "!bg-(--color-button-overlay-background-active)")}
            />
          )}

          {showThemeToggle && <ThemeToggle />}
        </nav>
      )}

      {/* Mobile Navigation Panel */}
      {isMobile && (
        <nav
          id="primary-navigation"
          aria-label="Primary navigation"
          className={clsx(
            mobileMenuPanelClasses,
            isMobileMenuOpen && [
              "pt-(--spacing-closet-panel-mobile-padding-top)",
              "pb-(--spacing-closet-panel-mobile-padding-bottom)",
              "backdrop-blur-(--effect-card-wrapper-background-blur)",
            ],
            isMobileMenuOpen
              ? "opacity-100 max-h-[100vh]"
              : "opacity-0 max-h-0 pointer-events-none",
          )}
        >
          {isLoading ? (
            <NavigationListSkeleton splitLastItem={false} />
          ) : (
            <NavigationList {...navigationItems} onItemClick={handleNavigationClick} />
          )}

          {isAuthenticated && (
            <Button
              variant="tag"
              label="Admin"
              iconLeft={EditIcon}
              iconLeftType={EditIconType}
              onClick={() => setIsEditorOpen((prev) => !prev)}
              className={clsx(isAuthenticated && "!bg-(--color-button-overlay-background-active)")}
            />
          )}

          {isAuthenticated && (
            <div className="relative">
              <Button
                variant="tag"
                label="Inbox"
                iconLeft={MailIcon}
                onClick={() => navigate("/admin/inbox")}
                className={clsx(isInboxPage && "!bg-(--color-button-overlay-background-active)")}
              />

              {/* Unread Badge */}
              {unreadMessagesCount > 0 && (
                <span
                  className={clsx(
                    "absolute -top-2 -right-2",
                    "min-w-5 h-5 px-1",
                    "flex items-center justify-center",
                    "rounded-full",
                    "bg-red-500 text-white",
                    "text-[10px] font-bold",
                    "pointer-events-none",
                  )}
                >
                  {unreadMessagesCount > 99 ? "99+" : unreadMessagesCount}
                </span>
              )}
            </div>
          )}

          {isAuthenticated && (
            <Button
              variant="tag"
              label=""
              iconLeft={LogoutIcon}
              iconLeftType={LogoutIconType}
              onClick={onLogout}
              className={clsx(isAuthenticated && "!bg-(--color-button-overlay-background-active)")}
            />
          )}

          {showThemeToggle && <ThemeToggle onClick={handleNavigationClick} />}
        </nav>
      )}
    </header>
  );
};

export default Header;

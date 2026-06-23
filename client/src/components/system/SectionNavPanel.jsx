import { useState, useEffect, useCallback } from "react";

import clsx from "clsx";
import { useLocation } from "react-router-dom";

import { useSectionNavRead } from "../../hooks/useSectionNav";
import { useScrolling } from "../../hooks/useScrolling";
import useMediaQuery from "../../hooks/useMediaQuery";
import { IconRenderer } from "../atoms/text/IconRenderer";

import { sectionNavPanelLayoutConfig } from "./sectionNavPanelLayout.config";

const {
  panelContainer,
  navItem,
  iconWrapper,
  iconWrapperActive,
  iconStyle,
  label,
  labelActive,
  labelExpanded,
} = sectionNavPanelLayoutConfig;

const SectionNavPanel = () => {
  const { navSections, activeId, setActiveId } = useSectionNavRead();
  const isScrollActive = useScrolling(3000);
  const [isPanelHovered, setIsPanelHovered] = useState(false);
  const [isMarginHovered, setIsMarginHovered] = useState(false);
  const isMobile = useMediaQuery("(max-width: 639px)");
  const location = useLocation();

  const isVisible = isScrollActive || isPanelHovered || isMarginHovered;
  const showLabel = isPanelHovered;

  const updateActive = useCallback(() => {
    if (!navSections.length) return;

    const viewportMidpoint = window.innerHeight * 0.45;

    let closestId = null;
    let closestDistance = Infinity;

    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const { top, bottom, height } = el.getBoundingClientRect();

      if (bottom < 0 || top > window.innerHeight) return;

      const elementMidY = top + height / 2;
      const distance = Math.abs(elementMidY - viewportMidpoint);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestId = id;
      }
    });

    if (closestId) setActiveId(closestId);
  }, [navSections, setActiveId]);

  useEffect(() => {
    updateActive();

    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [updateActive]);

  const handleNavClick = useCallback((id, type) => {
    if (type === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (isMobile) setIsMarginHovered(false);
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const top =
      el.getBoundingClientRect().top + window.scrollY - 16;
    window.scrollTo({ top, behavior: "smooth" });
    if (isMobile) setIsMarginHovered(false);
  }, [isMobile]);

  if (
    location.pathname.startsWith("/full-case-study") ||
    location.pathname.startsWith("/view-details")
  ) return null;

  if (!navSections.length) return null;

  return (
    <>
      {/* Left margin trigger zone covers the section padding area
          so hovering/tapping the margin shows the panel */}
      <div
        className="fixed left-0 top-0 h-full z-10 w-4 sm:w-8 lg:w-16"
        onMouseEnter={() => setIsMarginHovered(true)}
        onMouseLeave={() => setIsMarginHovered(false)}
        onClick={() => setIsMarginHovered((prev) => !prev)}
        aria-hidden="true"
      />

      <div
        className={clsx(panelContainer)}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateX(0)" : "translateX(calc(-100% - 24px))",
          transition:
            "opacity 350ms cubic-bezier(0.4,0,0.2,1), transform 350ms cubic-bezier(0.4,0,0.2,1)",
          pointerEvents: isVisible ? "auto" : "none",
        }}
        onMouseEnter={() => setIsPanelHovered(true)}
        onMouseLeave={() => setIsPanelHovered(false)}
      >
        {navSections.map(({ id, label: sectionLabel, icon, type }) => {
          const isActive = activeId === id;

          return (
            <button
              key={id}
              type="button"
              className={clsx(navItem)}
              onClick={() => handleNavClick(id, type)}
              aria-label={sectionLabel}
              aria-current={isActive ? "step" : undefined}
            >
              {/* Icon always visible on left */}
              <span className={clsx(iconWrapper, isActive && iconWrapperActive)}>
                {icon?.src ? (
                  <IconRenderer
                    src={icon.src}
                    type={icon.type || "stroke"}
                    className={clsx(iconStyle, "!text-current")}
                  />
                ) : (
                  <span
                    className={clsx(
                      "w-2 h-2 rounded-full bg-current transition-transform duration-300",
                      isActive && "scale-125",
                    )}
                  />
                )}
              </span>

              {/* Label slides out to the right on hover / margin trigger */}
              <span
                className={clsx(label, isActive && labelActive, showLabel && labelExpanded)}
              >
                {sectionLabel}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default SectionNavPanel;
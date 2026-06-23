import React, { useState, useRef, useLayoutEffect } from "react";

import clsx from "clsx";

import {
  ChevronLeftIcon,
  ChevronLeftIconType,
  ChevronRightIcon,
  ChevronRightIconType,
} from "../../../assets/icons/system";

import Button from "../../atoms/button/Button";

const filterShellClasses = `
   relative w-full overflow-hidden min-w-0 
`;

const interactiveToInteractiveClasses = `
  flex 
  gap-(--spacing-interactive-interactive-mobile-gap-horizontal)
  sm:gap-(--spacing-interactive-interactive-tablet-gap-horizontal)
  lg:gap-(--spacing-interactive-interactive-desktop-gap-horizontal)
`;

const maskContainerLeftClasses = `
  absolute left-0 top-0 h-full w-[30px] pointer-events-none z-15
  bg-(--color-app-background)
  shadow-(--shadow-edge-mask-container)
`;

const maskContainerRightClasses = `
  absolute right-0 top-0 h-full w-[30px] pointer-events-none z-15
  bg-(--color-app-background)
  shadow-(--shadow-edge-mask-container)
`;

const arrowLeftClasses = `
  absolute left-0 top-1/2 -translate-y-1/2 z-20
`;

const arrowRightClasses = `
  absolute right-0 top-1/2 -translate-y-1/2 z-20
`;

const ScrollableFilterRow = ({
  items = [],
  selectionMode = "single",
  activeKeys = [],
  onChange = () => {},
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [recalcKey, setRecalcKey] = useState(0);

  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const MIN_SWIPE_DISTANCE = 40;

  // Read computed column gap from the track element
  const getGapX = (container) => {
    if (!container) return 0;
    const styles = window.getComputedStyle(container);
    return parseFloat(styles.columnGap || styles.gap || 0);
  };

  // Recalculate scroll offset and arrow visibility on index or size change
  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const viewportWidth = viewport.offsetWidth;
    const gap = getGapX(track);

    const offset = itemRefs.current
      .slice(0, startIndex)
      .reduce((sum, el, i) => sum + (el?.offsetWidth || 0) + (i > 0 ? gap : 0), 0);

    const totalWidth = itemRefs.current.reduce(
      (sum, el, i) => sum + (el?.offsetWidth || 0) + (i > 0 ? gap : 0),
      0,
    );

    setTranslateX(offset);
    setShowLeft(startIndex > 0);
    setShowRight(offset + viewportWidth < totalWidth - 8);
  }, [startIndex, items.length, recalcKey]);

  // Trigger recalc on viewport resize
  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const resizeObserver = new ResizeObserver(() => {
      setRecalcKey((k) => k + 1);
    });

    resizeObserver.observe(viewport);

    return () => resizeObserver.disconnect();
  }, []);

  const handleLeft = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleRight = () => {
    setStartIndex((prev) => Math.min(prev + 1, items.length - 1));
  };

  const handleSelect = (key) => {
    if (selectionMode === "single") {
      onChange([key]);
    } else {
      onChange(
        activeKeys.includes(key) ? activeKeys.filter((x) => x !== key) : [...activeKeys, key],
      );
    }
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) < MIN_SWIPE_DISTANCE) return;

    if (distance > 0) {
      if (showRight) handleRight();
    } else {
      if (showLeft) handleLeft();
    }
  };

  return (
    <div className="relative w-full min-w-0">
      <div
        ref={viewportRef}
        className={filterShellClasses}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className={clsx(interactiveToInteractiveClasses, "z-10")}
          style={{
            transform: `translateX(-${translateX}px)`,
            transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {items.map((item, index) => (
            <React.Fragment key={item.key}>
              <Button
                ref={(el) => (itemRefs.current[index] = el)}
                variant={item.variant}
                label={item.label}
                onClick={() => handleSelect(item.key)}
                className={clsx(
                  activeKeys.includes(item.key) && [
                    "bg-[var(--color-button-overlay-background-active)]",
                    "text-[var(--color-button-overlay-text-active)]",
                  ],
                )}
              >
                <span className="flex items-center gap-1">
                  <span>{item.label}</span>
                  {typeof item.count === "number" && (
                    <span className="opacity-70">({item.count})</span>
                  )}
                </span>
              </Button>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Left Arrow and Mask */}
      {showLeft && <div className={maskContainerLeftClasses} />}
      {showLeft && (
        <div className={arrowLeftClasses}>
          <Button
            variant="iconOnlyCircularOverlay"
            iconLeft={ChevronLeftIcon}
            iconLeftType={ChevronLeftIconType}
            onClick={handleLeft}
          />
        </div>
      )}

      {/* Right Arrow and Mask */}
      {showRight && <div className={maskContainerRightClasses} />}
      {showRight && (
        <div className={arrowRightClasses}>
          <Button
            variant="iconOnlyCircularOverlay"
            iconLeft={ChevronRightIcon}
            iconLeftType={ChevronRightIconType}
            onClick={handleRight}
          />
        </div>
      )}
    </div>
  );
};

export default ScrollableFilterRow;

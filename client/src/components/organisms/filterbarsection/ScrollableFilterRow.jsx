import React, { useState, useRef, useLayoutEffect } from "react";
import clsx from "clsx";
import Button from "../../atoms/button/Button";
import {
  ArrowLeftIcon,
  ArrowLeftIconType,
  ArrowRightIcon,
  ArrowRightIconType,
} from "../../../assets/icons/system";

const filterShellClasses = `
  relative w-full flex overflow-hidden flex-wrap
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
  activeIds = [],
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

  const getGapX = (container) => {
    if (!container) return 0;
    const styles = window.getComputedStyle(container);
    return parseFloat(styles.columnGap || styles.gap || 0);
  };

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const viewportWidth = viewport.offsetWidth;
    const gap = getGapX(track);

    const offset = itemRefs.current
      .slice(0, startIndex)
      .reduce(
        (sum, el, i) => sum + (el?.offsetWidth || 0) + (i > 0 ? gap : 0),
        0
      );

    const totalWidth = itemRefs.current.reduce(
      (sum, el, i) => sum + (el?.offsetWidth || 0) + (i > 0 ? gap : 0),
      0
    );

    setTranslateX(offset);
    setShowLeft(startIndex > 0);
    setShowRight(offset + viewportWidth < totalWidth - 8);
  }, [startIndex, items.length, recalcKey]);

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

  const handleSelect = (id) => {
    if (selectionMode === "single") {
      onChange([id]);
    } else {
      onChange(
        activeIds.includes(id)
          ? activeIds.filter((x) => x !== id)
          : [...activeIds, id]
      );
    }
  };

  return (
    <div ref={viewportRef} className={filterShellClasses}>
      {showLeft && <div className={maskContainerLeftClasses} />}
      {showLeft && (
        <div className={arrowLeftClasses}>
          <Button
            variant="iconOnlyCircularOverlay"
            iconLeft={ArrowLeftIcon}
            iconLeftType={ArrowLeftIconType}
            onClick={handleLeft}
          />
        </div>
      )}

      <div
        ref={trackRef}
        className={clsx(interactiveToInteractiveClasses, "z-10")}
        style={{
          transform: `translateX(-${translateX}px)`,
          transition: "transform 500ms ease",
        }}
      >
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <Button
              ref={(el) => (itemRefs.current[index] = el)}
              {...item}
              onClick={() => handleSelect(item.id)}
              className={clsx(
                activeIds.includes(item.id) &&
                  `
                    bg-[var(--color-button-overlay-background-active)]
                    text-[var(--color-button-overlay-text-active)]
                  `
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

      {showRight && <div className={maskContainerRightClasses} />}
      {showRight && (
        <div className={arrowRightClasses}>
          <Button
            variant="iconOnlyCircularOverlay"
            iconLeft={ArrowRightIcon}
            iconLeftType={ArrowRightIconType}
            onClick={handleRight}
          />
        </div>
      )}
    </div>
  );
};

export default ScrollableFilterRow;

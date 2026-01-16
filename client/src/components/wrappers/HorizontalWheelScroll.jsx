/**
 * Role: Reusable horizontal scroll wrapper
 * Used by: Tag lists, carousels, and overflowed horizontal content
 *
 * Responsibilities:
 *  - Enable wheel-based vertical → horizontal scrolling
 *  - Support drag-to-scroll interaction for mouse users
 *  - Detect overflow and expose affordances (cursor, selection lock)
 *
 * Guardrails:
 *  - Presentation-agnostic (no layout or content assumptions)
 *  - Does not manage focus, snapping, or pagination
 *  - Enhances UX without mutating child elements
 */

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const HorizontalScroll = ({ children, className }) => {
  const ref = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);

  // Check overflow
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const checkOverflow = () => {
      setIsScrollable(el.scrollWidth > el.clientWidth);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  // Wheel → horizontal scroll
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Drag to scroll
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const onMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
    };

    const onMouseUp = () => {
      isDown = false;
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = x - startX;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={clsx(
        isScrollable && "select-none cursor-grab active:cursor-grabbing",
        className
      )}
    >
      {children}
    </div>
  );
};

export default HorizontalScroll;

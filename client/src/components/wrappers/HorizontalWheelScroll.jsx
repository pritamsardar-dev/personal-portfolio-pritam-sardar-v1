import { useEffect, useRef, useState } from "react";

import clsx from "clsx";

// Horizontal scroll wrapper with wheel redirect and drag to scroll support.
// Detects overflow and applies grab cursor when content exceeds container width.
const HorizontalScroll = ({ children, className }) => {
  const ref = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);

  // Detects horizontal overflow and updates on resize
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

  // Redirects vertical wheel delta to horizontal scroll
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (e) => {
      const hasOverflow = el.scrollWidth > el.clientWidth;
      if (hasOverflow && Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Drag to scroll via mouse events
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
      className={clsx(isScrollable && "select-none cursor-grab active:cursor-grabbing", className)}
    >
      {children}
    </div>
  );
};

export default HorizontalScroll;

import { useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

const getTooltipStyle = (position, rect) => {
  switch (position) {
  case "bottom":
    return {
      left: rect.left + rect.width / 2,
      top: rect.bottom + 6,
      transform: "translate(-50%, 0%)",
    };
  case "left":
    return {
      left: rect.left - 6,
      top: rect.top + rect.height / 2,
      transform: "translate(-100%, -50%)",
    };
  case "right":
    return {
      left: rect.right + 6,
      top: rect.top + rect.height / 2,
      transform: "translate(0%, -50%)",
    };
  case "top":
  default:
    return {
      left: rect.left + rect.width / 2,
      top: rect.top - 6,
      transform: "translate(-50%, -100%)",
    };
  }
};

const TooltipButton = ({ label, children, className, position = "top" }) => {
  const [state, setState] = useState({ visible: false, left: 0, top: 0, transform: "" });
  const containerRef = useRef(null);

  const show = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const style = getTooltipStyle(position, rect);
    setState({ visible: true, ...style });
  }, [position]);

  const hide = useCallback(() => {
    setState((prev) => ({ ...prev, visible: false }));
  }, []);

  return (
    <>
      <span
        ref={containerRef}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        className={clsx("inline-flex", className)}
      >
        {children}
      </span>

      {state.visible &&
        createPortal(
          <span
            className="fixed pointer-events-none z-(--z-popup-tooltip)"
            style={{
              left: state.left,
              top: state.top,
              transform: state.transform,
            }}
          >
            <span
              className={clsx(
                "block whitespace-nowrap",
                "bg-(--color-tooltip-background)",
                "text-(--color-text-body)",
                "text-(length:--text-label-default-mobile-font-size)",
                "sm:text-(length:--text-label-default-tablet-font-size)",
                "lg:text-(length:--text-label-default-desktop-font-size)",
                "font-(--text-label-default-font-weight)",
                "px-2 py-1",
                "rounded-(--radius-lg)",
                "shadow-(--shadow-card-wrapper)",
                "border-(--color-card-container-border)",
                "border-(length:--border-card-container-base-width)",
              )}
            >
              {label}
            </span>
          </span>,
          document.body,
        )}
    </>
  );
};

export default TooltipButton;
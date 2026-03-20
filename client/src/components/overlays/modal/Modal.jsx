/**
 * Role: Generic modal / overlay container
 * Used by: Fullscreen blocks, dialogs, and slide-in panels via portal
 *
 * Responsibilities:
 *  - Render modal content in a portal outside normal DOM flow
 *  - Support dialog, fullscreen, and panel variants via config
 *  - Handle ESC close, optional backdrop, and scroll locking
 *  - Animate entry/exit (including origin-based fullscreen expansion)
 *
 * Guardrails:
 *  - Variant-driven behavior only (no page-specific logic)
 *  - Does not manage modal state (open/close controlled externally)
 *  - Content-agnostic: renders children without mutation
 */

import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

const MODAL_VARIANTS = {
  fullscreen: {
    role: "fullscreen",
    backdrop: false,
    esc: true,
    scrollLock: true,
    container: `
    fixed 
    z-(--z-modal)
    `,
  },
  dialog: {
    role: "dialog",
    backdrop: true,
    esc: true,
    scrollLock: true,
    container: `
    fixed
    top-[10%]
    left-1/2
    z-(--z-popup-content)
    max-w-lg
    w-full
  `,
  },
  panel: {
    role: "panel",
    backdrop: false,
    esc: true,
    scrollLock: false,
    container: `
    fixed 
    inset-y-0 
    right-0 
    z-(--z-panel)
    `,
  },
};

// global modalstack
let modalStack = [];

const Modal = ({
  variant = "dialog",
  open,
  onClose,
  onExited,
  isFullscreen,
  originRect,
  children,
  className,
}) => {

  const [isMounted, setIsMounted] = useState(open);
  const [isVisible, setIsVisible] = useState(false);

  const closeTimerRef = useRef(null);

  const config = MODAL_VARIANTS[variant];

  

  // ESC handling
  useEffect(() => {
    if (!open) return;

    // Push this modal onto the stack
    modalStack.push(variant);

    const handleEsc = (e) => {
      if (e.key !== "Escape") return;

      // Only topmost modal reacts
      if (modalStack[modalStack.length - 1] !== variant) return;

      e.stopPropagation();
      onClose?.();
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);

      // Remove only the topmost instance of this modal
      if (modalStack[modalStack.length - 1] === variant) {
        modalStack.pop();
      } else {
        // fallback: remove any leftover (rare)
        const idx = modalStack.lastIndexOf(variant);
        if (idx >= 0) modalStack.splice(idx, 1);
      }
    };
  }, [open, variant, onClose]);

  // Scroll lock
  useEffect(() => {
    if (!open || !config.scrollLock) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const prevOverflow = document.body.style.overflow;
    const prevPadding = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
    };
  }, [open, config.scrollLock]);

  useEffect(() => {

    if (open) {

      requestAnimationFrame(() => setIsMounted(true));

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });

    } else {

      requestAnimationFrame(() => setIsVisible(false));

      if (variant === "dialog") {

        closeTimerRef.current = setTimeout(() => {
          setIsMounted(false);
          onExited?.();
        }, 500); // match animation

      }
    }
    return () => clearTimeout(closeTimerRef.current);
  }, [open, variant, onExited]);

  if (!isMounted) return null;

  // Modal Animations
  let scale = 1;

  if (originRect) {
    scale = originRect.width / window.innerWidth;
  }

  const modalStyle =
    variant === "fullscreen" && originRect
      ? {
          position: "fixed",
          top: 0,
          left: 0,
          width: "100dvw",
          height: "100dvh",

          transform: isFullscreen
            ? "translate(0px, 0px) scale(1)"
            : `translate(${originRect.left}px, ${originRect.top}px) scale(${scale})`,

          transformOrigin: "top left",

          willChange: "transform, opacity",

          transition:
            "transform 520ms cubic-bezier(0.4,0,0.2,1), opacity 180ms ease-out",

          opacity: isFullscreen ? 1 : 0.96,

          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
      }

      : variant === "dialog"
      ? {
          transform: isVisible
            ? "translate(-50%, 0px) scale(1)"
            : "translate(-50%, 0px) scale(0.06)",

          opacity: isVisible ? 1 : 0,

          transformOrigin: "center center",

          willChange: "transform, opacity",

          transition: isVisible
            ? `
                transform 480ms cubic-bezier(0.16, 1, 0.3, 1),
                opacity 220ms ease-out
              `
            : `
                transform 280ms cubic-bezier(0.4, 0, 1, 1),
                opacity 180ms ease-in
              `,

          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
      }
      : {};

  
  return createPortal(
    <>
      {/* Backdrop */}
      {config.backdrop && (
        <div
          className={clsx(
            config?.role === "dialog" && clsx(
              "u-modal-backdrop-dialog transition-opacity duration-300 !z-(--z-popup-backdrop)",
              isVisible ? "opacity-100" : "opacity-0"
            ),
            config?.role === "fullscreen" && `u-modal-backdrop-fullscreen
            transition-opacity
            duration-200 ` 
          )}
          onClick={onClose}
        />
      )}

      {/* Modal Container */}
      <div
        role={config.role}
        aria-modal={config.backdrop}
        className={clsx(config.container, className)}
        style={{ ...modalStyle }}
        
        onTransitionEnd={(e) => {
          if (e.target !== e.currentTarget) return;

          if (variant === "dialog") return;

          if (variant === "fullscreen" && !isFullscreen) {
            setIsMounted(false);
            onExited?.();
          }
        }}
        tabIndex={-1}
      >
        {children}
      </div>
    </>,
    document.body
  );
};

export default Modal;

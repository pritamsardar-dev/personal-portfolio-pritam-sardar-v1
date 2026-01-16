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

import { useEffect } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

const MODAL_VARIANTS = {
  fullscreen: {
    role: "dialog",
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
    top-1/2
    left-1/2
    z-(--z-modal)
    max-w-lg
    w-full
    -translate-x-1/2
    -translate-y-1/2
  `,
  },
  panel: {
    role: "dialog",
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
  const config = MODAL_VARIANTS[variant];

  // ESC handling
  useEffect(() => {
    if (!open || !config.esc) return;

    const handler = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose, config.esc]);

  // Scroll lock
  useEffect(() => {
    if (!open || !config.scrollLock) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [open, config.scrollLock]);

  if (!open) return null;

  // Modal Animations
  let scale = 1;

  if (originRect) {
    scale = originRect.width / window.innerWidth;
  }

  const modalStyle = originRect
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
    : {};

  return createPortal(
    <>
      {/* Backdrop */}
      {config.backdrop && (
        <div
          className={clsx(
            `
            u-modal-backdrop-fullscreen
            transition-opacity
            duration-200
          `
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
          if (!isFullscreen) onExited?.();
        }}
      >
        {children}
      </div>
    </>,
    document.body
  );
};

export default Modal;

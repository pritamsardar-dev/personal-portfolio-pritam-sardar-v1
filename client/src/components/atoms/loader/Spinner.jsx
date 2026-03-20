import React, { useId } from "react";
import clsx from "clsx";

const spinnerVariants = {
  buttonPrimary: {
    spinner: `
      w-(--size-spinner-button-element-mobile-diameter)
      sm:w-(--size-spinner-button-element-tablet-diameter)
      lg:w-(--size-spinner-button-element-desktop-diameter)

      h-(--size-spinner-button-element-mobile-diameter)
      sm:h-(--size-spinner-button-element-tablet-diameter)
      lg:h-(--size-spinner-button-element-desktop-diameter)
    `,
    ring: `
      border
      border-(length:--border-spinner-base-width)
      border-(--color-button-primary-text-default)
    `,
    text: `
      text-(--color-button-primary-text-default)
      font-(--text-button-font-weight)
      text-(length:--text-button-mobile-font-size)
      sm:text-(length:--text-button-tablet-font-size)
      lg:text-(length:--text-button-desktop-font-size)
    `
  },
};

const Spinner = ({
  loading = true,
  variant = "buttonPrimary",
  text = "",
  speed = 1,
}) => {
  const id = useId().replace(/:/g, "");
  if (!loading) return null;

  const rotateName = `rotate-${id}`;
  const clipName = `clip-${id}`;

  const variantStyles = spinnerVariants[variant] || {};

  return (
    <>
      <style>{`
        @keyframes ${rotateName} {
          100% { transform: rotate(360deg); }
        }

        @keyframes ${clipName} {
          0%   { clip-path: polygon(50% 50%,0 0,0 0,0 0,0 0,0 0); }
          25%  { clip-path: polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0); }
          50%  { clip-path: polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%); }
          75%  { clip-path: polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%); }
          100% { clip-path: polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0); }
        }
      `}</style>

      <div className="flex items-center gap-2">
        {text && (
          <span className={clsx(variantStyles.text)}>
            {text}
          </span>
        )}

        {/* ROTATING CONTAINER */}
        <div
          className={clsx("relative rounded-full", variantStyles.spinner)}
          style={{
            animation: `${rotateName} ${speed}s linear infinite`,
          }}
        >
          {/* ANIMATED RING (IMPORTANT) */}
          <div
            className={clsx(
              "absolute inset-0 rounded-full box-border",
              variantStyles.ring
            )}
            style={{
              animation: `${clipName} ${speed * 2}s linear infinite`,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Spinner;
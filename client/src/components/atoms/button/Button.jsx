import React, { forwardRef } from "react";
import clsx from "clsx";
import { baseButton, variantMap } from "./button.config";
import { iconPaintClasses } from "./icon.paint.config";

const resolveClasses = (value, size) => {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[size] || value.default || "";
};

const Button = forwardRef(({
  variant = "primary",
  size = "default",            
  label = "",
  children,
  iconLeft: IconLeft = null,
  iconRight: IconRight = null,
  iconLeftType = null,
  iconRightType = null,
  isDisabled = false,
  className = "",
  onClick = () => {},
  ...props
}, ref) => {
  const variantConfig = variantMap[variant] || variantMap.primary;

  const classes = clsx(
    baseButton,
    variantConfig.baseClasses,
    resolveClasses(variantConfig.sizes, size), 
    className,
    isDisabled && "pointer-events-none"
  );

  const getIconClasses = (type) =>
    clsx(
      resolveClasses(variantConfig.iconClasses, size),
      type && iconPaintClasses[type]
    );

  return (
    <button
      ref={ref}
      disabled={isDisabled}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {IconLeft && (
        <span className={getIconClasses(iconLeftType)}>
          <IconLeft />
        </span>
      )}

      {children ? children : label && <span>{label}</span>}

      {IconRight && (
        <span className={getIconClasses(iconRightType)}>
          <IconRight />
        </span>
      )}
    </button>
  );
});

Button.displayName = "Button";

export default Button;

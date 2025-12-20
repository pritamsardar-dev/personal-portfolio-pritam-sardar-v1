import React from "react";
import clsx from "clsx";
import { baseButton, variantMap } from "./button.config";
import {iconPaintClasses} from "./icon.paint.config";

const Button = ({
  variant = "primary",
  label = "",
  iconLeft: IconLeft = null,
  iconRight: IconRight = null,
  iconLeftType = null,  
  iconRightType = null, 
  isDisabled = false,
  className = "",
  onClick = () => {},
  ...props
}) => {
  const variantConfig = variantMap[variant] || variantMap.primary;

  const classes = clsx(
    baseButton,
    variantConfig.baseClasses,
    className,
    isDisabled && "pointer-events-none"
  );

  const getIconClasses = (type) => clsx(
    variantConfig.iconClasses, 
    type && iconPaintClasses[type] 
  );

  return (
    <button
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

      {label && <span>{label}</span>}

      {IconRight && (
        <span className={getIconClasses(iconRightType)}>
          <IconRight />
        </span>
      )}
    </button>
  );
};

export default Button;

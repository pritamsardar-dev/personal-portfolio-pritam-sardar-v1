import React from "react";
import clsx from "clsx";
import { baseTag, variantMap } from "./tag.config";

const Tag = ({
  variant = "overlay",
  label = "",
  iconLeft = null,
  iconRight = null,
  className = "",
  ...props
}) => {
  const variantConfig = variantMap[variant] || variantMap.overlay;

  const classes = clsx(
    baseTag,
    variantConfig.baseClasses,
    className
  );

  return (
    <div className={classes} {...props}>
      {iconLeft && (
        <span className={variantConfig.iconClasses}>
          {iconLeft}
        </span>
      )}

      {label && <span>{label}</span>}

      {iconRight && (
        <span className={variantConfig.iconClasses}>
          {iconRight}
        </span>
      )}
    </div>
  );
};

export default Tag;

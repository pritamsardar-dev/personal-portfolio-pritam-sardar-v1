import React from "react";
import clsx from "clsx";
import { baseTag, variantMap } from "./tag.config";
import {iconPaintClasses} from "./icon.paint.config";

const resolveClasses = (value, size) => {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[size] || value.default || "";
};

const Tag = ({
  variant = "overlay",
  size = "default",
  label = "",
  iconLeft: IconLeft = null,
  iconRight: IconRight = null,
  iconLeftType = null,  
  iconRightType = null, 
  className = "",
  ...props
}) => {
  const variantConfig = variantMap[variant] || variantMap.overlay;

  const classes = clsx(
    baseTag,
    variantConfig.baseClasses,
    resolveClasses(variantConfig.sizes, size),
    className
  );

  const getIconClasses = (type) => clsx(
      resolveClasses(variantConfig.iconClasses, size), 
      type && iconPaintClasses[type] 
  );

  return (
    <div className={classes} {...props}>
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
    </div>
  );
};

export default Tag;

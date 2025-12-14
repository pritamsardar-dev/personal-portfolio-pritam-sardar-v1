import React from "react";
import clsx from "clsx";
import { baseText, variantMap, colorTokens } from "./text.config";
import { IconRenderer } from "./IconRenderer";

const Text = ({
  variant = "bodyLarge",
  as = null,
  text = "",
  icon = {svg: {}, type: ""},
  textParts = null,
  className = "",
  ...props
}) => {
  const variantConfig = variantMap[variant] || variantMap.bodyLarge;

  const Tag = as || variantConfig.semanticTag || "p";

  const classes = clsx(
    baseText,
    as === "li" && "list-item",
    variantConfig.baseClasses,
    className
  );

  return (
    <Tag className={classes} {...props}>
      {icon && (
        <span className={variantConfig.iconWrapperClasses}>
           <IconRenderer
            svg={icon.svg}
            type={icon.type}
            className={variantConfig.iconClasses}
          />
        </span>
      )}

      {textParts
        ? textParts.map((part, idx) => (
            <span
              key={idx}
              className={clsx(
                colorTokens[part.color] || "",
                "mr-1"
              )}
            >
              {part.text}
            </span>
          ))
        : text}
    </Tag>
  );
};

export default Text;

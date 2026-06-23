import React from "react";

import clsx from "clsx";

import { baseText, colorTokens, variantMap } from "./text.config";
import { IconRenderer } from "./IconRenderer";

const resolveClasses = (value, size) => {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[size] || value.default || "";
};

const Text = ({
  variant = "bodyLarge",
  size = "default",
  modifiers = [],
  as = null,
  text = "",
  icon = null,
  textParts = null,
  className = "",
  ...props
}) => {
  const hasIcon = Boolean(icon?.src || icon?.type);

  const variantConfig = variantMap[variant] || variantMap.bodyLarge;
  const Tag = as || variantConfig.semanticTag || "p";

  const sizeClasses = resolveClasses(variantConfig.sizes, size);
  const modifierClasses = modifiers.map((m) => variantConfig.modifiers?.[m]);
  const iconWrapperClasses = resolveClasses(variantConfig.iconWrapperClasses, size);
  const iconClasses = resolveClasses(variantConfig.iconClasses, size);
  const iconAlignClasses = resolveClasses(variantConfig.iconAlignClasses, size);

  const classes = clsx(
    baseText,
    as === "li" && "list-item",
    variantConfig.baseClasses,
    sizeClasses,
    modifierClasses,
    hasIcon && (iconAlignClasses ? "inline-flex items-start" : "inline-flex items-center"),
    className,
  );

  return (
    <Tag className={clsx(classes)} {...props}>
      {hasIcon && (
        <span className={clsx(iconWrapperClasses, iconAlignClasses)}>
          <IconRenderer src={icon.src} type={icon.type} className={iconClasses} />
        </span>
      )}

      {textParts
        ? textParts.map((part, idx) => (
          <React.Fragment key={idx}>
            <span className={clsx(colorTokens[part.color] || "", "mr-[0.25em]")}>{part.text}</span>

            {part.breakAfter && <span aria-hidden className="block h-0 w-full" />}
          </React.Fragment>
        ))
        : text}
    </Tag>
  );
};

export default Text;

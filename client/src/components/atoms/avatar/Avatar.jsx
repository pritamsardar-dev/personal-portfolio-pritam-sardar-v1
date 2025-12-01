import React from "react";
import clsx from "clsx";
import { baseAvatar, variantMap } from "./avatar.config";
import { getColorFromLetter, getInitialLetter } from "./avatar.utils";

const Avatar = ({
  variant = "default",
  image = null,
  name = "",
  className = "",
  ...props
}) => {
  const variantConfig = variantMap[variant] || variantMap.default;

  const letter = getInitialLetter(name);
  const bgColor = getColorFromLetter(letter);

  const classes = clsx(
    baseAvatar,
    variantConfig.baseClasses,
    className
  );

  return (
    <div className={classes} {...props} style={{ backgroundColor: image ? "transparent" : bgColor }}>
      {image ? (
        <img className={variantConfig.imageClasses} src={image} alt={letter} />
      ) : (
        <span className={variantConfig.placeholderClasses}>{letter}</span>
      )}
    </div>
  );
};

export default Avatar;

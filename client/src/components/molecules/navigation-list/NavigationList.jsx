import React from "react";

import clsx from "clsx";

import NavigationItem from "../../atoms/navigation-item/NavigationItem";

const NavigationList = ({
  items = [],
  variant = "header",
  onItemClick,
  className = "",
  splitLastItem = false,
  showCenterGroup = false,
  ...props
}) => {
  if (!items || items.length === 0) return null;

  const isFooter = variant === "footer";

  const directionClasses = clsx(
    "flex flex-col items-start flex-wrap",
    !isFooter && "sm:flex-row sm:items-center lg:flex-row lg:items-center",
  );

  const gapClasses = clsx(
    isFooter
      ? "gap-(--spacing-footer-list-list-mobile-gap)"
      : "gap-(--spacing-navigation-link-group-mobile-gap-vertical)",
    isFooter
      ? "sm:gap-(--spacing-footer-list-list-tablet-gap)"
      : "sm:gap-(--spacing-navigation-link-group-tablet-gap)",
    isFooter
      ? "lg:gap-(--spacing-footer-list-list-desktop-gap)"
      : "lg:gap-(--spacing-navigation-link-group-desktop-gap)",
  );

  const mainItems = splitLastItem && !isFooter ? items.slice(0, -1) : items;
  const lastItem = splitLastItem ? items.at(-1) : null;

  return (
    <div
      className={clsx(
        "w-full flex flex-col sm:flex-row lg:flex-row sm:items-center lg:items-center",
        gapClasses,
        className,
      )}
      {...props}
    >
      {/* Main Navigation Group */}
      <ul
        className={clsx(
          isFooter && "flex flex-row flex-wrap sm:flex-col",
          directionClasses,
          gapClasses,
          showCenterGroup && "sm:flex-1 sm:justify-center",
        )}
      >
        {mainItems.map((item, index) => (
          <li key={index}>
            <NavigationItem {...item} variant={variant} onClick={onItemClick} />
          </li>
        ))}
      </ul>

      {/* CTA Item */}
      {lastItem && !isFooter && (
        <div className="flex">
          <NavigationItem {...lastItem} variant={variant} onClick={onItemClick} />
        </div>
      )}
    </div>
  );
};

export default NavigationList;

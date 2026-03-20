import React from 'react';
import clsx from 'clsx';
import {NavLink, useLocation} from 'react-router-dom'
import { baseNavigationItem, variantMap } from './navigationItem.config.js';

const NavigationItem = ({
   to= "/", 
   variant = "header",
   onClick,
   label= "", 
   iconLeft = null, 
   iconRight = null, 
   className = "",
   isExternal = false,
   isButtonStyle = false,
   ...props
}) => {

  const location = useLocation();

  const handleClick = (e) => {
    // Call any external onClick
    if (onClick) onClick(e);

    // Scroll instantly to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

   const variantConfig = isButtonStyle
    ? variantMap.buttonStyle
    : (variantMap[variant] || variantMap.header);

   const content = ({isActive}) => {

    const searchParams = new URLSearchParams(location.search);
    const source = searchParams.get("source");

    // normalize route name
    const navSection = to === "/" ? "home" : to.replace("/", "");

    const isSourceActive = source === navSection;

    const active = isActive || isSourceActive;

    const classes = clsx(
      baseNavigationItem,
      variantConfig.baseClasses,
      className,
      active && variantConfig.activeClasses
   );

   return (
      <span className={classes}>
        {iconLeft && (
          <span className={variantConfig.iconClasses}>{iconLeft}</span>
        )}

        {label}

        {iconRight && (
          <span className={variantConfig.iconClasses}>{iconRight}</span>
        )}
      </span>
    );
  };

  if(isExternal){
    return (
      <a 
        href={to} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={handleClick} 
        {...props}  
        className={clsx(
          "u-focus-visible-outline", 
          "rounded-(--radius-button-base)"
          )}
        >
          {content({isActive: false})}
      </a>
    );
  }

  return (
    <NavLink 
      to={to} 
      end
      onClick={handleClick}  
      {...props} 
      className={clsx(
        "u-focus-visible-outline", 
        "rounded-(--radius-button-base)"
        )}
      > 
        {content}
    </NavLink>
  );
};

export default NavigationItem;


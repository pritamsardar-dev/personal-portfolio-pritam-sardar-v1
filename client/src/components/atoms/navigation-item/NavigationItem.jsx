import React from 'react';
import clsx from 'clsx';
import {NavLink} from 'react-router-dom'
import { baseNavigationItem, variantMap } from './navigationItem.config.js';

const NavigationItem = ({
   to= "/", 
   variant = "header",
   label= "", 
   iconLeft = null, 
   iconRight = null, 
   className = "",
   isExternal = false,
   isButtonStyle = false,
   ...props
}) => {
   const variantConfig = isButtonStyle
    ? variantMap.buttonStyle
    : (variantMap[variant] || variantMap.header);

   const content = ({isActive}) => {
    const classes = clsx(
      baseNavigationItem,
      variantConfig.baseClasses,
      className,
      isActive && variantConfig.activeClasses
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
      <a href={to} target="_blank" rel="noopener noreferrer" {...props} 
      className={clsx("u-focus-visible-outline", "rounded-(--radius-button-base)")}>
        {content({isActive: false})}
      </a>
    );
  }

  return (
    <NavLink to={to} end {...props} 
    className={clsx("u-focus-visible-outline", "rounded-(--radius-button-base)")}> 
        {content}
    </NavLink>
  );
};

export default NavigationItem;


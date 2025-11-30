import React from 'react';
import clsx from 'clsx';
import { baseButton, variantMap } from './button.config';

const Button = ({
   variant="primary", 
   label="", 
   iconLeft= null, 
   iconRight= null, 
   isDisabled=false,
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

  return (
    <button 
    disabled={isDisabled} 
    className={classes}
    onClick={onClick}
    {...props}
    >
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
     </button>
  );
};

export default Button


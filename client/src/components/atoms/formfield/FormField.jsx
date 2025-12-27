import React, { useState, useRef} from "react";
import clsx from "clsx";
import { baseParentField, baseField, variantMap } from "./formField.config.js";
import { getFieldElement } from "./FormField.Utils.jsx";

const FormField = ({
  variant = "input",
  native = true,
  label = "",
  error = "",
  Icon = null,
  maxLength,                
  register = () => ({}),                 
  control = null,
  className = "",
  name,                      
  rules = {},               
  ...props
}) => {

  const variantConfig = variantMap[variant] || variantMap.input;

  // Live character count (textarea only)
  const [count, setCount] = useState(0);

  // Custom onChange to update live counter (textarea)
  const handleTextAreaChange = (e) => {
    setCount(e.target.value.length);
    if (props.onChange) props.onChange(e);
  };

  const textareaRef = useRef(null);

  const classes = clsx(
    baseField,
    variantConfig.baseClasses,
    error && variantConfig.errorClasses,
    className
  );

  return (
    <div className={clsx(
      baseParentField,
        variant === "slectCustom" ? "w-full" : "w-fit"
      )}
      >
      
      {label && (
        <label className={variantConfig.labelClasses}>{label}</label>
      )}

      <div className="relative flex items-center">
        
        {Icon && native && (
          <span className={variantConfig.iconClasses}><Icon/></span>
        )}

        {getFieldElement(
          variant,
          Icon,
          classes,
          register(name, rules),
          control,
          name,
          {
            ...props, 
            handleTextAreaChange,
            textareaRef 
          },
          count,
          maxLength,
          variantConfig,
          error
        )}
      </div>

      {/* Error + Counter (textarea special handling) */}
      {variant === "textarea" ? (
        <div className="flex justify-between gap-5">
          <p className={variantConfig.errorTextClasses}>{error}</p>

          {/* Keep the option for future */}
          {/* {maxLength && (
            <span className={clsx(count > maxLength ? 
            variantConfig.errorTextClasses : variantConfig.labelClasses)}>
            {count}/{maxLength}
            </span>
          )} */}
          
        </div>
      ) : (
        error && <p className={variantConfig.errorTextClasses}>{error}</p>
      )}
    </div>
  );
};

export default FormField;

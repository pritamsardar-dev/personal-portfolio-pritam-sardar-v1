import React, { useEffect, useRef, useState } from "react";

import clsx from "clsx";

import { baseField, baseParentField, variantMap } from "./formField.config.js";
import { autoResize, getFieldElement } from "./FormField.Utils.jsx";

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [count, setCount] = useState(0);
  const textareaRef = useRef(null);

  const variantConfig = variantMap[variant] || variantMap.input;

  const toggleExpand = () => {
    setIsExpanded((prev) => {
      const next = !prev;

      // Manually resize textarea after state change
      if (textareaRef.current) {
        autoResize({ target: textareaRef.current }, next);
      }

      return next;
    });
  };

  // Update live character count on textarea input
  const handleTextAreaChange = (e) => {
    setCount(e.target.value.length);
    if (props.onChange) props.onChange(e);
  };

  const classes = clsx(
    baseField,
    variantConfig.baseClasses,
    error && variantConfig.errorClasses,
    className,
  );

  // Auto-resize textarea on mount and container resize
  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;

    const resize = () => {
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    };

    resize();

    const observer = new ResizeObserver(() => {
      resize();
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={clsx(baseParentField, variant === "slectCustom" ? "w-full" : "w-fit", className)}
    >
      {label && <label className={variantConfig.labelClasses}>{label}</label>}

      <div className="relative flex items-center">
        {Icon && native && (
          <span className={variantConfig.iconClasses}>
            <Icon />
          </span>
        )}

        {getFieldElement(
          variant,
          Icon,
          classes,
          register,
          control,
          name,
          rules,
          {
            ...props,
            handleTextAreaChange,
            textareaRef,
            isExpanded,
            toggleExpand,
          },
          count,
          maxLength,
          variantConfig,
          error,
        )}
      </div>

      {/* Error and Counter */}
      {variant === "textarea" ? (
        <div className="flex justify-between gap-5">
          <p className={variantConfig.errorTextClasses}>{error}</p>
        </div>
      ) : (
        error && <p className={variantConfig.errorTextClasses}>{error}</p>
      )}
    </div>
  );
};

export default FormField;

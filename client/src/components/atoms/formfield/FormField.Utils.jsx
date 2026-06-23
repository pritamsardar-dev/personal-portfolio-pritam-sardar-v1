import clsx from "clsx";
import { Controller } from "react-hook-form";

import {
  ChevronsUpDownIcon,
  ChevronsDownUpIcon,
} from "../../../assets/icons/system";

import Button from "../button/Button";
import CustomSelect from "./CustomSelect";

// Auto-resize textarea with optional full expansion
// Grows and shrinks as user types, respects max-height
// When isExpanded is true, expands to full content height with no scroll
export const autoResize = (e, isExpanded) => {
  const element = e.target;

  if (isExpanded) {
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
    element.style.overflowY = "visible";
    return;
  }

  const maxHeight = parseInt(getComputedStyle(element).maxHeight);

  // Temporarily hide scrollbar to measure natural height
  element.style.overflowY = "hidden";
  element.style.height = "auto";

  const newHeight = element.scrollHeight;

  if (newHeight <= maxHeight) {
    element.style.height = newHeight + "px";
    element.style.overflowY = "hidden";
  } else {
    element.style.height = maxHeight + "px";
    element.style.overflowY = "auto";
  }
};

// Merge useRef and RHF's ref onto the same element
const mergeRefs = (...refs) => {
  return (element) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === "function") ref(element);
      else ref.current = element;
    });
  };
};

const autoResizeTextareaNative = (e) => {
  const el = e.target;
  el.style.height = "auto";
  el.style.height = el.scrollHeight + "px";
};

export const getFieldElement = (
  variant,
  Icon,
  classes,
  register,
  control,
  name,
  rules,
  props,
  count,
  maxLength,
  variantConfig,
  error,
) => {
  const {
    placeholder,
    options = [],
    handleTextAreaChange,
    textareaRef,
    isExpanded,
    toggleExpand,
    ...restProps
  } = props;
  const { ref: registerRef, ...registerProps } = register(name, rules) || {};

  const elementMap = {
    input: (
      <input
        type="text"
        placeholder={placeholder}
        className={classes}
        {...register(name, rules)}
        {...restProps}
      />
    ),

    email: (
      <input
        type="email"
        placeholder={placeholder}
        className={classes}
        {...register(name, rules)}
        {...restProps}
      />
    ),

    password: (
      <input
        type="password"
        placeholder={placeholder}
        className={classes}
        {...register(name, rules)}
        {...restProps}
      />
    ),

    textareaNative: (
      <textarea
        rows={1}
        ref={mergeRefs(textareaRef, registerRef)}
        type="text"
        placeholder={placeholder}
        className={classes}
        {...register(name, rules)}
        {...restProps}
        onInput={autoResizeTextareaNative}
      />
    ),

    textarea: (
      <div
        className={clsx(
          variantConfig.baseClassesWrapper,
          error && variantConfig.errorClasses,
          "!pb-10",
        )}
        onClick={() => {
          textareaRef.current?.focus();
        }}
      >
        <textarea
          ref={mergeRefs(textareaRef, registerRef)}
          placeholder={placeholder}
          className={clsx(variantConfig.baseClasses, isExpanded ? "!max-h-[none]" : "")}
          {...registerProps}
          {...restProps}
          onInput={(e) => {
            autoResize(e, isExpanded);
            handleTextAreaChange?.(e);
          }}
        />

        {maxLength && (
          <span
            className={clsx(
              count > maxLength ? variantConfig.errorTextClasses : variantConfig.labelClasses,
              variantConfig.counterClasses,
            )}
          >
            {count}/{maxLength}
          </span>
        )}

        {/* Expand Toggle */}
        <div className="z-2000 absolute left-2 bottom-1 text-sm text-blue-500">
          <Button
            variant="tag"
            label={isExpanded ? "Shrink" : "Expand"}
            iconLeft={isExpanded ? ChevronsDownUpIcon: ChevronsUpDownIcon}
            type="button"
            onClick={toggleExpand}
            className="!bg-transparent !border-none !h-0 !pt-6 opacity-60 hover:opacity-100"
          />
        </div>
      </div>
    ),

    selectCustom: (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <CustomSelect
            {...field}
            options={options}
            placeholder={placeholder}
            Icon={Icon}
            onChange={(value) => {
              field.onChange(value);
              props.onChange?.(value);
            }}
          />
        )}
      />
    ),
  };

  return elementMap[variant] || elementMap.input;
};

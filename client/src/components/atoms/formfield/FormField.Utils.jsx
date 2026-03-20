import CustomSelect from "./CustomSelect";
import { Controller } from 'react-hook-form';
import clsx from "clsx";
import Button from "../button/Button";
import { CollapseArrowIcon, CollapseArrowIconType, ExpandArrowIcon, ExpandArrowIconType } from "../../../assets/icons/system";

// Auto-resize textarea
// const autoResize = (e) => {
//   const element = e.target;

//   const maxHeight = parseInt(getComputedStyle(element).maxHeight);

//   // Temporarily turn off vertical scrollbar to measure natural height correctly
//   element.style.overflow = "hidden";

//   // If scrollHeight is well below maxHeight — safe to shrink
//   if (element.scrollHeight < maxHeight - 5) {
//     element.style.height = "auto"; 
//   }

//   // Now grow normally up to the natural height
//   element.style.height = element.scrollHeight + "px";

//   // If it has exceeded maxHeight — lock height & enable scroll
//   if (element.scrollHeight >= maxHeight) {
//     element.style.height = maxHeight + "px";
//     element.style.overflow = "auto";
//   }

//   // ➜ Calculate real scrollbar width
//     const scrollbarWidth = element.offsetWidth - element.clientWidth;

//   // ➜ Apply padding using real scrollbar width
//   element.style.paddingRight = `${scrollbarWidth}px`;
// };

// Auto-resize textarea with optional full expansion
// Features:
// - Automatically grows and shrinks as the user types
// - Respects max-height and enables scroll when exceeded
// - If `isExpanded` is true, expands to full content height and disables scroll
export const autoResize = (e, isExpanded) => {
  const element = e.target;

  // If expanded, let it grow naturally
  if (isExpanded) {
    element.style.height = "auto";
    element.style.height = element.scrollHeight + "px";
    element.style.overflowY = "visible"; // no scroll
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

// Merge useRef + RHF’s ref
const mergeRefs = (...refs) => {
  return (element) => {
    refs.forEach(ref => {
      if (!ref) return;
      if (typeof ref === 'function') ref(element);
      else ref.current = element;
    });
  };  
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
  error
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

    textarea: (
      <div className={clsx(variantConfig.baseClassesWrapper, error &&variantConfig.errorClasses, "!pb-10")} 
      onClick={() => {textareaRef.current?.focus()}}>
        <textarea
        ref={mergeRefs(textareaRef, registerRef)}
        placeholder={placeholder}
        className={clsx(
          variantConfig.baseClasses,
          isExpanded ? "!max-h-[none]" : ""
        )}
        {...registerProps}
        {...restProps}
        onInput={(e) => {
          autoResize(e, isExpanded);
          handleTextAreaChange?.(e);
        }}
      />
      {maxLength && (
        <span className={clsx(count > maxLength ? 
        variantConfig.errorTextClasses : variantConfig.labelClasses, variantConfig.counterClasses )}>
        {count}/{maxLength}
        </span>
        )}

        {/* Toggle Button */}
        <div className="z-2000 absolute left-2 bottom-1 text-sm text-blue-500" >
          <Button
            variant="tag"
            label={isExpanded ? "Shrink" : "Expand"}
            iconLeft={isExpanded? CollapseArrowIcon : ExpandArrowIcon}
            iconLeftType={isExpanded? CollapseArrowIconType : ExpandArrowIconType}
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
        render={({field}) =>(
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

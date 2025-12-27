import CustomSelect from "./CustomSelect";
import { Controller } from 'react-hook-form';
import clsx from "clsx";

// Auto-resize textarea
const autoResize = (e) => {
  const element = e.target;

  const maxHeight = parseInt(getComputedStyle(element).maxHeight);

  // Temporarily turn off vertical scrollbar to measure natural height correctly
  element.style.overflow = "hidden";

  // If scrollHeight is well below maxHeight — safe to shrink
  if (element.scrollHeight < maxHeight - 5) {
    element.style.height = "auto"; 
  }

  // Now grow normally up to the natural height
  element.style.height = element.scrollHeight + "px";

  // If it has exceeded maxHeight — lock height & enable scroll
  if (element.scrollHeight >= maxHeight) {
    element.style.height = maxHeight + "px";
    element.style.overflow = "auto";
  }

  // ➜ Calculate real scrollbar width
    const scrollbarWidth = element.offsetWidth - element.clientWidth;

  // ➜ Apply padding using real scrollbar width
  element.style.paddingRight = `${scrollbarWidth}px`;
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
    ...restProps
  } = props;
  const { ref: registerRef, ...registerProps } = register || {};

  const elementMap = {
    input: (
      <input
        type="text"
        placeholder={placeholder}
        className={classes}
        {...register}
        {...restProps}
      />
    ),

    email: (
      <input
        type="email"
        placeholder={placeholder}
        className={classes}
        {...register}
        {...restProps}
      />
    ),

    password: (
      <input
        type="password"
        placeholder={placeholder}
        className={classes}
        {...register}
        {...restProps}
      />
    ),

    textarea: (
      <div className={clsx(variantConfig.baseClassesWrapper, error &&variantConfig.errorClasses)} 
      onClick={() => {textareaRef.current?.focus()}}>
        <textarea
        ref={mergeRefs(textareaRef, registerRef)}
        placeholder={placeholder}
        className={clsx(variantConfig.baseClasses)}
        {...registerProps}
        {...restProps}
        onInput={(e) => {
          autoResize(e);
          handleTextAreaChange?.(e);
        }}
      />
      {maxLength && (
        <span className={clsx(count > maxLength ? 
        variantConfig.errorTextClasses : variantConfig.labelClasses, variantConfig.counterClasses )}>
        {count}/{maxLength}
        </span>
        )}
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
          />
        )}
      />
    ),
  };

  return elementMap[variant] || elementMap.input;
};

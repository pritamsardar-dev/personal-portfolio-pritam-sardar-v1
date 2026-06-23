import React, { useEffect, useRef, useState } from "react";

import clsx from "clsx";

import { customSelectClasses } from "./formField.config";

const CustomSelect = React.forwardRef(
  ({ placeholder, Icon, options = [], value, onChange, onBlur, name }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedOption = options.find((opt) => opt.value === value);

    // Forward selected value to React Hook Form
    const handleSelect = (option) => {
      onChange(option.value);
      setIsOpen(false);
    };

    return (
      <div className={customSelectClasses.wrapper} ref={dropdownRef}>
        <div className={customSelectClasses.selectedBoxParent} onClick={() => setIsOpen(!isOpen)}>
          {/* Selected Box */}
          <div
            className={customSelectClasses.selectedBox}
            ref={ref}
            name={name}
            onBlur={onBlur}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                setIsOpen(!isOpen);
              }
            }}
          >
            <span
              className={clsx(
                selectedOption
                  ? customSelectClasses.selectedBoxTextSelected
                  : customSelectClasses.selectedBoxTextDefault,
              )}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </span>

            {Icon && (
              <span
                className={clsx(
                  customSelectClasses.iconClasses,
                  isOpen && customSelectClasses.iconClassesOpened,
                )}
              >
                <Icon />
              </span>
            )}
          </div>

          {/* Dropdown List */}
          {isOpen && (
            <ul className={customSelectClasses.dropdownList}>
              {options.map((opt) => (
                <li
                  key={opt.value}
                  tabIndex={0}
                  onClick={() => handleSelect(opt)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSelect(opt);
                    }
                  }}
                  className={clsx(
                    customSelectClasses.option,
                    value === opt.value && customSelectClasses.selectedOption,
                  )}
                >
                  {opt.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  },
);

export default CustomSelect;

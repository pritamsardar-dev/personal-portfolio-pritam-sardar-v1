import { useState, useEffect } from "react";
import {SunIcon, MoonIcon} from '../../../assets/icons/system'

const ThemeToggle = () => {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    const dark = saved === "dark";
    setIsOn(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggle = () => {
    const next = !isOn;
    setIsOn(next);
    const themeName = next ? "dark" : "light";
    localStorage.setItem("theme", themeName);
    document.documentElement.classList.toggle("dark", next);
  };

  const iconClassesBase = `
    w-(--size-icon-button-element-mobile-diameter)
    sm:w-(--size-icon-button-element-tablet-diameter)
    lg:w-(--size-icon-button-element-desktop-diameter)
    h-auto
    cursor-pointer
  `;

  const iconClassesKnob = `
    ${iconClassesBase}
    text-(--color-icon-button-toggle-knob-icon-background) fill-(--color-icon-button-toggle-knob-icon-background)
  `;

  return (
    <button
      onClick={toggle}
      className="
        group relative flex items-center
        rounded-full transition-all duration-300
        w-(--size-icon-button-toggle-track-mobile-width)
        sm:w-(--size-icon-button-toggle-track-tablet-width)
        lg:w-(--size-icon-button-toggle-track-desktop-width)
        h-(--size-icon-button-toggle-track-mobile-height)
        sm:h-(--size-icon-button-toggle-track-tablet-height)
        lg:h-(--size-icon-button-toggle-track-desktop-height)
        
        border-(length:--border-icon-button-toggle-width) 
        border-(--color-icon-button-toggle-border) 
        bg-(--color-icon-button-toggle-tracker-background-default) 
        hover:bg-(--color-icon-button-toggle-tracker-background-hover)"
    >
      {/* Sun */}
      <span
        className={`
          ${iconClassesBase}
          absolute left-[10%] transition-all duration-300
          group-hover:scale-110
          text-(--color-icon-button-toggle-tracker-icon-border-default)
          fill-transparent
          group-hover:fill-(--color-icon-button-toggle-tracker-icon-background-hover)
          ${isOn ? "opacity-100 scale-100" : "opacity-0 scale-75"}
          
        `}
      >
        <SunIcon className="" />
      </span>
      
      {/* Moon */}
      <span
        className={`
          ${iconClassesBase}
          absolute right-[10%] transition-all duration-300
          text-(--color-icon-button-toggle-tracker-icon-border-default)
          group-hover:scale-110
          fill-transparent
          group-hover:fill-(--color-icon-button-toggle-tracker-icon-background-hover)
          ${isOn ? "opacity-0 scale-75" : "opacity-100 scale-100"}
          
        `}
      >
        <MoonIcon className="" />
      </span>

      {/* Knob */}
      <span
        className={`
          absolute top-1/2 -translate-y-1/2
          rounded-full shadow-md flex items-center justify-center
          transition-all duration-500 ease-[cubic-bezier(0.25,1.5,0.5,1)]
          w-(--size-icon-button-toggle-knob-mobile-diameter)
          sm:w-(--size-icon-button-toggle-knob-tablet-diameter)
          lg:w-(--size-icon-button-toggle-knob-desktop-diameter)
          h-(--size-icon-button-toggle-knob-mobile-diameter)
          sm:h-(--size-icon-button-toggle-knob-tablet-diameter)
          lg:h-(--size-icon-button-toggle-knob-desktop-diameter)
          bg-(--color-icon-button-toggle-knob-background)
          
          ${isOn
            ? "left-full -translate-x-full"
            : "left-0 translate-x-0"
          }
        `}
      >
        {isOn ? (
          <MoonIcon className={iconClassesKnob} />
        ) : (
          <SunIcon className={iconClassesKnob} />
        )}
      </span>

    </button>
  );
};

export default ThemeToggle;

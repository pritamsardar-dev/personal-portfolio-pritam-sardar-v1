import React from "react";
import clsx from "clsx";
import { iconPaintClasses } from "./icon.paint.config";

export const IconRenderer = ({ svg, type = "stroke", className = "" }) => {
  if (!svg) return null;

  const paintClasses = iconPaintClasses[type] || "";

  const finalClassName = clsx(className, paintClasses);

  // JSX Component
  if (typeof svg === "function") {
    return React.createElement(svg, { className: finalClassName });
  }

  // Reject URIs
  if (typeof svg === "string" && svg.trim().startsWith("data:")) {
    console.warn("SVG URI detected. Use raw SVG markup instead.");
    return null;
  }

  // Raw SVG markup
  if (typeof svg === "string" && svg.trim().startsWith("<svg")) {
    return (
      <span
        className={finalClassName}
        dangerouslySetInnerHTML={{ __html: sanitize(svg) }}
      />
    );
  }

  return null;
};


// Utility: Remove unwanted inline width/height/fill/steoke coming from upload icons
const sanitize = (svg) =>
    svg
    .replace(/\s*width="[^"]*"/g, "")
    .replace(/\s*height="[^"]*"/g, "")
    .replace(/\s*fill="[^"]*"/g, "")
    .replace(/\s*stroke-width="[^"]*"/g, "")
    .replace(/\s*fill-opacity="[^"]*"/g, "")
    .replace(/stroke="[^"]*"/g, 'stroke="currentColor"')
    .replace(/\sstroke-\s*/g, " ") // Figma/Illustrator sometimes break attributes

    // Wrap in JSX
    .replace(/stroke-linecap=/g, "strokeLinecap=")
    .replace(/stroke-linejoin=/g, "strokeLinejoin=")
    .replace(/stroke-opacity=/g, "strokeOpacity=")
  
    

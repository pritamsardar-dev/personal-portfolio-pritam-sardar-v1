import React, { useEffect, useState } from "react";

import clsx from "clsx";

import { iconPaintClasses } from "./icon.paint.config";

const svgCache = {};

export const IconRenderer = ({ src, type = "stroke", className = "" }) => {
  const [fetchedSvg, setFetchedSvg] = useState("");

  const paintClasses = iconPaintClasses[type] || "";
  const finalClassName = clsx(className, paintClasses);

  const isUrl =
    typeof src === "string" &&
    (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("blob:"));

  useEffect(() => {
    if (!isUrl) return;

    let isMounted = true;

    const loadSvg = async () => {
      try {
        // Return cached SVG if available
        if (svgCache[src]) {
          if (isMounted) setFetchedSvg(svgCache[src]);
          return;
        }

        const res = await fetch(src);
        const data = await res.text();
        const cleaned = sanitize(data);

        svgCache[src] = cleaned;

        if (isMounted) setFetchedSvg(cleaned);
      } catch (err) {
        console.error("SVG fetch error:", err);
      }
    };

    loadSvg();

    return () => {
      isMounted = false;
    };
  }, [src, isUrl]);

  // JSX component passed as src
  if (typeof src === "function") {
    return React.createElement(src, { className: finalClassName });
  }

  // Reject data URIs
  if (typeof src === "string" && src.trim().startsWith("data:")) {
    console.warn("SVG URI detected. Use raw SVG markup instead.");
    return null;
  }

  // URL-fetched SVG
  if (isUrl) {
    if (!fetchedSvg) return null;

    return <span className={clsx(finalClassName, "[&>svg]:w-full [&>svg]:h-full [&>svg]:block")} dangerouslySetInnerHTML={{ __html: fetchedSvg }} />;
  }

  // Raw SVG string
  if (typeof src === "string" && src.trim().startsWith("<svg")) {
    return <span className={clsx(finalClassName, "[&>svg]:w-full [&>svg]:h-full [&>svg]:block")} dangerouslySetInnerHTML={{ __html: sanitize(src) }} />;
  }

  return null;
};

const sanitize = (src) =>
  src
    .replace(/\s*width="[^"]*"/g, "")
    .replace(/\s*height="[^"]*"/g, "")
    .replace(/\s*fill="[^"]*"/g, "")
    .replace(/stroke="[^"]*"/g, 'stroke="currentColor"')
    .replace(/\s*stroke-width="[^"]*"/g, "")
    .replace(/\s*fill-opacity="[^"]*"/g, "")
    .replace(/stroke-linecap=/g, "strokeLinecap=")
    .replace(/stroke-linejoin=/g, "strokeLinejoin=")
    .replace(/stroke-opacity=/g, "strokeOpacity=");

import React from 'react';

export const IconRenderer = ({svg, className=""}) => {
    // Case 1: SVG is React component
    if(typeof svg === "function") {
        return React.createElement(svg, {className});
    }

    // Case 2: SVG is a raw string form API/DB
    if(typeof svg === "string") {
        return (
            <span
                className={className}
                dangerouslySetInnerHTML={{__html: sanitize(svg)}}
            />
        )
    }
};

// Utility: Remove unwanted inline width/height/fill/steoke coming from upload icons
const sanitize = (svg) =>
    svg
    .replace(/\s*width="[^"]*"/g, "")
    .replace(/\s*height="[^"]*"/g, "")
    .replace(/\s*fill="[^"]*"/g, "")
    .replace(/\s*stroke-width="[^"]*"/g, "")
    .replace(/stroke="[^"]*"/g, 'stroke="currentColor"')
    .replace(/\sstroke-\s*/g, " ") // Figma/Illustrator sometimes break attributes

    // Wrap in JSX
    .replace(/stroke-linecap=/g, "strokeLinecap=")
    .replace(/stroke-linejoin=/g, "strokeLinejoin=")
    .replace(/stroke-opacity=/g, "strokeOpacity=");
    

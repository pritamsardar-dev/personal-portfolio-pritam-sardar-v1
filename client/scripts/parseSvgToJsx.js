import { readdirSync, readFileSync, writeFileSync } from "fs";
import { basename, join } from "path";

const svgFolder = "src/assets/icons-raw/system"; 
const outputFolder = "src/assets/icons/system";

readdirSync(svgFolder).forEach((file) => {
    if (!file.endsWith(".svg")) return;

    const svgName = basename(file, ".svg");
    const componentName = 
        svgName.replace(/(^\w|-\w)/g, (c) => c.replace("-", "").toUpperCase()) + "Icon";

    let svg = readFileSync(join(svgFolder, file), "utf8");

    // Detect type
    const hasStroke = /stroke="/.test(svg);
    const hasFill = /fill="(?!none)/.test(svg);

    let type = "unknown";
    if (hasStroke && !hasFill) type = "stroke";
    else if (hasFill && !hasStroke) type = "fill";
    else if (hasStroke && hasFill) type = "mixed";

    // Clean SVG
    svg = svg
        .replace(/\s*width="[^"]*"/g, "")
        .replace(/\s*height="[^"]*"/g, "")
        .replace(/\s*fill-opacity="[^"]*"/g, "")
        .replace(/\s*stroke-width="[^"]*"/g, "")
        .replace(/stroke="[^"]*"/g, 'stroke="currentColor"')
        .replace(/\sstroke-\s*/g, " ")
        // Path-level fill → currentColor (ignore fill="none")
        .replace(
            /(<(path|circle|rect|polygon|line|polyline)[^>]*?)\sfill="(?!none)[^"]*"/g,
            '$1 fill="currentColor"'
        );

    // JSX attributes
    svg = svg
        .replace(/stroke-linecap=/g, "strokeLinecap=")
        .replace(/stroke-linejoin=/g, "strokeLinejoin=")
        .replace(/stroke-opacity=/g, "strokeOpacity=");

    const jsxContent = `import * as React from "react";

const ${componentName} = (props) => (
${svg.replace(
/<svg/,
'<svg {...props}'   
)}
);

export default ${componentName};
export const ${componentName}Type = "${type}";
`;

    writeFileSync(join(outputFolder, `${componentName}.jsx`), jsxContent);
    console.log(`Created ${componentName}.jsx with type "${type}"`);
});

console.log("All SVGs converted to JSX icons with prefixed type metadata!");

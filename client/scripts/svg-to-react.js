import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "fs";
import { basename, join } from "path";

const svgFolder = "src/assets/icons-raw/system"; 
const outputFolder = "src/assets/icons/system";

readdirSync(svgFolder).forEach((file) => {
    if (!file.endsWith(".svg")) return;

    const svgName = basename(file, ".svg");
    const componentName = 
    svgName.replace(/(^\w|-\w)/g, (c) => c.replace("-", "").toUpperCase()) + "Icon";

    let svg = readFileSync(join(svgFolder, file), "utf8");

    // Clean the SVG
    svg = svg
    .replace(/\s*width="[^"]*"/g, "")
    .replace(/\s*height="[^"]*"/g, "")
    .replace(/\s*fill="[^"]*"/g, "")
    .replace(/\s*stroke-width="[^"]*"/g, "")
    .replace(/stroke="[^"]*"/g, 'stroke="currentColor"');

    // Wrap in JSX
    svg = svg.replace(/stroke-linecap=/g, "strokeLinecap=");
    svg = svg.replace(/stroke-linejoin=/g, "strokeLinejoin=");

    const jsxContent = `import * as React from "react";

const ${componentName} = (props) => (
${svg.replace(
/<svg/,
'<svg {...props}'   
)}
);

export default ${componentName};
`;

    writeFileSync(join(outputFolder, `${componentName}.jsx`), jsxContent);
    console.log(`Created ${componentName}.jsx`);
});

console.log("All SVGs converted to JSX icons!");

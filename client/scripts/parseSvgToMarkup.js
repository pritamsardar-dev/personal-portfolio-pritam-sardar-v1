import { readdirSync, readFileSync, writeFileSync } from "fs";
import { basename, join } from "path";

const svgFolder = "src/assets/icons-raw/content";
const outputFolder = "src/assets/icons/content";

readdirSync(svgFolder).forEach((file) => {
  if (!file.endsWith(".svg")) return;

  const rawName = basename(file, ".svg");
  const name = camel(rawName);

  let svg = readFileSync(join(svgFolder, file), "utf8");

  // Detect icon type BEFORE stripping attributes
  const hasStroke = /stroke="/.test(svg);
  const hasFill = /fill="(?!none)/.test(svg);

  let type = "unknown";
  if (hasStroke && !hasFill) type = "stroke";
  else if (hasFill && !hasStroke) type = "fill";
  else if (hasStroke && hasFill) type = "mixed";

  //  Normalize SVG
  svg = svg
    .replace(/\s*width="[^"]*"/g, "")
    .replace(/\s*height="[^"]*"/g, "")
    .replace(/\s*fill-opacity="[^"]*"/g, "")
    .replace(/\s*stroke-width="[^"]*"/g, "")
    .replace(/stroke="[^"]*"/g, 'stroke="currentColor"')
    .replace(/\sstroke-\s*/g, " ");

  // JSX-compatible attributes
  svg = svg
    .replace(/stroke-linecap=/g, "strokeLinecap=")
    .replace(/stroke-linejoin=/g, "strokeLinejoin=")
    .replace(/stroke-opacity=/g, "strokeOpacity=");

  const output = `export const ${name} = {
  svg: \`
${svg}
  \`,
  type: "${type}"
};
`;

  writeFileSync(join(outputFolder, `${name}.js`), output);
});

function camel(str) {
  return str.replace(/-([a-zA-Z])/g, (_, c) => c.toUpperCase());
}

console.log("All SVGs converted with embedded icon metadata");

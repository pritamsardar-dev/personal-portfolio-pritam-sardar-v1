import { readdirSync, writeFileSync } from "fs";
import { join, basename } from "path";

const iconsFolder = "src/assets/icons/content";
const indexFile = join(iconsFolder, "index.js");

const files = readdirSync(iconsFolder).filter(
  (file) => file.endsWith(".js") && file !== "index.js",
);

// Build named import lines
let content = files
  .map((file) => {
    const name = basename(file, ".js");
    return `import { ${name} } from './${name}';`;
  })
  .join("\n");

// Build named export block
content += "\n\nexport {\n" + files.map((file) => basename(file, ".js")).join(",\n") + "\n};\n";

writeFileSync(indexFile, content, "utf8");
console.log(`index.js generated for ${files.length} SVG content files`);

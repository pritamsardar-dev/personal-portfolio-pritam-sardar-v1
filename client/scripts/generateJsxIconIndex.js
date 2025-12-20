import { readdirSync, writeFileSync } from "fs";
import { join, basename } from "path";

const iconsFolder = "src/assets/icons/system";
const indexFile = join(iconsFolder, "index.js");

// Read all JSX files in the folder
const files = readdirSync(iconsFolder).filter(file => file.endsWith(".jsx"));

// Generate import lines for both component and type
let content = files.map(file => {
  const name = basename(file, ".jsx"); 
  return `import ${name}, { ${name}Type } from './${name}';`;
}).join("\n");

// Generate export block
content += "\n\nexport {\n" + files.map(file => {
  const name = basename(file, ".jsx"); 
  return `${name}, ${name}Type`;
}).join(",\n") + "\n};\n";

// Write index.js
writeFileSync(indexFile, content, "utf8");
console.log(`index.js generated with ${files.length} icons and their types`);

import { readdirSync, writeFileSync } from "fs";
import { join, basename } from "path";

const iconsFolder = "src/assets/icons/system";
const indexFile = join(iconsFolder, "index.js");

// Read all files in the folder
const files = readdirSync(iconsFolder).filter(file => file.endsWith(".jsx"));

// Generate import & export lines
let content = files.map(file => {
  const name = basename(file, ".jsx"); 
  return `import ${name} from './${name}';`;
}).join("\n");

content += "\n\nexport {\n" + files.map(file => basename(file, ".jsx")).join(",\n") + "\n};\n";

// Write index.js
writeFileSync(indexFile, content, "utf8");
console.log(`index.js generated with ${files.length} icons`);

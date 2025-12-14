import { readdirSync, writeFileSync } from "fs";
import { join, basename } from "path";

const iconsFolder = "src/assets/icons/content"; 
const indexFile = join(iconsFolder, "index.js");

// Read all JS files in the folder
const files = readdirSync(iconsFolder).filter(file => file.endsWith(".js") && file !== "index.js");

// Generate import lines
let content = files
  .map(file => {
    const name = basename(file, ".js");
    return `import { ${name} } from './${name}';`;
  })
  .join("\n");

// Generate export block
content += "\n\nexport {\n" + files.map(file => basename(file, ".js")).join(",\n") + "\n};\n";

// Write index.js
writeFileSync(indexFile, content, "utf8");
console.log(`index.js generated for ${files.length} SVG content files`);

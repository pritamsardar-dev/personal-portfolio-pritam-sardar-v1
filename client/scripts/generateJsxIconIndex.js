import { readdirSync, writeFileSync } from "fs";
import { join, basename } from "path";

const iconsFolder = "src/assets/icons/system";
const indexFile = join(iconsFolder, "index.js");

const files = readdirSync(iconsFolder).filter((file) => file.endsWith(".jsx"));

// Build import lines for each icon component and its type
let content = files
  .map((file) => {
    const name = basename(file, ".jsx");
    return `import ${name}, { ${name}Type } from './${name}';`;
  })
  .join("\n");

// Build named export block
content +=
  "\n\nexport {\n" +
  files
    .map((file) => {
      const name = basename(file, ".jsx");
      return `${name}, ${name}Type`;
    })
    .join(",\n") +
  "\n};\n";

writeFileSync(indexFile, content, "utf8");
console.log(`index.js generated with ${files.length} icons and their types`);

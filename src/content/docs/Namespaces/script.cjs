const fs = require("fs");
const path = require("path");

const folderPath = "./"; // change to the folder you want to scan
const outputFile = "md-files.txt";

function getMdFiles(dir) {
  let results = [];
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results = results.concat(getMdFiles(fullPath));
    } else if (path.extname(file) === ".md") {
      results.push(file); // only filename
    }
  });

  return results;
}

const mdFiles = getMdFiles(folderPath);

fs.writeFileSync(outputFile, mdFiles.join("\n"));

console.log(`Saved ${mdFiles.length} file names to ${outputFile}`);

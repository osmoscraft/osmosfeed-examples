import path from "path";
import fs from "fs-extra";


async function copy() {
  const exampleRoot = path.resolve("examples");
  const exampleFolders = await fs.readdir(exampleRoot);
  await Promise.all(exampleFolders.map(exampleFolder => {
    const copyFrom = path.join(exampleRoot, exampleFolder, "public");
    const copyTo = path.resolve(exampleRoot, `../dist/${exampleFolder}`);
    return fs.copy(copyFrom, copyTo);
  }));
} 

copy();
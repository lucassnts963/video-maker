import fs from "fs";

import { Content } from "./input";

const contentFilePath = "./content.json";

function save(content: Content) {
  const contentString = JSON.stringify(content);

  return fs.writeFileSync(contentFilePath, contentString);
}

function load(content: Content) {
  const fileBuffer = fs.readFileSync(contentFilePath, "utf-8");
  const contentJson = JSON.parse(fileBuffer);

  return contentJson;
}

export { save, load };

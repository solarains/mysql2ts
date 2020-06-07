import * as fs from "fs";

fs.copyFileSync("package.json", "dist/package.json");
fs.copyFileSync("README.md", "dist/README.md");
fs.rmSync("dist/entity", { recursive: true, force: true });

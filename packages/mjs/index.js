"use strict";
import os from "os";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// The __filename and __dirname variables are not available in ES modules.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log("Hello from ECMAScript package");
console.log("OS:", os.platform());
console.log("Path:", resolve(__dirname));
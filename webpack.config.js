import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export const target = "node";
export const entry = "./src/index.cjs";
export const externals = {
  peer: "require('peer')",
};
export const output = {
  filename: "main.js",
  path: path(__dirname, "dist"),
};
export const mode = "development";
export const resolve = {
  extensions: [".js", ".jsx"],
  fallback: {
    path: false,
    buffer: false,
    crypto: false,
    url: false,
    bufferutil: false,
    "utf-8-validate": false,
    util: false,
    fs: false,
    string_decoder: false,
    querystring: false,
    http: false,
    net: false,
    os: false,
    zlib: false,
    stream: false,
  },
};

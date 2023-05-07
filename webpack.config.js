import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default {
  target: "node",
  entry: "./src/index.js",
  externals: {
    peer: "require('peer')",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  resolve: {
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
  },
};



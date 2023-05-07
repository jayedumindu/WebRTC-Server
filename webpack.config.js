const path = require("path");

module.exports = {
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

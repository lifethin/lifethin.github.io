const path = require("path");

module.exports = {
  entry: "./src/0620.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },
  mode: "production",
};

const pathLib = require("path")

const config = {
  entry: {
    browser: "./src/browser.ts",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          transpileOnly: true,
          compilerOptions: {
            declaration: false,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  output: {
    filename: "[name].js",
    path: pathLib.resolve(__dirname, "build"),
  },
}

if (process.env.BUILD_PROD) {
  config.mode = "production"
  config.output.path = pathLib.resolve(__dirname, "dist", "bundle")
} else {
  config.mode = "development"
  config.devtool = "eval-source-map"
}

module.exports = config

const build = require("./config/esbuild.defaults.js")

const outputFolder = "output"


const esbuildOptions = {
    entryPoints: [
      "frontend/javascript/index.js"
    ],
    format: "esm"
  }

build(outputFolder, esbuildOptions)

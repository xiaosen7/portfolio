/* eslint-disable import/no-anonymous-default-export */

import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import preserveDirectives from "rollup-plugin-preserve-directives";
import { typescriptPaths } from "rollup-plugin-typescript-paths";
import webWorkerLoader from "rollup-plugin-web-worker-loader";

/** @type {import('rollup').RollupOptions} */
export default {
  input: [
    "./src/index.ts",
    "./src/index.css",
    "./src/client/workers/calculate-hash/worker.ts",
  ],
  output: {
    format: "esm",
    preserveModules: true,
    preserveModulesRoot: "./src",
    dir: "./esm",
    sourcemap: true,
  },
  watch: {
    include: "./src",
    buildDelay: 300,
  },
  plugins: [
    typescript({ jsx: "react" }),
    resolve(),
    commonjs(),
    typescriptPaths(),
    peerDepsExternal({
      includeDependencies: true,
    }),
    preserveDirectives(),
    webWorkerLoader(),
    postcss({ extract: true }),
  ],
  onwarn: (warning, warn) => {
    if (warning.code === "MODULE_LEVEL_DIRECTIVE") return;
    warn(warning);
  },
};

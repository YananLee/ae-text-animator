import { defineConfig } from "tsup";

const shared = {
  entry: ["src/index.ts"],
  sourcemap: true,
  minify: false,
  platform: "browser" as const,
};

export default defineConfig([
  {
    ...shared,
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    external: ["gsap"],
    outExtension({ format }) {
      return { js: format === "cjs" ? ".cjs" : ".js" };
    },
  },
  {
    ...shared,
    format: ["iife"],
    dts: false,
    clean: false,
    globalName: "AETextAnimator",
    esbuildOptions(options) {
      options.alias = {
        gsap: "data:text/javascript,export const gsap = globalThis.gsap;",
      };
    },
    outExtension() {
      return { js: ".global.js" };
    },
  },
]);

import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./index.ts"],
  outDir: "./dist",
  format: ["esm", "cjs", "iife"],
  shims: true,
  clean: true,
  dts: true,
});

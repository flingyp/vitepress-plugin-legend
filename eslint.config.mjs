import { defineConfig } from "eslint/config";
import init from "@flypeng/eslint-config";

export default defineConfig([
  ...init(),
  {
    ignores: ["core/dist"],
  },
]);

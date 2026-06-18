import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import("eslint").Linter.Config[]} */
const config = [
  {
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];

export default config;

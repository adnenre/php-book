// ec.config.mjs
import { defineEcConfig } from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

export default defineEcConfig({
  themes: ["slack-dark"],
  plugins: [pluginLineNumbers()],
  defaultProps: {
    showLineNumbers: true, // Enable line numbers globally
  },
});

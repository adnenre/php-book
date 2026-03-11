// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
//import tailwindcss from "@tailwindcss/vite";
import starlightThemeNova from "starlight-theme-nova";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeNova()],
      title: "PHP BOOK",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/adnenre/php-book" }],
      sidebar: [
        {
          label: "PHP Book",
          autogenerate: { directory: "php-book" },
          collapsed: true,
        },
        {
          label: "PHP Fondamental",
          autogenerate: { directory: "php-fondamental" },
          collapsed: true,
        },
        {
          label: "Control Structures",
          autogenerate: { directory: "control-structures" },
          collapsed: true,
        },
        {
          label: "Functions",
          autogenerate: { directory: "Functions" },
          collapsed: true,
        },
        {
          label: "Arrays",
          autogenerate: { directory: "Arrays" },
          collapsed: true,
        },
        {
          label: "OOP in PHP",
          autogenerate: { directory: "Object-Oriented-Programming" },
          collapsed: true,
        },
        {
          label: "Advanced OOP",
          autogenerate: { directory: "Advanced-OOP-Concepts" },
          collapsed: true,
        },

        {
          label: "Error and Exceptions",
          autogenerate: { directory: "Error-and-Exceptions-Handling" },
          collapsed: true,
        },
        {
          label: "Namespaces",
          autogenerate: { directory: "Namespaces" },
          collapsed: true,
        },
        {
          label: "File and Directories",
          autogenerate: { directory: "Working-with-File-and-Directories" },
          collapsed: true,
        },
        {
          label: "String Manipulation",
          autogenerate: { directory: "String-Manipulation" },
          collapsed: true,
        },
        {
          label: "Date and Time",
          autogenerate: { directory: "Date-and-Time" },
          collapsed: true,
        },
        {
          label: "Web dev with PHP",
          autogenerate: { directory: "Web-dev-with-PHP" },
          collapsed: true,
        },
        {
          label: "Database Integration",
          autogenerate: { directory: "Database-Integration" },
          collapsed: true,
        },
        {
          label: "Security",
          autogenerate: { directory: "Security" },
          collapsed: true,
        },
        {
          label: "Performance and Optimization",
          autogenerate: { directory: "Performance-and-Optimization" },
          collapsed: true,
        },
      ],
      expressiveCode: {
        shiki: true,

        // Use Nord theme for all code blocks
      },
    }),
  ],
});

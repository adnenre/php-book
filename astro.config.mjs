// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
//import tailwindcss from "@tailwindcss/vite";
import starlightThemeNova from "starlight-theme-nova";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeNova(/* options */)],
      title: "PHP BOOK",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/adnenre/php-book" }],
      sidebar: [
        {
          label: "PHP Book",
          autogenerate: { directory: "php-book" },
        },
        {
          label: "PHP Fondamental",
          autogenerate: { directory: "php-fondamental" },
        },
        {
          label: "Control Structures",
          autogenerate: { directory: "control-structures" },
        },
        {
          label: "Functions",
          autogenerate: { directory: "Functions" },
        },
        {
          label: "Arrays",
          autogenerate: { directory: "Arrays" },
        },
        {
          label: "OOP in PHP",
          autogenerate: { directory: "Object-Oriented-Programming" },
        },
        {
          label: "Advanced OOP",
          autogenerate: { directory: "Advanced-OOP-Concepts" },
        },

        {
          label: "Error and Exceptions",
          autogenerate: { directory: "Error-and-Exceptions-Handling" },
        },
        {
          label: "Namespaces",
          autogenerate: { directory: "Namespaces" },
        },
        {
          label: "File and Directories",
          autogenerate: { directory: "Working-with-File-and-Directories" },
        },
        {
          label: "String Manipulation",
          autogenerate: { directory: "String-Manipulation" },
        },
        {
          label: "Date and Time",
          autogenerate: { directory: "Date-and-Time" },
        },
        {
          label: "Web dev with PHP",
          autogenerate: { directory: "Web-dev-with-PHP" },
        },
        {
          label: "Database Integration",
          autogenerate: { directory: "Database-Integration" },
        },
        {
          label: "Security",
          autogenerate: { directory: "Security" },
        },
        {
          label: "Performance and Optimization",
          autogenerate: { directory: "Performance-and-Optimization" },
        },
      ],
      expressiveCode: {
        themes: ["nord"], // Use Nord theme for all code blocks
      },
    }),
  ],
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-icon",
  ],

  app: {
    head: {
      title: "Witcher Personal",
      meta: [
        { name: "name", content: "Witcher Personal"},
        { name: "keywords", content: "Witcher, Developer, Developer Witcher, The Witcher" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#c92a2a" },
        { name: "description", content: "Witcher Personal Website, projects, about and more..." },
        { name: "og:title", content: "Witcher Personal" },
        { name: "og:description", content: "Witcher Personal Website, projects, about and more..." },
        { name: "og:type", content: "website" },
        { name: "og:url", content: "https://witcherdev.net" },
        { name: "og:image", content: "https://witcherdev.net/favicon.ico" },
        { name: "copyright", content: "Witcher"},
        { name: "author", content: "Witcher" },
      ]
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  devServer: {
    port: 5173
  },

  css: ["@/assets/style.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: { enabled: true },
})

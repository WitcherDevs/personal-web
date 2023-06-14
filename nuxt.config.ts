// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-icon",
  ],

  app: {
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

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/global.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["nuxt-icon"],
  app: {
    pageTransition: { name: "fade", mode: "out-in" },
    head: {
      title: "Witcher Personal Website",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "A website where you can access information about me and is used for personal purposes. Developed by Witcher.",
        },
        {
          name: "keywords",
          content:
            "Witcher, Witcher Personal Website, Witcher Website, developer, witcher, witcherdev",
        },
        {
          name: "og:title",
          content:
            "A website where you can access information about me and is used for personal purposes. Developed by Witcher.",
        },
        {
          name: "name",
          content: "Witcher Personal Website",
        },
        {
          name: "og:description",
          content:
            "A website where you can access information about me and is used for personal purposes. Developed by Witcher.",
        },
        {
          name: "icon",
          content: "https://witcherdev.net/favicon.ico",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:url",
          content: "https://witcherdev.net",
        },
        {
          name: "copyright",
          content: "Witcher",
        },
        {
          name: "author",
          content: "Witcher",
        },
        {
          name: "theme-color",
          content: "#e50d25",
        },
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    },
  },
});

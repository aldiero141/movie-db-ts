// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // The private keys which are only available server-side
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },

  modules: ["@nuxt-alt/proxy", "@pinia/nuxt"],
  proxy: {
    proxies: {
      "/api/": {
        target: `${process.env.API_BASE_URL}`,
        secure: true,
        changeOrigin: true,
      },
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_KEY: process.env.API_KEY,
      API_BASE_URL: process.env.API_BASE_URL,
      API_BASE_IMG_URL: process.env.API_BASE_IMG_URL,
    },
  },

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
        target: process.env.API_BASE_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/"),
        // prependPath: true,
        // secure: true,
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

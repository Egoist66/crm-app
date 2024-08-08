// https://nuxt.com/docs/api/configuration/nuxt-config

//https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css

// @ts-ignore
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  experimental: {
    viewTransition: true,
    asyncContext: true,
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [{ rel: "stylesheet", href: "" }],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },

  css: ["~/assets/css/global.scss", "~/assets/css/tailwind.css"],

  vue: {
    propsDestructure: true,
  },

  runtimeConfig: {
    // The private keys which are only available server-side

    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
      APP_WRITE_ID: "66a93a3d0025e15eec01",
      DB_ID: "crm-db",
      COLLECTION_DEALS: "deals",
      COLLECTION_CUSTOMERS: "customers",
      COLLECTION_COMMENTS: "comments",
      STORAGE_ID: "crm-storage",
    },
  },

  $development: {
    devtools: { enabled: true },
  },

  devtools: {
    timeline: {
      enabled: true,
    },
  },

  modules: [
    "shadcn-nuxt",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Lato: [300, 400, 700],
          ital: [300],
        },
      },
    ],
    "@nuxt/icon",
    [
      "@vee-validate/nuxt",
      {
        // disable or enable auto imports
        autoImports: true,
        
      },
    ],
  ],
  shadcn: {
    prefix: "Ui",
    componentDir: "./components/ui",
  },
  pinia: {
    storesDirs: ["./store/**"],
  },
});

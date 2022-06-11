import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@formkit/nuxt",
    "@vueuse/nuxt",
  ],
  meta: {
    script: [
      {
       src:"https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"
      },
      {
        src:"https://cdn.jsdelivr.net/npm/appwrite@8.0.1"
      }
    ],
    meta: [],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Prompt:400&amp;subset=latin",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/@formkit/themes@next/dist/genesis/theme.css",
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css",
      },
    ],
  },
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    //'bulma',
    "sweetalert2/dist/sweetalert2.css",
    // CSS file in the project
    "@/assets/css/main.css",
    // SCSS file in the project
    //'@/assets/css/main.scss'
  ],
  runtimeConfig: {
    // The private keys which are only available within server-side
    END_POINT: process.env.END_POINT,
    PROJECT_ID: process.env.PROJECT_ID,
    API_KEY: process.env.API_KEY,
    DOC_TX_ID: process.env.DOC_TX_ID,
        // Keys within public, will be also exposed to the client-side
    public: {
      baseURL: "/",
      END_POINT: process.env.END_POINT,
      PROJECT_ID: process.env.PROJECT_ID,
      DOC_TX_ID: process.env.DOC_TX_ID,
    },
  },
});

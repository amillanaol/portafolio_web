/*
 * ARQUITECTURA CLEAN FRONTEND - REGLAS:
 * - components importan SOLO desde composables
 * - composables importan desde /data/ y /types/
 * - /data/ implementa las interfaces de /types/
 * - /types/ no tiene dependencias externas
 */
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // TypeScript strict
  typescript: {
    strict: true,
    typeCheck: false,
  },

  // Components - scan all subdirectories
  components: [
    { path: '~/components', pathPrefix: false },
  ],

  // Tailwind CSS con dark mode
  modules: ['@nuxtjs/tailwindcss'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    config: {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: {
              50: '#f0f9ff',
              100: '#e0f2fe',
              200: '#bae6fd',
              300: '#7dd3fc',
              400: '#38bdf8',
              500: '#0ea5e9',
              600: '#0284c7',
              700: '#0369a1',
              800: '#075985',
              900: '#0c4a6e',
              950: '#082f49',
            },
          },
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
          },
        },
      },
      plugins: [],
    },
  },

  // Generación estática (SSG)
  ssr: false,
  nitro: {
    prerender: {
      routes: ['/'],
      failOnError: false,
    },
  },

  // SEO
  app: {
    baseURL: process.env.BASE_URL || '/landing-page/',
    head: {
      title: 'Alexis Millanao | Desarrollador Backend & Automatización',
      htmlAttrs: { lang: 'es' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Servicios de desarrollo backend, APIs REST, automatización e infraestructura DevOps. +10 años de experiencia.' },
      ],
    },
  },
})

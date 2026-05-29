/*
 * ARQUITECTURA CLEAN FRONTEND - REGLAS:
 * - components importan SOLO desde composables
 * - composables importan desde /data/ y /types/
 * - /data/ implementa las interfaces de /types/
 * - /types/ no tiene dependencias externas
 */
const baseURL = process.env.BASE_URL || '/landing-page/'

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
            dark: '#121212',
            gold: '#B29E10',
            primary: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              300: '#93c5fd',
              400: '#60a5fa',
              500: '#3B82F6', // Azul eléctrico solicitado
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a',
              950: '#172554',
            },
          },
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
            display: ['Montserrat', 'sans-serif'],
          },
        },
      },
      plugins: [],
    },
  },

  // Runtime config expuesta al cliente
  runtimeConfig: {
    public: {
      baseURL,
    },
  },

  // SPA pura - prerender tolerante a bug ESM Windows
  ssr: false,
  nitro: {
    prerender: {
      failOnError: false,
    },
  },

  // SEO
  app: {
    baseURL,
    head: {
      title: 'Alexis Millanao | Desarrollador Backend & Automatización',
      htmlAttrs: { lang: 'es' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: `${baseURL}favicon_badge.svg` },
        { rel: 'icon', type: 'image/x-icon', href: `${baseURL}icono.ico`, sizes: 'any' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@700;800&display=swap' }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Servicios de desarrollo backend, APIs REST, automatización e infraestructura DevOps. +10 años de experiencia.' },
      ],
    },
  },
})

<script setup lang="ts">
const { about } = useAbout()
const currentYear = new Date().getFullYear()

const quickLinks = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Stack', href: '#stack' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
]
</script>

<template>
  <footer class="bg-gray-950 border-t border-gray-800">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div data-reveal>
          <h3 class="text-lg font-semibold text-white mb-3">
            {{ about.name }}
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            {{ about.summary.split('.')[0] }}.
          </p>
        </div>

        <div data-reveal>
          <h3 class="text-lg font-semibold text-white mb-3">
            Enlaces
          </h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.href">
              <a
                :href="link.href"
                class="text-gray-400 hover:text-primary-400 transition-colors text-sm"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <div data-reveal>
          <h3 class="text-lg font-semibold text-white mb-3">
            Conectar
          </h3>
          <div class="flex flex-col gap-2">
            <a
              :href="about.github"
              target="_blank"
              class="text-gray-400 hover:text-primary-400 transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              :href="about.patreon"
              target="_blank"
              class="text-gray-400 hover:text-primary-400 transition-colors text-sm"
            >
              Patreon
            </a>
            <a
              :href="about.buymeacoffee"
              target="_blank"
              class="text-gray-400 hover:text-primary-400 transition-colors text-sm"
            >
              Buy Me a Coffee
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p class="text-gray-500 text-xs">
          &copy; {{ currentYear }} {{ about.name }}. Todos los derechos reservados.
        </p>
        <p class="text-gray-600 text-xs">
          Hecho con Nuxt + Vue + TypeScript
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { about } = useAbout()

const isHidden = ref(false)
const lastScrollY = ref(0)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#stack', label: 'Stack' },
  { href: '#contacto', label: 'Contacto' },
  { href: 'http://192.168.100.221:8384/task-request', label: 'Cotizar', external: true },
]

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  const currentScrollY = window.scrollY
  
  if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
    isHidden.value = true
  } else {
    isHidden.value = false
  }
  
  lastScrollY.value = currentScrollY
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
    :class="{ '-translate-y-full': isHidden }"
  >
    <div class="bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <a href="#" class="text-xl font-bold text-white">
            {{ about.name }}
          </a>
          
          <div class="hidden md:flex items-center gap-8">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              class="text-gray-300 hover:text-primary-400 transition-colors text-sm font-medium relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-primary-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {{ link.label }}
            </a>
          </div>
          
          <button
            class="md:hidden text-gray-300 hover:text-white"
            @click="toggleMobileMenu"
            aria-label="Toggle menu"
          >
            <svg
              v-if="!isMobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        <Transition name="menu">
          <div
            v-if="isMobileMenuOpen"
            class="md:hidden py-4 border-t border-gray-800"
          >
            <div class="flex flex-col gap-4">
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              class="text-gray-300 hover:text-primary-400 transition-colors py-2"
              @click="isMobileMenuOpen = false"
            >
              {{ link.label }}
            </a>
          </div>
        </div>
        </Transition>
      </div>
    </div>
  </nav>
</template>

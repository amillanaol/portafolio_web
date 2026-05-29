<script setup lang="ts">
const { about } = useAbout()
</script>

<template>
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat bg-hero-image opacity-30 blur-md" />
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900/20 via-transparent to-transparent" />
    
    <div class="container mx-auto px-4 relative z-10 text-center">
      <h1 class="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
        <span class="text-white">{{ about.name }}</span>
      </h1>
      
      <p class="text-xl md:text-2xl text-primary-400 mb-6 font-medium">
        {{ about.title }}
      </p>
      
      <p class="text-gray-400 max-w-2xl mx-auto mb-6 text-lg">
        Freelance en desarrollo de software con trayectoria en soporte TI, aportando sistemas confiables, escalables para negocios y entornos corporativos.
      </p>

      <div class="max-w-2xl mx-auto mb-10 text-left">
        <div v-for="section in about.sections" :key="section.title" class="mb-4">
          <h3 class="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-3 text-center">
            {{ section.title }}
          </h3>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-gray-400 text-sm">
            <li v-for="item in section.items" :key="item" class="flex items-start">
              <span class="text-primary-500 mr-2">▹</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <AppButton href="#servicios" variant="outline">
          Ver servicios
        </AppButton>
        <AppButton href="#proyectos" variant="outline">
          Ver proyectos
        </AppButton>
        <AppButton href="#contacto" variant="outline">
          Contacto
        </AppButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}
</style>

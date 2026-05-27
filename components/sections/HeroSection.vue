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
      
      <p class="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
        {{ about.summary.split('.')[0] }}.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <AppButton href="#servicios" variant="primary">
          Ver servicios
        </AppButton>
        <AppButton href="#proyectos" variant="primary">
          Ver proyectos
        </AppButton>
        <AppButton href="#contacto" variant="primary">
          Contacto
        </AppButton>
        <AppButton :href="about.github" variant="outline" target="_blank">
          GitHub
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

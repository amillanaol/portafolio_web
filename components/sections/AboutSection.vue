<script setup lang="ts">
const { about } = useAbout()
</script>

<template>
  <AppSection id="sobre-mi" title="Sobre Mí" titleClass="hero-title">
    <div class="max-w-3xl mx-auto text-center" data-reveal>
      
      <p class="text-gray-300 text-lg leading-relaxed mb-8 whitespace-pre-line">
        {{ about.summary }}
      </p>
    </div>
  </AppSection>
</template>

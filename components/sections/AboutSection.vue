<script setup lang="ts">
const { about } = useAbout()
</script>

<template>
  <AppSection id="sobre-mi" title="Sobre Mí">
    <div class="max-w-3xl mx-auto text-center" data-reveal>
      <p class="text-gray-300 text-lg leading-relaxed mb-8 whitespace-pre-line">
        {{ about.summary }}
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <AppButton
          :href="about.github"
          target="_blank"
          variant="outline"
        >
          GitHub
        </AppButton>
        <AppButton
          :href="about.patreon"
          target="_blank"
          variant="outline"
        >
          Patreon
        </AppButton>
        <AppButton
          :href="about.buymeacoffee"
          target="_blank"
          variant="secondary"
        >
          ☕ Apoyar
        </AppButton>
      </div>
    </div>
  </AppSection>
</template>

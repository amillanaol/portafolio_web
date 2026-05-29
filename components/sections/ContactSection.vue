<script setup lang="ts">
const { about } = useAbout()
</script>

<template>
  <AppSection id="contacto" title="Contacto">
    <div class="max-w-2xl mx-auto text-center" data-reveal>
      <p class="text-gray-400 text-lg mb-8">
        ¿Tienes un proyecto, proceso o sistema que quieras mejorar? Conversemos sobre cómo convertirlo en una solución web,
        automatización o integración que aporte valor real a tu negocio.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
        <AppButton
          href="https://orcid.org/0009-0003-1768-7048"
          target="_blank"
          variant="primary"
        >
          Ver perfil en ORCID
        </AppButton>
        <AppButton
          :href="about.github"
          target="_blank"
          variant="primary"
        >
          GitHub
        </AppButton>
        <AppButton
          :href="about.patreon"
          target="_blank"
          variant="primary"
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

<script setup lang="ts">
const { about } = useAbout()
</script>

<template>
  <AppSection id="contacto" title="Contacto">
    <div class="max-w-2xl mx-auto text-center" data-reveal>
      <p class="text-gray-400 text-lg mb-6">
        Visita mi perfil académico en <a href="https://orcid.org/0009-0003-1768-7048" class="text-primary-400 hover:underline">ORCID</a>,
        explora mis proyectos públicos en <a href="https://github.com/amillanaol" class="text-primary-400 hover:underline">GitHub</a>,
        también puedes descubrír contenido avanzado en <a href="https://www.patreon.com/cw/amillanaol" class="text-primary-400 hover:underline">Patreon</a>,
        o apóyame con un café en <a href="https://www.buymeacoffee.com/amillanaol" class="text-primary-400 hover:underline">Buy Me a Coffee</a>.
      </p>
      
      <AppButton
        href="https://orcid.org/0009-0003-1768-7048"
        target="_blank"
        variant="primary"
      >
        Ver perfil en ORCID
      </AppButton>
    </div>
  </AppSection>
</template>

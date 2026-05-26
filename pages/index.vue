<script setup lang="ts">
const { about } = useAbout()

useHead({
  title: `${about.name} | ${about.title}`,
  meta: [
    { name: 'description', content: about.summary },
  ],
})
</script>

<template>
  <main>
    <HeroSection />
    <ServicesSection />
    <ProjectsSection />
    <StackSection />
    <AboutSection />
    <ContactSection />
    <FooterSection />
  </main>
</template>

<script setup lang="ts">
interface Props {
  id?: string
  title?: string
}

defineProps<Props>()
</script>

<template>
  <section :id="id" data-reveal class="py-20 scroll-mt-20">
    <div class="container mx-auto px-4">
      <h2
        v-if="title"
        class="text-3xl md:text-4xl font-display font-bold text-center mb-12"
      >
        {{ title }}
      </h2>
      <slot />
    </div>
  </section>
</template>

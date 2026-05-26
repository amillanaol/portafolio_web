<script setup lang="ts">
interface Props {
  hoverable?: boolean
}

withDefaults(defineProps<Props>(), {
  hoverable: true,
})
</script>

<template>
  <div
    class="bg-gray-800 rounded-xl p-6 border border-gray-700 transition-all duration-300"
      :class="{ 'hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 hover:-translate-y-1': hoverable }"
  >
    <slot />
  </div>
</template>

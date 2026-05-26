<script setup lang="ts">
interface Props {
  variant?: 'default' | 'primary'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-primary-500/20 text-primary-300 border-primary-500/30'
    default:
      return 'bg-gray-700 text-gray-300 border-gray-600'
  }
})
</script>

<template>
  <span
    class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-all duration-200 hover:scale-105 hover:brightness-110"
    :class="variantClasses"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  href?: string
  to?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
})

const component = computed(() => {
  if (props.to) return 'NuxtLink'
  if (props.href) return 'a'
  return 'button'
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'btn-primary px-6 py-3 inline-flex items-center justify-center font-medium'
    case 'secondary':
      return 'bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 border border-gray-700'
    case 'outline':
      return 'btn-outline px-6 py-3 inline-flex items-center justify-center font-medium'
    default:
      return ''
  }
})
</script>

<template>
  <component
    :is="component"
    :href="href"
    :to="to"
    :class="variantClasses"
  >
    <slot />
  </component>
</template>

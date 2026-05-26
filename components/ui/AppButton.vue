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
      return 'bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary-500/25'
    case 'secondary':
      return 'bg-gray-700 hover:bg-gray-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20'
    case 'outline':
      return 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10 font-medium px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5'
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

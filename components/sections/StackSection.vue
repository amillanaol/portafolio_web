<script setup lang="ts">
const { stack } = useStack()
</script>

<template>
  <AppSection id="stack" title="Stack Tecnológico">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(category, index) in stack"
        :key="category.id"
        data-reveal
        :data-reveal-delay="index * 100"
        class="bg-gray-800/50 rounded-xl p-6 border border-gray-700 transition-all duration-200 hover:-translate-y-1 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/5"
      >
        <h3 data-reveal :data-reveal-delay="(index * 100) + 0" class="text-lg font-semibold text-primary-400 mb-4">
          {{ category.name }}
        </h3>
        
        <div data-reveal :data-reveal-delay="(index * 100) + 80" class="flex flex-wrap gap-2">
          <AppBadge
            v-for="item in category.items"
            :key="item"
          >
            {{ item }}
          </AppBadge>
        </div>
      </div>
    </div>
  </AppSection>
</template>

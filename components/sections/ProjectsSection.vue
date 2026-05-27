<script setup lang="ts">
import { projects } from '~/data/projects'

const categoryPriority: Record<string, number> = {
  Python: 0,
  Java: 1,
  PHP: 2,
  TypeScript: 3,
  JavaScript: 4,
  PowerShell: 5,
  n8n: 6,
}

const sortedProjects = computed(() => {
  return [...projects].sort((a, b) => {
    const catDiff = (categoryPriority[a.category] ?? 99) - (categoryPriority[b.category] ?? 99)
    if (catDiff !== 0) return catDiff
    return a.name.localeCompare(b.name)
  })
})
</script>

<template>
  <AppSection id="proyectos" title="Proyectos">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      <AppCard
        v-for="(project, index) in sortedProjects"
        :key="project.id"
        data-reveal
        :data-reveal-delay="index * 100"
      >
        <div class="flex items-start justify-between mb-3">
          <AppBadge variant="primary">
            {{ project.category }}
          </AppBadge>
        </div>

        <h4 class="text-lg font-semibold text-white mb-2">
          {{ project.name }}
        </h4>

        <p class="text-gray-400 mb-4 text-sm leading-relaxed">
          {{ project.description }}
        </p>

        <div class="flex flex-wrap gap-2 mb-4">
          <AppBadge
            v-for="tech in project.technologies"
            :key="tech"
          >
            {{ tech }}
          </AppBadge>
        </div>

        <AppButton
          :href="project.url"
          target="_blank"
          variant="outline"
          class="text-sm"
        >
          Ver en GitHub →
        </AppButton>
      </AppCard>
    </div>
  </AppSection>
</template>

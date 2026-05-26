<script setup lang="ts">
const { projects } = useProjects()
</script>

<template>
  <AppSection id="proyectos" title="Proyectos">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <AppCard
        v-for="(project, index) in projects"
        :key="project.id"
        data-reveal
        :data-reveal-delay="index * 100"
      >
        <h3 data-reveal :data-reveal-delay="(index * 100) + 0" class="text-xl font-semibold text-white mb-2">
          {{ project.name }}
        </h3>
        
        <p data-reveal :data-reveal-delay="(index * 100) + 80" class="text-gray-400 mb-4 text-sm">
          {{ project.description }}
        </p>
        
        <div data-reveal :data-reveal-delay="(index * 100) + 160" class="flex flex-wrap gap-2 mb-4">
          <AppBadge
            v-for="tech in project.technologies"
            :key="tech"
            variant="primary"
          >
            {{ tech }}
          </AppBadge>
        </div>
        
        <AppButton
          data-reveal
          :data-reveal-delay="(index * 100) + 240"
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

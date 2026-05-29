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

const groupedProjects = computed(() => {
  const groups: Record<string, typeof projects> = {}
  for (const p of sortedProjects.value) {
    if (!groups[p.category]) groups[p.category] = []
    groups[p.category].push(p)
  }
  return groups
})

const categories = computed(() => 
  Object.keys(groupedProjects.value).sort((a, b) => 
    (categoryPriority[a] ?? 99) - (categoryPriority[b] ?? 99)
  )
)

const expanded = reactive<Record<string, boolean>>({})

function countTechs(projectList: typeof projects) {
  const counts: Record<string, number> = {}
  for (const p of projectList) {
    for (const t of p.technologies) {
      counts[t] = (counts[t] || 0) + 1
    }
  }
  return Object.entries(counts).sort((a, b) => b[1] - a[1])
}
</script>

<template>
  <AppSection id="proyectos" title="Proyectos públicos en GitHub">
    <div class="space-y-6">
      <div v-for="cat in categories" :key="cat" class="border border-gray-800 rounded-xl overflow-hidden">
        <button
          class="w-full flex items-center justify-between py-4 px-6 bg-gray-900/50 hover:bg-gray-800/50 transition-colors text-left"
          @click="expanded[cat] = !expanded[cat]"
        >
          <div class="flex items-center gap-4">
            <span class="text-xl font-bold text-white">
              {{ cat }}
            </span>
            <span class="px-2.5 py-0.5 rounded-full bg-primary-900/30 text-primary-400 text-xs font-semibold border border-primary-800/50">
              {{ groupedProjects[cat].length }} proyectos
            </span>
          </div>
          <span class="text-gray-500 transition-transform duration-300" :class="expanded[cat] ? 'rotate-180' : ''">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </span>
        </button>

        <div v-if="expanded[cat]" class="p-6 bg-gray-950/30 border-t border-gray-800 animate-fade-in">
          <div class="flex flex-wrap gap-2 justify-center mb-8">
            <div
              v-for="[tech, count] in countTechs(groupedProjects[cat])"
              :key="tech"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-800/60 text-sm text-gray-300 border border-gray-700/50"
            >
              <span>{{ tech }}</span>
              <span class="text-xs text-gray-500 bg-gray-900 px-1.5 py-0.5 rounded-full">{{ count }}</span>
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AppCard
              v-for="(project, index) in groupedProjects[cat]"
              :key="project.id"
            >
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
                  class="text-[10px] uppercase tracking-wider"
                >
                  {{ tech }}
                </AppBadge>
              </div>

              <AppButton
                :href="project.url"
                target="_blank"
                variant="outline"
                class="text-xs w-full justify-center"
              >
                Ver en GitHub
              </AppButton>
            </AppCard>
          </div>
        </div>
      </div>
    </div>
  </AppSection>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

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

const collapsedCategories = new Set(['Python', 'Java'])

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

const collapsedCategoriesList = computed(() =>
  [...collapsedCategories].filter(c => groupedProjects.value[c]?.length)
)

const otherCategoriesList = computed(() =>
  Object.keys(groupedProjects.value).filter(c => !collapsedCategories.has(c))
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
  <AppSection id="proyectos" title="Proyectos">
    <div class="space-y-8">
      <div v-if="otherCategoriesList.length">
        <div class="flex flex-wrap gap-2 justify-center mb-6">
          <div
            v-for="[tech, count] in countTechs(otherCategoriesList.flatMap(c => groupedProjects[c]))"
            :key="tech"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-800/60 text-sm text-gray-300"
          >
            <span>{{ tech }}</span>
            <span class="text-xs text-gray-500 bg-gray-700/60 px-1.5 py-0.5 rounded-full">{{ count }}</span>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          <AppCard
            v-for="(project, index) in otherCategoriesList.flatMap(c => groupedProjects[c])"
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
      </div>

      <div v-for="cat in collapsedCategoriesList" :key="cat">
        <button
          class="w-full flex items-center justify-between py-3 px-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors text-left"
          @click="expanded[cat] = !expanded[cat]"
        >
          <span class="text-lg font-semibold text-white">
            {{ cat }} ({{ groupedProjects[cat].length }} proyectos)
          </span>
          <span class="text-gray-400 text-xl transition-transform duration-200" :class="expanded[cat] ? 'rotate-180' : ''">
            ▼
          </span>
        </button>

        <div v-if="!expanded[cat]" class="mt-4 space-y-2">
          <div
            v-for="project in groupedProjects[cat]"
            :key="project.id"
            class="py-2 px-3 rounded-lg bg-gray-800/30"
          >
            <div class="flex items-center gap-3">
              <AppBadge variant="primary" class="shrink-0">
                {{ project.category }}
              </AppBadge>
              <span class="text-gray-300 font-medium">{{ project.name }}</span>
            </div>
            <p class="text-gray-500 text-sm mt-1 ml-1">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-1.5 mt-2 ml-1">
              <AppBadge
                v-for="tech in project.technologies"
                :key="tech"
                class="text-xs"
              >
                {{ tech }}
              </AppBadge>
            </div>
          </div>
        </div>

        <div v-if="expanded[cat]" class="mt-6 space-y-6">
          <div class="flex flex-wrap gap-2 justify-center">
            <div
              v-for="[tech, count] in countTechs(groupedProjects[cat])"
              :key="tech"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-900/40 text-sm text-primary-300"
            >
              <span>{{ tech }}</span>
              <span class="text-xs text-primary-400 bg-primary-800/60 px-1.5 py-0.5 rounded-full">{{ count }}</span>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            <AppCard
              v-for="(project, index) in groupedProjects[cat]"
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
        </div>
      </div>
    </div>
  </AppSection>
</template>

<script setup lang="ts">
const { services } = useServices()

const softwareServices = services.filter(s => s.category === 'software')
const soporteServices = services.filter(s => s.category === 'soporte')
</script>

<template>
  <AppSection id="servicios" title="Mis Servicios">
    <div class="mb-12">
      <h3 data-reveal :data-reveal-delay="150" class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        <span class="w-1 h-8 bg-primary-500 rounded-full" />
        Soluciones de software
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AppCard
          v-for="(service, index) in softwareServices"
          :key="service.id"
          data-reveal
          :data-reveal-delay="index * 100"
        >
          <div class="text-4xl mb-4 icon-float" data-reveal :data-reveal-delay="(index * 100) + 0">
            <span v-if="service.icon === 'server'">🖥️</span>
            <span v-else-if="service.icon === 'cpu'">⚡</span>
            <span v-else-if="service.icon === 'code'">🌐</span>
            <span v-else-if="service.icon === 'link'">🔗</span>
            <span v-else-if="service.icon === 'cloud'">☁️</span>
            <span v-else>✨</span>
          </div>
          
          <h4 data-reveal :data-reveal-delay="(index * 100) + 80" class="text-xl font-semibold text-white mb-2">
            {{ service.title }}
          </h4>
          
          <p data-reveal :data-reveal-delay="(index * 100) + 160" class="text-gray-400 mb-4 text-sm">
            {{ service.description }}
          </p>
          
          <div class="flex flex-wrap gap-2">
            <template v-if="service.techDetails">
              <div
                v-for="(detail, techIdx) in service.techDetails"
                :key="detail.name"
                data-reveal="fade"
                :data-reveal-delay="(index * 100) + 240 + (techIdx * 50)"
                class="group relative inline-block cursor-help"
              >
                <AppBadge>
                  {{ detail.name }}
                </AppBadge>
                <!-- Tooltip -->
                <div class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-56 -translate-x-1/2 scale-95 rounded-lg bg-gray-900 border border-gray-700/80 p-2.5 text-xs text-gray-200 opacity-0 shadow-xl transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 whitespace-normal leading-relaxed text-center">
                  {{ detail.description }}
                  <div class="absolute top-full left-1/2 -mt-1 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-gray-700/80 bg-gray-900"></div>
                </div>
              </div>
            </template>
            <template v-else>
              <AppBadge
                v-for="(tech, techIdx) in service.technologies.slice(0, 4)"
                :key="tech"
                data-reveal="fade"
                :data-reveal-delay="(index * 100) + 240 + (techIdx * 50)"
              >
                {{ tech }}
              </AppBadge>
            </template>
          </div>
        </AppCard>
      </div>
    </div>

    <div>
      <h3 data-reveal :data-reveal-delay="150" class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        <span class="w-1 h-8 bg-gray-500 rounded-full" />
        Soporte operativo digital
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AppCard
          v-for="(service, index) in soporteServices"
          :key="service.id"
          data-reveal
          :data-reveal-delay="index * 100"
        >
          <div class="text-4xl mb-4 icon-float" data-reveal :data-reveal-delay="(index * 100) + 0">
            <span v-if="service.icon === 'headset'">🎧</span>
            <span v-else-if="service.icon === 'search'">🔍</span>
            <span v-else-if="service.icon === 'chat'">💬</span>
            <span v-else-if="service.icon === 'hashtag'">📱</span>
            <span v-else-if="service.icon === 'grid'">📊</span>
            <span v-else-if="service.icon === 'book'">📚</span>
            <span v-else-if="service.icon === 'tool'">🛠️</span>
            <span v-else>✨</span>
          </div>
          
          <h4 data-reveal :data-reveal-delay="(index * 100) + 80" class="text-xl font-semibold text-white mb-2">
            {{ service.title }}
          </h4>
          
          <p data-reveal :data-reveal-delay="(index * 100) + 160" class="text-gray-400 mb-4 text-sm">
            {{ service.description }}
          </p>
          
          <div class="flex flex-wrap gap-2">
            <template v-if="service.techDetails">
              <div
                v-for="(detail, techIdx) in service.techDetails"
                :key="detail.name"
                data-reveal="fade"
                :data-reveal-delay="(index * 100) + 240 + (techIdx * 50)"
                class="group relative inline-block cursor-help"
              >
                <AppBadge>
                  {{ detail.name }}
                </AppBadge>
                <!-- Tooltip -->
                <div class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-56 -translate-x-1/2 scale-95 rounded-lg bg-gray-900 border border-gray-700/80 p-2.5 text-xs text-gray-200 opacity-0 shadow-xl transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 whitespace-normal leading-relaxed text-center">
                  {{ detail.description }}
                  <div class="absolute top-full left-1/2 -mt-1 h-2 w-2 -translate-x-1/2 rotate-45 border-r border-b border-gray-700/80 bg-gray-900"></div>
                </div>
              </div>
            </template>
            <template v-else>
              <AppBadge
                v-for="(tech, techIdx) in service.technologies.slice(0, 4)"
                :key="tech"
                data-reveal="fade"
                :data-reveal-delay="(index * 100) + 240 + (techIdx * 50)"
              >
                {{ tech }}
              </AppBadge>
            </template>
          </div>
        </AppCard>
      </div>
    </div>
  </AppSection>
</template>

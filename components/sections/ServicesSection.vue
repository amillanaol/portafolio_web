<script setup lang="ts">
const { services } = useServices()

const softwareServices = services.filter(s => s.category === 'software')
const soporteServices = services.filter(s => s.category === 'soporte')
</script>

<template>
  <AppSection id="servicios" title="Servicios">
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
            <span v-else>✨</span>
          </div>
          
          <h4 data-reveal :data-reveal-delay="(index * 100) + 80" class="text-xl font-semibold text-white mb-2">
            {{ service.title }}
          </h4>
          
          <p data-reveal :data-reveal-delay="(index * 100) + 160" class="text-gray-400 mb-4 text-sm">
            {{ service.description }}
          </p>
          
          <div data-reveal :data-reveal-delay="(index * 100) + 240" class="flex flex-wrap gap-2">
            <AppBadge
              v-for="tech in service.technologies.slice(0, 4)"
              :key="tech"
            >
              {{ tech }}
            </AppBadge>
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
            <span v-else>✨</span>
          </div>
          
          <h4 data-reveal :data-reveal-delay="(index * 100) + 80" class="text-xl font-semibold text-white mb-2">
            {{ service.title }}
          </h4>
          
          <p data-reveal :data-reveal-delay="(index * 100) + 160" class="text-gray-400 mb-4 text-sm">
            {{ service.description }}
          </p>
          
          <div data-reveal :data-reveal-delay="(index * 100) + 240" class="flex flex-wrap gap-2">
            <AppBadge
              v-for="tech in service.technologies.slice(0, 4)"
              :key="tech"
            >
              {{ tech }}
            </AppBadge>
          </div>
        </AppCard>
      </div>
    </div>
  </AppSection>
</template>

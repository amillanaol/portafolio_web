<script setup lang="ts">
useScrollReveal()
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <NavBar />
    <slot />
  </div>
</template>

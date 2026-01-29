<template>
  <div>
    <FixedSidebar />
    <ThemeToggle />
    <div class="relative flex-auto">
      <Timeline />
      <main class="space-y-20 py-20 sm:space-y-32 sm:py-32">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue'
import FixedSidebar from './FixedSidebar.vue'
import Timeline from './Timeline.vue'
</script>

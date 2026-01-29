<template>
  <div class="flex min-h-full flex-col bg-white dark:bg-gray-950">
    <PageContent />
  </div>
</template>

<script setup>
import PageContent from './components/PageContent.vue'
import { useTheme } from './composables/useTheme'

// Initialize theme
useTheme()
</script>


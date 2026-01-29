<template>
  <button
    type="button"
    class="group absolute top-4 right-4 z-50 -m-2.5 p-2.5"
    @click="toggleTheme"
  >
    <span class="sr-only">Comută la tema {{ otherTheme === 'dark' ? 'întunecată' : 'luminoasă' }}</span>
    <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-white opacity-50 transition-opacity group-hover:opacity-100 lg:fill-gray-900 lg:dark:fill-white">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-5-8a5 5 0 0 0 5 5V7a5 5 0 0 0-5 5Z"
      />
    </svg>
  </button>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { resolvedTheme, setTheme } = useTheme()
const mounted = ref(false)

const otherTheme = computed(() => resolvedTheme.value === 'dark' ? 'light' : 'dark')

function toggleTheme() {
  setTheme(otherTheme.value)
}

onMounted(() => {
  mounted.value = true
})
</script>

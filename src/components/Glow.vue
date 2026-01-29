<template>
  <div class="absolute inset-0 -z-10 overflow-hidden bg-gray-950 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-lg">
    <svg
      class="absolute -bottom-48 left-[-40%] h-320 w-[180%] lg:top-[-40%] lg:-right-40 lg:bottom-auto lg:left-auto lg:h-[180%] lg:w-7xl"
      aria-hidden="true"
    >
      <defs>
        <radialGradient :id="`${id}-desktop`" cx="100%">
          <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
          <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
          <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
        </radialGradient>
        <radialGradient :id="`${id}-mobile`" cy="100%">
          <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
          <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
          <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
        </radialGradient>
      </defs>
      <rect
        width="100%"
        height="100%"
        :fill="`url(#${id}-desktop)`"
        class="hidden lg:block"
      />
      <rect
        width="100%"
        height="100%"
        :fill="`url(#${id}-mobile)`"
        class="lg:hidden"
      />
    </svg>
    <div class="absolute inset-x-0 right-0 bottom-0 h-px bg-white mix-blend-overlay lg:top-0 lg:left-auto lg:h-auto lg:w-px" />
  </div>
</template>

<script setup>
import { useId } from '@/composables/useId'

const id = useId()
</script>

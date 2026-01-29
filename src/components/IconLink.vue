<template>
  <component
    :is="rootTag"
    :href="href || undefined"
    :class="linkClass"
    v-bind="$attrs"
  >
    <span class="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100" />
    <component v-if="icon" :is="icon" class="h-4 w-4 flex-none" />
    <span class="self-baseline text-white"><slot /></span>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import clsx from 'clsx'

const props = defineProps({
  href: {
    type: String,
    default: null
  },
  icon: {
    type: Object,
    default: null
  },
  compact: {
    type: Boolean,
    default: false
  }
})

const linkClass = computed(() => clsx(
  'group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300',
  props.compact ? 'gap-x-2' : 'gap-x-3',
))

const rootTag = computed(() => (props.href ? 'a' : 'span'))
</script>

<template>
  <svg
    viewBox="0 0 881 211"
    fill="white"
    aria-hidden="true"
    :class="svgClass"
  >
    <defs>
      <filter :id="blurId">
        <feGaussianBlur in="SourceGraphic" stdDeviation=".5" />
      </filter>
    </defs>
    <Constellation
      v-for="(points, index) in constellations"
      :key="`constellation-${index}`"
      :points="points"
      :blurId="blurId"
    />
    <Star
      v-for="(point, index) in stars"
      :key="`star-${index}`"
      :point="point"
      :blurId="blurId"
    />
  </svg>
</template>

<script setup>
import { computed } from 'vue'
import { useId } from '@/composables/useId'
import clsx from 'clsx'
import Star from './StarFieldStar.vue'
import Constellation from './StarFieldConstellation.vue'

const props = defineProps({
  className: {
    type: String,
    default: ''
  }
})

const blurId = useId()

const svgClass = computed(() => clsx(
  'pointer-events-none absolute w-220.25 origin-top-right rotate-30 overflow-visible opacity-70',
  props.className,
))

const stars = [
  [4, 4, true, true],
  [4, 44, true],
  [36, 22],
  [50, 146, true, true],
  [64, 43, true, true],
  [76, 30, true],
  [101, 116],
  [140, 36, true],
  [149, 134],
  [162, 74, true],
  [171, 96, true, true],
  [210, 56, true, true],
  [235, 90],
  [275, 82, true, true],
  [306, 6],
  [307, 64, true, true],
  [380, 68, true],
  [380, 108, true, true],
  [391, 148, true, true],
  [405, 18, true],
  [412, 86, true, true],
  [426, 210, true, true],
  [427, 56, true, true],
  [538, 138],
  [563, 88, true, true],
  [611, 154, true, true],
  [637, 150],
  [651, 146, true],
  [682, 70, true, true],
  [683, 128],
  [781, 82, true, true],
  [785, 158, true],
  [832, 146, true, true],
  [852, 89],
]

const constellations = [
  [
    [247, 103],
    [261, 86],
    [307, 104],
    [357, 36],
  ],
  [
    [586, 120],
    [516, 100],
    [491, 62],
    [440, 107],
    [477, 180],
    [516, 100],
  ],
  [
    [733, 100],
    [803, 120],
    [879, 113],
    [823, 164],
    [803, 120],
  ],
]
</script>

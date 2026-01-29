<template>
  <g class="star-group" :style="groupStyle">
    <circle
      :cx="cx"
      :cy="cy"
      :r="1"
      :style="circleStyle"
      :filter="blur ? `url(#${blurId})` : undefined"
      class="star-circle"
    />
  </g>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  point: {
    type: Array,
    required: true
  },
  blurId: {
    type: String,
    required: true
  }
})

const [cx, cy, dim, blur] = props.point

const delay = Math.random() * 2
const duration = Math.random() * 2 + 2

const groupStyle = computed(() => ({
  '--fade-delay': `${delay}s`,
}))

const circleStyle = computed(() => ({
  transformOrigin: `${cx / 16}rem ${cy / 16}rem`,
  opacity: dim ? 0.2 : 1,
  transform: `scale(${dim ? 1 : 1.2})`,
  '--star-opacity-from': dim ? 0.2 : 1,
  '--star-opacity-to': dim ? 0.5 : 0.6,
  '--star-scale-from': dim ? 1 : 1.2,
  '--star-scale-to': dim ? 1.2 : 1,
  '--star-delay': `${delay}s`,
  '--star-duration': `${duration}s`,
}))
</script>

<style scoped>
.star-group {
  opacity: 0;
  animation: star-fade 4s forwards;
  animation-delay: var(--fade-delay, 0s);
}

.star-circle {
  animation: star-twinkle var(--star-duration, 3s) ease-in-out infinite alternate;
  animation-delay: var(--star-delay, 0s);
}

@keyframes star-fade {
  to {
    opacity: 1;
  }
}

@keyframes star-twinkle {
  from {
    opacity: var(--star-opacity-from, 1);
    transform: scale(var(--star-scale-from, 1));
  }
  to {
    opacity: var(--star-opacity-to, 0.6);
    transform: scale(var(--star-scale-to, 1));
  }
}
</style>

<template>
  <g>
    <path
      ref="pathRef"
      stroke="white"
      strokeOpacity="0.2"
      strokeDasharray="1"
      strokeDashoffset="1"
      pathLength="1"
      fill="transparent"
      :d="`M ${points.join('L')}`"
      :class="['constellation-path', { 'constellation-fill': isFilled }]"
      :style="pathStyle"
    />
    <Star
      v-for="(point, index) in uniquePoints"
      :key="index"
      :point="point"
      :blurId="blurId"
    />
  </g>
</template>

<script setup>
import { ref, computed } from 'vue'
import Star from './StarFieldStar.vue'

const props = defineProps({
  points: {
    type: Array,
    required: true
  },
  blurId: {
    type: String,
    required: true
  }
})

const pathRef = ref(null)

const uniquePoints = computed(() => 
  props.points.filter(
    (point, pointIndex) =>
      props.points.findIndex((p) => String(p) === String(point)) === pointIndex,
  )
)

const isFilled = computed(() => uniquePoints.value.length !== props.points.length)

const drawDelay = Math.random() * 3 + 2
const fillDelay = drawDelay + 5

const pathStyle = computed(() => ({
  '--draw-delay': `${drawDelay}s`,
  '--fill-delay': `${fillDelay}s`,
}))
</script>

<style scoped>
.constellation-path {
  visibility: hidden;
  animation: constellation-draw 5s linear forwards;
  animation-delay: var(--draw-delay, 0s);
}

.constellation-fill {
  animation-name: constellation-draw, constellation-fill;
  animation-duration: 5s, 1s;
  animation-delay: var(--draw-delay, 0s), var(--fill-delay, 5s);
  animation-timing-function: linear, ease;
  animation-fill-mode: forwards, forwards;
}

@keyframes constellation-draw {
  to {
    stroke-dashoffset: 0;
    visibility: visible;
  }
}

@keyframes constellation-fill {
  to {
    fill: rgb(255 255 255 / 0.02);
  }
}
</style>

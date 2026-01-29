<template>
  <article
    :id="id"
    class="scroll-mt-16"
    :style="{ paddingBottom: `${heightAdjustment}px` }"
  >
    <div ref="heightRef">
      <ArticleHeader :id="id" :date="date" />
      <ContentWrapper>
        <div class="typography" data-mdx-content>
          <slot />
        </div>
      </ContentWrapper>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ArticleHeader from './ArticleHeader.vue'
import ContentWrapper from './ContentWrapper.vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})

const heightRef = ref(null)
const heightAdjustment = ref(0)

let observer = null

onMounted(() => {
  if (!heightRef.value) return

  observer = new ResizeObserver(() => {
    if (!heightRef.value) return
    
    const { height } = heightRef.value.getBoundingClientRect()
    const nextMultipleOf8 = 8 * Math.ceil(height / 8)
    heightAdjustment.value = nextMultipleOf8 - height
  })

  observer.observe(heightRef.value)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <component 
    :is="href ? 'a' : 'button'" 
    :class="buttonClass"
    :href="href"
    v-bind="$attrs"
  >
    <ButtonInner :arrow="arrow">
      <slot />
    </ButtonInner>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import clsx from 'clsx'

const props = defineProps({
  arrow: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    default: undefined
  }
})

const buttonClass = computed(() => clsx(
  'group relative isolate flex-none rounded-md py-1.5 text-[0.8125rem]/6 font-semibold text-white',
  props.arrow ? 'pl-2.5 pr-[calc(9/16*1rem)]' : 'px-2.5',
))
</script>

<script>
export default {
  components: {
    ButtonInner: {
      props: ['arrow'],
      template: `
        <span>
          <span class="absolute inset-0 rounded-md bg-linear-to-b from-white/80 to-white opacity-10 transition-opacity group-hover:opacity-15" />
          <span class="absolute inset-0 rounded-md opacity-7.5 shadow-[inset_0_1px_1px_white] transition-opacity group-hover:opacity-10" />
          <slot /> <span v-if="arrow" aria-hidden="true">&rarr;</span>
        </span>
      `
    }
  }
}
</script>

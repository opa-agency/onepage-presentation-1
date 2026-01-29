<template>
  <time :dateTime="formattedDate.iso" v-bind="$attrs">
    {{ formattedDate.display }}
  </time>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  date: {
    type: [String, Date],
    required: true
  }
})

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
})

const formattedDate = computed(() => {
  const dateObj = typeof props.date === 'string' ? new Date(props.date) : props.date
  return {
    iso: dateObj.toISOString(),
    display: dateFormatter.format(dateObj)
  }
})
</script>

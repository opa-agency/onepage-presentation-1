<template>
  <header class="relative mb-10 xl:mb-0">
    <div class="pointer-events-none absolute top-0 left-[max(-0.5rem,calc(50%-18.625rem))] z-50 flex h-4 items-center justify-end gap-x-2 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:left-0 lg:min-w-lg xl:h-8">
      <a :href="'#' + id" class="inline-flex">
        <FormattedDate
          :date="date"
          class="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-white/50"
        />
      </a>
      <div class="h-px w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300" />
    </div>
    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
        <div class="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
          <div class="flex">
            <a :href="'#' + id" class="inline-flex">
              <FormattedDate
                :date="date"
                class="text-2xs/4 font-medium text-gray-500 xl:hidden dark:text-white/50"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import FormattedDate from './FormattedDate.vue'

defineProps({
  id: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})
</script>

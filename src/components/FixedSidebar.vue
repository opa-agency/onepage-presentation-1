<template>
  <div class="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
    <Glow />
    <div class="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-lg lg:overflow-x-hidden lg:overflow-y-auto lg:pl-[max(4rem,calc(50%-38rem))]">
      <div class="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
        <div class="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:py-20">
          <div class="relative">
            <StarField class="top-14 -right-44" />
            <Intro />
          </div>
        </div>
        <div class="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6">
          <IntroFooter />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Intro from './Intro.vue'
import Glow from './Glow.vue'
import StarField from './StarField.vue'
import IntroFooter from './IntroFooter.vue'
</script>

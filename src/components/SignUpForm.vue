<template>
  <form class="relative isolate mt-8 flex items-center pr-1" @submit.prevent>
    <label :for="id" class="sr-only">
      Adresă de email
    </label>
    <input
      required
      type="email"
      autoComplete="email"
      name="email"
      :id="id"
      placeholder="Adresă de email"
      class="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-hidden sm:text-[0.8125rem]/6"
    />
    <Button type="submit" :arrow="true">
      Primește actualizări
    </Button>
    <div class="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
    <div class="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300" />
  </form>
</template>

<script setup>
import { useId } from '@/composables/useId'
import Button from './Button.vue'

const id = useId()
</script>

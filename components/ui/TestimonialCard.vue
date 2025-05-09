<script setup lang="ts">
interface Props {
  image: string
  name: string
  review: string
  role: string
}

defineProps<Props>()
</script>

<template>
  <div class="bg-slate-100 p-5 rounded-2xl h-48 flex flex-col gap-3 odd:rotate-1 even:-rotate-1">
    <div class="flex items-center gap-3">
      <img
        :src="image"
        alt="Testimonial"
        class="w-16 h-16 rounded-full object-cover"
      >

      <div class="flex flex-col gap-0.5">
        <p class="text-slate-800 font-bold">
          {{ name }}
        </p>
        <p class="text-slate-500 text-sm">
          {{ role }}
        </p>
      </div>
    </div>

    <p class="text-slate-500 font-light text-sm lg:text-base">
      {{ review }}
    </p>
  </div>
</template>

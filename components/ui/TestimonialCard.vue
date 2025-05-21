<script setup lang="ts">
interface Props {
  name: string
  review: string
  role: string
  color: string
}

const props = defineProps<Props>()

const firstLetter = computed<string>(() => props.name[0].toUpperCase() || '')
</script>

<template>
  <div class="bg-slate-100 p-5 rounded-2xl h-48 flex flex-col gap-3 odd:rotate-1 even:-rotate-1">
    <div class="flex items-center gap-3">
      <div
        class="size-12 rounded-full flex items-center justify-center text-xl font-bold text-white"
        :style="{ backgroundColor: color }"
        :aria-label="`Opinia klienta ${name}`"
      >
        {{ firstLetter }}
      </div>

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

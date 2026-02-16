<script setup lang="ts">
interface Props {
  icon: string
  title: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col items-center gap-3 text-center md:items-start md:text-left max-w-[420px] lg:max-w-none mx-auto">
    <client-only>
      <icon :name="icon" class="text-primary" size="40" />
    </client-only>

    <div class="flex flex-col">
      <p class="text-lg lg:text-xl text-slate-800 font-semibold">
        {{ title }}
      </p>

      <p class="text-slate-500 font-light text-sm lg:text-base">
        {{ description }}
      </p>
    </div>
  </div>
</template>

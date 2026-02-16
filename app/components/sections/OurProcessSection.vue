<script setup lang="ts">
import { PROCESS } from '~/data'
</script>

<template>
  <section id="process" class="flex flex-col gap-16 mx-auto container px-6">
    <h2 class="text-center font-bold text-slate-800 text-3xl lg:text-4xl">
      Jak wygląda współpraca z nami
    </h2>

    <div class="flex flex-col gap-10 lg:flex-row justify-between">
      <div
        v-for="{ icon, title, description } in PROCESS"
        :key="title"
        class="flex flex-col gap-3 items-center text-center max-w-[420px] mx-auto lg:text-left lg:items-start lg:mx-none"
      >
        <icon :name="icon" class="text-primary" size="40" />

        <div class="flex flex-col gap-1">
          <p class="text-lg lg:text-xl text-slate-800 font-semibold">
            {{ title }}
          </p>

          <p class="text-slate-500 font-light text-sm lg:text-base">
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

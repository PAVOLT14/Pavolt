<script setup lang="ts">
import { FAQ } from '~/data'
</script>

<template>
  <section id="faq" class="flex flex-col gap-16 mx-auto container px-6">
    <h2 class="text-center font-bold text-slate-800 text-3xl lg:text-4xl">
      Często zadawane pytania
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-8 xl:gap-y-10">
      <div
        v-for="{ question, answer } in FAQ"
        :key="question"
        class="flex flex-col gap-1"
      >
        <h3 class="text-lg lg:text-xl text-slate-800 font-semibold">
          {{ question }}
        </h3>
        <p class="text-slate-500 font-light text-sm lg:text-base">
          {{ answer }}
        </p>
      </div>
    </div>
  </section>
</template>

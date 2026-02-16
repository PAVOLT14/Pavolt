<script setup lang="ts">
import { SERVICES } from '~/data'
</script>

<template>
  <section id="services" class="flex flex-col gap-16 mx-auto container px-6">
    <h2 class="text-center font-bold text-slate-800 text-3xl lg:text-4xl">
      Nasze usługi elektryczne
    </h2>

    <div class="grid grid-cols-1 gap-y-10 lg:grid-cols-3 md:grid-cols-2 xl:gap-18 md:gap-x-10">
      <service-card v-for="{ title, icon, description } in SERVICES" :key="title" :icon :title :description />
    </div>
  </section>
</template>

<script setup lang="ts">
import { SERVICES } from '~/data'
</script>

<template>
  <section id="services" class="flex flex-col gap-16 mx-auto container px-6">
    <h2 class="text-center font-bold text-slate-800 text-3xl lg:text-4xl">
      W naszej ofercie
    </h2>
    <div class="grid grid-cols-1 gap-y-10 lg:grid-cols-3 md:grid-cols-2 xl:gap-18 md:gap-x-10">
      <ServiceCard
        v-for="(service, index) in SERVICES"
        :key="index"
        :icon="service.icon"
        :title="service.title"
        :description="service.description"
      />
    </div>
  </section>
</template>

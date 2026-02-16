<script setup lang="ts">
import { TESTIMONIALS } from '~/data'
</script>

<template>
  <section id="testimonials" class="flex flex-col gap-16 mx-auto container px-6">
    <h2 class="text-center font-bold text-slate-800 text-3xl lg:text-4xl">
      Co mówią o nas klienci
    </h2>
    <div class="grid grid-cols-1 gap-10 2xl:grid-cols-3 md:grid-cols-2">
      <testimonial-card
        v-for="(testimonial, index) in TESTIMONIALS"
        :key="index"
        :color="testimonial.color"
        :name="testimonial.name"
        :role="testimonial.role"
        :review="testimonial.review"
      />
    </div>
  </section>
</template>

<template>
  <div>
    <app-nav />
    <main id="main-content" class="flex flex-col" tabindex="-1">
      <div class="flex flex-col overflow-hidden">
        <landing-section />
      </div>
      <div class="flex flex-col gap-40 xl:mt-40">
        <our-process-section />
        <projects-section />
        <services-section />
        <testimonials-section />
        <faq-section />
      </div>
    </main>
    <app-footer />
  </div>
</template>

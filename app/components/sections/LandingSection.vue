<template>
  <main class="container mx-auto px-6 lg:flex-1 flex mt-10 lg:mt-20 relative gap-10 flex-col lg:flex-row mb-40">
    <div class="lg:max-w-3xl flex-1 flex flex-col">
      <h1 class="text-slate-800 text-5xl lg:text-7xl font-bold lg:leading-20 text-center md:text-left">
        Bezpieczne instalacje elektryczne dla Twojego domu
      </h1>

      <h2 class="text-slate-500 text-lg lg:text-xl mt-6 text-center md:text-left">
        Nowoczesne usługi elektryczne, profesjonalne podejście i gwarancja spokoju w każdym zakamarku Twojej przestrzeni.
      </h2>

      <nuxt-link
        class="mt-8 px-5 py-3 bg-primary text-white font-medium rounded-md self-center md:self-start"
        :to="{ path: '/', hash: '#services' }"
      >
        Sprawdź ofertę
      </nuxt-link>
    </div>

    <div class="xl:hidden md:size-[520px] lg:size-[400px] mx-auto">
      <nuxt-img
        src="/assets/images/illustration.svg"
        alt="Landig Image"
        loading="eager"
        sizes="500px lg:400px"
      />
    </div>

    <!-- eslint-disable-next-line style/max-len -->
    <div class="xl:absolute right-[-340px] top-[-30px] hidden w-[580px] flex-wrap gap-5 bg-white xl:flex xl:right-[-160px] xl:top-[-82px] 2xl:right-0 2xl:w-[660px]">
      <div class="z-5 from-3% absolute h-full w-full bg-linear-to-t from-white" />
      <div class="h-[280px] w-[280px] overflow-hidden rounded-md xl:mt-16 2xl:h-[320px] 2xl:w-[320px]">
        <nuxt-img
          class="h-full w-full object-cover"
          width="280"
          height="280"
          src="/assets/images/hero-1.webp"
          alt="Elektryk naprawia żarówkę"
          format="webp"
          loading="lazy"
        />
      </div>
      <div class="h-[280px] w-[280px] overflow-hidden rounded-md 2xl:h-[320px] 2xl:w-[320px]">
        <nuxt-img
          class="h-full w-full object-cover"
          width="280"
          height="280"
          src="/assets/images/hero-2.webp"
          alt="Elektryk podłączający przewód"
          format="webp"
          loading="lazy"
        />
      </div>
      <div class="h-[280px] w-[280px] overflow-hidden rounded-md 2xl:h-[320px] 2xl:w-[320px]">
        <nuxt-img
          class="h-full w-full object-cover"
          width="280"
          height="280"
          src="/assets/images/hero-3.webp"
          alt="Elektryk tnący przewód"
          format="webp"
          loading="lazy"
        />
      </div>
      <div class="h-[280px] w-[280px] overflow-hidden rounded-md xl:-translate-y-16 2xl:h-[320px] 2xl:w-[320px]">
        <nuxt-img
          class="h-full w-full object-cover"
          width="280"
          height="280"
          src="/assets/images/hero-4.webp"
          alt="Elektryk tnący przewód"
          format="webp"
          loading="lazy"
        />
      </div>
    </div>
  </main>
</template>

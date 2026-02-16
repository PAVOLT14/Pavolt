<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref<boolean>(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="container mx-auto flex justify-between items-center py-6 px-6" @keydown.escape="isMenuOpen = false">
    <NuxtImg
      src="/assets/logo.svg"
      width="108"
      height="32"
      alt="Company logo"
      preload
      itemprop="logo"
    />

    <!-- Hamburger Button for Mobile -->
    <button
      class="lg:hidden z-50 cursor-pointer"
      :aria-expanded="isMenuOpen"
      aria-controls="mobile-menu"
      aria-label="Toggle navigation menu"
      @click="toggleMenu"
    >
      <Icon
        :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'"
        class="text-slate-800"
        size="24"
      />
    </button>

    <!-- Desktop Navigation -->
    <nav class="hidden lg:block" role="navigation">
      <ul class="flex gap-x-6 items-center text-slate-700">
        <li>
          <NuxtLink :to="{ path: '/', hash: '#projects' }">
            Wykonane realizacje
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ path: '/', hash: '#services' }">
            Oferta
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ path: '/', hash: '#testimonials' }">
            Opinie klientów
          </NuxtLink>
        </li>
        <li>
          <NuxtLink :to="{ path: '/', hash: '#faq' }">
            FAQ
          </NuxtLink>
        </li>
        <li class="font-bold text-primary">
          +48 883 966 049
        </li>
      </ul>
    </nav>

    <!-- Mobile Navigation -->
    <div
      class="fixed top-0 left-0 h-full w-full bg-white transform transition-transform duration-500 ease-in-out z-40 lg:hidden"
      :class="[
        isMenuOpen ? 'translate-x-0' : 'translate-x-full',
      ]"
    >
      <div class="container mx-auto pt-6 px-4 flex flex-col gap-8">
        <NuxtImg
          src="/assets/logo.svg"
          width="108"
          height="32"
          alt="Company logo"
          itemprop="logo"
        />
        <nav role="navigation">
          <ul class="flex flex-col gap-y-6 text-slate-700 items-center">
            <li>
              <NuxtLink
                :to="{ path: '/', hash: '#projects' }"
                @click="toggleMenu"
              >
                Wykonane realizacje
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="{ path: '/', hash: '#services' }"
                @click="toggleMenu"
              >
                Oferta
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="{ path: '/', hash: '#testimonials' }"
                @click="toggleMenu"
              >
                Opinie klientów
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="{ path: '/', hash: '#faq' }"
                @click="toggleMenu"
              >
                FAQ
              </NuxtLink>
            </li>
            <li class="font-bold text-primary">
              +48 883 966 049
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

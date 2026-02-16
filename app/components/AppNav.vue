<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref<boolean>(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="container mx-auto flex justify-between items-center py-6 px-6" @keydown.escape="isMenuOpen = false">
    <!-- eslint-disable-next-line style/max-len -->
    <a href="#main-content" class="absolute left-6 top-6 z-100 -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 opacity-0 focus:static focus:m-0 focus:h-auto focus:w-auto focus:overflow-visible focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
      Przejdź do treści
    </a>

    <nuxt-img
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
      <icon
        :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'"
        class="text-slate-800"
        size="24"
        aria-hidden="true"
      />
    </button>

    <!-- Desktop Navigation -->
    <nav class="hidden lg:block" role="navigation">
      <ul class="flex gap-x-6 items-center text-slate-700">
        <li>
          <nuxt-link :to="{ path: '/', hash: '#projects' }">
            Wykonane realizacje
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ path: '/', hash: '#services' }">
            Oferta
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ path: '/', hash: '#testimonials' }">
            Opinie klientów
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="{ path: '/', hash: '#faq' }">
            FAQ
          </nuxt-link>
        </li>
        <li class="font-bold text-primary">
          +48 883 966 049
        </li>
      </ul>
    </nav>

    <!-- Mobile Navigation -->
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu nawigacji"
      class="fixed top-0 left-0 h-full w-full bg-white transform transition-transform duration-500 ease-in-out z-40 lg:hidden"
      :class="[
        isMenuOpen ? 'translate-x-0' : 'translate-x-full',
      ]"
    >
      <div class="container mx-auto pt-6 px-4 flex flex-col gap-8">
        <nuxt-img
          src="/assets/logo.svg"
          width="108"
          height="32"
          alt="Company logo"
          itemprop="logo"
        />
        <nav role="navigation">
          <ul class="flex flex-col gap-y-6 text-slate-700 items-center">
            <li>
              <nuxt-link
                :to="{ path: '/', hash: '#projects' }"
                @click="toggleMenu"
              >
                Wykonane realizacje
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="{ path: '/', hash: '#services' }"
                @click="toggleMenu"
              >
                Oferta
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="{ path: '/', hash: '#testimonials' }"
                @click="toggleMenu"
              >
                Opinie klientów
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                :to="{ path: '/', hash: '#faq' }"
                @click="toggleMenu"
              >
                FAQ
              </nuxt-link>
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

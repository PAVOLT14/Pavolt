<template>
  <footer class="flex-col gap-8 lg:flex-row mx-auto container pt-12 pb-10 px-6 flex justify-between border-slate-100 border-t">
    <div class="flex flex-col justify-between gap-6">
      <div class="flex flex-col gap-4">
        <nuxt-img
          src="/assets/logo.svg"
          width="108"
          height="32"
          alt="Company logo"
          itemprop="logo"
          loading="lazy"
        />
        <p class="text-sm text-slate-500">
          © pavolt.com - All rights reserved.
        </p>
      </div>

      <div class="flex gap-2 items-center">
        <p class="text-primary font-handwriting text-xl">
          Follow us:
        </p>
        <a
          href="https://www.instagram.com/_pavolt_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pavolt na Instagramie (otwiera się w nowej karcie)"
        >
          <icon name="lucide:instagram" class="text-slate-800" size="24" aria-hidden="true" />
        </a>
      </div>
    </div>

    <div class="flex gap-8 lg:gap-20 flex-col md:flex-row md:justify-between lg:justify-center">
      <div class="flex flex-col gap-3">
        <p class="text-slate-800 text-sm font-medium">
          Nawigacja
        </p>
        <nav aria-label="Linki w stopce">
          <ul class="flex flex-col gap-2 text-slate-500 text-sm">
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
          </ul>
        </nav>
      </div>

      <div class="flex flex-col gap-3">
        <p class="text-slate-800 text-sm font-medium">
          Informacje kontaktowe
        </p>
        <div class="flex flex-col gap-2 text-slate-500 text-sm">
          <p>+48 883 966 049</p>
          <p>pavolt.elektryk@gmail.com</p>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <p class="text-slate-800 text-sm font-medium">
          Dostępność usług
        </p>
        <div class="flex flex-col gap-2 text-slate-500 text-sm">
          <p>Małopolska</p>
        </div>
      </div>
    </div>
  </footer>
</template>

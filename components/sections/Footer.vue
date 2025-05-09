<template>
  <footer class="flex-col gap-8 lg:flex-row mx-auto container pt-12 pb-10 px-6 flex justify-between border-slate-100 border-t">
    <div class="flex flex-col justify-between gap-6">
      <div class="flex flex-col gap-4">
        <img
          src="/assets/logo.svg"
          width="108"
          height="32"
          alt="Logo"
        >
        <p class="text-sm text-slate-500">
          © pavolt.com - All rights reserved.
        </p>
      </div>

      <div class="flex gap-2 items-center">
        <p class="text-primary font-handwriting text-xl">
          Follow us:
        </p>
        <a href="https://www.instagram.com/_pavolt_/" target="_blank" rel="noopener noreferrer">
          <Icon name="lucide:instagram" class="text-slate-800" size="24" />
        </a>
      </div>
    </div>

    <div class="flex gap-8 lg:gap-20 flex-col md:flex-row md:justify-between lg:justify-center">
      <div class="flex flex-col gap-3">
        <p class="text-slate-800 text-sm font-medium">
          Nawigacja
        </p>
        <nav>
          <ul class="flex flex-col gap-2 text-slate-500 text-sm">
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

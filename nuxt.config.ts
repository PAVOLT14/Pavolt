/* eslint-disable style/max-len */
import Aura from '@primeuix/themes/aura'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    'nuxt-security',
    '@primevue/nuxt-module',
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  devtools: { enabled: true },

  app: {
    head: {
      title:
        'Elektryk Tarnów | Pavolt usługi elektryczne',
      htmlAttrs: {
        lang: 'pl',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Elektryk Tarnów: usługi elektryczne, instalacje elektryczne, oświetlenia zewnętrzne, domy z bali i domy murowane.',
        },
        {
          name: 'keywords',
          content: 'elektryk tarnów, instalacje elektryczne, fotowoltaika, oświetlenie zewnętrzne, pogotowie elektryczne, domy z bali, domy murowane, Tarnów',
        },
        { name: 'author', content: 'Pavolt' },

        { property: 'og:title', content: 'Elektryk Tarnów | Pavolt profesjonalne usługi elektryczne' },
        {
          property: 'og:description',
          content: 'Elektryk Tarnów: instalacje elektryczne, oświetlenia zewnętrzne, domy z bali i domy murowane.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://elektryktarnow.com' },
        { property: 'og:site_name', content: 'Elektryk Tarnów | Pavolt' },
        { property: 'og:locale', content: 'pl_PL' },

        // Twitter Cards
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Elektryk Tarnów | Pavolt profesjonalne usługi elektryczne' },
        {
          name: 'twitter:description',
          content: 'Elektryk Tarnów: instalacje elektryczne, oświetlenia zewnętrzne, domy z bali i domy murowane.',
        },
      ],

      link: [
        { rel: 'canonical', href: 'https://elektryktarnow.com' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  compatibilityDate: '2024-11-01',

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // TODO UI:
  // - icon for "Magazyny energi"
  // - images for new sections
  // - SEO: favicons
  // - Posthog

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  primevue: {
    autoImport: false,
    components: {
      include: ['Image', 'Carousel'],
    },
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false || 'none',
        },
      },
    },
  },
})

/* eslint-disable style/max-len */
import Aura from '@primeuix/themes/aura'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    'nuxt-security',
    '@primevue/nuxt-module',
    '@nuxt/image',
    '@nuxt/fonts',
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
        { rel: 'icon', type: 'image/x-icon', href: '/assets/favicon/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/assets/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/assets/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/assets/favicon/site.webmanifest' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  runtimeConfig: {
    public: {
      posthogPublicKey: 'phc_S0Y57Qf5Mqb2ktqY5ZuIB7h5DyBG6o6vyJ3AvZ3NhKI',
      posthogHost: 'https://eu.i.posthog.com',
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
  // - Posthog
  // - use nuxt image

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: ['300', '400', '500', '600', '700'] },
      { name: 'Nothing You Could Do', provider: 'google', weights: ['400'] },
    ],
  },

  image: {
    domains: ['avatars0.githubusercontent.com'],
    format: ['webp'],
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

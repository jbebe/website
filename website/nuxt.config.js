import routing from './library/routes.generated'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'website',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', as: 'font', type: 'font/ttf', href: '/fonts/DeterminationSansWebRegular.ttf', crossorigin: 'anonymous' },
      { rel: 'preload', as: 'font', type: 'font/ttf', href: '/fonts/WindowsRegular.ttf', crossorigin: 'anonymous' },
      { rel: 'preload', as: 'font', type: 'font/ttf', href: '/fonts/Dos.ttf', crossorigin: 'anonymous' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/init.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  generate: {
		routes: routing.map(x => x.href),
	},

  // Public Configuration: https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config/
  publicRuntimeConfig: {
    assetUrl: 'https://mainstorage3.blob.core.windows.net/website-storage'
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-vs.css'
      }
    }
  }
}

require('dotenv').config()

export default {
  mode: 'universal',

  head: {
    title: 'tub-aiglart.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Tuija Unho-Berger ist eine in Bayern lebende finnische Künstlerin mit berühmten Ursprung (Ilmari Unho, Satu Unho). Auf ihrer Webseite können Sie ihre Werke begutachten, sowohl als auch Termine von kommenden oder vergangenen Ausstellungen einsehen.' },
      { hid: 'author', name: 'author', content: 'Oskar "Rxsto" Lang (https://rxsto.me)' },
      { hid: 'publisher', name: 'publisher', content: 'Tuija Unho-Berger' },
      { hid: 'image', name: 'image', content: 'https://tub-aiglart.com/img/logo.png' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { hid: 'application-name', name: 'application-name', content: 'tub-aiglart' },
      { hid: 'theme-color', name: 'theme-color', content: '#000000' },
      { hid: 'og:title', property: 'og:title', content: 'tub-aiglart' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'tub-aiglart' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://tub-aiglart.com' },
      { hid: 'og:description', property: 'og:description', content: 'Tuija Unho-Berger ist eine in Bayern lebende finnische Künstlerin mit berühmten Ursprung (Ilmari Unho, Satu Unho). Auf ihrer Webseite können Sie ihre Werke begutachten, sowohl als auch Termine von kommenden oder vergangenen Ausstellungen einsehen.' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
      { hid: 'og:image', property: 'og:image', content: 'https://tub-aiglart.com/img/logo.png' },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '500' },
      { hid: 'og:image:height', property: 'og:image:height', content: '500' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'tub-aiglart logo' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@rxsto_official' }
    ],
    link: [
      { rel: 'canonical', href: 'https://tub-aiglart.com' },
      { rel: 'icon', href: '/img/logo.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700|Roboto:400,500,700&display=swap' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.1/css/all.css' }
    ]
  },

  loading: { color: '#fff' },

  css: [
    '~/node_modules/@tub/css/build/framework.css'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-env', {
      keys: [
        'CDN_PATH',
        'BASE_URL'
      ]
    }]
  ],

  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

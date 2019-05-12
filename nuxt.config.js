export default {
  mode: 'universal',

  head: {
    title: 'tub-aiglart.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'main' }
    ],
    link: [
      { rel: 'icon', href: '/img/logo.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Hind+Siliguri:300,700|Roboto:300,500,700' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.1/css/all.css' }
    ]
  },

  loading: { color: '#fff' },

  css: [
    '@/static/css/reset.css',
    '@/static/css/default.css'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['cookie-universal-nuxt', { alias: 'cookies' }]
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


export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#' },
  css: [
    './assets/fonts/montserrat.css',
    './assets/css/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    './assets/sass/index.sass'
  ],
  plugins: [
    '@/plugins/globals',
    {
      src: '@/plugins/Slider',
      ssr: false
    }
  ],
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
  },
  build: {
    vendor: ['vue-agile'],
    transpile: [/^element-ui/],
    extend (config, ctx) {
    }
  }
}
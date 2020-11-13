export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  // target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    // titleTemplate: '%s',
    title: '浙江保密学院培训中心',
    meta: [
      { charset: 'utf-8' },
      /*优先使用 IE 最新版本和 Chrome*/
      { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      {
        hid: "keywords",
        name: "keywords",
        content: ''
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    {src: '~assets/css/common.scss', lang:'scss'},
    {src: '~assets/css/iconfont.scss', lang:'scss'},
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    {
      src: "~/plugins/swiper.js",
      ssr: false,
      mode: 'client'
    },
    {
      src: '~/plugins/setFontSize.js',
      ssr: true
    },
    "@/plugins/element-ui.js",
    {
      src: "@/plugins/axios",
      ssr: true
    },
  ],
  // server:{
  //   port: 3000, // 端口号
  //   host: "0.0.0.0" // 本地ip地址,
  // },
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    "@nuxtjs/proxy"
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  // 环境变量
  env: {
    // BASE_URL: 'http://192.168.1.19:8080', // 公共url
    BASE_URL: ""// 公共url
  },
  axios: {
    proxy: true,
    retry: {
      retries: 3 // 请求失败后重复请求次数
    }
  },
// 代理 解决本地跨域
  proxy: {
    "/api/": {
      target: "http://apibaomiceshi.biaofun.com.cn", // 代理地址
      pathRewrite: {
        "^/api/": "" // 路径重写
      }
    }
  },  // proxy: [
  //   [
  //     '/api', {
  //       target:'http://192.168.1.19:8080',  //api请求路径
  //       pathRewrite: { '^/api' : '/' }  //重定向请求路径，防止路由、api路径的冲突
  //     }
  //   ]
  // ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    vendor: ['axios', 'element-ui'],
    //element-ui按需加载
    babel: {
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    }
  },
}

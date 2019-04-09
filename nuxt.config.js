import pkg from './package'
const axios = require("axios")

export default {
  mode: 'universal',

  
  // Headers of the page
  head: {
    title: pkg.description,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "MyStoryblok-blog" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Quicksand:400,700'}
    ]
  },

  //Customize the progress-bar color
  loading: { color: '#fff' },

  
  //Global CSS
  css: [
    
  ],

  // Plugins to load before mounting the App
  plugins: [
  ],

  // Nuxt.js modules
  modules: [ 

    //fontawesome
  /*    'nuxt-fontawesome', {
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }, */

    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',

    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma

    // CMS storyblok modudes
    [ 
      "storyblok-nuxt", 
      { accessToken: process.env.NODE_ENV == "production" ? "HNrs9J7ik1s2F3dFoGBqNwtt" :
      "mrTgqb8PhauQr1YGRFaJJgtt", cacheProvider:"memory"}
    ]
  ],
  generate:{
    routes(){
      return axios.get("https://api.storyblok.com/v1/cdn/stories?version=published&token=HNrs9J7ik1s2F3dFoGBqNwtt&starts_with=blog&cv="
      + Math.floor(Date.now() / 1e3)
      ).then(res => {
        const blogPosts = res.data.stories.map(bp => bp.full_slug)
        return [
          '/',
          '/blog',
          '/about',
          ...blogPosts
        ]
      })
    }
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}

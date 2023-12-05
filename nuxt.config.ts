// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: ['~/assets/css/main.css', '~/assets/scss/_vars.scss'],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "@/assets/scss/_vars.scss" as *;',
  //       },
  //     },
  //   },
  // },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module', // https://nuxt.com/modules/eslint
    'nuxt-icon', // https://github.com/nuxt-modules/icon,https://icones.js.org/

    // https://nuxt.com/modules/cookie-control
    // [
    //   '@dargmuesli/nuxt-cookie-control',
    //   {
    //     description: {
    //       en: 'Used for cookie control.',
    //     },
    //     id: 'ga', // if unset, `getCookieId(cookie)` returns the cookie's slugified name instead, which e.g. is used to fill the state's `enabledCookieIds` list
    //     // use a short cookie id to save bandwidth!
    //     name: {
    //       en: 'Google Analytics', // you always have to specify a cookie name (in English)
    //     },
    //     src: 'https://www.googletagmanager.com/gtag/js?id=GTM-NXBWBHWK',
    //     targetCookieIds: [
    //       'cookie_control_consent',
    //       'cookie_control_enabled_cookies',
    //     ],
    //     colors: {
    //       barBackground: '#3419c4',
    //       barTextColor: '#fff',
    //       barButtonColor: '#fff',
    //       barButtonBackground: '#0400b0',
    //       barButtonHoverColor: '#0400b0',
    //       barButtonHoverBackground: '#fff',
    //     },
    //   },
    // ],
  ],

  // https://nuxt.com/modules/nuxt-gtm
});

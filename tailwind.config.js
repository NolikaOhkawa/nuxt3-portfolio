/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  extend: {
    /*eslint-env node*/
    '@layer utilities': demo,
  },
};

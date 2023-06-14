import type { Config } from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        asd: '#FF0000'
      }
    }
  },
  plugins: [],
  content: [
    './components/**/*.{vue,js}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './pages/*.vue',
  './plugins/**/*.{js,ts}',
  './nuxt.config.{js,ts}']
}

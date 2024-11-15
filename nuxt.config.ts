import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';

const MyPreset = definePreset(Aura, {
  semantic: {
      primary: {
          50: '{emerald.50}',
          100: '{emerald.100}',
          200: '{emerald.200}',
          300: '{emerald.300}',
          400: '{emerald.400}',
          500: '{emerald.500}',
          600: '{emerald.600}',
          700: '{emerald.700}',
          800: '{emerald.800}',
          900: '{emerald.900}',
          950: '{emerald.950}'
      }
  }
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxt-auth-sanctum', '@nuxtjs/tailwindcss','@primevue/nuxt-module'],
  sanctum: {
      baseUrl: process.env.BACKEND_URL,
  },
  primevue: {
    options: {
        theme: {
            preset: MyPreset,
            options: {
              prefix: 'p',
              darkModeSelector: '.color-scheme-dark',
              cssLayer: false
            } 
        }
    }
  }
})
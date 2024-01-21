/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import defaults from './defaults'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          "primary": '#472AB2',
          "secondary": '#4AEAD8',
          "on-secondary": "#FFFFFF"
        },
      },
      dark: {
        dark: true,
        colors: {
          "primary": '#472AB2',
          "secondary": '#4AEAD8',
        },
      },
    },
  },
})

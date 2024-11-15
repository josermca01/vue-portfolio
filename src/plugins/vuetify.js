import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#121212',
    surface: '#121212',
    'surface-bright': '#263238',
    'surface-light': '#EEEEEE',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    primary: '#1867C0',
    'primary-darken-1': '#1F5592',
    secondary: '#48A9A6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    background2: '#282828',
    background3: '#383838',
    highlight:'#FAFAFA'
  },
  variables: {
    'border-color': '#282828',
    'border-opacity': 0,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#263238',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
  }
}

export default createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi'
    },
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 361,
      md: 520,
      lg: 800,
      xl: 1280,
    },
  },
})

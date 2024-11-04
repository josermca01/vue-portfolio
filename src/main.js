import { createApp, provide, h } from 'vue'
import App from './App.vue'
import myCustomTheme from './plugins/vuetify'

// Vuetify
import 'vuetify/styles'


// Crie a aplicação Vue
const app = createApp({
  render: () => h(App),
}).use(myCustomTheme)

app.mount('#app')

// export default apolloClient

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { createYmaps } from 'vue-yandex-maps'

import './assets/base.css'

const app = createApp(App)

app
  .use(router)
  .use(store)
  .use(
    createYmaps({
      apikey: 'f2977373-5b81-44ea-b4a9-cef1c17a6183'
    })
  )

app.mount('#app')

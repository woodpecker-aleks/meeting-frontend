import { createApp } from 'vue'
import '@api/index'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'

const app = createApp(App)

export default app


require('@components')
require('@utils/clickOutsideDirective')
require('@utils/autoFocusDirective')

app
  .use(store)
  .use(router)
  .mount('#app')
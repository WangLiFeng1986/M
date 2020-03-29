import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import md5 from 'js-md5'
import tips from './utils/create_tips'
import './style/main.less'
import { Field, Spinner, MessageBox, Indicator, Actionsheet } from 'mint-ui'
import VueClipboard from 'vue-clipboard2'
Vue.component(Field.name, Field)
Vue.component(Spinner.name, Spinner)
Vue.component(Actionsheet.name, Actionsheet)
Vue.prototype.$confirm = tips
Vue.prototype.$md5 = md5
Vue.prototype.$messagebox = MessageBox
Vue.prototype.$indicator = Indicator
Vue.config.productionTip = false

Vue.use(VueClipboard)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

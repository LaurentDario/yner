// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuelidate from 'vuelidate'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

import 'material-design-icons/iconfont/material-icons.css'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuelidate)
Vue.use(Vuetify, {
  theme: {
    primary: colors.teal.darken4,
    secondary: colors.teal.darken1,
    accent: colors.teal.lighten3
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

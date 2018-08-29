// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFrappe from 'vue2-frappe';
import App from './App'
import router from './router'
import vueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(VueFrappe)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

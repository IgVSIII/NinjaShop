import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router';
require('./assets/app.css')

Vue.use(Router);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render (h) {
    return h(App)
  }
})

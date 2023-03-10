import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import { store } from './store';
import { router } from './routers';

Vue.use(VueResource);
// Vue.http.options.root = 'http://js.dmitrylavrik.ru/api/';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

// differents existant : https://fr.vuejs.org/v2/guide/filters.html
// ceci est un moyen de crée son propre filtre
Vue.filter('displayEuroSign', (value) => {
  return value + ' €';
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

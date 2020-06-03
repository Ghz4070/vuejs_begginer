import Vue from 'vue'
import App from './App.vue'
import router from './router/index';

// differents existant : https://fr.vuejs.org/v2/guide/filters.html
// ceci est un moyen de crée son propre filtre
Vue.filter('displayEuroSign', (value) => {
  return value + ' €';
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

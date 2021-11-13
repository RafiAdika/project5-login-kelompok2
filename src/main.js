import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import { BootstrapVue, IconsPlugin, BCarousel, CarouselPlugin, BNavbar, NavbarPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('b-carousel', BCarousel)

Vue.component('b-navbar', BNavbar)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(CarouselPlugin)

Vue.use(NavbarPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

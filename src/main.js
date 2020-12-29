import Vue from 'vue'
import App from './App.vue'

/* AOS */
import AOS from 'aos';
import 'aos/dist/aos.css';
/*
 VUENAVIGATIONBAR 
import 'vue-navigation-bar/dist/vue-navigation-bar.css';
import VueNavigationBar from 'vue-navigation-bar'
Vue.component('vue-navigation-bar', VueNavigationBar)*/

/* BOOTSTRAP *//*
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-grid.css'*/
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false

new Vue({
  created() {
    AOS.init({duration: 1500});
  },
  render: h => h(App),
}).$mount('#app')

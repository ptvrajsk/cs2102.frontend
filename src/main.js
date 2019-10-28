import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes";
import BootstrapVue from 'bootstrap-vue';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import Vuex from 'vuex';
import ElementUi from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import VueDataTables from 'vue-data-tables'

import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use(VueDataTables)
Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUi)
Vue.config.productionTip = false;

const router = new VueRouter({ routes });

const store = new Vuex.Store({
  state: { count: 0, },
  mutations: { }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

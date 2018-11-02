// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Element from 'element-ui';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
import router from './router.corporation';
import store from './store'

import App from './App';
import './icons' // icon
import './App.scss';

Vue.config.productionTip = false;

/* eslint-disable no-new */
Vue.use(Element);
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
  },
  template: '<App/>',
});

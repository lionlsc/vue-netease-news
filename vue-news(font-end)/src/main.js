import Vue from 'vue'
import App from './App'
import router from './router'
import "./App.css";
import Vant from "vant"
import 'vant/lib/index.css';
Vue.use(Vant);
import store from "./store/store"
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

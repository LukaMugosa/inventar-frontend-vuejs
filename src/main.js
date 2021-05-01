import Vue from 'vue'
import App from './App.vue'
import router from "@/router/router";
import store from "./store/store";
import ApiService from "./common/api.service";
import {CHECK_AUTH} from "@/store/action.types";


Vue.config.productionTip = false

ApiService.init();

router.beforeEach((to, from, next) => {
    Promise.all([store.dispatch(CHECK_AUTH)]).then(next);
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

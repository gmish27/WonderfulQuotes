import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import App from "./App.vue";
import VueAxiosPlugin from "./http";

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.use(VueAxiosPlugin, {
  baseURL: "https://quote-3601c.firebaseio.com/"
});

// Properties of the Vue instance object are kept inside the App.vue file
new Vue({
  render: h => h(App)
}).$mount("#app");

import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.use(Buefy);

// Properties of the Vue instance object are kept inside the App.vue file
new Vue({
  render: h => h(App),
}).$mount('#app')

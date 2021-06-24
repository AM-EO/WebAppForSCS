import Vue from 'vue'
import App from './App.vue'

//import { Tabs, Input, Field, Slider } from 'buefy'
import Buefy from 'buefy'
import '../node_modules/buefy/dist/buefy.css'

/*Vue.use(Tabs);
Vue.use(Input);
Vue.use(Field);
Vue.use(Slider);*/
Vue.use(Buefy);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

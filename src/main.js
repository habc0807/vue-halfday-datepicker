import Vue from 'vue'
import App from './App.vue'

// import VueHalfdayDatepicker from './lib/index.js'
import VueHalfdayDatepicker from '../dist/vue-halfday-datepicker.js'
Vue.use(VueHalfdayDatepicker)

new Vue({
  el: '#app',
  render: h => h(App)
})

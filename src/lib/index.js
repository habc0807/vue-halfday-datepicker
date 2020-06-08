// import Vue from 'vue'
import VueHalfdayDatepicker from './VueHalfdayDatepicker.vue'

const datePicker = {
  install: function(Vue) {
    Vue.component(VueHalfdayDatepicker.name, VueHalfdayDatepicker)
  }
}

// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) { 
	window.Vue.use(datePicker) 
}
export default datePicker

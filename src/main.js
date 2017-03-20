// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import './assets/css/font-awesome.css'
import './assets/css/style.css'
import axios from 'axios'

Vue.config.productionTip = false

// 将axios挂载到vue对象的原型下边以实现全局通用
Vue.prototype.axios = axios
/* eslint-disable no-new */
Vue.filter('number',function(value){
	if(value>10000){
		return (value/10000).toFixed(2)+'万'
	}else{
		return value
	}
});
Vue.filter('message',function(value){
	if(value.length>12){
		return value.substr(0,10)+'...'
	}else{
		return value
	}
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

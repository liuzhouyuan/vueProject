import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import global_ from '@/components/global.vue'
Vue.prototype.GLOBAL = global_
import fastclick from 'fastclick'
import '../static/font/iconfont.css'
import 'mint-ui/lib/style.min.css'
import mintui from 'mint-ui'
Vue.use(mintui)
//import '../static/css/mui.css'
//import mui from  '../static/js/mui.min.js'
import Swiper from 'swiper'
//import 'swiper/dist/css/swiper.min.css'
//import 'element-ui/lib/theme-chalk/index.css'
//import ElementUI from 'element-ui'

//Vue.use(mui)
//Vue.use(ElementUI)
import animate from 'animate.css'
Vue.use(animate)
Vue.config.productionTip = false
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

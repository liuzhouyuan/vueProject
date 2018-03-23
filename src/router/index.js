import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Index from '@/components/Index'
import PersonDate from '@/components/PersonDate'
import photograph from '@/components/photograph'
import Erweima from '@/components/Erweima'
import card from '@/components/card'
import carDetail from '@/components/carDetail'
import ecoupons from '@/components/ecoupons/ecoupons'
import ecoupdetail from '@/components/ecoupons/ecoupdetail'
import deposit from '@/components/deposit/deposit'
Vue.use(Router)
Vue.use(VueResource)
Vue.http.options.emulateJSON = true

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: Index
    },
     {
      path: '/PersonDate',
      component: PersonDate,
     },
     {
      path: '/photograph',
      component: photograph
     },
     {
      path: '/Erweima',
      component: Erweima
      },
      {
      path: '/card',
      component: card
      },
      {
        path: '/carDetail',
        component: carDetail
      },
     
       {
        path: '/ecoupons',
        component: ecoupons
      },
       {
        path: '/ecoupdetail',
        component: ecoupdetail
      },
      {
        path: '/deposit',
        component: deposit
      } 
     
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import findList from '@/components/findList'
import foodList from '@/components/foodList'
import foodShopContent from '@/components/foodShopContent'
import foodShopAddress from '@/components/foodShopAddress'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: findList,
      
    },{
    	path:"/foodList",
    	component:foodList
    },{
    	path:"/foodShopContent",
    	component:foodShopContent
    },
    {
    	path:"/foodShopAddress",
    	component:foodShopAddress
    }
  ]
})

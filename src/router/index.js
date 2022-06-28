import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import test from '@/components/test'
// import rate from '@/components/rate'
import ElementUI from 'element-ui'

Vue.use(Router)

export default new Router({
  /*routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]*/
  routes: [
  		{
  			path: '/',
            redirect:'/search'
  		},
        {
            path: '/search',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/search.vue'),
            meta: { title: '搜索' }
        },
        {
            path: '/result/:keyword',
            name:'result',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Result.vue'),
            meta: { title: '结果' }
        }        
    ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import myp from '@/components/myp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
      	{
      		path: "/index/:id",
      		component: myp
      	}
      ]
    }
  ]
})

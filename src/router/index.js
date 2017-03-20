import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import User from '../pages/User'

Vue.use(Router)

export default new Router({
	linkActiveClass:"is-active",
  routes: [
    {
      path:'/',
      component:Home
    },
    {
    	path:'/user',
    	component:User
    },
    {
    	path:'/category',
    	component:resolve=>{
    		require(['../pages/Category'],resolve)
    	}
    },
    {
    	path:'/roomList/:gameId/:gameName',
    	component:resolve=>{
    		require(['../pages/RoomList'],resolve)
    	}
    },
    {
    	path:'/Recommand',
    	component:resolve=>{
    		require(['../pages/Recommand'],resolve)
    	}
    }
  ]
})

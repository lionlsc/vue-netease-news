import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import User from "../pages/User";
import VideoList from "../pages/VideoList"
import VideoPage from "../pages/VideoPage"
import Search from "../pages/Search"
import SearchList from "../pages/SearchList"
Vue.use(Router)
export default new Router({
  routes: [
    { path:'/', redirect: '/index'},
    { path: '/index', component: Index },
    { path: '/search', component: Search },
    { path:'/user',component:User},
    { path:  "/searchlist",name:"searchlist",component:SearchList},
    { path: "/videoplayer",name:"videoplayer",component:VideoPage},
    { path:"/videolist",name:"videolist",component:VideoList}
  ]
})

import Vue from '../../node_modules/vue/dist/vue.js'  
import Router from 'vue-router'  //（----引入路由---注释说明）  
import About from '../component/about' //（--这些需要引入的是component文件夹下面创建的一些模板---相对路径----about代表about.vue模块）  
import Home from '../component/home'  
import Active from '../component/active'  
import Sort from '../component/sort'
import Fresh from '../component/sort/fresh'  
import Shop from '../component/shop'  
import My from '../component/my'  
import Brand from '../component/brand'   
import newList from '../component/newList'  
 
Vue.use(Router)  //（--使用---）  
  
export default new Router({  
  routes: [  
    {  
      path: '/home',  
      name: 'home',  
      component: Home  
    },  
    { path: '/',         //这里是路由重定向，比如页面加载时候进入首页  
      redirect: '/home'  //（比如给路由一个选中后的样式为红色  那么这里就能用到了---.router-link-active{样式}）  
    },  
    {//这里是配置子路由  
      path: '/brand',  
      name: 'brand',  
      component: Brand,  
      children: [  
        {  
          path: '/',  
          name: 'newList',  
          component: newList  
        } 
      ]  
    },  
    {  
      path: '/active',  
      name: 'active',  
      component: Active  
    },  
    {  
      path: '/sort',  
      name: 'sort',  
      component: Sort  
    },  
    {  
      path: '/shop',  
      name: 'shop',  
      component: Shop  
    },  
    {  
      path: '/my',  
      name: 'my',  
      component: My  
    },
    {  
      path: '/fresh',  
      name: 'fresh',  
      component: Fresh  
    }      
  ]  
})  
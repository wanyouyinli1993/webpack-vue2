import Vue from '../node_modules/vue/dist/vue.js';  
//import Vue from 'vue';
import App from './app.vue';
import Home from './component/home.vue';
import router from './router/index';
import './scaling.js';
import './meta.js';
import './assets/style/reset-m.css';
import './assets/style/iconfont.css';
import './assets/style/public.css';
import './assets/style/test.css';

const root= document.createElement('div');
document.body.appendChild(root);


new Vue({
	router,
	render:(h) => h(App)
}).$mount(root)

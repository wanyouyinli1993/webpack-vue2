<template>
	<div id="home">
         <Swiper :listImg="listImg"></Swiper>
         <section class="navigation">
           <router-link class="nav-item" to="/fresh">
             <i class="nav-icon iconfont icon-jinkoushengxianmeishi"></i>
             <span class="text">生鲜</span>
           </router-link>
           <router-link class="nav-item" to="/active">
             <i class="nav-icon iconfont icon-shuiguo"></i>
             <span class="text">水果</span>
           </router-link>
           <router-link class="nav-item" to="/sort">
             <i class="nav-icon iconfont icon-shipin2"></i>
             <span class="text">食品</span>
           </router-link>
           <router-link class="nav-item" to="/shop">
             <i class="nav-icon iconfont icon-leimucufushi"></i>
             <span class="text">服饰</span>
           </router-link>
           <router-link class="nav-item" to="/my">
             <i class="nav-icon iconfont icon-jiajubaihuo"></i>
             <span class="text">百货</span>
           </router-link>
           <router-link class="nav-item" to="/my">
             <i class="nav-icon iconfont icon-jinkoushangpin"></i>
             <span class="text">进口</span>
           </router-link>
           <router-link class="nav-item" to="/my">
             <i class="nav-icon iconfont icon-huiyuantejia"></i>
             <span class="text">会员</span>
           </router-link>
           <router-link class="nav-item" to="/my">
             <i class="nav-icon iconfont icon-tejia"></i>
             <span class="text">特价</span>
           </router-link>
           <router-link class="nav-item" to="/my">
             <i class="nav-icon iconfont icon-tagseopromotio"></i>
             <span class="text">活动</span>
           </router-link>
           <router-link class="nav-item" to="/my">
             <i class="nav-icon iconfont icon-zixun1"></i>
             <span class="text">资讯</span>
           </router-link>
         </section>
         <section class="home-news">
           <i class="fl new-icon iconfont icon-new"></i>
           <p class="fr new-txt" id="newRolling">
            <a class="new-txt-list">这是一个资讯信息1111111111111</a>
            <a class="new-txt-list">这是一个资讯信息2222222222222</a>   
           </p>
         </section>
         <section class="isolation"></section>
         <section class="home-active">
           <div class="fl home-active-fr">
             <p><span class="index-seconds-kill">限量秒杀</span><span class="index-screenings">午夜场</span><i class="fr act-icon iconfont icon-dazhehuodong"></i></p>
           </div>
         </section>
	</div>
</template>


<style>
  #app{
  	color: red;
  }	
</style>

<script>
import Swiper from './swiper.vue'
import a from '../assets/images/banner1.jpg'
import b from '../assets/images/banner2.jpg'

export default {  
    data() {
        return {
            listImg: [{
                url: a
            }, {
                url: b
            }]
        }
    },
    // methods: {
    //   function () { 
    //     let c,_=Function;
    //     with(o=document.getElementById("div1")){ innerHTML+=innerHTML; onmouseover=_("c=1"); onmouseout=_("c=0");}
    //     (F=_("if(#%18||!c)#++,#%=o.scrollHeight>>1;setTimeout(F,#%18?10:1500);".replace(/#/g,"o.scrollTop")))();
    //   }
      
    // },
    components: {
        Swiper,
    }
};

</script>
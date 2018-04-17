<template>
	<div id="home">
         <Swiper :listImg="listImg"></Swiper>
         <div class="navigation">
           <a></a>
         </div>
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
    components: {
        Swiper,
    }
};
</script>
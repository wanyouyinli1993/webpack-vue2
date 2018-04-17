<template>
    <div class="content">
        <div class="focus">
            <!-- focus begin -->
            <swiper :options="swiperOption">
                <!-- <swiper-slide v-for="item in map">
                    <a :href="item.i_route" rel="external nofollow" target="_blank">
                        ![](item.i_url)
                    </a>
                </swiper-slide> -->
                <a rel="external nofollow"><img src="../assets/images/banner1.jpg"></a>
                <a rel="external nofollow"><img src="../assets/images/banner2.jpg"></a>
                <div class="swiper-pagination" slot="pagination">
                </div>
            </swiper>
            <!-- focus end -->
        </div>
    </div>
</template>
<script>
    //下面我们引用两个插件，当然，在使用之前请先安装//安装方法：npm install vue-awesome-swiper --save  
    import VueAwesomeSwiper from 'vue-awesome-swiper' 
    import { swiper, swiperSlide } from 'vue-awesome-swiper' 
    export default {
        data() {
            return {
                swiperOption:
                {
                    autoplay:
                    5000,
                    initialSlide: 1,
                    loop: true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    onSlideChangeEnd: swiper = >{ 
                    //console.log('onSlideChangeEnd', swiper.realIndex)     
     
                    }    
                }   
            }  
        },

        mounted () {   
            this.bannerInfo();  
        },  
        components: {   
            swiper,   
            swiperSlide  
        }, 
        methods: {   //轮播图初始化   
            // bannerInfo() {//通过接口获取图片数据     
            //     this.$fetch('get/image/list').then(res => {      
            //         if(res.errCode == 200) {       
            //             this.map = res.errData;      
            //         }     
            //     });   
            // }  
        } 
    }   
</script>
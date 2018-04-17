<template>
	<div id="app">
	     <Header></Header>
	     <div class="content">
	     	<router-view></router-view>
	     </div>	
	     <Footer></Footer>
	</div>
</template>


<style>
  #app{
  	color: red;
  }	
</style>

<script>
import Header from './component/header.vue';
import Footer from './component/footer.vue';
import Home from './component/home.vue';
export default {
	components: {
		Header,
		Footer,
		Home,
	},
	
}
</script>
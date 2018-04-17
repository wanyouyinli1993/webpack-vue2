<template>
	<div id="app">
	     {{message}}
	</div>
</template>


<style>
  #app{
  	color: red;
  }	
</style>

<script>
    
	export default {
    data: () => ({message: 'Hello Vue.js--2!'}),  
    }
</script>
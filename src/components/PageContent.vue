<template>
	<div>
		<!-- <router-view></router-view> -->
		<!--<app-title></app-title>-->
		<app-menu></app-menu>
	</div>
</template>
<script>
	import Title from './Title.vue'
	import Menu from './ListMenu.vue'
	export default{
		components:{
			appTitle: Title,
			appMenu: Menu
		}
	}
</script>


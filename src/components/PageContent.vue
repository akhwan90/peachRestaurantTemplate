<template>
	<div>
		 <router-view></router-view>
		<!--<app-title></app-title>-->
		<!--<app-menu></app-menu>-->
		<!--<app-experience></app-experience>-->
	</div>
</template>
<script>
	import Title from './Title.vue'
	import Menu from './ListMenu.vue'
	import Dexperience from './Dexperience.vue'
	export default{
		components:{
			appTitle: Title,
			appMenu: Menu,
			appExperience : Dexperience
		}
	}
</script>


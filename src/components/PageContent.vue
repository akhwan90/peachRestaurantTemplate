<template>
	
	<!-- <app-title></app-title> -->
	<div class="page-section">
		<!-- <app-list-menu></app-list-menu> -->
		<app-experience></app-experience>
	</div>
	
</template>
<script>
import Title from './Title.vue'
import ListMenu from './ListMenu.vue'
import Dexperience from './Dexperience.vue'
export default{
	components:{
		appTitle : Title,
		appListMenu: ListMenu,
		appExperience: Dexperience
	}
}
</script>
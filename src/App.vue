<template>
	<div id="app">
		<div class="app__background">
			<div class="grid__2">
				 <app-menu></app-menu>
			</div>
			<div>
				<app-page-content></app-page-content>
			</div>
		</div>
	</div>
</template>
<script>
import Menu from './components/Menu.vue'
import PageContent from './components/PageContent.vue'
export default{
	components:{
		appMenu: Menu,
		appPageContent: PageContent
	}
}
</script>
<template>
	<div id="app">
		<div class="app__background">
			<app-menu></app-menu>
			<app-page-content></app-page-content>
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
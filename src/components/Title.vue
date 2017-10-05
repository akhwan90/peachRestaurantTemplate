<template>
	<div class="title">
		<transition enter-active-class="animated fadeIn" appear>
			<div class="title__intro">
				<div class="title__intro__main">
					<h1>Welcome To Peach</h1>	
				</div>
				<div class="title__intro__caption">
					So Tasty and Delecious
				</div>
				<div class="title__intro__subtitle">
					Begin your journey with beautiful taste
					<router-link tag="button"
								 :to="{name:'menu'}"
								 class="btn btn--journey">Start Journey</router-link>
				</div>
			</div>
		</transition>
		
	</div>
</template>
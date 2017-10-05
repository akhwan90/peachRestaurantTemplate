<template>
	<div class="experience">
		<transition enter-active-class="animated fadeInDown" appear>
		<div class="experience__lists">
			<div class="experience__lists__list">
				<figure>
					<img clas="image__size" src="../assets/img/party.png">
					<figcaption class="ex__info">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
						sed diam nonumy eirmod tempor invidunt ut labore et dolore
						magna aliquyam erat, sed diam voluptua.
					</figcaption>
				</figure>
			</div>
			<div class="experience__lists__list">
				<figure>
					<img clas="image__size" src="../assets/img/ring.png">
					<figcaption class="ex__info">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
						sed diam nonumy eirmod tempor invidunt ut labore et dolore
						magna aliquyam erat, sed diam voluptua.
					</figcaption>
				</figure>
			</div>
			<div class="experience__lists__list">
				<figure>
					<img clas="image__size" src="../assets/img/special.png">
					<figcaption class="ex__info">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
						sed diam nonumy eirmod tempor invidunt ut labore et dolore
						magna aliquyam erat, sed diam voluptua.
					</figcaption>
				</figure>
			</div>
		</div>
		</transition>
	</div>

</template>
<style scoped>
.fade-enter{
	opacity: 0
}
.fade-enter-active{
	transition: all 1s;
}

.fade-leave-active{
	transition: all 1s;
	opacity: 0;
}
</style>
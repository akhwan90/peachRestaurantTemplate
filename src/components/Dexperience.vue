<template>
	<div class="experience">
		<transition enter-active-class="animated slideInLeft" appear>
		<div class="experience__list">
				<div class="experience__list__item" key="one">
					<figure>
						<img src="../assets/img/wedding.png" alt="" class="item__place">
						<div class="item__description">
							<div class="item__description__caption">
								<h2>Wedding</h2>
								<p>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
								</p>
								<p>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
								</p>
							</div>
						</div>
					</figure>
				</div>
				<div class="experience__list__item" key="two">
					<figure>
						<img src="../assets/img/cake.png" alt="" class="item__place">
						<div class="item__description">
							<div class="item__description__caption">
								<h2>Birthday</h2>
								<p>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
								</p>
								<p>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
								</p>
							</div>
						</div>

					</figure>
				</div>
				<div class="experience__list__item" title="photo by Kaboompics https://www.pexels.com/photo/lunch-table-5929/">
					<figure>
						<img src="../assets/img/group.png" alt="" class="item__place">
						<div class="item__description">
							<div class="item__description__caption">
								<h2>Happy Group</h2>
								<p>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
								</p>
								<p>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
								</p>
							</div>
						</div>

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
<template>
	<div class="list">
		<transition enter-active-class="animated fadeInDown" appear>
			<div class="list__menu">
				<div class="list__menu__item" title="https://stock.tookapic.com/photos/13978">
					<figure>
						<div class="item__thumbnail">
							<img src="../assets/img/sphagetti.png">
						</div>
						<div class="item__caption" >
							<h2>Spaghetti</h2>
						</div>
					</figure>
				</div>
				<div class="list__menu__item" title="Photo By:'Terje Sollie' https://www.pexels.com/u/solliefoto/">
					<figure>
						<div class="item__thumbnail">
							<img src="../assets/img/steak.png" alt="https://www.pexels.com/u/solliefoto/">
						</div>
						<div class="item__caption" >
							<h2>Steak</h2>
						</div>
					</figure>
				</div>
				<div class="list__menu__item">
					<figure>
						<div class="item__thumbnail">
							<img src="../assets/img/tuna.png" alt="">
						</div>
						<div class="item__caption" >
							<h2>Premium Tuna</h2>
						</div>
					</figure>
				</div>
				<div class="list__menu__item">
					<figure>
						<div class="item__thumbnail">
							<img src="../assets/img/sushi.png" alt="">
						</div>
						<div class="item__caption" >
							<h2>Sushi</h2>
						</div>
					</figure>
				</div>
				<div class="list__menu__item" title="Photo by: Ash https://www.pexels.com/u/ash-122861/">
					<figure>
						<div class="item__thumbnail">
							<img src="../assets/img/pancake.png" alt="">
						</div>
						<div class="item__caption" >
							<h2>Pancake</h2>
						</div>
					</figure>
				</div>
				<div class="list__menu__item" title="https://www.pexels.com/photo/appetizer-close-up-cuisine-delicious-434258/">
					<figure>
						<div class="item__thumbnail">
							<img src="../assets/img/salad.png" alt="">
						</div>
						<div class="item__caption" >
							<h2>Salad</h2>
						</div>
					</figure>
				</div>
			</div>
		</transition>
	</div>
</template>
<style scoped>
slide-enter {
	opacity: 0;
	/*transform: translateY(20px);*/
}

.slide-enter-active {
	animation: slide-in 1s ease-out forwards;
	transition: opacity .5s;
}

.slide-leave {

}

.slide-leave-active {
	animation: slide-out 1s ease-out forwards;
	transition: opacity 1s;
	opacity: 0;
	position: absolute;
}

.slide-move {
	transition: transform 1s;
}

@keyframes slide-in {
	from {
		transform: translateY(20px);
	}
	to {
		transform: translateY(0);
	}
}

@keyframes slide-out {
	from {
		transform: translateY(0);
	}
	to {
		transform: translateY(20px);
	}
}
</style>
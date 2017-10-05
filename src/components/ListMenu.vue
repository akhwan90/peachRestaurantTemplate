<template>
	<div class="list">
		<div class="list__items">
			<div class="list__items__item">
				<figure>
					<img src="../assets/img/pancake.png">
				</figure>
			</div>
			<div class="list__items__item">
				<figure>
					<img src="../assets/img/sphagetti.png">
				</figure>
			</div>
			<div class="list__items__item">
				<figure>
					<img src="../assets/img/steak.png">
				</figure>
			</div>
			<div class="list__items__item">
				<figure>
					<img src="../assets/img/sushi.png">
				</figure>
			</div>
			<div class="list__items__item">
				<figure>
					<img src="../assets/img/tuna.png">
				</figure>
			</div>
			<div class="list__items__item">
				<figure>
					<img src="../assets/img/salad.png">
				</figure>
			</div>
		</div>
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
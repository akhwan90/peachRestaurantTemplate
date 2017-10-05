<template>
	<div class="menu">
		<div class="menu__mobile">
			<div class="menu__mobile__icon" @click="toggleMenu = !toggleMenu">
				<img src="../assets/img/hum_icon.png">
			</div>
			<div class="list__menu">
				<nav class="menu__mobile__list" :class="openMenu">
					<!--<transition enter-active-class="animated bounce" appear>-->
					<ul class="">
							<li><a>Home</a></li>
							<li><a>Our Menu</a></li>
							<li><a>D'Experience</a></li>
							<li><a>Reservation</a></li>
							<li><a>Location</a></li>
					</ul>
					<!--</transition>-->
				</nav>
			</div>
		</div>

	</div>
</template>
<script>
	export default{
		data(){
		    return{
		       toggleMenu: false
			}
		},
		computed:{
		    openMenu(){
		        return{
		            open__menu: this.toggleMenu
				}
			}
		}
	}
</script>
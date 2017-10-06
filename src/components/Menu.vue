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
						<router-link tag="li"
								to="{name:'home'}">
								<a>Home</a>
						</router-link>
						<router-link tag="li"
									 :to="{name:'menu'}">
							<a>Our Menu</a>
						</router-link>
						<router-link tag="li"
									 :to="{name:'dexperience'}">
								<a>D' Experiences</a>
						</router-link>
						<router-link tag="li"
									 :to="{name:'reservation'}">
								<a>Reservation</a>
						</router-link>	
					</ul>
					<!--</transition>-->
				</nav>
			</div>
		</div>
		<div class="menu__sidebar">
			<div class="menu__sidebar__navigation">
				<div class="menu__logo">
					<img src="../assets/img/chef.svg"
						 title=" Icon made by: Smashicons https://www.flaticon.com/authors/smashicons" >
				</div>
				<div class="menu__sidebar__navigation__list">
					<nav class="nav">
						<ul class="nav__group">
							<router-link tag="li"
										 to="/">
								<a>Home</a>
							</router-link>
							<router-link tag="li"
										 :to="{name:'menu'}">
								<a>Our Menu</a>
							</router-link>
							<router-link tag="li"
										 :to="{name:'dexperience'}">
								<a>D' Experiences</a>
							</router-link>
							<router-link tag="li"
										 :to="{name:'reservation'}">
								<a>Reservation</a>
							</router-link>
							<!-- <router-link tag="li"
										 :to="{name:'location'}">
										 <a>Location</a>
							</router-link> -->

						</ul>
					</nav>
				</div>
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
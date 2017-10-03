<template>
	<div class="menu">
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
							<router-link tag="li"
										 :to="{name:'location'}">
										 <a>Location</a>
							</router-link>

						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
</script>
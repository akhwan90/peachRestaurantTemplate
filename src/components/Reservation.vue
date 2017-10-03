<template>
	<div class="reservation">

		<div class="reservation__fill">
			<h2>Booking Form</h2>	
			<transition enter-active-class="animated fadeInDown" appear>
			<div class="form__position">
				<form>
				<div class="form-set">
					<label>Name</label>
					<input type="text" class="form-control">
				</div>
				<div class="form-set">
					<label>Phone</label>
					<input type="text" class="form-control">
				</div>
				<div class="form-set">
					<label>E-mail</label>
					<input type="text" class="form-control">
				</div>
				<div class="form-set">
					<label>Experience</label>
					<input type="text" class="form-control">
				</div>
				<div class="form-set">
					<label>People</label>
					<input type="text" class="form-control">
				</div>
				<button class="btn">Submit</button>
			</form>
			</div>
			</transition>
		</div>
	</div>
</template>
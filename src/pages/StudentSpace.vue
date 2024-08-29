<script setup>
defineOptions({
	name: "StudentSpace"
})


import HeaderLayout from "../layouts/student/HeaderLayout.vue"
import NavBarLayout from "../layouts/student/NavBarLayout.vue"
import BodyLayout from "../layouts/student/BodyLayout.vue"
</script>

<template>
	<div>
		<p class="text-3xl text-cyan-300">Note branch</p>
		<input type="file" name="file" id="">
	</div>
</template>

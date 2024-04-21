<template>
	<div class="about">
		<div class="blur__on__responsive"></div>
		<about-content />
	</div>
</template>


<script>
import AboutContent from '@/components/AboutContent.vue'
import { useActive } from '@/use/NavigationActive'

export default {
	name: 'MyAbout',
	components: {
		AboutContent,
	},
	setup(){
		return useActive('nav ul #home', 'nav ul #faq', '.navigation .click', 'nav ul #crypto', 'nav ul #about')
	}
}
</script>
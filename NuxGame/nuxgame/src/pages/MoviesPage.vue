<script setup lang="ts">
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
    import {  watchEffect } from 'vue';
    import { useMoviesStore } from '../store/movies.js';

    const store = useMoviesStore()
    store.getGenres()

    watchEffect(() => {
        if(store.genres) return store.getMoviesData()
    })
</script>

<template>
	<main>
		<h1>
			Chat
		</h1>
		<carousel 
			:items-to-show="4"
			:itemsToScroll="1" 
			:wrapAround="true"
			:snapAlign="'start'"
			v-if="store.moviesData"
		>
			<slide 
				v-for="item in store.moviesData?.results" 
				:key="item.id"
				class="slide"
			>
				<div class="slide__body">
					<div class="image__wrapper">
						<img :src="'https://image.tmdb.org/t/p/w500/'+item.poster_path" alt="">
					</div>
					<h3>
						{{ item.title }}
					</h3>
				</div>
			</slide>

			<template #addons>
				<navigation />
				<pagination />
			</template>
		</carousel>
	</main>
</template>

<style lang="scss" scoped>
	.image__wrapper{
		display: flex;
    	justify-content: center;
    	align-items: center;
		padding: 3px;
		background: linear-gradient(124deg, rgba(0,0,0,1) 36%, rgba(89,0,0,1) 70%, rgba(255,0,0,1) 100%);
		border-radius: 50%;
		max-width: toRem(250);
		aspect-ratio: 1 / 1;
		img{
			backdrop-filter: blur(18px);
			border: 10px solid #970000a1;
			border-radius: 50%;
			width: 100%;
    		height: 100%;
    		object-fit: cover;
		}
	}
	.slide{
		padding: toRem(65) 0;
		h3{
			@include text(rgb(255, 255, 255), toRem(18), 700, toRem(20), $tt: true);
		}
	}
	.slide__body{
		display: flex;
		justify-content: center;
    	gap: toRem(15);
    	flex-direction: column;
		background: #970000a1;
    	border-radius: 10px;
    	backdrop-filter: blur(18px);
		max-width: toRem(269);
    	height: toRem(400);
    	padding: toRem(15);
    	box-shadow: 0px 0px 16px #ff0000ad;
	}
</style>

<template>
	<main>
		<site-preloader :preloader="preloader"/>
		<button type="button" @click="addNewCity" class="addNewCity">
			Add new city
		</button>
		<div class="modalWindow" :class="{ activeModal: activeModal }">
			<p>Are you sure you want to delete this?</p>
			<div class="buttons__wrapper">
				<button type="button" class="yesBtn" @click="deleteCity(indexDelCity)">Yes</button>
				<button type="button" class="noBtn" @click="() => { this.activeModal = false; this.indexDelCity = null }">No</button>
			</div>
		</div>
		<div class="modalWindow" :class="{ activeModalFavErr: activeModalFavErr }">
			<p>Maximum 5 cities</p>
		</div>
		<div class="block__wrapper" v-for="(item, index) in getAllData" :key="index">
			<div class="block" v-show="item.length > 0">
				<div class="tools__wrapper">
					<div class="search__wrapper">
						<input type="text" @keyup="search" @click.prevent="activeList" placeholder="Search city">
						<ul>
							<li v-for="item in cityDataFilter" :key="item.id" @click="updateCity(item.id, index, 1)">
								{{ `${item.name} ${item.country} ${item.state}` }}
							</li>
						</ul>
					</div>
					<div class="buttons__wrapper">
						<button type="button" @click="updateCity(getCityId[index], index, 1)">
							day
						</button>
						<button type="button" @click="updateCity(getCityId[index], index, 5)">
							5 days
						</button>
						<div class="delete__wrapper" @click="activeModalWindow(index)">
							<svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 448 512">
								<path fill="gray" d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/>
							</svg>
						</div>
					</div>
					<div class="favorites__icon" @click="addToFavorites(getCityId[index], index)">
						<svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 384 512">
							<path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/>
						</svg>
					</div>
				</div>
	
				<div class="card__wrapper" v-if="item[0] !== undefined">
					<h3>{{ getCityName[index] }}</h3>
					<div class="temp__wrapper">
						<p>{{ `${item[0].main.temp}°C.` }}</p>
						<img :src="`https://openweathermap.org/img/wn/${item[0].weather[0].icon}@2x.png`"  alt="">
					</div>
					<p>{{ `Feels like ${item[0].main.feels_like}°C. ${item[0].weather[0].main}.` }}</p>
					<p>{{ `Humidity: ${item[0].main.humidity}%` }}</p>
					<p>{{ `Wind: ${item[0].wind.speed}m/s` }}</p>
				</div>
		
				<canvas :class="`myChart${index}`" style="width:100%;max-width:650px;max-height:400px"></canvas>
			</div>
		</div>
	</main>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Chart from 'chart.js/auto'
import data from "../assets/json/city.json"
import SitePreloader from '@/components/SitePreloader.vue'

export default {
	name: 'HomeView',
	computed: {
        ...mapGetters('WeatherModules', ['getAllData', 'getDataChart', 'getLabelsChart', 'getCityId', 'getCityName']),
    },
	data(){
		return{
			cityData: [],
			cityDataFilter: [],
			charts: {},
			activeModal: false,
			indexDelCity: null,
			activeModalFavErr: false,
			preloader: true
		}
	},
	components:{
		SitePreloader
	},
	async mounted(){
		await this.requestData()
		await this.createChart('city0')
		this.cityData = data
		this.checkFavorites()
	},
	watch: {
		getAllData: {
			handler() {
				setTimeout(() => {
					this.preloader = false
				}, 500)
			},
			deep: true
		},
	},
	methods:{
        ...mapActions('WeatherModules', ['requestData', 'requestDataUpdate']),
		...mapMutations('WeatherModules', ['copyData', 'deleteData']),

		async createChart(index){
			const ctx = await document.getElementsByClassName(`myChart${index}`)
			this.charts[index] = new Chart(ctx, {
				type: "line",
				data: {
					labels: this.getLabelsChart[index],
					datasets: [
						{
							label: "Temperature",
							data: this.getDataChart[index],
							borderColor: 'rgb(75, 192, 192)',
							tension: 0.1,
							borderWidth: 3,
							pointHighlightFill: "rgb(75, 192, 192)'",
						},
					],
				},
				options: {
					responsive: true,
					scales: {
						y: {
							ticks: { color: '#fffb57', beginAtZero: true },
							grid: { color: '#fffb57b0' }
						},
						x: {
							ticks: { color: '#fffb57', beginAtZero: true },
							grid: { color: '#fffb57b0' }
						}
					}
				}
			});
		},
		async addNewCity(){
			if(Object.keys(this.getAllData).length < 6){
				let beackCity = ''
				for(let index = 0; index < Object.keys(this.getAllData).length; index++ ){
					if(!(`city${index}` in this.getAllData)){
						beackCity = `city${index}`
					}
				}
					if( beackCity === ''){
					this.createChart(`city${Object.keys(this.getAllData).length - 1}`)
					this.copyData()
				} else {
					await this.copyData()
					this.createChart(beackCity)
				}
				this.checkFavorites()
			} else {
				console.log('dosut`')
			}
		},
		activeList(e){
			e.target.parentElement.classList.value.includes('activeList') 
			? e.target.parentElement.classList.remove('activeList') 
			: e.target.parentElement.classList.add('activeList')
		},
		activeModalWindow(index){
			if(this.indexDelCity === null){
				this.activeModal = true
				this.indexDelCity = index
				setTimeout(() => {
					this.activeModal = false
					this.indexDelCity = null
				}, 5000)
			}
		},
		deleteCity(index){
			Object.keys(this.getAllData).length > 2 ? this.deleteData(index) : console.log('dosut`')
			this.activeModal = false
			this.indexDelCity = null
		},
		search(e){
			const city = e.target.value
            if(city.length > 2){
				this.cityDataFilter = this.cityData.filter(e => e.name.includes(city))
				this.cityDataFilter.sort(function (a, b) {
					if (a.name.length > b.name.length) {
						return 1;
					}
					if (a.name.length < b.name.length) {
						return -1;
					}
					return 0;
				});
            }
        },
		async updateCity(id, index, days){
			await this.requestDataUpdate({id: id, index: index, days: days})
			await this.charts[index].destroy()
			document.querySelectorAll('.search__wrapper')[index.slice(-1)].classList.remove('activeList') 
			this.createChart(index)
			this.checkFavorites()
		},
		checkFavorites(){
			const storage = JSON.parse(localStorage.getItem('userFavorites')) ? JSON.parse(localStorage.getItem('userFavorites')) : []
			for(let key in this.getCityId){
				if(storage.indexOf(this.getCityId[key]) !== -1){
					document.querySelectorAll('.favorites__icon')[key.slice(-1)].classList.add('activeFav')	
				} else {
					document.querySelectorAll('.favorites__icon')[key.slice(-1)].classList.remove('activeFav')	
				}
			}
		},
		addToFavorites(cityId, index){
			const storage = JSON.parse(localStorage.getItem('userFavorites')) ? JSON.parse(localStorage.getItem('userFavorites')) : []
			if(storage.length === 5 && !storage.includes(cityId)){
				this.activeModalFavErr = true
				setTimeout(() => {
					this.activeModalFavErr = false
				}, 5000)
			}
			if(storage.length < 5 && !storage.includes(cityId)){
				let arr = JSON.parse(localStorage.getItem('userFavorites')) ? JSON.parse(localStorage.getItem('userFavorites')) : []
				arr.push(cityId)
				localStorage.setItem('userFavorites', JSON.stringify(arr))
				document.querySelectorAll('.favorites__icon')[index.slice(-1)].classList.add('activeFav')	
			} else if(storage.includes(cityId)){
				let arr = JSON.parse(localStorage.getItem('userFavorites'))
				localStorage.setItem('userFavorites', JSON.stringify(arr.filter(el => el !== cityId)))
				document.querySelectorAll('.favorites__icon')[index.slice(-1)].classList.remove('activeFav')
			}
			this.checkFavorites()
		}
	}
}
</script>

<style lang="scss" scoped>
main{
	display: flex;
    flex-direction: column;
    align-items: center;
	padding-bottom: 40px;
}
.modalWindow{
	position: fixed;
    top: 0;
	transform: translateY(-100%);
    backdrop-filter: blur(5px);
    background: #ffffffc2;
    width: 100%;
    max-width: 500px;
    padding: 20px;
    border-radius: 10px;
	display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
	z-index: 100;
	&.activeModal{
		transition: all .25s ease;
		transform: translateY(10px);
	}
	&.activeModalFavErr{
		transition: all .25s ease;
		transform: translateY(10px);
	}
	.buttons__wrapper{
		display: flex;
		gap: 15px;
		.yesBtn{
			background: green;
			box-shadow: 0 0 3px green;
			color: white;
		}
		.noBtn{
			background: red;
			box-shadow: 0 0 3px red;
			color: white;
		}
	}
	
	p{
		font-size: 18px;
	}
}
.delete__wrapper:hover{
	cursor: pointer;
	svg path{
		fill: red;
	}
}
.favorites__icon{
	padding-right: 10px;
	svg{
		fill: gray;
		&:hover{
			fill: #f6e54e;
			cursor: pointer;
		}
	}
	&.activeFav svg{
		fill: #f6e54e;
		&:hover{
			fill: gray;
		}
	}
}
.block__wrapper{
	max-width: 650px;
    width: 100%;
}
.block{
    width: 100%;
	margin-bottom: 50px;
	box-shadow: 5px 5px 5px #f6e54e;
}
.addNewCity{
	background: #4bc0c0;
    padding: 5px 10px;
    border-radius: 5px;
    border: 2px solid #78ffff;
    color: white;
    font-size: 16px;
    margin: 20px 0;
}
.card__wrapper{
	h3{
		margin-top: 16px;
		font-size: 28px;
		letter-spacing: 1px;
		color: #4bc0c0;
	}
	p{
		color: white;
		font-size: 17px;
		margin-top: 10px;
	}
}
.search__wrapper ul{
	background: #fffb57;
    margin-top: 5px;
    border-radius: 5px;
    height: 100px;
	overflow: auto;
	position: absolute;
    width: 100%;
	display: none;

	li:hover{
		cursor: pointer;
		background: #cac73c;
		border-radius: 5px;
	}

	li{
		padding: 5px 5px;
	}
}
.search__wrapper{
	&.activeList ul{
		display: block;
	}
	position: relative;
	::-webkit-scrollbar {
		width: 10px;
		position: relative;
    }
    ::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px #2dffff; 
		border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
		background: #4bc0c0; 
		border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
		background: #257b7b; 
    }
}
.temp__wrapper{
	display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
	p{
		color: rgb(75, 192, 192);
		font-size: 32px;
		font-weight: 600;
	}
}
.tools__wrapper{
	display: flex;
	align-items: center;
    gap: 10px;
	justify-content: space-between;
	flex-wrap: wrap;
	.buttons__wrapper{
		display: flex;
		gap: 10px;
	}
}

@media  screen and (max-width:670px){
	.block{
		padding: 0 5px;
	}
}
</style>



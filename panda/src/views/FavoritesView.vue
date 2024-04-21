<template>
	<main>
		<site-preloader :preloader="preloader"/>
		<div v-if="favoritesData.length > 0" class="main__wrapper">
			<div class="block__wrapper" v-for="(item, index) in favoritesData" :key="index">
				<div class="card__wrapper">
					<div class="buttons__wrapper">
						<button type="button" @click="updateCity(index, false)">
							day
						</button>
						<button type="button" @click="updateCity(index, true)">
							5 days
						</button>
						<div class="delete__wrapper" @click="deleteFromFavorites(item.city.id)">
							<svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 448 512">
								<path fill="gray" d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/>
							</svg>
						</div>
					</div>
					<div class="info__wrapper">
						<h3>{{ item.city.name }}</h3>
						<div class="temp__wrapper">
							<div class="temp" v-for="(item, index) in tempData[item.city.name]" :key="index">
								<div class="mainInfo">
									<p>{{ item.date }}</p>
									<img :src="`https://openweathermap.org/img/wn/${item.icon}@2x.png`"  alt="">
								</div>
								<div class="otherInfo">
									<p>{{ `${item.maxTemp} / ${item.minTemp}°C.` }}</p>
									<p>{{ `Feels like ${item.feels_like}°C.` }}</p>
									<p>{{ `Humidity: ${item.humidity}%` }}</p>
									<p>{{ `Wind: ${item.wind}m/s` }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import axios from 'axios'
import SitePreloader from '@/components/SitePreloader.vue'

export default {
	name: 'FavoritesView',
	data(){
		return{
			favoritesData: [],
			tempData: {},
			preloader: true
		}
	},
	components:{
		SitePreloader
	},
	async mounted(){
		await this.getLocalStoreg()
	},
	watch: {
		favoritesData: {
			handler() {
				setTimeout(() => {
					this.preloader = false
				}, 500)
			},
			deep: true
		},
	},
	methods:{
		async getLocalStoreg(){
            if(localStorage.userFavorites && JSON.parse(localStorage.getItem('userFavorites')).length > 0){
				const userFavorites = JSON.parse(localStorage.getItem('userFavorites'))
				userFavorites.forEach(el => { 
					axios
					.get(`https://api.openweathermap.org/data/2.5/forecast?id=${el}&units=metric&appid=2f4254fc69d7b826a1bca823024e6d6d`)
					.then(res => {
						this.favoritesData.push(res.data)
						this.updateCity(res.data.city.name, false, res.data)
					})
				})
			} else {
				setTimeout(() => {
					this.preloader = false
				}, 250)
			}
        },
		deleteFromFavorites(cityId){
			this.favoritesData = this.favoritesData.filter(el => el.city.id !== cityId)
			let arr = JSON.parse(localStorage.getItem('userFavorites'))
            localStorage.setItem('userFavorites', JSON.stringify(arr.filter(el => el !== cityId)))
		},
		setData(data){
			const day = data.getDay() === 1 ? 'Mon' : data.getDay() === 2 ? 'Tue'
				: data.getDay() === 3 ? 'Wed' : data.getDay() === 4 ? 'Thu'
				: data.getDay() === 5 ? 'Fri' : data.getDay() === 6 ? 'Sat' : 'Sun'
			const month = data.getMonth() === 0 ? 'Jan' : data.getMonth() === 1 ? 'Feb' 
				: data.getMonth() === 2 ? 'Mar' : data.getMonth() === 3 ? 'Apr'
				: data.getMonth() === 4 ? 'May' : data.getMonth() === 5 ? 'Jun'
				: data.getMonth() === 6 ? 'Jul' : data.getMonth() === 7 ? 'Aug'
				: data.getMonth() === 8 ? 'Sep' : data.getMonth() === 9 ? 'Oct'
				: data.getMonth() === 10 ? 'Nov' : 'Dec'
			return `${day}, ${month} ${data.getDate()}`
		},
		updateCity(index, days, arr){
			const data = arr ? arr : this.favoritesData[index]
			let date = new Date(data.list[0].dt * 1000).toISOString().substr(0, 10)
			let masTemp = {}, qt = 0, feelsLike = 0, humidity = 0, wind = 0, maxTemp = -100, minTemp = 100
			data.list.forEach((el) => {
				if(el.dt_txt.includes(date)){
					feelsLike += el.main.feels_like
					humidity += el.main.humidity
					wind += el.wind.speed
					maxTemp = el.main.temp_max > maxTemp ? el.main.temp_max : maxTemp
					minTemp = el.main.temp_min < minTemp ? el.main.temp_min : minTemp
					qt++
				} else {
					masTemp[date] = { 
						date: this.setData(new Date(date)),
						icon: el.weather[0].icon,
						feels_like: (feelsLike / qt).toFixed(2),
						humidity: (humidity / qt).toFixed(1),
						wind: (wind / qt).toFixed(2),
						minTemp: minTemp,
						maxTemp: maxTemp
					}
					if(days){
						date = new Date(el.dt * 1000).toISOString().substr(0, 10)
						feelsLike = 0
						humidity = 0
						wind = 0 
						qt = 0
						maxTemp = -100
						minTemp = 100
						feelsLike += el.main.feels_like
						humidity += el.main.humidity
						wind += el.wind.speed
						maxTemp = el.main.temp_max > maxTemp ? el.main.temp_max : maxTemp
						minTemp = el.main.temp_min < minTemp ? el.main.temp_min : minTemp
						qt++
					}
				}
			})
			this.tempData[data.city.name] = masTemp
		}
	}
}
</script>

<style lang="scss" scoped>
main{
	padding-bottom: 40px;
}
.main__wrapper{
	display: flex;
    flex-direction: column;
    gap: 25px;
	margin-top: 20px;
}
.card__wrapper{
	margin: 0 auto;
    max-width: 325px;
    background: #333333;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.buttons__wrapper{
	display: flex;
	gap: 15px;
	margin-top: 15px;
	button{
		background: rgb(75, 192, 192);
		color: white;
		box-shadow: 0 0 5px rgb(75, 192, 192);
	}
}
.delete__wrapper:hover{
	cursor: pointer;
	svg path{
		fill: red;
	}
}
.temp{
	display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 15px;
	p{
		color: white;
	}
}
.mainInfo{
	display: flex;
    flex-direction: column;
    align-items: center;
	p{
		font-size: 20px;
		color: #fffb57;
	}
}
.otherInfo{
	p{
		color: white;
		font-size: 18px;
		margin-bottom: 5px;
	}
}

h3{
	color: rgb(75, 192, 192);
    font-size: 28px;
    letter-spacing: 2px;
	text-align: center;
    margin: 10px 0;
}
</style>

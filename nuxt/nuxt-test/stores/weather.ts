import { defineStore } from 'pinia'
import { Weather, SeparateData} from '~/types'

export const useWeatherStore = defineStore('weather', () => {
    let weatherData = ref<Weather>()
    let separateData = ref<SeparateData>()

    const setWeather = (data: Weather) => { 
        weatherData.value = data
        separateData.value = {
            city_name: data.city.name,
            description: data.list[0].weather[0].description,
            dt_txt: String(data.list[0].dt_txt).slice(0, -9),
            feels_like: data.list[0].main.feels_like,
            icon: data.list[0].weather[0].icon,
            main: data.list[0].weather[0].main,
            temp: data.list[0].main.temp,
            wind_speed: data.list[0].wind.speed
        }
    }

    const getWeather = async () => {
        try {
            let ipAddress = ''
            fetch("https://api.ipify.org")
            .then(res => res.text())
            .then(ip => ipAddress = ip)
            let getUserData = await fetch(`https://ipapi.co/${ipAddress}/json/`)
            const UserData = await getUserData.json()

            const data = await $fetch<Weather>(`https://api.openweathermap.org/data/2.5/forecast?q=${UserData.city ? UserData.city : 'London'}&units=metric&cnt=1&appid=2f4254fc69d7b826a1bca823024e6d6d`)
            setWeather(data)
        } catch(error){
            console.log(error)
        }
    }
    
    return { weatherData, separateData, getWeather }
})
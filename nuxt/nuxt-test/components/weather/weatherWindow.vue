<template>
    <div class="weather__wrapper" 
        v-if="data.separateData !== undefined"
        @mouseenter="addActive"
        @mouseleave="removeActive"
    >
        <div class="info__wrapper">
            <div class="title__wrapper">
                <h1>
                    {{ data.separateData.city_name }}
                </h1>
                <span>
                    {{ data.separateData.dt_txt }}
                </span>
            </div>
            <div class="info__text">
                <span>
                    {{ data.separateData.temp }} °C
                </span>
                <span>
                    {{ $t('weather.feels-like') + ': ' + data.separateData.feels_like }} °C
                </span>
                <span>
                    {{ $t('weather.wind-speed') + ': ' + data.separateData.wind_speed }}
                </span>
            </div>
        </div>
        <img :src="`https://openweathermap.org/img/wn/${data.separateData.icon}@2x.png`"  alt="">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path d="M416 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 128A96 96 0 1 0 416 0a96 96 0 1 0 0 192zM96 112c0-26.5 21.5-48 48-48s48 21.5 48 48V276.5c0 17.3 7.1 31.9 15.3 42.5C217.8 332.6 224 349.5 224 368c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-18.5 6.2-35.4 16.7-48.9C88.9 308.4 96 293.8 96 276.5V112zM144 0C82.1 0 32 50.2 32 112V276.5c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8C11.2 304.2 0 334.8 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.2-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6V112C256 50.2 205.9 0 144 0zm0 416c26.5 0 48-21.5 48-48c0-20.9-13.4-38.7-32-45.3V112c0-8.8-7.2-16-16-16s-16 7.2-16 16V322.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48z"/>
        </svg>
    </div>
</template>

<script setup lang="ts">
    const data = useWeatherStore()
    data.getWeather()

    const addActive = (e: MouseEvent) => {
        const element = e.target as HTMLDivElement
        element.classList.add('active')
    }

    const removeActive = (e: MouseEvent) => {
        const element = e.target as HTMLDivElement
        element.classList.remove('active')
    }
</script>

<style lang="scss" scoped>
    .weather__wrapper{
        position: fixed;
        display: flex;
        justify-content: space-between;
        background: $df-color-white;
        padding: 10px;
        border-radius: 15px;
        top: 10px;
        right: 10px;
        &.active{
            animation: activeAnim .75s both;
            .info__wrapper{
                display: block;
                animation: activeAnimContent .75s .25s both;
            }
            img{
                display: block;
                animation: activeAnimContent .75s .25s both;
            }
        }
        &:hover{
            cursor: pointer;
        }
    }
    .info__wrapper{
        display: none;
    }
    img{
        display: none;
    }
    .title__wrapper{
        display: flex;
        align-items: flex-start;
        flex-direction: column-reverse;
    }
    .info__text{
        display: flex;
        flex-direction: column;
    }

    @keyframes activeAnim {
        from {
            max-width: 50px;
        }
        to {
            max-width: 100%;
        }
    }

    @keyframes activeAnimContent {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>
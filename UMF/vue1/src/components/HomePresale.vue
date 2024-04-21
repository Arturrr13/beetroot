<template>
    <section class="home-presale"> 
        <div class="text-box">
            <h1>
                Presale  
            </h1>
            <span>
                UmaChitFund is a blockchain-based Chit Industry built on Defi to innovate & reform the ways of the Decentralized Monetary System.
            </span>
            <router-link title="Go to presale" rel="nofollow" to="/presale" class="click button btn__style element__animation--translateX">
                Join Presale whitelist
                <i v-for="index in 6" :key="index" :class="`circle--${index}`"></i>
            </router-link>
            <svg width="519" height="177" viewBox="0 0 519 177" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="graphAnim" stroke="#63AF8F" stroke-width="5px" d="M149.032 100.742L148 99.1875L181.914 76.4707L205.171 87.6871L238.621 66.2142L239.074 66.4071L305.163 94.7341L358.154 68.5798L409.61 89.5389L474.266 32L475.498 33.3998L409.98 91.7066L358.226 70.6255L305.217 96.7889L238.796 68.3199L205.299 89.8218L182.065 78.6164L149.032 100.742Z" fill="none"/>
            </svg>
        </div> 
        <div class="img">
            <img v-lazyload :data-src="require(`../assets/image/2.png`)" alt="">
        </div>  
    </section>
</template>

<script>
import lazyload from '@/assets/directives/lazyload'

export default {
    name: 'HomePresale',
    directives: {
        lazyload
    }
}
</script>

<style lang="scss" scoped>
.graphAnim{
    stroke-dashoffset: 766;
    stroke-dasharray: 766;
    animation: graphAnim 10s linear infinite;
}

@keyframes graphAnim {
    0%{
        stroke-dashoffset: 766;
    }
    50%{
        stroke-dashoffset: 384;
    }
    100%{
        stroke-dashoffset: 766;
    }
}
</style>
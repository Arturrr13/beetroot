<template>
    <div class="home-partnerships section__wrapper">
        <h1>partnerships <h2>& Press Releases</h2></h1>
        <div class="partnerships__wrapper">
            <div class="animation__wrapper">
                <div class="partnership" v-for="(item, index) in partnershipsData" :key="index">
                    <img v-lazyload :data-src="require(`@/assets/image/partnerships/${index}.png`)" alt="" :style="`max-width: ${item.width}px, width: 100%`" class="lol">
                    <a :href="`${item.link}`" :title="`${item.title}`" target="_blank"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import lazyload from '@/assets/directives/lazyload'

export default {
    name: 'HomePartnerships',
    directives:{lazyload},
    data() {
        return {
            partnershipsData: [],
        }
    },
    created () {
        axios
        .get('data/partnerships.json')
        .then(res => {
            this.partnershipsData = res.data
        })
    }
}
</script>

<style lang="scss">
    .home-partnerships{
        padding: 107px 0 107px 0;
        h1{
            align-items: flex-end;
            max-width: 1400px;
            margin: 0 auto;
        }
    }
    .partnerships__wrapper{
        margin-top: 100px;
        .animation__wrapper{
            overflow: overlay;
            width: 100vw;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 80px;
            animation: partnerships 10s linear infinite;
        }
        .partnership{
            position: relative;
            a{
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                &:hover{
                    animation: imgFilter .5s both;
                }
            }
            img{
                filter: grayscale(1);
                opacity: 1;
                transform: translateY(0);
            }
            &:hover img{
                transition: all 1s ease;
                filter: none;
                transform: scale(1.1);
            }
        }
        &:hover .animation__wrapper{
            animation: stopAnimation 1.5s linear both;
        }
    }

    @keyframes partnerships {
      0% {transform: translateX(100%);}
      100% {transform: translateX(-100%);}
    }

    @keyframes imgFilter {
      0% {display: none;}
      100% {display: block;}
    }

    @keyframes stopAnimation {
        0%   {transform: translateX(60%);}
        100% {transform: translateX(0);}
    }
</style>
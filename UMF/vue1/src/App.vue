<template>
    <site-loader />
    <site-header />
        <router-view class="router-view" v-animation/>
    <site-footer />
</template>
<script>
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'
import SiteLoader from '@/components/SiteLoader'
import animation from './assets/directives/scrollAnimation'
import axios from 'axios'
import { mapMutations } from 'vuex'
  
export default {
    data(){
        return{
            active: null,
            scroll: null
        }
    },
    components: {
        SiteHeader,
        SiteFooter,
        SiteLoader
    },
    directives: {animation},
    // mounted(){
    //     this.scroll = window.scrollY + 700
    //     window.addEventListener("scroll", () => {
    //         if(window.scrollY < this.scroll){
    //             let scroll = setInterval(() => {
    //             scrollTo(window.scrollX+5, window.scrollY+5)
    //                 if(window.scrollY > this.scroll){
    //                     clearInterval(scroll)
    //                     //this.scroll = window.scrollY + 700
    //                 }
    //             }, 20)
    //         }
    //         // if(window.scrollY > this.scroll){
    //         //     this.scroll = window.scrollY + 700
    //         // }
    //     })
    // }
    methods:{
        ...mapMutations('UserModules', ['setStatus']),
    },
    mounted(){
        if(this.$cookies.get('UserToken')){
            axios
            .get('http://localhost:5050/api/users', {
                headers: {
                    header1: this.$cookies.get('UserToken')
                }
            })
            .then(res => {
                this.setStatus(res.data.status)
			})
        }
    }
}
</script>

<style lang="scss">
    .router-view {
        animation: pageAnimation 1.3s linear both;
    }
</style>



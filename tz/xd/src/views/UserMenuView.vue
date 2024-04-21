<template>
    <main>
        <div class="buttons__wrapper">
            <button type="button" :class="{ active: this.$route.params.afterUser === 'wallet' }" @click="changeTab('wallet')">
                Кошелек
            </button>
            <button type="button"  :class="{ active: this.$route.params.afterUser === 'profile' }" @click="changeTab('profile')">
                Профиль
            </button>
            <button type="button"  :class="{ active: this.$route.params.afterUser === 'security' }" @click="changeTab('security')">
                Безопасность
            </button>
        </div>
        <wallet-tab v-if="this.$route.params.afterUser === 'wallet' || this.$route.params.afterUser === 'deposit' || this.$route.params.afterUser === 'request' || this.$route.params.afterUser === 'withdraw'"/>
        <profile-tab v-if="this.$route.params.afterUser === 'profile'"/>
        <security-tab v-if="this.$route.params.afterUser === 'security'"/>
    </main>
</template>

<script>
import WalletTab from '@/components/user-menu/WalletTab.vue'
import ProfileTab from '@/components/user-menu/ProfileTab.vue'
import SecurityTab from '@/components/user-menu/SecurityTab.vue'

export default {
    data(){
        return{
            lol: true
        }
    },
    components:{
        WalletTab,
        ProfileTab,
        SecurityTab
    },
    mounted(){

    },
    methods:{
        changeTab(tab){
            tab === 'profile' ? this.$router.push('/user-profile') : tab === 'wallet'? this.$router.push('/user-wallet') : this.$router.push('/user-security')
        }
    }
}
</script>

<style lang="scss" scoped>
    main{
        display: flex;
        background: #EEF5FE;
        height: 100%;
        padding-bottom: 20px;
    }
    .buttons__wrapper{
        display: flex;
        flex-direction: column;
        gap: 35px;
        margin: 75px 87px 0 133px;
    }
    
    button{
        width: 187px;
        height: 44px;
        background: #FFFFFF;
        border-radius: 5px;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
        border: none;
        &.active{
            background: #42239A;
            color: #FFFFFF;
        }
    }

    // @media  screen and (max-width:1000px){
    //     main{
    //         flex-direction: column;
    //     }
    //     .buttons__wrapper{
    //         flex-direction: row;
    //         flex-wrap: wrap;
    //         justify-content: center;
    //         margin: 25px 0 0 0;
    //     }
    // }
</style>
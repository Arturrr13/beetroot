<template>
    <main>
        <div class="confirmation__wrapper">
            <img src="../assets/image/сonfirmation/close-email.svg" alt="">
            <h1>Email подтвержден</h1>
            <p>Поздравляем! Теперь вы можете перейти<br>
                в свой аккаунт, и начать игру
            </p>
            <button type="button" @click="() => {this.$router.push('/')}">Перейти в аккаунт</button>
        </div>
    </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('UserModules', ['getUserData']),
    }, 
    mounted(){
        this.getUserData.userEmail === '' ? document.querySelector('.nav__block--right').style.display = 'none' : null
    }
}
</script>

<style lang="scss" scoped>
    main{
        background: #EEF5FE;
        padding: 30px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .confirmation__wrapper{
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 410px;
        height: 400px;
        background: #FFFFFF;
        border-radius: 5px;
    }

    img{
        margin: 33px 0;
    }

    h1{
        font-weight: 500;
        font-size: 25px;
        line-height: 29px;
        color: #000000;
        margin-bottom: 16px;
    }

    p{
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        text-align: center;
    }

    button{
        width: 314px;
        height: 40px;
        background: #42239A;
        border-radius: 5px;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        border: none;
        margin-top: 34px;
    }

    // @media  screen and (max-width:560px){
    //     .confirmation__wrapper{
    //        width: 95%;
    //     }
    // }
</style>
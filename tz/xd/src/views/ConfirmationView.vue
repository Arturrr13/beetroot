<template>
    <main>
        <div class="arrow__wrapper">
            <img class="arrow" @click="() => {this.$router.push('/registration')}" src="../assets/image/сonfirmation/right-arrow.png" alt="">
        </div>
        <div class="confirmation__wrapper">
            <img src="../assets/image/сonfirmation/open-email.svg" alt="">
            <h1>Подтвердите Email</h1>
            <p>
                Мы выслали вам 6-ти значный код на <br>
                {{ userEmail }} Введите код в <br>
                поле ниже
            </p>
            <div class="wrapper__name">
                <span :class="{ errActive: errActive }">{{ textErr }}</span>
                <input class="code" type="number" v-model="code" placeholder="6-ти значный код активации">
            </div>
            <button type="button" @click="checkingCode">Готово</button>
            <p class="timer" :class="{ activeSubmit: isActive }">Отправить код еще раз  {{ timer }}</p>
        </div>
    </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data(){
        return{
            timer: 60,
            userEmail: 'gmail',
            isActive: false,
            code: null,
            errActive: false,
            textErr: ''
        }
    },
    computed: {
        ...mapGetters('UserModules', ['getUserData']),
    }, 
    mounted(){
        this.StartTimer()
        this.getUserData.userEmail === '' ? document.querySelector('.nav__block--right').style.display = 'none' : null
    },
    methods:{
        StartTimer(){
            this.timer--
            const timer = setInterval(() => {
                if(this.timer > 0){
                    this.timer--
                } else {
                    this.timer = ''
                    this.isActive = true
                    clearInterval(timer)
                }
            }, 1000);
        },
        checkingCode(){
            if(this.code > 99999 && this.code < 1000000){
                this.$router.push('/confirmation-done')
            } else {
                document.querySelector('.code').style.border = '1px solid rgb(203 0 20 / 45%)'
                this.textErr = 'Не верный код активации'
                this.errActive = true
            }
        }
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
    .arrow__wrapper{
        height: 500px
    }
    
    img{
        margin: 33px 0;
    }
    .arrow{
        margin: 10px 73px 0 0;
        &:hover{
            cursor: pointer;
        }
    }

    h1{
        font-weight: 500;
        font-size: 25px;
        line-height: 29px;
        color: #000000;
        margin-bottom: 12px;
    }

    p{
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        text-align: center;
    }
    .timer{
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #A3A3A3;
    }
    .activeSubmit{
        color: #42239A;
        &:hover{
            cursor: pointer;
        }
    }
    .wrapper__name{
        position: relative;
    }
    .errActive{
        display: block;
        position: absolute;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 13px;
        color: #CB0014;
        right: 10px;
        top: 16px;
    }

    input[type=number]{
        width: 314px;
        height: 47px;
        border: 1px solid #E9E9E9;
        border-radius: 5px;
        margin: 32px 0;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #000000;
        padding: 0 25px;
        // &:focus-visible{
        //     letter-spacing: 40px;
        // }
    }

    input[type=number]::-webkit-inner-spin-button{
        appearance: none;
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
        margin-bottom: 39px;
    }
    .confirmation__wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 410px;
        height: 500px;
        background: #FFFFFF;
        border-radius: 5px;
    }

    // @media  screen and (max-width:560px){
    //     .arrow{
    //         margin: 10px 5px 0 5px;
    //     }
    //     .confirmation__wrapper{
    //        width: 100%;
    //        margin-right: 10px;
    //     }
    // }
</style>
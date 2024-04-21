<template>
    <section>
        <h1>Безопасность аккаунта</h1>
        <div class="authenticator">
            <img src="@/assets/image/userMenu/Authenticator.svg" alt="">
            <div class="text__wrapper">
                <h3>Google authenticator</h3>
                <p>Установите приложение 2FA на телефон</p>
            </div>
            <button type="button" @click="activeOnOrOff" class="authenticatorButton">Включить</button>
        </div>
        <div class="EmailSecurity">
            <img src="@/assets/image/сonfirmation/open-email.svg" alt="">
            <div class="text__wrapper">
                <h3>Защита по Email</h3>
                <p>Защита по электронной почте</p>
            </div>
            <button type="button" disabled>Включено</button>
        </div>
        <on2FA />
        <off2FA />
    </section>
</template>

<script>
import off2FA from './off2FA.vue'
import on2FA from './on2FA.vue'

export default {
    data(){
        return{

        }
    },
    components:{
        on2FA,
        off2FA
    },
    methods:{
        activeOnOrOff(){
            if(document.querySelector('.authenticatorButton').innerHTML === 'Включить'){
                document.querySelector('.on2FA__wrapper').style.display = 'flex'
                document.querySelector('.blur').style.display = 'block'
            } else {
                document.querySelector('.off2FA__wrapper').style.display = 'flex'
                document.querySelector('.blur').style.display = 'block'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    section{
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        width: 100%;
        max-width: 953px;
        max-height: 554px;
        margin-top: 26px;
        min-height: calc(100vh - 360px);
        padding: 0 10px 15px 80px;
        border-radius: 5px;
    }

    h1{
        font-size: 22px;
        line-height: 26px;
        color: #000000;
        margin-top: 48px;
        font-weight: 400;
    }

    .authenticator,
    .EmailSecurity{
        max-width: 488px;
        width: 100%;
        height: 111px;
        background: #FFFFFF;
        border: 1px solid #EBEBEB;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 36px 0 30px;
        h3{
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #000000;
        }
        p{
            font-size: 14px;
            line-height: 16px;
            color: #CACACA;
            margin-top: 8px;
        }
        button{
            width: 100px;
            height: 30px;
            background: #26A17B;
            border-radius: 5px;
            font-size: 13px;
            line-height: 15px;
            color: #FFFFFF;
            border: none;
        }
        img{
            margin-right: 25px;
            max-width: 41px;
        }
        .text__wrapper{
            width: 100%;
            max-width: 212px;
        }
    }
    .EmailSecurity button{
        background: #E1E1E6;
    }
    .authenticator{
        margin: 50px 0 10px;
    }
    
    // @media  screen and (max-width:620px){
    //     section{
    //         padding: 0 10px 15px 10px;
    //     }
    // }
</style>
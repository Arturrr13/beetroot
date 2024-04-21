<template>
    <main v-if="display">
        <div class="arrow__wrapper">
            <img class="arrow" @click="() => {this.$router.push('/login')}" src="../../assets/image/сonfirmation/right-arrow.png" alt="">
        </div>
        <div class="wrapper">
            <img src="../../assets/image/password-update/secure.svg" alt="">
            <h1>Восстановить доступ</h1>
            <p>Введите Ваш email, и мы вышлем код восстановления для возможности создать новый пароль</p>
            <email-input @validationEmail='update'/>
            <button @click="sendCode">Восстановить</button>
        </div>
    </main>
</template>

<script>
import emailInput from '../UI/EmailInput.vue'

export default {
    data(){
        return{
            validation: false
        }
    },
    props:{
        display: Boolean
    },
    components:{
        emailInput
    },
    methods: {
        sendCode () {
            if(this.validation === true){
                this.$emit('sendCode', {
                    sendMessage: false,
                    checkCode: true,
                    updateDone: false,
                    newPassword: false
                })
            } else {
                document.querySelector('input').style.border = '1px solid rgb(203 0 20 / 45%)'
            }
        },
        update (data) {
            this.validation = data.validation
        }
    }
}
</script>

<style lang="scss" scoped>
    main{
        background: #EEF5FE;
        padding: 70px 0;
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }
    .arrow__wrapper{
        height: 444px
    }
    .wrapper{
        width: 406px;
        height: 444px;
        background: #FFFFFF;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .arrow{
        margin: 10px 73px 0 0;
        &:hover{
            cursor: pointer;
        }
    }

    img{
        margin: 32px 0;
    }

    h1{
        font-weight: 500;
        font-size: 25px;
        line-height: 29px;
        color: #000000;
    }

    p{
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        margin: 15px 0 2px;
        max-width: 262px;
        text-align: center;
    }

    button{
        width: 314px;
        height: 40px;
        background: #42239A;
        border-radius: 5px;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        margin-top: 14px;
        border: none;
    }

    @media  screen and (max-width:605px){
        .wrapper{
            height: 460px;
            margin: 0 10px;
        }
    }

    @media  screen and (max-width:540px){
        .arrow{
            margin: 10px 5px 0 5px;
        }
    }
</style>
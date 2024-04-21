<template>
    <main v-if="display">
        <div class="wrapper">
            <img src="../../assets/image/password-update/newPassword.svg" alt="">
            <h1>Создание нового пароля</h1>
            <p>Придумайте новый пароль</p>
            <password-input @sendPassword='updatePassword'/>
            <password-input :checkPassword="newPassword" @ValidationPassword='checkValidation'/>
            <button type="button" @click="newPas">Сохранить</button>
        </div>
    </main>
</template>

<script>
import PasswordInput from '../UI/PasswordInput.vue'

export default {
    data(){
        return{
            newPassword: null,
            validation: false
        }
    },
    props:{
        display: Boolean
    },
    components:{
        PasswordInput
    },
    methods: {
        newPas () {
            if(this.validation === true){
                this.$emit('newPas', {
                    sendMessage: false,
                    checkCode: false,
                    updateDone: true,
                    newPassword: false
                })
            } else {
                document.querySelector('input').style.border = '1px solid rgb(203 0 20 / 45%)'
            }
        },
        updatePassword (data) {
            this.newPassword = data.password
        },
        checkValidation (data) {
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
    .wrapper{
        width: 406px;
        height: 500px;
        background: #FFFFFF;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
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
        margin: 15px 0 33px;
        max-width: 262px;
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
        margin-top: 22px;
    }
    .wrapper__code{
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
        margin: 20px 0;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #000000;
        padding: 0 25px;
    }

    input[type=number]::-webkit-inner-spin-button{
        appearance: none;
    }

    @media  screen and (max-width:605px){
        .wrapper{
            height: 480px;
            margin: 0 10px;
        }
    }
</style>
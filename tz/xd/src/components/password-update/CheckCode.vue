<template>
    <main v-if="display">
        <div class="arrow__wrapper">
            <img class="arrow" @click="turnBack" src="../../assets/image/сonfirmation/right-arrow.png" alt="">
        </div>
        <div class="wrapper">
            <img src="../../assets/image/password-update/passwordErr.svg" alt="">
            <h1>Код восстановления</h1>
            <p>Мы выслали вам 6-ти значный код на petrycio@gmail.com. Введите код в поле ниже</p>
            <div class="wrapper__code">
                <span :class="{ errActive: errActive }">{{ textErr }}</span>
                <input class="code" type="number" v-model="code" placeholder="6-ти значный код активации">
            </div>
            <button type="button" @click="checkingCode">Готово</button>
        </div>
    </main>
</template>

<script>
export default {
    data(){
        return{
            code: null,
            errActive: false,
            textErr: ''
        }
    },
    props:{
        display: Boolean
    },
    methods:{
        checkingCode(){
            if(this.code > 99999 && this.code < 1000000){
                this.$emit('checkingCode', {
                    sendMessage: false,
                    checkCode: false,
                    updateDone: false,
                    newPassword: true
                })
            } else {
                document.querySelector('.code').style.border = '1px solid rgb(203 0 20 / 45%)'
                this.textErr = 'Не верный код активации'
                this.errActive = true
            }
        },
        turnBack(){
            this.$emit('checkingCode', {
                sendMessage: true,
                checkCode: false,
                updateDone: false,
                newPassword: false
            })
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
        height: 500px
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
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        border: none;
        margin-top: 14px;
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
        top: 5px;
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
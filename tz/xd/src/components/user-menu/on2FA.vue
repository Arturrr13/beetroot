<template>
    <div class="blur"></div>
    <div class="on2FA__wrapper">
        <img class="close" src="@/assets/image/userMenu/closeBtn.svg" alt="" @click="display">
        <h1>Включить 2FA</h1>
        <div class="QR__wrapper">
            <img src="@/assets/image/userMenu/qr2fa.svg" alt="">
        </div>
        <div class="code">
            <div class="copy__message" v-if="copyMessage">
                <span>Код успешно скопирован</span>
            </div>
            <span>{{ code }}</span>
            <img src="@/assets/image/userMenu/copy.svg" alt="" @click="copy">
        </div>
        <div class="userCode">
            <input type="text" v-model="userCode" @blur="checkCode">
            <span :class="{ activeErr: activeErr }">Не верный код</span>
        </div>
        <button type="button" @click="activeSuccess">Активировать</button>
    </div>
    <FAOnSuccess />
</template>

<script>
import FAOnSuccess from './2FAOnSuccess.vue'

export default {
    data(){
        return{
            code: '26hv4qwpqycjgj6b',
            copyMessage: false,
            userCode: '',
            activeErr: false,
            codeValid: false
        }
    },
    components:{
        FAOnSuccess
    },
    methods:{
        display(){
            document.querySelector('.on2FA__wrapper').style.display = 'none'
            document.querySelector('.blur').style.display = 'none'
        },
        copy(){
            navigator.clipboard.writeText(this.code)
            this.copyMessage = true
            setTimeout(() => { this.copyMessage = false }, 2000)
        },
        activeSuccess(){
            if(this.codeValid){
                document.querySelector('.onSuccess__wrapper').style.display = 'flex'
                document.querySelector('.on2FA__wrapper').style.display = 'none'
                document.querySelector('.blur').style.display = 'block'
                document.querySelector('.authenticatorButton').style.background = '#E1E1E6'
                document.querySelector('.authenticatorButton').innerHTML = 'Отключить'
            } else {
                this.activeErr = true
            }
        },
        checkCode(){
            if(this.userCode === ''){
                this.activeErr = true
                this.codeValid = false
            } else {
                this.activeErr = false
                this.codeValid = true
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    .on2FA__wrapper{
        position: absolute;
        width: 100%;
        height: 100%;
        max-width: 406px;
        max-height: 555px;  
        background: #FFFFFF;
        box-shadow: 0px 0px 40px 20px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        display: none;
        flex-direction: column;
        align-items: center;
        padding: 0 40px;
        left: calc(50% - 200px);
        top: calc(50% - 227px);
    }
    .blur{
        width: 100%;
        width: 100%;
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(2px);
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        display: none;
    }
    .close{
        position: absolute;
        top: 18px;
        right: 17px;
        &:hover{
            cursor: pointer;
        }
    }

    h1{
        font-weight: 500;
        font-size: 25px;
        line-height: 29px;
        color: #000000;
        margin-top: 27px;
    }

    span{
        font-size: 15px;
        line-height: 18px;
        color: #000000;
    }

    button{
        width: 245px;
        height: 40px;
        background: #42239A;
        border-radius: 5px;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        border: none;
    }
    .copy__message{
        width: 154px;
        height: 31px;
        background: #FFFFFF;
        box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        display: flex;
        align-items: center;
        position: absolute;
        justify-content: center;
        top: -38px;
        span{
            font-weight: 300;
            font-size: 10px;
            line-height: 12px;      
            color: #26A17B;
        }
    }
    .QR__wrapper{
        width: 150px;
        height: 150px;
        background: #FFFFFF;
        border-radius: 5px;
        box-shadow: 0px 0px 9px #9f9292;;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 22px;
    }
    .code{
        width: 245px;
        height: 47px;
        border: 1px solid #E9E9E9;
        border-radius: 5px;
        display: flex;
        align-items: center;
        position: relative;
        justify-content: center;
        margin-top: 42px;
        margin-bottom: 83px;
        img{
            position: absolute;
            right: 18px;
            &:hover{
                cursor: pointer;
            }
        }
        &::before{
            content: 'Секретный код';
            position: absolute;
            font-size: 12px;
            line-height: 14px;
            color: #A3A3A3;
            top: -25px;
        }
        &::after{
            position: absolute;
            content: 'Отсканируйте QR код внутри приложения Google Authenticator';
            font-size: 12px;
            line-height: 14px;     
            color: #42239A;
            bottom: -35px;
            text-align: center;
        }
    }
    .userCode{
        position: relative;
        margin-bottom: 24px;
        input{
            width: 245px;
            height: 47px;
            border: 1px solid #E9E9E9;
            border-radius: 5px;
            padding: 0 15px;
            font-size: 15px;
            line-height: 18px;
            color: #000000;
        }
        &::before{
            content: 'Введите ваш  2FA проверочный код';
            position: absolute;
            font-size: 12px;
            line-height: 14px;
            color: #A3A3A3;
            top: -25px;
        }
        span{
            font-weight: 300;
            font-size: 10px;
            line-height: 12px;     
            color: #CB0014;
            position: absolute;
            bottom: -15px;
            right: 5px;
            display: none;
            &.activeErr{
                display: block;
            }
        }
    }

    // @media  screen and (max-width:470px){
    //     .on2FA__wrapper{
    //         max-width: 350px;
    //         left: calc(50% - 170px);
    //     }
    // }

    // @media  screen and (max-width:400px){
    //     .on2FA__wrapper{
    //         max-width: 350px;
    //         left: calc(50% - 180px);
    //     }
    // }
</style>
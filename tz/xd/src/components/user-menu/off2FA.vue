<template>
    <div class="blur"></div>
    <div class="off2FA__wrapper">
        <img class="close" src="@/assets/image/userMenu/closeBtn.svg" alt="" @click="display">
        <h1>Введите 2FA код</h1>
        <p>В целях безопасности мы должны убедиться что именно вы пытаетесь изменить настройки</p>
        <div class="code">
            <input type="text" v-model="code" @blur="checkCode">
            <span :class="{ activeErr: activeErr }">Не верный код</span>
        </div>
        <button type="button" @click="activeSuccess">Подтвердить</button>
        <span @click="display">Отмена</span>
    </div>
    <FAOffSuccess />
</template>

<script>
import FAOffSuccess from './2FAOffSuccess.vue'

export default {
    data(){
        return{
            code: '',
            activeErr: false,
            codeValid: false
        }
    },
    components:{
        FAOffSuccess
    },
    methods:{
        display(){
            document.querySelector('.off2FA__wrapper').style.display = 'none'
            document.querySelector('.blur').style.display = 'none'
        },
        checkCode(){
            if(this.code === ''){
                this.activeErr = true
                this.codeValid = false
            } else {
                this.activeErr = false
                this.codeValid = true
            }
        },
        activeSuccess(){
            if(this.codeValid){
                document.querySelector('.offSuccess__wrapper').style.display = 'flex'
                document.querySelector('.off2FA__wrapper').style.display = 'none'
                document.querySelector('.blur').style.display = 'block'
                document.querySelector('.authenticatorButton').style.background = '#26A17B'
                document.querySelector('.authenticatorButton').innerHTML = 'Включить'
            } else {
                this.activeErr = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .off2FA__wrapper{
        position: absolute;
        width: 100%;
        height: 100%;
        max-width: 406px;
        max-height: 400px;  
        background: #FFFFFF;
        box-shadow: 0px 0px 40px 20px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        display: none;
        flex-direction: column;
        align-items: center;
        padding: 0 40px;
        left: calc(50% - 200px);
        top: calc(50% - 200px);
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
        margin-top: 61px;
    }

    p{
        font-size: 14px;
        line-height: 16px;
        color: #42239A;
        margin-top: 23px;
        text-align: center;
    }
    .code{
        position: relative;
        margin-top: 22px;
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

    button{
        width: 245px;
        height: 40px;
        background: #42239A;
        border-radius: 5px;
        font-size: 15px;
        line-height: 18px;  
        color: #FFFFFF;
        border: none;
        margin-top: 42px;
    }

    span{
        font-size: 15px;
        line-height: 18px;
        color: #A3A3A3;
        margin-top: 25px;
        &:hover{
            cursor: pointer;
        }
    }

    // @media  screen and (max-width:470px){
    //     .off2FA__wrapper{
    //         max-width: 350px;
    //         left: calc(50% - 170px);
    //     }
    // }

    // @media  screen and (max-width:400px){
    //     .off2FA__wrapper{
    //         max-width: 350px;
    //         left: calc(50% - 180px);
    //     }
    // }
</style>
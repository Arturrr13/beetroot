<template>
    <div class="blur"></div>
    <div class="offSuccess__wrapper">
        <img src="@/assets/image/userMenu/Authenticator.svg" alt="">
        <h1> 2FA Защита <span>оключена</span></h1>
        <p>Мы настоятельно рекомендуем не отключать функцию, так как это понизит уровень безопасности вашего аккаунта</p>
        <button type="button" @click="display">Хорошо</button>
    </div>
</template>

<script>
export default {
    methods:{
        display(){
            document.querySelector('.offSuccess__wrapper').style.display = 'none'
            document.querySelector('.blur').style.display = 'none'
        },
    }
}
</script>

<style lang="scss" scoped>
    .offSuccess__wrapper{
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
        padding: 0 27px;
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

    img{
        margin: 43px 0;
        width: 56px;
        height: 56px;
    }

    h1{
        font-weight: 500;
        font-size: 25px;
        line-height: 29px;
        color: #000000;
        span{
            color: #CB0014;
        }
    }

    p{
        font-size: 15px;
        line-height: 18px;
        color: #000000;
        text-align: center;
        margin-top: 38px;
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

    // @media  screen and (max-width:470px){
    //     .offSuccess__wrapper{
    //         max-width: 350px;
    //         left: calc(50% - 170px);
    //     }
    // }

    // @media  screen and (max-width:400px){
    //     .offSuccess__wrapper{
    //         max-width: 350px;
    //         left: calc(50% - 180px);
    //     }
    // }
</style>
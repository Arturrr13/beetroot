<template>
    <main>
        <div class="confirmation__wrapper">
            <img src="../assets/image/password-update/checked.svg" alt="">
            <h1>Поздравляем!</h1>
            <p>Вы успешно обменяли XDE жетоны на USDT токены, ожидайте зачисления на ваш кошелек! 
            </p>
            <button type="button" @click="() => {this.$router.push('/user-wallet')}">Хорошо</button>
        </div>
    </main>
</template>


<style lang="scss" scoped>
    main{
        background: #EEF5FE;
        padding: 30px 0;
    }
    .confirmation__wrapper{
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 406px;
        height: 400px;
        background: #FFFFFF;
        border-radius: 5px;
    }

    img{
        margin: 66px 0 17px;
    }

    h1{
        font-weight: 500;
        font-size: 25px;
        line-height: 29px;
        color: #000000;
        margin-bottom: 21px;
    }

    p{
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        text-align: center;
        max-width: 360px;
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
        margin-top: 44px;
    }

    // @media  screen and (max-width:560px){
    //     .confirmation__wrapper{
    //        width: 95%;
    //     }
    // }
</style>
<template>
    <div class="blur"></div>
    <div class="modal__wrapper">
        <img class="close" src="@/assets/image/userMenu/closeBtn.svg" alt="" @click="display">
        <img src="@/assets/image/Coin.svg" alt="">
        <h1>Пополнить баланс</h1>
        <p>Для того чтобы начать играть, пополните пожалуйста свой баланс!</p>
        <button type="button" @click="() => {this.$router.push('/user-wallet')}">Пополнить баланс</button>
    </div>
</template>

<script>
export default {
    methods:{
        display(){
            document.querySelector('.modal__wrapper').style.display = 'none'
            document.querySelector('.blur').style.display = 'none'
        }
    }
}
</script>

<style lang="scss" scoped>
    .modal__wrapper{
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

    img:nth-child(2){
        width: 84px;
        height: 84px;
        margin-top: 33px;
    }

    h1{
        font-weight: 500;
        font-size: 25px;
        line-height: 29px;
        color: #000000;
        margin-top: 27px;
    }

    p{
        font-size: 15px;
        line-height: 18px;
        color: #000000;
        margin-top: 23px;
        text-align: center;
    }

    button{
        width: 314px;
        height: 40px;
        background: #26A17B;
        border-radius: 5px;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        border: none;
        margin-top: 44px;
    }
</style>
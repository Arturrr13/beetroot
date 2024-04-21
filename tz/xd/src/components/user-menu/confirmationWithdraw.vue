<template>
    <div class="blur"></div>
    <div class="confirmation__wrapper">
        <img class="close" src="@/assets/image/userMenu/closeBtn.svg" alt="" @click="display">
        <img src="@/assets/image/Coin.svg" alt="">
        <h1>Вывод XDE</h1>
        <div class="value">
            <span>{{ value }}</span>
            <span>USDT</span>
        </div>
        <div class="chain">
            <span>Polygon</span>
        </div>
        <div class="address">
            <input type="text" :value="address" readonly>
        </div>
        <p>Будьте очень внимательны! Отправляйте USDT токены только на свой кошелек указанной сети!!! Если вы укажите не верный адрес кошелька или другую сеть, токены будут утеряны!!!</p>
        <button type="button" @click="() => {this.$router.push('/security')}">Подтвердить</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        value: Number,
        address: String
    },
    methods:{
        display(){
            document.querySelector('.confirmation__wrapper').style.display = 'none'
            document.querySelector('.blur').style.display = 'none'
        }
    }
}
</script>

<style lang="scss" scoped>
    .confirmation__wrapper{
        position: absolute;
        width: 100%;
        height: 100%;
        max-width: 406px;
        max-height: 639px;  
        background: #FFFFFF;
        box-shadow: 0px 0px 40px 20px rgba(0, 0, 0, 0.25);
        border-radius: 30px;
        display: none;
        flex-direction: column;
        align-items: center;
        padding: 0 40px;
        left: calc(50% - 200px);
        top: calc(50% - 319px);
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

    img:nth-child(2){
        width: 100%;
        max-width: 84px;
        max-height: 84px;
        margin-top: 37px;
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

    p{
        font-weight: 300;
        font-size: 10px;
        line-height: 12px;
        color: #CB0014;
        margin-top: 19px;
    }

    button{
        width: 314px;
        height: 40px;
        background: #FBA028;
        border-radius: 5px;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        border: none;
        margin-top: 37px;
    }
    .value,
    .chain{
        width: 327px;
        height: 47px; 
        border: 1px solid #E9E9E9;
        border-radius: 5px;
        position: relative;
        margin-top: 50px;
        &::before{
            position: absolute;
            top: -25px;
            left: 0px;
            font-weight: 300;
            font-size: 15px;
            line-height: 18px;
            color: #A3A3A3;
        }
    }
    .value{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 40px 0 15px;
        margin-top: 58px;
        &::before{
            content: 'Сумма вывода';
        }
        &::after{
            content: '1 XDE = 1 USDT';
            position: absolute;
            top: -25px;
            right: 0px;
            font-weight: 300;
            font-size: 15px;
            line-height: 18px;
            color: #A3A3A3;
        }
    }
    .chain{
        padding: 0 15px;
        display: flex;
        align-items: center;
        &::before{
            content: 'Сеть';
        }
    }
    .address{
        margin-top: 50px;
        position: relative;
        &::before{
            content: 'На кошелек';
            position: absolute;
            top: -25px;
            left: 0px;
            font-weight: 300;
            font-size: 15px;
            line-height: 18px;
            color: #A3A3A3;
        }
        input{
            width: 327px;
            height: 47px; 
            border: 1px solid #E9E9E9;
            border-radius: 5px;
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;
            color: #000000;
            padding: 0 15px;
        }
    }

    // @media  screen and (max-width:620px){
    //     .confirmation__wrapper{
    //         max-width: 360px;
    //     }
    // }

    // @media  screen and (max-width:450px){
    //     .confirmation__wrapper{
    //         max-width: 360px;
    //         left: calc(50% - 180px);
    //     }
    // }
</style>
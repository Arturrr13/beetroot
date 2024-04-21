<template>
    <div v-if="this.$route.params.afterUser === 'withdraw'" class="withdraw__wrapper">
        <h1>Вывод XDE</h1>
        <p>Отдаю</p>
        <div class="get__coin">
            <span>XDE    XDICE CHEEP</span>
        </div>
        <p>Получаю</p>
        <div class="give__coin">
            <span>USDT    |    Сеть   TRC 20</span>
        </div>
        <p>Кошелек получателя</p>
        <div class="input__wrapper--wallet">
            <input type="text" v-model="address" @blur="checkingAddress">
            <span :class="{ activeErr: activeErr }">обязательное поле</span>
        </div>
        <span style="margin-bottom: 13px;">Будьте очень внимательны! Отправляйте USDT токены только на свой кошелек указанной сети!!!</span>
        <p>1 USDT = 1 XDE</p>
        <div class="input__wrapper--amount">
            <span class="value">Доступно  110 XDE</span>
            <input type="number" v-model="value" @input="() => { if(value > 110 || value < 10) { value = 110 }}">
            <span class="XDE">XDE</span>
            <button class="max" type="button" @click="() => {this.value = 110}">Max</button>
            <button class="barter" @click="display">Вывести</button>
        </div>
        <span>min: 10 USDT</span>
    </div>
    <confirmation-withdraw :value="value" :address="address"/>
</template>

<script>
import confirmationWithdraw from './confirmationWithdraw.vue'

export default {
    data(){
        return{
            value: 10,
            address: '',
            activeErr: false
        }
    },
    components:{
        confirmationWithdraw
    },
    methods:{
        display(){
            document.querySelector('.confirmation__wrapper').style.display = 'flex'
            document.querySelector('.blur').style.display = 'block'
        },
        checkingAddress(e){
            if(this.address.length > 0) {
                e.target.style.border = '1px solid rgba(38, 161, 123, 0.45)'
                this.activeErr = false
            } else {
                e.target.style.border = '1px solid rgb(203 0 20 / 45%)'
                this.activeErr = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    h1{
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        color: #000000;
        margin: 30px 0;
    }
    .withdraw__wrapper{
        padding-left: 80px;
    }

    p{
        font-weight: 300;
        font-size: 13px;
        line-height: 25px;
        color: #A3A3A3;
    }

    span{
        font-weight: 300;
        font-size: 10px;
        line-height: 12px;
        color: #CB0014;
        margin-left: 2px;
        max-width: 326px;
        display: block;
    }

    .give__coin,
    .get__coin{
        width: 325px;
        height: 47px;
        border-radius: 5px;
        border: 1px solid#E9E9E9;
        padding-left: 50px;
        display: flex;
        align-items: center;
        position: relative;
        span{
            font-size: 15px;
            line-height: 18px;
            color: #000000;
        }
    }
    .give__coin::before{
        content: url(../../assets/image/usdt.svg);
        left: 15px;
        position: absolute;
        top: 13px;
    }
    .get__coin::before{
        content: url(../../assets/image/Coin.svg);
        left: 15px;
        position: absolute;
        top: 13px;
    }
    .barter{
        width: 250px;
        height: 50px;  
        background: #42239A;
        border-radius: 5px;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        border: none;
    }

    .input__wrapper--wallet,
    .input__wrapper--amount{
        input{
            width: 325px;
            height: 47px;
            border-radius: 5px;
            border: 1px solid#E9E9E9;
        }
    }

    .input__wrapper--wallet,
    .input__wrapper--amount,
    .give__coin,
    .get__coin{
        margin-bottom: 8px;
    }
    .input__wrapper--wallet{
        position: relative;
        input{
            font-size: 16px;
            line-height: 18px;      
            color: #000000;
            padding: 0 20px;
        }
        span{
            content: 'обязательное поле';
            font-weight: 300;
            font-size: 10px;
            line-height: 12px;      
            color: #CB0014;
            position: absolute;
            top: -15px;
            left: 225px;
            display: none;
            &.activeErr{
                display: block;
            }
        }
    }
    .input__wrapper--amount{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 10px;
        width: 100%;
        max-width: 645px;
        position: relative;
        input{
            padding: 0 100px 0 20px;
            font-size: 16px;
        }
    }
    .value{
        position: absolute;
        top: -17px;
        left: 226px;
        font-weight: 300;
        font-size: 11px;
        line-height: 13px;
        color: #26A17B;
    }
    .max{
        position: absolute;
        top: 11px;
        left: 276px;
        font-weight: 300;
        font-size: 13px;
        color: #26A17B;
        background: none;
        border: none;
        width: 48px;
        height: 24px;
        border-left: 1px solid #F0EBFF;
    }
    .XDE{
        position: absolute;
        font-size: 15px;
        line-height: 18px; 
        color: #000000;
        top: 15px;
        left: 234px;
    }

    input[type=number]::-webkit-inner-spin-button{
        appearance: none;
    }

    // @media  screen and (max-width:450px){
    //     .withdraw__wrapper{
    //         padding-left: 0;
    //     }
    // }
</style>
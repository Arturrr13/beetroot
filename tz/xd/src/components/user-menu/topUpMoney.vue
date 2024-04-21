<template>
    <div>
        <div class="topUp__wrapper" v-if="this.$route.params.afterUser === 'deposit'">
            <h1>Пополнить баланс XDE</h1>
            <p>Отдаю</p>
            <div class="give__coin">
                <span>USDT    |    Сеть   TRC 20</span>
            </div>
            <p>Получаю</p>
            <div class="get__coin">
                <span>XDE    XDICE CHEEP</span>
            </div>
            <p>Кошелек отправителя USDT</p>
            <div class="input__wrapper--wallet">
                <input type="text" v-model="address" @blur="checkingAddress">
                <span :class="{ activeErr: activeErr }">обязательное поле</span>
            </div>
            <p>1 USDT = 1 XDE</p>
            <div class="wrapper--amount">
                <div class="input__wrapper--amount">
                    <input type="number">
                </div>
                <button class="barter" @click="() => { this.$router.push('/user-request') }">Обменять</button>
            </div>
            <span>min: 10 USDT</span>
        </div>
        <request v-if="this.$route.params.afterUser === 'request'"/>
    </div>
</template>

<script>
import request from './requestMoney.vue'

export default {
    data(){
        return{
            address: '',
            activeErr: false
        }
    },
    components:{
        request
    },
    methods:{
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
    .topUp__wrapper{
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
        margin-left: 5px;
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
            font-size: 15px;
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
    .barter{
        width: 250px;
        height: 50px;  
        background: #42239A;
        border-radius: 5px;
        font-size: 16px;
        line-height: 18px;
        color: #FFFFFF;
        border: none;
    }
    .wrapper--amount{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 10px;
        width: 100%;
        max-width: 645px;
        .input__wrapper--amount{
            position: relative;
            input{
                padding: 0 65px 0 20px;
                font-size: 16px;
                line-height: 18px;
            }
            &::after{
                content: 'USDT';
                position: absolute;
                top: 15px;
                right: 13px;
                font-size: 16px;
                line-height: 18px;
                color: #000000;
            }
        }
    }

    input[type=number]::-webkit-inner-spin-button{
        appearance: none;
    }

    // @media  screen and (max-width:450px){
    //     .topUp__wrapper{
    //         padding-left: 0;
    //     }
    // }
</style>
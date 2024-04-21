<template>
    <div class="request__wrapper">
        <div class="top__wrapper">
            <h1>Заявка № 1677583</h1>
            <div class="timer__wrapper">
                <span>Waiting</span>
                <div><span><span v-if="minutes < 10">0</span>{{ minutes }}</span><span>:<span v-if="seconds < 10">0</span>{{ seconds }}</span></div>
            </div>
        </div>
        <div class="info__wrapper">
            <div class="titles__wrapper">
                <span>ОТДАЕТЕ</span>
                <span>ПОЛУЧАЕТЕ</span>
            </div>
            <div class="amount__wrapper">
                <span class="usdt">20 USDT</span>
                <img src="../../assets/image/userMenu/Arrow.svg" alt="">
                <span class="xde">20 XDE</span>
            </div>
            <div class="exchange">
                <span>КУРС</span>
                <span>1 USDT / 1 XDE</span>
            </div>
            <div class="userdata__wrapper">
                <span class="player">{{ getUserData.userNickName }}</span>
                <span class="email">{{ getUserData.userEmail }}</span>
            </div>
            <div class="address__wrapper">
                <img src="../../assets/image/userMenu/QR.svg" alt="">
                <div class="text__wrapper">
                    <div class="subtext__wrapper">
                        <span>ОТПРАВИТЬ НА АДРЕС - <span style="color: red">USDT</span></span>
                        <span>Сеть TRC 20</span>
                    </div>
                    <div class="address">
                        <p>Sde2pbZHqn2c3ibYN88r5ednHPhk2Cqp1X</p>
                        <img src="../../assets/image/userMenu/copy.svg" alt="" @click="copy">
                    </div>
                </div>
            </div>
            <div class="bottom__text">
                <div class="status">
                    <div class="circle" :class="{ error: seconds === false }"></div>
                    <span>СТАТУС:</span>
                    <span style="width: 80px;" :class="{ error: seconds === false }">{{ statusText }}</span>
                </div>
                <span>Будьте очень внимательны! Отправляйте только USDT токены, только на указанный адрес, указанной сети!!!</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data(){
        return{
            minutes: 1,
            seconds: 0,
            statusText: 'В ОЖИДАНИИ'
        }
    },
    computed: {
        ...mapGetters('UserModules', ['getUserData']),
    }, 
    mounted(){
        this.StartTimer()
    },
    methods:{
        StartTimer(){
            const timer = setInterval(() => {
                if(this.minutes > 0 && this.seconds > 0){
                    this.seconds--
                } else if(this.minutes > 0 && this.seconds === 0){
                    this.minutes--
                    this.seconds = 59
                } else if(this.minutes === 0 && this.seconds > 0){
                    this.seconds--
                } else {
                    this.minutes = 0
                    this.seconds = 0
                    this.statusText = 'ПРОСРОЧЕНО'
                    clearInterval(timer)
                }
            }, 1000);
        },
        copy(){
            navigator.clipboard.writeText('Sde2pbZHqn2c3ibYN88r5ednHPhk2Cqp1X')
        },
    }
}
</script>

<style lang="scss" scoped>
    h1{
        font-weight: 500;
        font-size: 25px;
        line-height: 29px;  
        color: #000000;
    }
    .request__wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .top__wrapper{
        display: flex;
        justify-content: center;
        gap: 30px;
        margin: 38px 0 30px;
        .timer__wrapper{
            display: flex;
            span{
                font-size: 14px;
                line-height: 16px;
                color: #FFFFFF;
                width: 80px;
                height: 27px;       
                background: #42239A;
                border-radius: 5px 0px 0px 5px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            div{
                display: flex;
                justify-content: center;
                width: 60px;
                height: 27px;
                background: rgba(66, 35, 154, 0.13);
                border-radius: 0px 5px 5px 0px;
                span{
                    font-size: 14px;
                    line-height: 16px;             
                    color: rgba(0, 0, 0, 0.68);
                    background: none;
                    width: 18px;
                }
            }
        }
    }
    .info__wrapper{
        width: 100%;
        height: 100%;
        max-width: 516px;
        max-height: 393px;
        background: #FFFFFF;
        box-shadow: 0px 0px 24px -6px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 20px;
        .titles__wrapper{
            width: 55%;
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
            span{
                font-size: 11px;
                line-height: 13px;
                color: rgba(66, 35, 154, 0.3);
            }
        }
        .exchange{
            width: 71%;
            margin-top: 10px;
            span:nth-child(1){
                font-size: 11px;
                line-height: 13px;
                color: rgba(66, 35, 154, 0.3);
                margin-right: 15px;
            }

            span:nth-child(2){
                font-size: 13px;
                line-height: 15px;
                color: #000000;
            }
        }
    }
    .amount__wrapper{
        margin-top: 15px;
        span{
            font-weight: 500;
            font-size: 23px;
            line-height: 27px;     
            color: #000000;
        }
        .usdt{
            position: relative;
            &::before{
                content: url(@/assets/image/usdt.svg);
                position: absolute;
                top: 3px;
                left: -35px;
            }
        }
        .xde{
            position: relative;
            &::before{
                content: url(@/assets/image/Coin.svg);
                position: absolute;
                top: 3px;
                left: -35px;
            }
        }

        img{
            margin: 0 70px 0 35px;
        }
    }
    .userdata__wrapper{
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 40px;
        .player{
            font-size: 18px;
            line-height: 21px;    
            color: #000000;
            position: relative;
            &::before{
                content: 'Player';
                font-size: 11px;
                line-height: 13px;       
                color: rgba(66, 35, 154, 0.3);
                position: absolute;
                top: -17px;
                width: 100%;
                text-align: center;
            }
        }
        .email{
            font-size: 16px;
            line-height: 19px;
            color: #000000;
            position: relative;
            &::before{
                content: 'EMAIL';
                font-size: 11px;
                line-height: 13px;       
                color: rgba(66, 35, 154, 0.3);
                position: absolute;
                top: -17px;
                width: 100%;
                text-align: center;
            }
        }
    }
    .text__wrapper{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        span:nth-child(1){
            font-size: 11px;
            line-height: 13px;
            color: #000000;
        }

        span:nth-child(2){
            font-size: 11px;
            line-height: 13px;
            color: #FFFFFF;
            width: 91px;
            height: 21px;
            background: #000000;
            border-radius: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .subtext__wrapper{
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .address{
            display: flex;
            gap: 10px;
            img:hover{
                cursor: pointer;
            }
        }
    }
    .address__wrapper{
        display: flex;
        margin-top: 35px;
        gap: 20px;
        img{
            max-width: 46px;
        }
    }
    .bottom__text{
        display: flex;
        gap: 15px;
        align-items: flex-start;
        margin: 35px 20px 0 100px;
        span{
            font-weight: 300;
            font-size: 10px;
            line-height: 12px;
            color: #CB0014;
        }
        .status{
            display: flex;
            align-items: center;
            gap: 5px;
            span:nth-child(3){
                color: #FBA028;
            }
            span{
                font-size: 11px;
                line-height: 13px;
                color: #000000;
                &.error{
                    color: red;
                }
                
            }
            .circle{
                width: 6px;
                height: 6px;
                background: #FBA028;
                border-radius: 50%;
                &.error{
                    background: red;
                }
            }
        }
    }

    // @media  screen and (max-width:1000px){
    //     .request__wrapper{
    //         display: flex;
    //         flex-direction: column;
    //         align-items: center;
    //     }
    // }

    // @media  screen and (max-width:550px){
    //     .bottom__text{
    //         gap: 5px;
    //         flex-direction: column;
    //         margin: 20px 20px 0 15px;
    //     }
    //     .address__wrapper{
    //         flex-direction: column;
    //         align-items: center;
    //     }
    //     .amount__wrapper{
    //         img{
    //             margin: 0 45px 0 11px;
    //         }
    //     }
    // }
</style>
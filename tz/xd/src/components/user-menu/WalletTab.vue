<template>
    <section>
        <div class="wallet__wrapper" v-if="this.$route.params.afterUser === 'wallet'">
            <p class="totalBalance">
                Total balance
            </p>
            <div class="amountBalance">
                <p>
                    0.00 XDE
                </p>
            </div>
            <div class="tab__wrapper">
                <div class="tab__titles">
                    <span :class="{ activeTitle: activeTitleBalance }" @click="() => { 
                        if(this.activeTitleHistory){
                            this.activeTitleBalance = true
                            this.activeTitleHistory = false
                        }
                     }">
                        Баланс
                    </span>
                    <span :class="{ activeTitle: activeTitleHistory }" @click="() => { 
                        if(this.activeTitleBalance){
                            this.activeTitleHistory = true
                            this.activeTitleBalance = false
                        }
                     }">
                        История операций
                    </span>
                </div>
                <div v-if="activeTitleBalance" class="balance" :class="{ activeTab: activeTitleBalance }">
                    <button type="button" @click="() => { this.$router.push('/user-deposit') }">
                        Пополнить
                    </button>
                    <button type="button" @click="() => { this.$router.push('/user-withdraw') }">
                        Вывести
                    </button>
                </div>
                <div v-if="activeTitleHistory" class="historyOperation" :class="{ activeTab: activeTitleHistory }">
                    <div class="list__wrapper">
                        <div class="list__title">
                            <span style="width: 22%; text-align: center;">Заявка №</span>
                            <span style="padding-left: 7px;">Дата/время</span>
                            <span style="padding-left: 15px;">Обмен</span>
                            <span style="width: 23%; padding-left: 15px;">Количество</span>
                            <span style="width: 15%;">Статус</span>
                        </div>
                        <div class="element" v-for="(item, index) in newArr" :key="index" :class="{ 
                                red__border: item.status === 'Просрочено',
                                green__border: item.status === 'Выполнено'
                            }">
                            <span class="number">{{ item.number }}</span>
                            <span class="date">{{ item.date }}</span>
                            <span class="barter">{{ item.barter }}</span>
                            <div class="barter__wrapper" :class="{ reverse: item.barter === 'USDT / XDE'}">
                                <span class="xde">{{ item.xde }}</span>
                                <img src="@/assets/image/userMenu/Arrow.svg" alt="">
                                <span class="usdt">{{ item.usdt }}</span>
                            </div>
                            <span :class="{ 
                                    red: item.status === 'Просрочено', 
                                    green: item.status === 'Выполнено', 
                                    yellow: item.status === 'В ожидании' 
                                }" class="status">
                                {{ item.status }}
                            </span>
                        </div>
                        <div class="pagination">
                            <div class="pre" :class="{ disable: listNumber === 1 }" @click="listUpdate(false)"></div>
                            <span class="list__number">{{ listNumber }}</span>
                            <div class="next" :class="{ disable: listNumber === this.getHistoryOperation.length / 5} " @click="listUpdate(true)"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <top-up-money v-if="this.$route.params.afterUser === 'deposit' || this.$route.params.afterUser === 'request'"/>
        <withdraw-money v-if="this.$route.params.afterUser === 'withdraw'"/>
    </section>
</template>

<script>
import topUpMoney from './topUpMoney.vue'
import withdrawMoney from './withdrawMoney.vue'
import { mapGetters } from 'vuex'

export default {
    data(){
        return{
            activeTitleBalance: true,
            activeTitleHistory: false,
            topUpActive: false,
            listNumber: 1,
            newArr: []
        }
    },
    mounted(){
        const start = this.listNumber > 1 ? this.listNumber * 5 - 5 : 0
        this.newArr = this.getHistoryOperation.slice(start, this.listNumber * 5)
    },
    computed: {
        ...mapGetters('historyOperationModules', ['getHistoryOperation']),
    }, 
    components:{
        topUpMoney,
        withdrawMoney
    },
    methods:{
        listUpdate(operation){
            if(!operation && this.listNumber > 1){
                this.listNumber--
            }
            if(operation && this.listNumber < this.getHistoryOperation.length / 5){
                this.listNumber++
            }
            const start = this.listNumber > 1 ? this.listNumber * 5 - 5 : 0
            this.newArr = this.getHistoryOperation.slice(start, this.listNumber * 5)
        }
    }
}
</script>

<style lang="scss" scoped>
    section{
        display: flex;
        flex-direction: column;
        background: #FFFFFF;
        width: 100%;
        max-width: 953px;
        max-height: 603px;
        margin-top: 26px;
        min-height: calc(100vh - 360px);
        padding: 0 10px 15px 10px;
        border-radius: 5px;
    }
    .wallet__wrapper{
        display: flex;
        flex-direction: column;
    }
    .totalBalance{
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #6B6B6B;
        margin-top: 31px;
        margin-left: 58px;
    }
    .amountBalance{
        position: relative;
        width: 155px;
        margin-top: 15px;
        margin-left: 58px;
        p{
            font-size: 30px;
            line-height: 35px;
            color: #000000;

        }
        &::after{
            content: url(../../assets/image/Coin.svg);
            position: absolute;
            top: 7px;
            right: 0;
        }
    }
    .balance{
        display: flex;
        gap: 32px;
        margin-top: 54px;
        margin-left: 58px;
        button:nth-child(1){
            width: 139px;
            height: 40px;
            background: #26A17B;
            border-radius: 5px;
            border: none;
            font-size: 15px;
            line-height: 18px;
            color: #FFFFFF;
        }

        button:nth-child(2){
            width: 139px;
            height: 40px;
            background: #42239A;
            border-radius: 5px;
            border: none;
            font-size: 15px;
            line-height: 18px;
            color: #FFFFFF;
        }
    }
    .tab__titles{
        display: flex;
        gap: 43px;
        margin-top: 55px;
        margin-left: 58px;
        span{
            font-weight: 300;
            font-size: 20px;
            line-height: 23px;     
            color: #A3A3A3;
            &:hover{
                cursor: pointer;
            }
        }
        .activeTitle{
            color: #000000;
            text-decoration: underline
        }
    }
    .red{
        color: red;
    }
    .green{
        color: #26A17B;
    }
    .yellow{
        color: #FBA028;
    }

    .number,
    .date,
    .xde,
    .usdt{
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }
    .barter__wrapper{
        width: 23%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        img{
            margin: 0 20px;
        }
    }
    .reverse{
        flex-direction: row-reverse;
        justify-content: flex-end;
    }
    .element{
        display: flex;
        flex-direction: row;
        align-items: center;
        max-width: 908px;
        height: 52px;
        background: #FFFFFF;
        box-shadow: 0px 0px 5px rgba(251, 160, 40, 0.3);
        border-radius: 5px;
        justify-content: space-between;
        width: 100%;
    }
    .list__title{
        display: flex;
        flex-direction: row;
        align-items: center;
        max-width: 908px;
        justify-content: space-between;
        width: 100%;
        margin: 31px 0 18px;
        span{
            width: 20%;
        }
    }
    .number{
        width: 22%;
        text-align: center;
    }
    .date{
        width: 20%;
    }
    .barter{
        width: 20%;
        font-weight: 300;
        font-size: 16px;
        line-height: 0%;
        color: #000000;
    }
    .usdt{
        color: #26A17B;
    }
    .status{
        width: 15%;
        font-size: 12px;
        line-height: 14px;
    }
    .pre{
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-right: 16px solid #000000;
        border-bottom: 8px solid transparent;
        &.disable{
            border-right-color: #A3A3A3;
        }
        &:hover{
            cursor: pointer;
        }
    }
    .next{
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-left: 16px solid #000000;
        border-bottom: 8px solid transparent;
        &.disable{
            border-left-color: #A3A3A3;
        }
        &:hover{
            cursor: pointer;
        }
    }
    .pagination{
        display: flex;
        align-items: center;
        gap: 30px;
        margin-top: 16px;
    }
    .list__wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }
    .red__border{
        box-shadow: 0px 0px 5px rgba(203, 0, 20, 0.3);
    }
    .green__border{
        box-shadow: 0px 0px 5px rgba(38, 161, 123, 0.3);
    }

    // @media  screen and (max-width:620px){
    //     .tab__titles{
    //         margin-left: 10px;
    //     }
    //     .balance{
    //         margin-left: 10px;
    //     }
    //     .amountBalance{
    //         margin-left: 10px;
    //     }
    //     .totalBalance{
    //         margin-left: 10px;
    //     }
    // }
</style>
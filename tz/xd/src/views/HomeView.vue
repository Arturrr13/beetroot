<template>
  <main>
    <home-user-list :bet="bet"/>
    <div class="spin__block">
      <h1>XDICE  RANDOM GENERATOR</h1>
      <home-spin />
      <div class="button__block" v-if="getUserData.userEmail === ''">
        <span>Bet</span>
        <div class="amount">
          <button class="button__down" @click="decrement">down</button>
          <input type="number" v-model="bet" min="1">
          <button class="button__up" @click="increment">up</button>
        </div>
        <button class="button__play" @click="() => {this.$router.push('/registration')}">Регистрация</button>
      </div>
      <div v-if="getUserData.userEmail !== ''" class="button__block--ActiveUser">
        <div class="amount">
          <div class="balance">
            <span>Баланс</span>
            <div class="input__balance">
              <input type="number" v-model="balance" min="0">
            </div>
          </div>
          <div class="bet">
            <span>Bet</span>
            <div class="bet__buttons">
              <button class="button__down" @click="decrement">down</button>
              <input type="number" v-model="bet" min="1">
              <button class="button__up" @click="increment">up</button>
            </div>
          </div>
        </div>
        <div class="buttons__play">
          <div class="play__wrapper">
            <button :style="{ background: backgroundPlay }" class="button__play" @click="play">{{ ButtonTextPlay }}</button>
            <span v-if="timerActive" class="timerActive">waiting...{{ playTimer }}</span>
          </div>
          <button :style="{ background: backgroundAutostart }" class="button__autostart" @click="autostart">{{ ButtonTextAutostart }}</button>
        </div>
      </div>
    </div>
  </main>
  <deposit-modal />
</template>

<script>
import HomeUserList from '@/components/home/HomeUserList.vue';
import HomeSpin from '@/components/home/HomeSpin.vue';
import { mapGetters } from 'vuex'
import depositModal from '@/components/depositModal.vue';

export default {
  components:{
    HomeUserList,
    HomeSpin,
    depositModal
  },
  data(){
    return{
      bet: 1,
      balance: 0.00,
      backgroundAutostart: '#42239A',
      ButtonTextAutostart: 'Autostart',
      backgroundPlay: '#26A17B',
      ButtonTextPlay: 'Играть',
      playTimer: 5,
      timerActive: false
    }
  },
  computed: {
    ...mapGetters('UserModules', ['getUserData']),
  }, 
  mounted(){
    this.getUserData.userEmail === '' ? document.querySelector('.nav__block--right').style.display = 'flex' : null
  },
  methods:{
    autostart(){
      if(this.backgroundAutostart !== 'black'){
        this.backgroundAutostart = 'black'
        this.ButtonTextAutostart = 'Stop'
      } else{
        this.backgroundAutostart = '#42239A'
        this.ButtonTextAutostart = 'Autostart'
      } 
    },
    play(){
      if(this.balance < 1){
        document.querySelector('.modal__wrapper').style.display = 'flex'
        document.querySelector('.blur').style.display = 'flex'
      }else if(this.backgroundPlay !== '#B1B1B1'){
        this.backgroundPlay = '#B1B1B1'
        this.ButtonTextPlay = 'Ожидание'
        this.timerActive = true
        this.playTimer = 5
        const interval = setInterval(() => {
          this.playTimer > 0 ? this.playTimer-- : null
        }, 1000)
        setTimeout(() => {
          this.backgroundPlay = '#26A17B'
          this.ButtonTextPlay = 'Играть'
          clearInterval(interval)
          this.timerActive = false
        }, 5000)
      }
    },
    increment(){
      if(this.bet < 1000){
        if(this.bet < 10){
          this.bet++
        } else if(this.bet > 9 && this.bet < 100){
          this.bet += 10
        } else if(this.bet > 99){
          this.bet += 100
        }
      }
    },
    decrement(){
      if(this.bet > 1){
        if(this.bet <= 10){
          this.bet--
        } else if(this.bet > 10 && this.bet <= 100){
          this.bet -= 10
        } else if(this.bet > 100){
          this.bet -= 100
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  main{
    display: flex;
    gap: 80px;
    justify-content: center;
    align-items: flex-start;
    margin: 25px 0;
  }

  h1{
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    margin-bottom: 25px;
  }
  .spin__block{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .button__down{
    width: 60px;
    height: 30px;
    background: #000000;
    border-radius: 10px;
  }
  .button__up{
    width: 60px;
    height: 30px;
    background: #26A17B;
    border-radius: 10px;
    transition: all .3s ease;
  }

  .button__play{
    width: 188px;
    height: 40px;
    background: #42239A;
    border-radius: 5px;
  }

  button{
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: white;
    border: none;
  }

  input[type=number]{
    width: 70px;
    height: 40px;
    background: #F6F7F9;
    border: 1px solid #D8DFE7;
    box-shadow: inset 0px 3px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000000;
  }

  input[type=number]::-webkit-inner-spin-button{
    appearance: none;
  }
  .button__block{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    .amount{
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 5px 0 34px;
    }

    span{
      font-weight: 400;
      font-size: 13px;
      line-height: 15px;
      color: #000000;
    }
  }
  .button__block--ActiveUser{
    margin-top: 25px;
    .amount{
      display: flex;
      gap: 33px;
      .balance{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        input[type=number]{
          width: 126px;
          height: 40px;      
          background: #F6F7F9;
          border: 1px solid #D8DFE7;
          box-shadow: inset 0px 3px 4px rgba(0, 0, 0, 0.25);
          border-radius: 4px;
          padding: 3px 40px 0 15px;
        }
        .input__balance{
          position: relative;
          &::after{
            content: url(../assets/image/Coin.svg);
            position: absolute;
            top: 10px;
            right: 10px;
          }
        }

        span{
          font-size: 13px;
          line-height: 15px; 
          color: #000000;
          margin-bottom: 5px;
        }
      }
      .bet{
        display: flex;
        flex-direction: column;
        align-items: center;
        .bet__buttons{
          display: flex;
          align-items: center;
          gap: 8px;
        }

        span{
          font-size: 13px;
          line-height: 15px;      
          color: #000000;
          margin-bottom: 5px;
        }
      }
    }
    .buttons__play{
      display: flex;
      gap: 33px;
      margin-top: 26px;
      .button__play{
        width: 126px;
        height: 40px;
        background: #26A17B;
        border-radius: 5px;
      }
      .button__autostart{
        width: 100px;
        height: 40px;
        border-radius: 5px;
      }
      .play__wrapper{
        display: flex;
        flex-direction: column;
        .timerActive{
          font-size: 13px;
          line-height: 15px;   
          color: #A3A3A3;
          margin: 9px 0 0 15px;
        }
      }
    }
  }

  // @media  screen and (max-width:1150px){
  //   main{
  //     flex-direction: column-reverse;
  //     align-items: center;
  //   }
  // }

  // @media  screen and (max-width:405px){
  //   .button__block--ActiveUser .amount{
  //     flex-direction: column;
  //     align-items: center;
  //     margin-top: 25px;
  //   }
  // }
</style>
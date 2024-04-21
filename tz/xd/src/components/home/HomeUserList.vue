<template>
    <div>
        <div class="table">
          <ul class="table__head">
            <li class="number" style="font-size:20px">№</li>
            <li class="players">Players</li>
            <li class="bet">Bet</li>
            <li class="win">Win <img src="../../assets/image/Coin.svg" alt="" style="margin-left: 8px"></li>
            <li class="status" style="font-size:18px">Status</li>
          </ul>
          <ul v-for="index in 10" :key="index">
            <li class="number">{{ index }}</li>
            <li class="players">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.4784 2.63856C13.7659 0.937042 11.489 0 9.06706 0C6.64514 0 4.36823 0.937042 2.65571 2.63856C0.943118 4.34012 0 6.6024 0 9.00864C0 11.4149 0.943118 13.6772 2.65571 15.3787C4.36823 17.0802 6.64514 18.0173 9.06706 18.0173C11.489 18.0173 13.7659 17.0802 15.4784 15.3787C17.191 13.6772 18.1341 11.4149 18.1341 9.00864C18.1341 6.6024 17.191 4.34012 15.4784 2.63856ZM14.9675 14.8711C13.3915 16.4371 11.296 17.2995 9.06706 17.2995C6.83815 17.2995 4.74265 16.4371 3.16657 14.8711C1.59046 13.3051 0.722475 11.2232 0.722475 9.00864C0.722475 6.79409 1.59046 4.71213 3.16657 3.14613C4.74265 1.58021 6.83815 0.71782 9.06706 0.71782C11.296 0.71782 13.3915 1.58021 14.9675 3.14613C16.5437 4.71213 17.4116 6.79409 17.4116 9.00864C17.4116 11.2232 16.5437 13.3051 14.9675 14.8711Z" fill="black"/>
                <path d="M9.06764 2.18066C5.27822 2.18066 2.19531 5.24371 2.19531 9.00871C2.19531 12.7737 5.27822 15.8368 9.06764 15.8368C12.8571 15.8368 15.94 12.7737 15.94 9.00871C15.94 5.24371 12.8571 2.18066 9.06764 2.18066ZM9.06764 15.1189C5.67659 15.1189 2.91779 12.3779 2.91779 9.00871C2.91779 5.63951 5.67659 2.89848 9.06764 2.89848C12.4587 2.89848 15.2175 5.63951 15.2175 9.00871C15.2175 12.3779 12.4587 15.1189 9.06764 15.1189Z" fill="black"/>
                <path d="M12.3907 8.72153H9.3924V3.84036C9.3924 3.64213 9.23063 3.48145 9.03116 3.48145C8.83168 3.48145 8.66992 3.64213 8.66992 3.84036V9.08044C8.66992 9.27867 8.83168 9.43935 9.03116 9.43935H12.3907C12.5901 9.43935 12.7519 9.27867 12.7519 9.08044C12.7519 8.88221 12.5901 8.72153 12.3907 8.72153Z" fill="black"/>
                <path d="M9.03143 13.8179C7.10625 13.8179 5.38011 12.6785 4.63379 10.9152C4.55641 10.7324 4.34455 10.6467 4.16079 10.7234C3.97684 10.8003 3.89043 11.0107 3.96781 11.1934C4.82709 13.2238 6.81473 14.5357 9.03143 14.5357C9.23091 14.5357 9.39267 14.375 9.39267 14.1768C9.39267 13.9786 9.23091 13.8179 9.03143 13.8179Z" fill="black"/>
                <path d="M4.00896 10.1893C4.20634 10.1603 4.3426 9.97776 4.31334 9.78168C4.27895 9.5513 4.26154 9.31539 4.26154 9.08059C4.26154 8.88236 4.09978 8.72168 3.9003 8.72168C3.70083 8.72168 3.53906 8.88236 3.53906 9.08059C3.53906 9.35053 3.55911 9.62179 3.59867 9.88695C3.62522 10.0652 3.77947 10.1933 3.95553 10.1933C3.9732 10.1933 3.99104 10.192 4.00896 10.1893Z" fill="black"/>
              </svg>
            </li>
            <li class="bet">{{ bet }}</li>
            <li class="win">{{ (bet / 10).toFixed(2) }}</li>
            <li class="status">Ожидание</li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserList",
    props: {
      bet: Number
    }
}
</script>

<style lang="scss" scoped>
    div{
      width: 100%;
      max-width: 735px;
    }
    .table{
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    ul{
      display: flex;
      justify-content: space-between;
      background: #FFFFFF;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
      height: 43px;
      li{
        color: #000000;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    ul:nth-child(even) {
      background-color: #42239A;
      border-radius: 5px;
      li{
        color: #FFFFFF;
        svg{
          path{
            fill: #FFFFFF;
          }
        }
      }
    }
    
    ul{
      font-weight: 400;
      font-size: 25px;
      line-height: 168.19%;
      text-align: center;
    }
    .table__head{
        height: 35px;
        background: rgba(230, 230, 230, 0.25);
        border-radius: 5px;
    }
    .number{
      width: 10%;
    }
    .players{
      width: 35%;
    }
    .bet{
      width: 18%;
    }
    .win{
      width: 17%;
    }
    .status{
      width: 19%;
      font-size: 16px;
    }

    @media  screen and (max-width:780px){
      .table{
        width: 95%;
      }

      div{
        display: flex;
        justify-content: center;
      }
    }

    @media  screen and (max-width:580px){
      .players{
        width: 30%;
      }
      .status{
        width: 24%;
        font-size: 15px;
      }
    }
</style>
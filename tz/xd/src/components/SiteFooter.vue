<template>
    <footer>
        <div class="footer__wrapper">
            <div class="footer__block--left">
                <span class="copyright">
                    &#169; 2022  XDICE.SBS
                </span>
                <router-link id="home" rel="nofollow" to="/privacy-policy">
                    Политика конфиденциальности
                </router-link>
                <router-link id="home" rel="nofollow" to="/terms-of-use">
                    Пользовательское соглашение
                </router-link>
            </div>
            <div class="footer__block--right">
                <img src="../assets/image/trx1.svg" alt="" style="margin-right: 22px">
                <span>
                    TRX
                </span>
                <span class="TRX">
                    TRON
                </span>
                <span class="FAIR__GAME">
                    FAIR GAME
                </span>
                <img src="../assets/image/icon18.svg" alt="" style="margin-left: 22px">
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    footer{
        border-top: 1px solid#F3F3F4;
    }
    .footer__wrapper{
        padding-top: 25px;
        max-width: 1550px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .footer__block--left{
        margin-left: 80px;
        display: flex;
        gap: 55px;
        a{
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;      
            color: #A3A3A3;
        }
        .copyright{
            font-weight: 500;
            font-size: 15px;
            line-height: 18px; 
            color: #000000;
        }
        .router-link-active{
            color: #000000;
        }
    }
    .footer__block--right{
        margin-right: 80px;
        display: flex;
        align-items: center;

        span{
            margin-right: 22px;
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;
            color: #A3A3A3;
        }
        .FAIR__GAME{
            font-weight: 800;
            font-size: 14px;
            line-height: 16px;   
            color: #000000;
        }
        .TRX{
            margin-right: 45px;
        }
    }

    @media  screen and (max-width:990px){
        .footer__wrapper{
            flex-direction: column;
            gap: 20px;
        }
    }

    @media  screen and (max-width:600px){
        .footer__block--right{
            margin-right: 0;
        }
        .footer__block--left{
            margin-left: 0;
            gap: 15px;
            flex-direction: column;
            align-items: center;
        }
    }
</style>
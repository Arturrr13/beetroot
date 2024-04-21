<template>
    <section>
        <h1>Профиль аккаунта</h1>
        <div class="nickname">
            <span>{{ getUserData.userNickName }}</span>
        </div>
        <div class="email">
            <span>{{ getUserData.userEmail }}</span>
        </div>
        <a href="https://t.me/xdice_support" target="_blank" rel="nofollow">Поддержка</a>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters('UserModules', ['getUserData']),
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
        max-height: 554px;
        margin-top: 26px;
        min-height: calc(100vh - 360px);
        padding: 0 10px 15px 80px;
        border-radius: 5px;
    }

    h1{
        font-size: 22px;
        line-height: 26px;
        color: #000000;
        margin-top: 48px;
        font-weight: 400;
    }

    .nickname,
    .email{
        width: 327px;
        height: 47px;
        border: 1px solid #E9E9E9;
        border-radius: 5px;
        position: relative;
        margin-top: 48px;
        display: flex;
        align-items: center;
        padding: 0 20px;
        span{
            font-size: 15px;
            line-height: 18px;
            color: #A3A3A3;
        }
        &::before{
            font-weight: 300;
            font-size: 14px;
            line-height: 16px;
            color: rgba(163, 163, 163, 0.5);
            position: absolute;
            top: -25px;
            left: 0;
        }
    }
    .nickname::before{
        content: 'Nickname';
    }
    .email::before{
        content: 'Email';
    }

    a{
        width: 139px;
        height: 40px; 
        background: #000000;
        border-radius: 5px;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        margin-top: 49px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    // @media  screen and (max-width:620px){
    //     section{
    //         padding: 0 10px 15px 10px;
    //     }
    // }
</style>
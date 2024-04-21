<template>
    <main v-if="display">
        <div class="wrapper">
            <img src="../../assets/image/password-update/checked.svg" alt="">
            <h1>Поздравляем!</h1>
            <p>Ваш новый пароль успешно сохранен, теперь вы можете войти в свой аккаунт</p>
            <button type="button" @click="() => {this.$router.push('/login')}">Войти в аккаунт</button>
        </div>
    </main>
</template>

<script>
export default {
    props:{
        display: Boolean
    }
}
</script>

<style lang="scss" scoped>
    main{
        background: #EEF5FE;
        padding: 110px 0;
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }
    .wrapper{
        width: 406px;
        height: 400px;
        background: #FFFFFF;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img{
        margin: 32px 0;
    }

    h1{
        font-weight: 500;
        font-size: 25px;
        line-height: 29px;
        color: #000000;
    }

    p{
        font-size: 14px;
        line-height: 16px;
        color: #000000;
        margin: 15px 0 47px;
        max-width: 262px;
        text-align: center;
    }

    button{
        width: 314px;
        height: 40px;
        background: #42239A;
        border-radius: 5px;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        border: none;
        margin-top: 14px;
    }

    @media  screen and (max-width:605px){
        .wrapper{
            margin: 0 10px;
        }
    }
</style>
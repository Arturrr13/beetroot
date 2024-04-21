<template>
    <main>
        <div class="security__wrapper" :style="{ maxHeight: maxHeight + 'px' }">
            <h1>Безопастность</h1>
            <div class="email__wrapper">
                <span :class="{ active: isActiveEmail }" class="err">{{ emailErr }}</span>
                <input type="number" v-model="emailCode" @blur="checkingEmail">
                <button type="button" @click="StartTimer">{{ timer }}</button>
            </div>
            <div class="code__wrapper" v-if="active">
                <input type="text">
            </div>
            <button type="button" class="agree" @click="() => {if(emailValid){this.$router.push('/security-done')}}">Подтвердить</button>
        </div>
    </main>
</template>

<script>

export default {
    data(){
        return{
            timer: 'Отправить код',
            active: false,
            maxHeight: 378,
            emailCode: '',
            isActiveEmail: false,
            emailErr: '',
            emailValid: false
        }
    },
    methods:{
        StartTimer(){
            if(typeof(this.timer) === 'string'){
                this.timer = 60
                this.timer--
                const timer = setInterval(() => {
                    if(this.timer > 0){
                        this.timer--
                    } else {
                        this.timer = 'Отправить код'
                        this.isActive = true
                        clearInterval(timer)
                    }
                }, 1000);
            }
            if(!this.active){
                this.active = true
                this.maxHeight = 505
            }
        },
        checkingEmail(e) {
            if(this.emailCode > 0) {
                e.target.style.border = '1px solid rgba(38, 161, 123, 0.45)'
                this.isActiveEmail = false
                this.emailValid = true
            } else {
                e.target.style.border = '1px solid rgb(203 0 20 / 45%)'
                this.emailErr = 'Неверный код'
                this.isActiveEmail = true
                this.emailValid = false
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    main{
        background: #EEF5FE;
        padding: 25px 0;
        display: flex;
        justify-content: center;
    }
    .security__wrapper{
        max-width: 466px;
        max-height: 378px;
        width: 100%;
        height: 100vh;
        background: #FFFFFF;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 40px;
    }

    h1{
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        color: #000000;
        margin-bottom: 70px;
    }

    input{
        width: 327px;
        height: 47px; 
        border: 1px solid #E9E9E9;
        border-radius: 5px;
        font-size: 15px;
        line-height: 18px;
        color: #000000;
        padding: 0 15px;
    }

    input[type=email]{
        padding: 0 125px 0 15px;
    }
    .err{
        display: none;
    }
    .active{
        display: block;
        position: absolute;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 13px;
        color: #CB0014;
        right: 10px;
        top: -17px;
    }

    .email__wrapper,
    .code__wrapper{
        position: relative;
        max-width: 327px;
        &::before{
            content: 'Подтверждение Email';
            font-weight: 300;
            font-size: 13px;
            line-height: 15px;
            color: #A3A3A3;
            position: absolute;
            top: -20px;
            left: 0;
        }
        button{
            width: 110px;
            height: 30px;    
            background: #FBA028;
            border-radius: 5px;
            font-size: 11px;
            line-height: 13px;
            color: #FFFFFF;
            position: absolute;
            top: 8px;
            right: 7px;
            border: none;
        }
    }
    .code__wrapper::before{
        content: 'Подтверждение 2FA';
    }
    .code__wrapper{
        margin-top: 80px;
    }
    .agree{
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        width: 250px;
        height: 50px;
        background: #FBA028;
        border-radius: 5px;
        border: none;
        margin-top: 67px;
    }
</style>
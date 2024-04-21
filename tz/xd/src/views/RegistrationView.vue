<template>
    <main>
        <form action="#" method="post" @submit.prevent="checkingForm">
            <h1>Регистрация</h1>
            <p class="welcome">Здравствуйте, рады Вас видеть!</p>
            <div class="wrapper__name">
                <span :class="{ active: isActiveName }" class="err">{{ nameErr }}</span>
                <input type="text" v-model="name" @blur="checkingName">
            </div>
            <div class="wrapper__email">
                <span :class="{ active: isActiveEmail }" class="err">{{ emailErr }}</span>
                <input type="email" v-model="email" @blur="checkingEmail">
            </div>
            <div class="wrapper__password">
                <span :class="{ active: isActivePassword }" class="err">{{ passwordErr }}</span>
                <input type="text" v-model="password" @blur="checkingPassword">
            </div>
            <button type="submit" title="Submit">Зарегистрироваться</button>
            <router-link id="login" rel="nofollow" to="/login">Войти! У меня уже есть аккаунт</router-link>
            <p>Нажимая Зарегистрироваться вы соглашаетесь с условиями<br><router-link rel="nofollow" to="/terms-of-use"> пользовательского соглашения Xdice</router-link> и<br>подтверждаете, что Вам есть 18 лет!</p>
        </form>
    </main>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
    data(){
        return{
            name: '',
            email: '',
            password: '',
            nameErr: '',
            emailErr: '',
            passwordErr: '',
            isActiveName: false,
            isActiveEmail: false,
            isActivePassword: false,
            nameValid: false,
            emailValid: false,
            passwordValid: false,

        }
    },
    computed: {
        ...mapGetters('UserModules', ['getUserData']),
    }, 
    mounted(){
        this.getUserData.userEmail === '' ? document.querySelector('.nav__block--right').style.display = 'none' : null
    },
    methods:{
        ...mapMutations('UserModules', ['setEmailAndPassword']),
        checkingName(e){
            if(this.name.length <= 20 && this.name.length >= 3){
                e.target.style.border = '1px solid rgba(38, 161, 123, 0.45)'
                this.isActiveName = false
                this.nameValid = true
            } else {
                e.target.style.border = '1px solid rgb(203 0 20 / 45%)'
                if(this.name.length < 3){
                    this.nameErr = 'Минимум 3 символа'
                    this.isActiveName = true
                } else {
                    this.nameErr = 'Максимум 20 символов с пробелом'
                    this.isActiveName = true
                }
                this.nameValid = false
            }
        },
        checkingEmail(e) {
            if(this.email.length > 0 && Boolean(this.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) !== false && this.email.includes('gmail') === true) {
                e.target.style.border = '1px solid rgba(38, 161, 123, 0.45)'
                this.isActiveEmail = false
                this.emailValid = true
            } else {
                e.target.style.border = '1px solid rgb(203 0 20 / 45%)'
                if(Boolean(this.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) === false){
                    this.emailErr = 'Неверный формат почты'
                    this.isActiveEmail = true
                } else if(this.email.includes('gmail') === false){
                    this.emailErr = 'Только почтовый сервис GMAIL'
                    this.isActiveEmail = true
                }
                this.emailValid = false
            }
        },
        checkingPassword(e){
            const hasCapital = (s) => !(s === s.toLowerCase())
            if(this.password.length >= 8 && this.password.length <= 40 && hasCapital(this.password) === true){
                e.target.style.border = '1px solid rgba(38, 161, 123, 0.45)'
                this.isActivePassword = false
                this.passwordValid = true
            } else {
                e.target.style.border = '1px solid rgb(203 0 20 / 45%)'
                if(this.password.length < 8){
                    this.passwordErr = 'Минимум 8 символов'
                    this.isActivePassword = true
                } else if(this.password.length > 40){
                    this.passwordErr = 'Максимум 40 символов с пробелом'
                    this.isActivePassword = true
                } else {
                    this.passwordErr = 'В пароле должна присутствовать заглавная буква'
                    this.isActivePassword = true
                }
                this.passwordValid = false
            }
        },
        checkingForm() {
            if(this.nameValid !== false && this.emailValid !== false && this.passwordValid !== false){
                this.$router.push('/confirmation')
                this.setEmailAndPassword({ email: this.email, password: this.password, nickname: this.name })
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    main{
        background: #EEF5FE;
        padding: 30px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .err{
        display: none;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 410px;
        height: 580px;
        background: #FFFFFF;
        border-radius: 5px;
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
        margin-bottom: 39px;
    }

    h1{
        font-weight: 500;
        font-size: 25px;
        line-height: 29px;
        color: #000000;
        margin: 41px 0 10px;
    }
    .welcome{
        font-weight: 300;
        font-size: 14px;
        line-height: 16px; 
        color: #000000;
    }

    p{
        font-weight: 300;
        font-size: 13px;
        line-height: 130%;
        color: #000000;
        text-align: center;
    }

    a{
        font-weight: 300;
        font-size: 13px;
        line-height: 130%;
        color: #42239A;
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

    #login{
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #42239A;
        margin-bottom: 29px;
    }

    input[type=text],
    input[type=email]{
        width: 314px;
        height: 47px;  
        border: 1px solid#E9E9E9;
        border-radius: 5px;
        padding: 0 105px 0 35px;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        color: #000000;
    }

    .wrapper__name{
        position: relative;
        margin-top: 39px;
        &::before{
            content: url(../assets/image/registration/User.svg);
            position: absolute;
            top: 17px;
            left: 11px;
        }

        &::after{
            content: 'Nickname';
            width: 105px;
            height: 47px;
            font-weight: 300;
            font-size: 14px;
            line-height: 16px;
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            align-items: center;
            text-align: center;
            color: rgba(163, 163, 163, 0.5);
            justify-content: center;
        }
    }
    .wrapper__email{
        position: relative;
        margin: 20px 0;
        &::before{
            content: url(../assets/image/registration/Mail.svg);
            position: absolute;
            top: 14px;
            left: 11px;
        }

        &::after{
            content: 'Email';
            width: 105px;
            height: 47px;
            font-weight: 300;
            font-size: 14px;
            line-height: 16px;
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            align-items: center;
            text-align: center;
            color: rgba(163, 163, 163, 0.5);
            justify-content: center;
        }
    }
    .wrapper__password{
        position: relative;
        margin-bottom: 34px;
        &::before{
            content: url(../assets/image/registration/Password.svg);
            position: absolute;
            top: 15px;
            left: 11px;
        }

        &::after{
            content: 'Password';
            width: 105px;
            height: 47px;
            font-weight: 300;
            font-size: 14px;
            line-height: 16px;
            position: absolute;
            top: 0;
            right: 0;
            display: flex;
            align-items: center;
            text-align: center;
            color: rgba(163, 163, 163, 0.5);
            justify-content: center;
        }
    }

    // @media  screen and (max-width:605px){
    //     form{
    //         height: 560px;
    //     }
    // }

    // @media  screen and (max-width:480px){
    //     form{
    //         width: 95%;
    //     }
    // }
</style>
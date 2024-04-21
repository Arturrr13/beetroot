<template>
    <main>
        <form action="#" method="post" @submit.prevent="checkingForm">
            <div class="titleWrapper">
                <h1>Войти</h1>
                <p class="welcome">Рады снова видеть Вас!</p>
            </div>
            <div class="wrapper__email">
                <span :class="{ active: isActiveEmail }" class="err">{{ emailErr }}</span>
                <input type="email" v-model="email" @blur="checkingEmail">
            </div>
            <div class="wrapper__password">
                <span :class="{ active: isActivePassword }" class="err">{{ passwordErr }}</span>
                <input type="password" v-model="password" @blur="checkingPassword">
                <svg @click="visibilityPas" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3548 7.64336C12.1923 7.48086 11.9281 7.48086 11.7656 7.64336C11.6031 7.80586 11.6031 8.07086 11.7656 8.23254C12.2373 8.70422 12.4981 9.33172 12.4981 10C12.4981 11.3784 11.3764 12.5 9.99808 12.5C9.32976 12.5 8.70226 12.24 8.23058 11.7675C8.06809 11.605 7.80391 11.605 7.64141 11.7675C7.47891 11.9292 7.47891 12.1942 7.64141 12.3567C8.26973 12.9867 9.10722 13.3334 9.99808 13.3334C11.8364 13.3334 13.3314 11.8384 13.3314 10.0001C13.3314 9.10918 12.9848 8.27168 12.3548 7.64336Z" fill="rgba(163, 163, 163, 0.5)"/>
                    <path d="M10.5821 6.72352C10.3929 6.6902 10.1996 6.66602 10.0013 6.66602C8.16297 6.66602 6.66797 8.16101 6.66797 9.99933C6.66797 10.1976 6.69215 10.391 6.72629 10.5801C6.76211 10.7818 6.93797 10.9243 7.13547 10.9243C7.15965 10.9243 7.18379 10.9226 7.20879 10.9176C7.43461 10.8776 7.58629 10.661 7.54629 10.4351C7.52047 10.2935 7.50129 10.1493 7.50129 9.99933C7.50129 8.62101 8.62297 7.49933 10.0013 7.49933C10.1513 7.49933 10.2955 7.51851 10.4371 7.54351C10.6588 7.58851 10.8796 7.43183 10.9196 7.20601C10.9596 6.98019 10.808 6.76352 10.5821 6.72352Z" fill="rgba(163, 163, 163, 0.5)"/>
                    <path d="M19.8994 9.7301C19.8053 9.61842 17.5511 6.9876 14.4419 5.37679C14.2403 5.27097 13.9861 5.35097 13.8803 5.55597C13.7745 5.76015 13.8545 6.01179 14.0595 6.11765C16.4544 7.35764 18.3678 9.29264 19.0219 9.99932C18.0286 11.0751 14.1195 14.9993 9.99864 14.9993C8.60033 14.9993 7.19115 14.6618 5.80865 13.9951C5.60365 13.8943 5.35284 13.9818 5.25284 14.1893C5.15202 14.396 5.23952 14.6451 5.44701 14.7451C6.94283 15.4676 8.47451 15.8326 9.99868 15.8326C15.1328 15.8326 19.7078 10.496 19.9003 10.2685C20.0319 10.1134 20.0311 9.88592 19.8994 9.7301Z" fill="rgba(163, 163, 163, 0.5)"/>
                    <path d="M12.7342 4.64601C11.7859 4.32684 10.8659 4.16602 10 4.16602C4.86587 4.16602 0.290876 9.50269 0.0983768 9.73019C-0.0233027 9.87351 -0.0333027 10.0819 0.0750565 10.2377C0.132556 10.3202 1.51005 12.276 3.89755 13.8619C3.96837 13.9094 4.04755 13.9319 4.12755 13.9319C4.26173 13.9319 4.39423 13.8669 4.47423 13.7444C4.60173 13.5535 4.54923 13.2944 4.35755 13.1677C2.60423 12.0019 1.40423 10.5944 0.955055 10.0219C1.91423 8.98019 5.84923 4.99937 10 4.99937C10.7759 4.99937 11.6067 5.14605 12.4684 5.43519C12.6867 5.51351 12.9234 5.39269 12.9959 5.17351C13.0692 4.95519 12.9525 4.71937 12.7342 4.64601Z" fill="rgba(163, 163, 163, 0.5)"/>
                    <path :class="{ visibility: activeVisibility }" d="M17.3777 2.62187C17.2152 2.45938 16.951 2.45938 16.7885 2.62187L2.62187 16.7885C2.45938 16.951 2.45938 17.2152 2.62187 17.3777C2.70355 17.4585 2.81019 17.4994 2.91687 17.4994C3.02355 17.4994 3.13019 17.4586 3.21105 17.3777L17.3777 3.21105C17.5402 3.04855 17.5402 2.78437 17.3777 2.62187Z" fill="rgba(163, 163, 163, 0.5)"/>
                </svg>
            </div>
            <button type="submit" title="Submit">Войти</button>
            <div class="navWrapper">
                <router-link id="registration" rel="nofollow" to="/registration">Регистрация</router-link>
                <router-link id="updatePassword" rel="nofollow" to="/password-update">Забыли пароль?</router-link>
            </div>
        </form>
    </main>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    data(){
        return{
            password: '',
            email: '',
            isActiveEmail: false,
            isActivePassword: false,
            emailErr: '',
            passwordErr: '',
            activeVisibility: false
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
            console.log(e+'pas')
        },
        checkingForm() {
            if(this.emailValid !== false && this.passwordValid !== false){
                this.$router.push('/')
                this.setEmailAndPassword({ email: this.email, password: this.password })
                console.log(this.password, this.getUserData)
            }
        },
        visibilityPas(){
            document.querySelector('.wrapper__password input').type === 'password' ? document.querySelector('.wrapper__password input').type = 'text' : document.querySelector('.wrapper__password input').type = 'password'
            this.activeVisibility === true ? this.activeVisibility = false : this.activeVisibility = true
        }
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
        height: 444px;
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
    .titleWrapper{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 314px;
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
    .navWrapper{
        display: flex;
        justify-content: space-between;
        width: 314px;
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

    #registration,
    #updatePassword{
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #42239A;
        margin-bottom: 29px;
    }

    input[type=password],
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

        svg{
            position: absolute;
            top: 14px;
            right: 34px;
            &:hover{
                cursor: pointer;
            }
        }
        .visibility{
            fill: none
        }
    }

    // @media  screen and (max-width:480px){
    //     form{
    //         width: 95%;
    //     }
    // }
</style>
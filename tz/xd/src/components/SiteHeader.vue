<template>
    <header>
        <nav>
            <ul>
                <div class="nav__block--left">
                    <li>
                        <router-link id="logo" rel="nofollow" to="/">Xdice</router-link>
                    </li>
                    <li>
                        <router-link id="home" rel="nofollow" to="/">Главная</router-link>
                    </li>
                </div>
                <div v-if="getUserData.userEmail === ''" class="nav__block--right">
                    <li>
                        <router-link id="login" rel="nofollow" to="/login">Войти</router-link>
                    </li>
                    <li id="registration">
                        <router-link rel="nofollow" to="/registration">Регистрация</router-link>
                    </li>
                </div>
                <div v-if="getUserData.userEmail !== ''" class="userMenu">
                    <ul>
                        <li class="userEmail" @click="() => { this.active === false ? this.active = true : this.active = false}">
                            {{ reversedMessage }}
                            <span v-if="this.getUserData.userEmail.length >= 20">...</span>
                        </li>
                        <ul :class="{ active: active }" class="display">
                            <li>
                                <router-link rel="nofollow" to="/user-wallet" @click="() => { this.active === false ? this.active = true : this.active = false}">Кошелек</router-link>
                            </li>
                            <li>
                                <router-link rel="nofollow" to="/user-profile" @click="() => { this.active === false ? this.active = true : this.active = false}">Профиль</router-link>
                            </li>
                            <li>
                                <router-link rel="nofollow" to="/user-security" @click="() => { this.active === false ? this.active = true : this.active = false}">Безопасность</router-link>
                            </li>
                            <li>
                                <span>Выход</span>
                            </li>
                        </ul>
                    </ul>
                </div>
            </ul>
        </nav>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'SiteHeader',
    data(){
        return{
            active: false,
            activePoints: false,
            email: ''
        }
    },
    computed: {
        ...mapGetters('UserModules', ['getUserData']),
        reversedMessage: function () {
            return this.getUserData.userEmail.slice(0, 19)
        }
    }
}
</script>

<style lang="scss" scoped>
    header{
        padding: 16px 0;
        border-bottom: 1px solid#F3F3F4;
    }

    ul{
        max-width: 1550px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav__block--left{
        margin-left: 80px;
        display: flex;
        gap: 100px;
        align-items: center;
    }
    .nav__block--right{
        margin-right: 80px;
        display: flex;
        gap: 45px;
        align-items: center;
    }

    #logo{
        font-weight: 800;
        font-size: 40px;
        line-height: 47px;
        color: #000000;
    }

    #login, #home{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }

    #registration{
        width: 188px;
        height: 40px;
        background: #42239A;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .5s ease-in-out;
        a{
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: #ffffff;
        }
    }

    .userMenu{
        position: relative;
        margin-right: 16%;
        &:hover{
            cursor: pointer;
        }

        ul{
            flex-direction: column;
        }
        .display{
            display: none;
        }
        .active{
            position: absolute;
            display: flex;
            top: 45px;
            z-index: 100;
            padding: 35px 0 25px 15px;
            align-items: start;
            width: 229px;
            height: 208px;  
            background: #FFFFFF;
            border: 1px solid rgba(66, 35, 154, 0.2);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 5px;
            li a,
            li span{
                font-size: 16px;
                line-height: 19px;     
                color: #000000;
            }
            li:nth-child(1)::before{
                content: url(../assets/image/userMenu/wallet.svg);
                margin-right: 12px;
            }
            li:nth-child(2)::before{
                content: url(../assets/image/userMenu/settings.svg);
                margin-right: 12px;
            }
            li:nth-child(3)::before{
                content: url(../assets/image/userMenu/protection.svg);
                margin-right: 12px;
            }
            li:nth-child(4){
                position: relative;
                padding-left: 48px;
                &::before{
                    content: url(../assets/image/userMenu/exit.svg);
                    position: absolute;
                    left: 0;
                    top: -5px;
                }
            }
        }
        .userEmail{
            width: 229px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;  
            background: rgba(240, 235, 255, 0.4);
            border-radius: 5px;
            font-size: 15px;
            line-height: 18px;    
            color: #000000;
            position: relative;
            padding: 0 25px;
            &::before{
                content: url(../assets/image/userMenu/UserIcon.svg);
                position: absolute;
                top: 10px;
                left: 7px;
            }
            &::after{
                content: '';
                position: absolute;
                top: 15px;
                right: 15px;
                width: 0;
                height: 0;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-top: 8px solid rgb(0, 0, 0);
            }
        }
    }

    @media  screen and (max-width:1500px){
        .userMenu{
            margin-right: 14%;
        }
    }

    @media  screen and (max-width:1400px){
        .userMenu{
            margin-right: 10%;
        }
    }

    @media  screen and (max-width:1150px){
        .userMenu{
            margin-right: 60px;
        }
    }

    @media  screen and (max-width:760px){
        .nav__block--left{
            margin-left: 20px;
            gap: 30px;
        }
        .nav__block--right{
            margin-right: 20px;
            gap: 20px;
        }
    }

    @media  screen and (max-width:530px){
        #home, #login{
            display: none;
        }
        .userMenu{
            margin-right: 15px;
        }
    }

    @media  screen and (max-width:400px){
        .nav__block--left{
            margin-left: 5px;
            gap: 5px;
        }
    }
</style>
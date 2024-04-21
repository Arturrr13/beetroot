<template>
    <div class="login__wrapper" :style="{ height: height + 'px'}">
        <h1>Login</h1>
        <form action="#" method="post" @submit.prevent="loginUser">
            <div class="input__wrapper">
                <span>{{ getError }}</span>
                <span class="valueErr">{{ textErr }}</span>
                <input 
                    type="text" 
                    name="mail" 
                    v-model="mail" 
                    placeholder="E-mail" 
                    @blur="validation"
                >
            </div>
            <div class="input__wrapper">
                <span class="valueErr">{{ textErr }}</span>
                <input 
                    type="password" 
                    name="password" 
                    v-model="password" 
                    placeholder="Password" 
                    @blur="validation"
                >
            </div>
            <span class="userErr" v-if="getError.length > 0">
                {{ getError }}
            </span>
            <button type="submit" title="Submit" class="button btn__style click">Login</button>
        </form>
        <router-link rel="nofollow" to="/register" class="button btn__style click">
            Register
        </router-link>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data(){
        return{
            mail: '',
            password: '',
            height: 0,
            textErr: '',
            validationStatusEm: false,
            validationStatusPs: false
        }
    },
    mounted(){
        this.height = document.querySelector('.site__header').clientHeight + document.querySelector('footer').clientHeight + 500 < document.body.clientHeight ? document.body.clientHeight - (document.querySelector('.site__header').clientHeight + document.querySelector('footer').clientHeight) : 500
    },
    computed: {
        ...mapGetters('UserModules', ['getToken', 'getStatus', 'getError'])
    },
    methods:{
        ...mapActions('UserModules', ['loginUserr']),
        async loginUser(){
            if(this.validationStatusEm && this.validationStatusPs){
                await this.loginUserr({ mail: this.mail, password: this.password })
                await this.$cookies.set('UserToken', this.getToken, "30d")
                this.getStatus ? this.$router.push('/') : null
            }
        },
        validation(e){
            const error = (error) => {
                e.target.parentElement.classList.add('activeValueErr')
                this.textErr = error
                e.target.name === 'mail' ? this.validationStatusEm = false : this.validationStatusPs = false
                e.target.focus()
            }
            const success = () => {
                e.target.parentElement.classList.remove('activeValueErr')
                e.target.name === 'mail' ? this.validationStatusEm = true : this.validationStatusPs = true
            }
            if(e.target.name === 'mail'){
                if(e.target.value.length > 0 && Boolean(e.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) !== false) {
                    this.mail = e.target.value
                    success()
                } else {
                    error('Incorrect mail')
                }
                return
            }
            if(e.target.name === 'password'){
                const hasCapital = (s) => !(s === s.toLowerCase())
                if(e.target.value.length >= 8 && e.target.value.length <= 40 && hasCapital(e.target.value) && /[0-9]/.test(e.target.value)){
                    this.password = e.target.value
                    success()
                } else if(e.target.value.length > 1){
                    if(e.target.value.length < 8){
                        error('Min 8 symbols')
                    } else if(e.target.value.length > 40){
                        error('Max 40 symbols')
                    } else if(!/[0-9]/.test(e.target.value)){
                        error('Password must contain a number')
                    } else {
                        error('Password must contain a capital letter')
                    }
                }
                return
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    h1::after{
        content: none;
    }
    .login__wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px 0;
    }
    .input__wrapper{
        position: relative;
        width: 95%;
        span{
            display: none;
            color: red;
            position: absolute;
            font-size: 18px;
            top: -25px;
            right: 5px;
        }
        &.activeValueErr{
            input[type="text"],
            input[type="password"]{
                border: 4px solid red;
                outline: none;
                color: red;
                background: black;
            }
            .valueErr{
                display: block;
            }
        }
    }

    form{
        margin: 20px 0;
        display: flex;
        gap: 25px;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 400px;
    }
    .userErr{
        color: red;
        font-size: 18px;
        animation: errorActive .35s linear both;
    }

    input[type="text"],
    input[type="password"]{
        height: 50px;
        width: 100%;
        border-radius: 15px;
        background: #63AF8F;
        color: #5F3791;
        font-size: 22px;
        &:focus-visible{
            outline: 4px dotted #5F3791;
        }
        padding: 0 15px;
    }
    .button{
        width: 95%;
    }

    a{
        max-width: 378px;
    }

    @keyframes errorActive {
        from{opacity: 0; transform: translateY(35px);}
        to{opacity: 1; transform: translateY(0);}
    }
</style>
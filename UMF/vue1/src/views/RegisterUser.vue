<template>
    <div class="register__wrapper" :style="{ height: height + 'px'}">
        <h1>Registration</h1>
        <form action="#" method="post" @submit.prevent="checkingForm">
            <div class="input__wrapper" v-for="(item, index) in inputData" :key="index">
                <span />
                <input :type="item.type" :name="item.name" :placeholder="item.placeholder" @blur="validation">
            </div>
            <span v-if="userFind !== null" class="userErr">
                {{ userFind }}
            </span>
            <button type="submit" title="Submit" class="button btn__style click">Continue</button>
        </form>
        <span class="login">
            Have an account?
            <router-link title="Login" rel="nofollow" to="/login">
                Log in now
            </router-link> 
        </span>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapMutations } from 'vuex'

export default {
    data(){
        return{
            name: '',
            mail: '',
            password: '',
            passwordCheck: '',
            error: false,
            userFind: null,
            height: 0,
            inputData: [
                {
                    type: 'text',
                    name: 'name',
                    placeholder: 'Name'
                },
                {
                    type: 'text',
                    name: 'mail',
                    placeholder: 'E-mail'
                },
                {
                    type: 'text',
                    name: 'password',
                    placeholder: 'Password'
                },
                {
                    type: 'password',
                    name: 'password-check',
                    placeholder: 'Password again'
                }
            ]
        }
    },
    mounted(){
        this.height = document.querySelector('.site__header').clientHeight + document.querySelector('footer').clientHeight + 660 < document.body.clientHeight ? document.body.clientHeight - (document.querySelector('.site__header').clientHeight + document.querySelector('footer').clientHeight) : 660
    },
    methods:{
        ...mapActions('UserModules', ['postUser']),
        ...mapMutations('UserModules', ['setStatus']),
        validation(e){
            const error = (error) => {
                e.target.parentElement.classList.add('activeErr')
                e.target.parentElement.children[0].innerHTML = error
                this.error = true
                e.target.focus()
            }
            const success = () => {
                e.target.parentElement.classList.remove('activeErr')
                this.error = false
            }
            if(e.target.name === 'name'){
                if(e.target.value.length < 2){
                    error('Incorrect name')
                } else if(e.target.value.length > 0){
                    axios
                    .post('http://localhost:5050/api/users', {
                        name: e.target.value
                    })
                    .then(() => {
                        this.name = e.target.value
                        success()
                    })
                    .catch(err => error(err.response.data.message))
                }
                return
            }
            if(e.target.name === 'mail'){
                if(e.target.value.length > 0 && Boolean(e.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) !== false) {
                    axios
                    .post('http://localhost:5050/api/users', {
                        mail: e.target.value
                    })
                    .then(() => {
                        this.mail = e.target.value
                        success()
                    })
                    .catch(err => error(err.response.data.message))
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
            if(e.target.name === 'password-check'){
                if(e.target.value !== document.querySelector("input[name='password']").value){
                    error('Passwords must match')
                } else {
                    this.passwordCheck = e.target.value
                    success()
                }
            }
        },
        checkingForm(){
            if(!this.error && this.name !== '' && this.mail !== '' && this.password !== '' && this.passwordCheck !== ''){
                axios
                .post('http://localhost:5050/api/users', {
                    name: this.name,
                    mail: this.mail,
                    password: this.password
                })
                .then(res => { 
                    this.$cookies.set('UserToken', res.data.token, "30d")
                    this.setStatus(true)
                    this.userFind = null
                    this.$router.push('/')
                })
                .catch(err => this.userFind = err.response.data.message)
            } else {
                console.log('bad')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.register__wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
}

h1::after{
    content: none;
}
.input__wrapper{
    width: 95%;
    position: relative;
    span{
        display: none;
    }
}
.userErr{
    color: red;
    font-size: 18px;
    letter-spacing: 1px;
    animation: errorActive .35s linear both;
}
.activeErr{
    span{
        display: block;
        color: red;
        font-size: 16px;
        letter-spacing: 1px;
        position: absolute;
        top: -20px;
        right: 5px;
    }

    input[type="text"],
    input[type="password"]{
        background: black;
        color: red;
        border: 4px solid red;
        &:focus-visible{
            outline: none;
        }
    }
}

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    gap: 30px;
    width: 100%;
    margin-top: 25px;
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

button{
    width: 95%;
    margin-top: 10px;
}
.login{
    margin-top: 20px;
    color: white;
    font-size: 24px;
    a{
        color: #63AF8F;
        font-style: italic;
    }
}

@keyframes errorActive {
    from{opacity: 0; transform: translateY(35px);}
    to{opacity: 1; transform: translateY(0);}
}
</style>
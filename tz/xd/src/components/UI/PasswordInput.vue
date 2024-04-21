<template>
    <div class="wrapper__password">
        <span :class="{ active: isActivePassword }" class="err">{{ passwordErr }}</span>
        <input type="text" v-model="password" @blur="checkingPassword">
    </div>
</template>

<script>
export default {
    data(){
        return{
            password: '',
            passwordErr: '',
            isActivePassword: false,
            passwordValid: false,

        }
    },
    props:{
        checkPassword: String
    },
    methods:{
        checkingPassword(e){
            console.log(this.checkPassword)
            const hasCapital = (s) => !(s === s.toLowerCase())
            if(this.password.length >= 8 && this.password.length <= 40 && hasCapital(this.password) === true){
                if(this.checkPassword !== undefined){
                    if(this.checkPassword === this.password){
                        e.target.style.border = '1px solid rgba(38, 161, 123, 0.45)'
                        this.isActivePassword = false
                        this.passwordValid = true
                        this.$emit('sendPassword', {
                            password: this.password
                        })
                        this.$emit('ValidationPassword', {
                            validation: true
                        })
                    } else if(this.checkPassword !== this.password){
                        e.target.style.border = '1px solid rgb(203 0 20 / 45%)'
                        this.passwordErr = 'Пароли не совпадают'
                        this.isActivePassword = true
                        this.$emit('ValidationPassword', {
                            validation: false
                        })
                    }
                } else if(this.checkPassword === undefined){
                    e.target.style.border = '1px solid rgba(38, 161, 123, 0.45)'
                    this.isActivePassword = false
                    this.passwordValid = true
                    this.$emit('sendPassword', {
                        password: this.password
                    })
                }
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
                this.$emit('ValidationPassword', {
                    validation: false
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
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

    input[type=text]{
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
    .wrapper__password{
        position: relative;
        margin-bottom: 18px;
        &::before{
            content: url(../../assets/image/registration/Password.svg);
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
</style>
<template>
    <div class="wrapper__email">
        <span :class="{ active: isActiveEmail }" class="err">{{ emailErr }}</span>
        <input type="email" v-model="email" @blur="checkingEmail">
    </div>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            isActiveEmail: false,
            emailErr: ''
        }
    },
    methods:{
        checkingEmail(e) {
            if(this.email.length > 0 && Boolean(this.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) !== false && this.email.includes('gmail') === true) {
                e.target.style.border = '1px solid rgba(38, 161, 123, 0.45)'
                this.isActiveEmail = false
                this.emailValid = true
                this.$emit('validationEmail', {
                    validation: true
                })
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
                this.$emit('validationEmail', {
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
        width: 314px;
        margin: 20px 0;
        &::before{
            content: url(../../assets/image/registration/Mail.svg);
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
</style>
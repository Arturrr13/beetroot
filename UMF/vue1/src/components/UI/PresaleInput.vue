<template>
    <div class="input__wrapper">
        <span class="inputLabel" :class="{ activeLabel: activeLabel, activeErr: activeErr }">
            {{ label }}
        </span>
        <input 
            v-model="input"
            :name="name"
            :type="type" 
            :placeholder="placeholder" 
            :title="title"
            :class="{ activeLabel: activeLabel, activeErr: activeErr }" 
            @focus="() => { 
                    this.activeLabel = true
                }" 
            @blur="checking"
        >
    </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
    data(){
        return{
            activeLabel: false,
            activeErr: false,
            input: '',
        }
    },
    props: {
        type: String,
        placeholder: String,
        title: String,
        label: String,
        elCheck: String,
        name: String
    },
    async mounted(){
        await this.setLocalStorage()
        this.input = this.$store.state.PresaleModules.inputValues[this.elCheck] ? this.$store.state.PresaleModules.inputValues[this.elCheck].value : ''
    },
    methods:{
        ...mapActions('PresaleModules', ['fetchSelect', 'setLocalStorage']),
        ...mapMutations('PresaleModules', ['pushUserData', 'changeFormValidation']),
        checking(e){
            const error = () => {
                this.activeLabel = false
                this.activeErr = true
                e.target.focus()
                this.changeFormValidation(false)
            }
            const success = () => {
                this.activeErr = false
                this.activeLabel = false
                this.pushUserData({
                    value: this.input,
                    elCheck: this.$props.elCheck
                })
                this.changeFormValidation(true)
            }
            if(this.$props.elCheck === 'email') {
                if(this.input.length > 0 && Boolean(this.input.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) !== false) {
                    success()
                } else {
                    error()
                }
                return
            }
            if(this.$props.elCheck === 'amount') {
                if(this.input !== '' && this.input > 0) {
                    success()
                } else {
                    error()
                }
                return
            }
            if(this.$props.elCheck === 'bep') {
                let checkBEP = /^[A-Za-z 0-9]+$/
                if(checkBEP.test(this.input) !== false && this.input.match(/[0-9]/) !== false && this.input.length > 0 ){
                    success()
                } else {
                    error()
                }
                return
            }
            if(this.$props.elCheck === 'urlTweet' || this.$props.elCheck === 'urlLinked') {
                let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
                        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
                        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
                if(pattern.test(this.input) !== false){
                    success()
                } else {
                    error()
                }
                return
            }
            if(this.$props.elCheck === 'telegramID' || this.$props.elCheck === 'twitterID') {
                if(this.input !== ''){
                    success()
                } else {
                    error()
                }
            }
        },
    }
}
</script>

<style lang="scss" scoped>
    input[type=text],
    input[type=number]{
        width: 100%;
        margin-top: 10px;
        height: 57px;
        border: none;
        outline: none;
        min-width: 268px;
        background: #0F100F;
        border-radius: 5px;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0.1em;
        color: #FFFFFF;
        padding: 15px;
        &:hover{
            transition: all .3s ease;
            box-shadow: 4px 4px 8px #63AF8F;
            color: #63AF8F;
        }
        &.activeLabel{
            color: #63AF8F;
            border: 1px solid #63AF8F;
        }
        &.activeErr{
            color: rgb(255, 0, 0);
            border: 1px solid #ff0000;
            &:hover{
                box-shadow: 4px 4px 8px #ff0000;
            }
        }
    }

    input[type=number]::-webkit-inner-spin-button{
        appearance: none;
    }
    .inputLabel{
        position: absolute;
        top: -15px;
        right: 10px;
        display: none;
        opacity: 1;
        transform: translateX(0);
        &.activeLabel{
            display: inline;
            color: #63AF8F;
        }
        &.activeErr{
            display: inline;
            color: rgb(255, 0, 0);
        }
    }
    .input__wrapper{
        position: relative;
    }
</style>
<template>
    <section class="presale">
        <div class="blur__on__responsive"></div>
        <div class="section__wrapper">
            <div class="text__box">
                <h1>Presale</h1>
                <span>
                    We plan to conduct the presale of our token in Q1 2022.
                </span>
                <ul>
                    <span>The details are as given below:</span>
                    <li>Token presale price - </li>
                    <li>Discount you get in presale - </li>
                    <li>Total number of whitelist spots </li>
                </ul>
                <span class="subtext">There are only two slabs available for buy. 0.5 BNB or 1 BNB.</span>
            </div>

            <form action="#" method="post" @submit.prevent="checkForm">
                <div class="input-wrapper">
                    <presale-input
                        v-for="(item, index) in inputData" :key="index"
                        :type="item.type" 
                        :placeholder="item.placeholder"
                        :title="item.title"
                        :label="item.label"
                        :elCheck="item.elCheck"
                        :name="item.name"
                    />
                </div>
                <country-input />
                <presale-input
                    v-for="(item, index) in inputData2" :key="index"
                    :type="item.type" 
                    :placeholder="item.placeholder"
                    :title="item.title"
                    :label="item.label"
                    :elCheck="item.elCheck"
                    :name="item.name"
                />
                <button type="submit" title="Submit" class="click">submit</button>
            </form>

            <div class="message" v-bind:style="styleObject">
                <span>{{ textMessage }}</span>
            </div>
        </div>
        <img src="../assets/image/6.png" alt="">
    </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { useActive } from '@/use/NavigationActive'
import PresaleInput from '@/components/UI/PresaleInput.vue'
import CountryInput from '@/components/UI/CountryInput.vue'

export default {
    data() {
        return {
            styleObject: {
              background: '',
              display: 'none'
            },

            BOT_API_ID: '5572284297:AAGcIYixFO0cFESbgoNVYlsHlEsSf5vDcpU',
            CHAT_ID: '-1001798307154',
            textMessage: '',

            inputData: [
                {
                    type: 'text',
                    placeholder: 'E-mail',
                    title: 'Enter your E-mail',
                    label: 'E-mail',
                    elCheck: 'email',
                    name: 'email'
                },
                {
                    type: 'number',
                    placeholder: 'Desired Invesment amount',
                    title: 'Enter investment amount',
                    label: 'Investment amount',
                    elCheck: 'amount',
                    name: 'value'
                },
                {
                    type: 'text',
                    placeholder: 'Twitter ID',
                    title: 'Enter your Twitter ID',
                    label: 'Twitter ID',
                    elCheck: 'twitterID',
                    name: 'text'
                },
                {
                    type: 'text',
                    placeholder: 'Telegram ID',
                    title: 'Enter your Telegram ID',
                    label: 'Telegram ID',
                    elCheck: 'telegramID',
                    name: 'text'
                }
            ],
            inputData2: [
                {
                    type: 'text',
                    placeholder: 'BEP20 Address to receive UCF',
                    title: 'Enter your BEP20 Address',
                    label: 'BEP20 Address',
                    elCheck: 'bep',
                    name: 'bep'
                },
                {
                    type: 'text',
                    placeholder: 'Link to tweet',
                    title: 'Enter your Link to tweet',
                    label: 'Link to tweet',
                    elCheck: 'urlTweet',
                    name: 'link'
                },
                {
                    type: 'text',
                    placeholder: 'Link to LinkedIn post',
                    title: 'Enter your Link to LinkedIn post',
                    label: 'Link to LinkedIn post',
                    elCheck: 'urlLinked',
                    name: 'link'
                }
            ]
        }
    },
    mounted(){
        !this.getStatus ? this.$router.push('/login') : null
    },
    setup(){
        return useActive('nav ul #home', 'nav ul #faq', 'nav ul #about', 'nav ul #crypto', '.navigation .click')
    },
    name: 'MyPresale',
    components: {
        PresaleInput,
        CountryInput
    },
    computed: {
        ...mapGetters('PresaleModules', ['getInputValues', 'getFormValidation']),
        ...mapGetters('UserModules', ['getStatus'])
    }, 
    methods: {
        ...mapActions('PresaleModules', ['fetchSelect', 'setLocalStorage']),
        ...mapMutations('PresaleModules', ['updateCountry', 'pushUserData']),
        checkForm(){
            if(Object.keys(this.getInputValues).length < 8 || !this.getFormValidation){
                document.querySelectorAll('input').forEach((e) => {
                    e.focus()
                })
            } else {
                localStorage.setItem('UserData', JSON.stringify(this.getInputValues))
                this.message('form submitted successfully', true)
                this.formSubmit()
            }
        },
        formSubmit() {
            const text_form = "<i>Form data</i>"+
            "%0a<b>Email: </b>"+this.getInputValues.email.value+
            "%0a<b>Amount: </b>"+this.getInputValues.amount.value+
            "%0a<b>TwitterID: </b>"+this.getInputValues.twitterID.value+
            "%0a<b>TelegramID: </b>"+this.getInputValues.telegramID.value+
            "%0a<b>BEP20: </b>"+this.getInputValues.bep.value+
            "%0a<b>Country: </b>"+this.getInputValues.country.value+
            "%0a<b>URLTweet: </b>"+this.getInputValues.urlTweet.value+
            "%0a<b>URLLinked: </b>"+this.getInputValues.urlLinked.value
            fetch(`https://api.telegram.org/bot${this.BOT_API_ID}/sendMessage?chat_id=${this.CHAT_ID}&text=${text_form}&parse_mode=HTML`)
        },
        message(text, status) {
            if( status === true) {
                this.styleObject.background = 'rgba(11, 199, 4, 0.81)'
                this.styleObject.display = 'flex'
                this.textMessage = text
            } else {
                this.styleObject.background = 'rgb(255 0 0 / 81%)'
                this.styleObject.display = 'flex'
                this.textMessage = text
            }
            setTimeout(() => {
                this.styleObject.display = 'none'
            }, 3000)
        },
    }
}
</script>

<style lang="scss" scoped>
    section{
        position: relative;
        .section__wrapper{
            padding: 107px 0 107px 0;
        }
        img{
            position: absolute;
            top: 0;
            right: 0;
            max-width: 832px;
        }
    }
    .input-wrapper{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 22px;
        margin-bottom: 12px;
        input[type=number],
        input[type=text]{
            margin-top: 10px;
        }
    }

    form{
        max-width: 560px;
        display: flex;
        flex-direction: column;
        gap: 22px;
        margin-top: 22px;
        button{
            width: 310px;
            height: 54px;
            background: #555457;
            font-weight: 700;
            font-size: 18px;
            line-height: 27px;
            letter-spacing: 0.11em;
            text-transform: uppercase;
            color: #FFFFFF;
            border: none;
        }
    }
    span, li, .subtext{
        color: #FFFFFF;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.1em;
    }

    ul{
        margin: 32px 0;
        li{
            list-style:inside;
            font-size: 16px;
            line-height: 18px;
            margin-left: 10px;
        }
        li:nth-child(2) {
            padding-top: 15px;
        }
    }
    .subtext{
        font-size: 16px;
        line-height: 18px;
    }
    .message{
        width: 335px;
        height: 57px;
        position: absolute;
        top: 94%;
        right: 1%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        animation: messageAnimation .5s linear both;
        span{
            font-size: 18px;
            text-transform: uppercase;
            font-weight: 600;
            font-style: italic;
            padding: 0 10px;
            text-align: center;
        }
    }

    @keyframes messageAnimation {
        0%{transform: translateX(200px);}
        100%{transform: translateX(0);}
    }
</style>
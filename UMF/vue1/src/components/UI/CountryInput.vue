<template>
    <div class="Wrapper--country" :class="{ active: isActive }">
        <span class="inputLabel" :class="{ activeLabel: activeLabel, activeErr: activeErr }">
            {{ labelText }}
        </span>
        <input 
            v-model="country"
            name="country"
            autocomplete="country" 
            type="text" 
            placeholder="Country of residence" 
            title="Enter your country of residence" 
            id="country"
            :class="{ activeLabel: activeLabel, activeErr: activeErr }"  
            @keyup="search" 
            @click.prevent="checkingCountry"
            @blur="setInputValue" 
        >
        <ul class="option">
            <li v-for="item in cityDataFilter" :key="item._id" ref="option" @click="value(item.country)">
                <CountryFlag :iso="`${item.flag}`" mode="squared" /> 
                {{ item.country }}
            </li>
        </ul>
    </div>
</template>

<script>
import CountryFlag from 'vue3-country-flag-icon'
import 'vue3-country-flag-icon/dist/CountryFlag.css'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
    data() {
        return {
            labelText: 'Country',
            activeLabel: false,
            activeErr: false,
            isActive: false,
            cityDataFilter: [],
            country: ''
        }
    },
    components: {
        CountryFlag
    },
    computed: {
        ...mapGetters('PresaleModules', ['getSelectData']),
        localStorageValue(){
            return this.$store.state.PresaleModules.inputValues.country
        }
    }, 
    async mounted(){
        await this.fetchSelect()
        await this.setLocalStorage()
        this.cityDataFilter = this.getSelectData
        this.country = this.$store.state.PresaleModules.inputValues['country'] ? this.$store.state.PresaleModules.inputValues['country'].value : ''
    },
    methods: {
        ...mapActions('PresaleModules', ['fetchSelect', 'setLocalStorage']),
        ...mapMutations('PresaleModules', ['pushUserData', 'changeFormValidation']),
        search(){
			this.cityDataFilter = this.getSelectData.filter(e => e.country.slice(0, this.country.length) === this.country)
			this.cityDataFilter.sort((a, b) => a.country > b.country ? 1 : a.country < b.country ? -1 : 0)
        },
        value(el) {
            this.country = el
            this.activeErr = false
            this.activeLabel = false
            this.isActive = this.isActive ? false : true
        },
        checkingCountry(){
            this.isActive = this.isActive ? false : true
            this.activeLabel = true
        },
        setInputValue(el){
            const error = () => {
                this.activeLabel = false
                this.activeErr = true
                el.target.focus()
                this.changeFormValidation(false)
            }
            const success = () => {
                this.activeErr = false
                this.activeLabel = false
                this.pushUserData({
                    value: this.country,
                    elCheck: 'country'
                })
                this.changeFormValidation(true)
            }
            const check = this.getSelectData.some(e => e.country === this.country)
            check ? success() : error()
        }
    }
}
</script>

<style lang="scss" scoped>
    span{
        opacity: 1;
        transform: translateX(0);
    }
    .Wrapper--country{
        position: relative;
        &.active{
            .option{
                display: block;
            }
            &::before{
                transform: rotate(135deg);
                top: 35px;
            }
        }

        &::before{
            content: '';
            transition: .5s;
            position: absolute;
            width: 13px;
            height: 13px;
            border-bottom: 3px solid #63AF8F;
            border-left: 3px solid #63AF8F;
            transform: rotate(-45deg);
            top: 30px;
            right: 15px;
            cursor: pointer;
        }

        &:hover::before{
			border-bottom: 3px solid #FFFFFF;
			border-left: 3px solid #FFFFFF;
        }

        ::-webkit-scrollbar {
          width: 10px;
          position: relative;
        }
        ::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px rgb(85, 26, 139); 
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: #63AF8F; 
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #3c6e59; 
        }
        input[type=text]:hover{
            cursor: pointer;
        }
        .option{
            background: #0F100F;
            position: absolute;
            z-index: 5;
            width: 100%;
            height: 170px;
            border-radius: 10px;
            overflow: auto;
            margin-top: 10px;
            display: none;
            animation: messageAnimation .3s linear both;
            li{
                padding: 10px;
                color: #555457;
                text-transform: capitalize;
                list-style: none;
                &:hover{
                    background: #63AF8F;
                    color:#FFFFFF;
                    box-shadow: 0 5px 10px #63af8f;
                    margin: 0;
                }
            }
            &:hover{
                cursor: pointer;
            }
        }
    }

    input[type=text]{
        width: 100%;
        margin-top: 10px;
        height: 57px;
        min-width: 268px;
        background: #0F100F;
        border-radius: 5px;
        border: none;
        outline: none;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0.1em;
        text-transform: capitalize;
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

    @keyframes messageAnimation {
        0%{height: 10px;}
        100%{height: 170px;}
    }
</style>
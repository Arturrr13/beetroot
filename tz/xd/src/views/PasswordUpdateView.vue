<template>
    <main>
        <send-message :display="sendMessage" @sendCode='update' />
        <check-code :display="checkCode" @checkingCode='update'/>
        <new-password :display="newPassword" @newPas='update'/>
        <update-done :display="updateDone" @sendCode='update'/>
    </main>
</template>

<script>
import SendMessage from '@/components/password-update/SendMessage.vue';
import CheckCode from '@/components/password-update/CheckCode.vue';
import NewPassword from '@/components/password-update/NewPassword.vue';
import UpdateDone from '@/components/password-update/UpdateDone.vue';
import { mapGetters } from 'vuex'

export default {
    data(){
        return{
            sendMessage: true,
            checkCode: false,
            newPassword: false,
            updateDone: false,
            email: null
        }
    },
    components:{
        SendMessage,
        CheckCode,
        NewPassword,
        UpdateDone
    },
    computed: {
        ...mapGetters('UserModules', ['getUserData']),
    }, 
    mounted(){
        this.getUserData.userEmail === '' ? document.querySelector('.nav__block--right').style.display = 'none' : null
    },
    methods: {
        update (data) {
            this.sendMessage = data.sendMessage
            this.checkCode = data.checkCode
            this.updateDone = data.updateDone
            this.newPassword = data.newPassword
        }
    }
}
</script>

<style lang="scss" scoped>
    main{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
</style>
<template>
    <div class="content">
        <div class="form__wrapper">
            <h1>Login</h1>
            <input 
                type="text"
                v-model="data.name"
            >
            <button @click="login">
                Login
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    // definePageMeta({
    //     layout: 'login'
    // })

    const data = reactive({
        name: ''
    })

    const login = () => {
        if(data.name.length > 0){
            const client = clientStore()
            client.setName(data.name)
            navigateTo('/') 
        } 
    }
</script>

<style lang="scss" scoped>
    .content{
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .form__wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: 400px;
        gap: 20px;
        background: $df-color-dark;
        border-radius: 15px;
        padding: 20px;
    }

    h1{
        color: $tx-color-white;
        font-style: italic;
        font-weight: 600;
    }

    input[type=text]{
        width: 85%;
        height: 50px;
        border: none;
        border-radius: 10px;
        padding: 0 20px;
        font-size: 16px;
        color: $tx-color-dark;
        background: $df-color-white;
    }

    button{
        height: 50px;
        width: 150px;
        background: $df-color-white;
        border-radius: 10px;
        border: none;
        color: $tx-color-dark;
        font-size: 17px;
    }
</style>
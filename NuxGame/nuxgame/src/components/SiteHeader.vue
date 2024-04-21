<script setup lang="ts">
    import { ref } from 'vue';
    import { menuI } from '../../types'

    const menu = ref<menuI>()

    menu.value = {
        0: {
            title: 'Solutions',
            subMenu: ['title1', 'title2', 'title3']
        },
        1: {
            title: 'Partners'
        }
    }
</script>

<template>
    <header>
        <div class="logo__wrapper">
            <img src="../assets/image/logo.png" alt="logo">
        </div>
        <router-link to="/en/">Go to Home</router-link>
        <router-link to="/en/chat">Go to About</router-link>
        <div class="menu__wrapper">
            <ul class="menu__element">
                <li v-for="(item, index) in menu" :key="index">
                    {{ item.title }}
                    <ul 
                        v-if="item.hasOwnProperty('subMenu')"
                        class="subMenu"
                    >
                        <li v-for="(it, ind) in item.subMenu" :key="ind">
                            {{ it }}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </header>
</template>

<style lang="scss" scoped>

    header{
        position: fixed;
        height: 95vh;
        margin-top: 2.5vh;
        margin-left: 20px;
        background: linear-gradient(124deg, rgba(255,0,0,1) 36%, rgba(89,0,0,1) 70%, rgba(0,0,0,1) 100%);
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        padding: 15px;
    }
    .menu__element{
        @include flex(space-between, center, $direc: true)
    }
    .subMenu{
        @include flex(space-between, center, $direc: false)
    }

    li{
        color: $text-cl-1;
    }
</style>
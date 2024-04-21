<template>
    <header>
        <ul>
            <li>
                <NuxtLink :to="localePath('/')">
                    {{ $t('nav.nav-chat') }}
                </NuxtLink>
            </li>
            <li>
                <NuxtLink :to="localePath('/spin')">
                    {{ $t('nav.nav-spin') }}
                </NuxtLink>
            </li>
            <li>
                <NuxtLink :to="localePath('/users')">
                    {{ $t('nav.nav-users') }}
                </NuxtLink>
            </li>
            <li>
                <NuxtLink :to="localePath('/chart')">
                    {{ $t('nav.nav-chart') }}
                </NuxtLink>
            </li>
            <button @click="ua">ua</button>
        </ul>
    </header>
</template>

<script setup lang="ts">
    const localePath = useLocalePath()
    const { setLocale } = useI18n()

    const ua = () => setLocale('uk-ua')
</script>

<style lang="scss">
header{
    position: fixed;
    z-index: 10;
    left: 10px;
    min-width: 100px;
    top: 5vh;
    height: 90vh;
    background: $df-color-dark;
    border-radius: 40px;
}

ul{
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100%;
    align-items: center;
}

a{
    text-decoration: none;
    color: $tx-color-white;
}
.router-link-active{
    color: rgb(59, 255, 147);
}
</style>
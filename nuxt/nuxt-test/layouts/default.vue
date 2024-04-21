<script setup lang="ts">
    const login = clientStore()
</script>

<template>
    <div>
        <SiteHeader v-if="login.clientName !== undefined"/>
        <div class="slot__content">
            <slot />
        </div>
        <WeatherWindow v-if="login.clientName !== undefined" />
    </div>
</template>

<style lang="scss" scoped>
    .slot__content{
        padding-left: 110px;
    }
</style>


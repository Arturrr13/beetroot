<template>
    <main>
        <h1>
            {{ $t('nav.nav-home') }}
        </h1>
    </main>
</template>

<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    const i18n = useI18n()
</script>
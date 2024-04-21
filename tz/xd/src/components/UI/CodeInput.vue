<template>
    <div class="wrapper__name">
        <span :class="{ errActive: errActive }">{{ textErr }}</span>
        <input class="code" type="number" v-model="code" placeholder="6-ти значный код активации">
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    .wrapper__name{
        position: relative;
    }
    .errActive{
        display: block;
        position: absolute;
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        line-height: 13px;
        color: #CB0014;
        right: 10px;
        top: 16px;
    }

    input[type=number]{
        width: 314px;
        height: 47px;
        border: 1px solid #E9E9E9;
        border-radius: 5px;
        margin: 32px 0;
        font-weight: 400;
        font-size: 15px;
        line-height: 18px;
        color: #000000;
        padding: 0 25px;
    }

    input[type=number]::-webkit-inner-spin-button{
        appearance: none;
    }
</style>
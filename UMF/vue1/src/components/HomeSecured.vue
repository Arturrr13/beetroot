<template>
    <section class="home-secured section__wrapper">
        <h1>Audited <h2>& Secured by</h2></h1>
        <div class="wrapper__secured">
            <div class="TechReat">
                <img v-lazyload :data-src="require(`../assets/image/secured/TechReat.png`)" alt="TechReat">
                <p>TechReat</p>
            </div>
            <div class="CoinTool">
                <img v-lazyload :data-src="require(`../assets/image/secured/CoinTool.png`)" alt="CoinTool">
                <p>CoinTool</p>
            </div>
        </div>
    </section>
</template>

<script>
import lazyload from '@/assets/directives/lazyload'

export default {
    name: 'HomeSecured',
    directives:{lazyload}
}
</script>

<style lang="scss">
    .home-secured{
        margin-top: 219px;
    }
    .wrapper__secured{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 182px;
        margin-top: 138px;
        p{
            font-weight: 500;
            font-size: 36px;
            line-height: 120%;
            letter-spacing: 0.01em;
            text-align: center;
            margin-top: 27px;
            text-transform: capitalize;
            color: #FFFFFF;
        }
        .CoinTool img{
            height: 204px;
            width: 230px;
        }
        .TechReat img{
            height: 204px;
            width: 204px;
        }
    }
</style>
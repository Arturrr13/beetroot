<template>
    <div class="mask" ref="mask">
        <div class="loader__wrapper">
            <div class="loader"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SiteLoader',
        created(){
            document.body.style.overflow = 'hidden'
            window.addEventListener('load', () => {
                this.$refs.mask.animate([
                      { opacity: '1'},
                      { opacity: '0', transform: 'translateY(-100%)'}
                    ], {
                        duration: 800,
                        fill: 'both'
                    })
                setTimeout(()=>{
                    this.$refs.mask.remove()
                    document.body.style.overflowY = ''
                }, 1000)
            })
        }
    }
</script>

<style lang="scss">
    .mask{
        width: 100%;
        height: 100%;
        background: black;
        position: absolute;
        z-index: 1111;
        .loader{
            background: linear-gradient(25deg, rgba(99, 175, 143, 1) 14%, rgba(112, 101, 169, 1) 34%, rgba(95, 55, 145, 1) 53%);
            border-radius: 50%;
            width: 200px;
            height: 200px;
            box-shadow: 7px 0 0 rgb(64, 22, 116) ;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: loader 2s infinite;
            &::before{
                content:url(../assets/image/UMF-Logos.png);
                transform: rotateY(25deg);
            }
        }
        .loader__wrapper{
            transform: rotateY(25deg);
            position: relative;
            top: calc(50% - 100px);
            display: flex;
            justify-content: center;
            &::before{
                content: '';
                border-radius: 50%;
                width: 200px;
                height: 200px;
                background: rgba(113, 223, 177, 0.433);
                box-shadow: 0 0 25px rgba(120, 155, 141, 0.805);
                position: absolute;
                top: 135px;
                transform: rotateX(72deg);
                animation: shadowAnimation 2s infinite;
            }
        }
    }

    @keyframes pageAnimation {
      0% {opacity: 0; transform: translateX(100%);}
      100% {opacity: 1; transform: translateX(0);}
    }

    @keyframes loader {
      0% {transform: translateY(0);}
      50% {transform: translateY(-50px);}
      100% {transform: translateY(0)}
    }

    @keyframes shadowAnimation {
      0% {scale: 1;}
      50% {scale: .5;}
      100% {scale: 1}
    }
</style>
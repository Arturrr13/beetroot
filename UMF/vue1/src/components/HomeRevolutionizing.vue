<template>
    <section class="home-revolutionizing">
        <div class="text-box section__wrapper">
            <h2>
                Revolutionizing
            </h2>
            <h1>
                Saving & borrowing  
            </h1>
            <span>
                Uma.Fi is a decentralized finance-based startup built to innovate and reform the native ways of the monetary system.
            </span>
            <button title="Go to documentation" type="button" rel="nofollow" class="button btn__style click" @click="downloadText">
                Read Documentation
                <i v-for="index in 6" :key="index" :class="`circle--${index}`"></i>
            </button>
            <span>
                Become early bird and receive up to 7.5% bonus tokens by joining our Whitelist
            </span>
        </div>
        <div class="img">
            <svg style="--i:18s" class="icon__btc" width="100px" height="100px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" stroke="#63AF8F" d="M23.388 15.165c1.733-0.886 2.836-2.462 2.58-5.081-0.335-3.585-3.279-4.786-7.178-5.121v-4.963h-3.033v4.825c-0.788 0-1.595 0.020-2.403 0.039v-4.864h-3.033v4.963c-1.115 0.034-2.414 0.017-6.085 0v3.23c2.394-0.042 3.651-0.196 3.939 1.339v13.589c-0.183 1.218-1.158 1.043-3.328 1.005l-0.61 3.604c5.53 0 6.086 0.020 6.086 0.020v4.25h3.033v-4.191c0.827 0.020 1.634 0.020 2.403 0.020v4.172h3.033v-4.25c5.081-0.276 8.478-1.556 8.931-6.342 0.354-3.84-1.457-5.554-4.333-6.243zM13.413 8.41c1.713 0 7.070-0.532 7.070 3.033 0 3.407-5.357 3.013-7.070 3.013zM13.413 24.145v-6.657c2.048 0 8.32-0.571 8.32 3.328 0 3.762-6.272 3.328-8.32 3.328z"/>
            </svg>
            <svg style="--i:17s" version="1.1" id="eth" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100px" height="115px" viewBox="0 0 226.777 226.777" xml:space="preserve">
                <g>
                    <polygon fill="#5F3791" style="transform: translate(-20px, -10px);" points="112.553,157 112.553,86.977 44.158,116.937"/>
                    <polygon fill="#5F3791" style="transform: translate(-20px, -10px);" points="112.553,82.163 112.553,-0.056 46.362,111.156"/>
                    <polygon fill="#5F3791" style="transform: translate(20px, 10px);" points="116.962,-0.09 116.962,82.163 184.083,111.566"/>
                    <polygon fill="#5F3791" style="transform: translate(20px, 10px);" points="116.962,86.977 116.962,157.002 185.405,116.957"/>
                    <polygon fill="#5F3791" style="transform: translate(-20px, 20px);" points="112.553,227.406 112.553,171.085 44.618,131.31"/>
                    <polygon fill="#5F3791" style="transform: translate(20px, 20px);" points="116.962,227.406 184.897,131.31 116.962,171.085"/>
                </g>
            </svg>
            <img src="../assets/image/1.png" alt="">
        </div>    
    </section>
</template>

<script>
export default {
    name: 'HomeRevolutionizing',
    methods:{
        downloadText: function(){
          var blob = new Blob([ 'sampleText' ], { "type" : "application/pdf" });
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = 'decentralized-finance.pdf'
          link.click()
        }
    }
}
</script>

<style lang="scss" scoped>
.icon__btc{
    position: absolute;
    right: 9%;
    top: 40%;
    path{
        stroke-dashoffset: 132;
        stroke-dasharray: 132;
        animation: btcAnim 10s infinite;
    }
}

#eth{
    position: absolute;
    right: 4%;
    top: 18%;
    g{
        polygon{
            animation: ethAnim 10s infinite;
        }
    }
}

@keyframes btcAnim {
    to{
        stroke-dashoffset: 0;
    }
}

@keyframes ethAnim{
    50%{
        transform: translate(0, 0);
        fill: #63AF8F;
    }
}
</style>
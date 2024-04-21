<template>
    <section class="chart__wrapper">
        <div class="chart">
           <div class="center">
            <svg width="61" height="37" viewBox="0 0 61 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.0641 0.811901C26.8213 -0.143573 28.2498 -0.205153 29.0864 0.68162L59.6113 33.038C61.0336 34.5456 59.5057 36.9552 57.5355 36.3116L28.1796 26.722C27.7401 26.5784 27.2645 26.5916 26.8336 26.7591L2.87151 36.0777C0.970537 36.817 -0.687668 34.5701 0.579129 32.9716L26.0641 0.811901Z" fill="#42239A"/>
            </svg>
            <span>GOOD LUCK</span>
            <img src="../../assets/image/marijuana.png" alt="">
           </div>
           <div class="triangle" style="transform:rotate(0deg)">
              <div class="circle" style="background: #42239A">
                <span>7</span>
            </div>
           </div>
           <div class="triangle" style="transform:rotate( 36deg)">
              <div class="circle" style="background:#F6F7F9">
                <span style="color: #000000">4</span>
            </div>
           </div>
           <div class="triangle" style="transform:rotate(72deg)">
              <div class="circle" style="background: #42239A">
                <span>5</span>
            </div>
           </div>
           <div class="triangle" style="transform:rotate(108deg)">
              <div class="circle" style="background:#F6F7F9">
                <span style="color: #000000">6</span>
            </div>
           </div>
           <div class="triangle" style="transform:rotate(144deg)">
              <div class="circle" style="background: #42239A">
                <span>7</span>
            </div>
           </div>
           <div class="triangle" style="transform:rotate(180deg)">
              <div class="circle" style="background:#F6F7F9">
                <span style="color: #000000">8</span>
            </div>
           </div>
           <div class="triangle" style="transform:rotate(216deg)">
              <div class="circle" style="background: #42239A">
                <span>9</span>
            </div>
           </div>
           <div class="triangle" style="transform:rotate(252deg)">
              <div class="circle" style="background:#F6F7F9">
                <span style="color: #000000; left: 7px">10</span>
            </div>
           </div>
           <div class="triangle" style="transform:rotate(288deg)">
              <div class="circle" style="background: #42239A">
                <span>1</span>
            </div>
           </div>
           <div class="triangle" style="transform:rotate(324deg)">
              <div class="circle" style="background:#F6F7F9">
                <span style="color: #000000">2</span>
            </div>
           </div>
           <div class="triangle" style="transform:rotate(360deg)">
              <div class="circle" style="background: #42239A">
                <span>3</span>
            </div>
           </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "UserList"
}
</script>

<style lang="scss" scoped>
.chart__wrapper {
    width: 329px;
    height: 329px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff000000;
    border-radius: 50%;
    border: 3px solid #42239A;
}

.chart {
    width: 316px;
    margin: auto;
    position: relative;
    overflow: hidden;
}

.center {
    position: absolute;
    border-radius: 50%;
    left: 37px;
    top: 37px;
    z-index: 2;
    width: 243px;
    height: 243px;
    background: linear-gradient(180deg, #F0EBFF 0%, #FFFFFF 100%);
    border: 5px solid #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    
    svg{
        margin-top: 12px;
    }
    
    img{
        margin-bottom: 32px;
    }

    span{
        margin-top: 43px;
        font-weight: 100;
        font-size: 18px;
        line-height: 21px;
        color: rgba(66, 35, 154, 0.2);
    }
}

.chart:before {
    content: "";
    display: block;
    padding-top: 100%;
}

.triangle {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 50%;
    transform-origin: center bottom;
    overflow: hidden;
}

.circle {
    height: 100%;
    width: 100%;
    background: silver;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    transform-origin: center bottom;
    transform: rotate(145deg);
    span{
        transform: rotate(287deg);
        top: 98px;
        left: 15px;
        position: absolute;
        font-weight: 500;
        font-size: 30px;
        line-height: 35px;
        color: #FFFFFF;
    }
}
</style>
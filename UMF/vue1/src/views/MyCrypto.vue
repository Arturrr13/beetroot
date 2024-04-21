<template>
    <section>
        <div v-if="error !== null" class="message" ref="message">
            <p>{{ error.message }}</p>
            <button @click="closeMessage">X</button>
        </div>
        <h1>CRYPTO</h1>
        <div class="graph__buttons">
			<div class="select" :class="{active: active}">
				<input type="text" @click.prevent="selectActive" v-model="coin" readonly>
				<ul class="option">
					<li v-for="(item, index) in getAllcoinSelect" :key="index" @click="setCoin(item)">
						{{ item }}
					</li>
				</ul>
			</div>
            <button v-for="(item, index) in buttonData" :key="index" class="click" @click="setTime(item)">{{ item }}</button>
        </div> 
        <canvas id="graph" ref="graph"></canvas>
    </section>
</template>

<script>
    import { useActive } from '@/use/NavigationActive'
    import {mapActions, mapState, mapGetters, mapMutations} from 'vuex'

    export default {
        data(){
            return{
                width: null,
                height: null,
                active: false
            }
        },
        setup(){
			return useActive('nav ul #home', 'nav ul #faq', '.navigation .click', 'nav ul #about', 'nav ul #crypto')
		},
        computed: {
            ...mapState('GraphModules', ['newsData', 'valueONpx', 'coinMin', 'coinMax', 'coinSelect', 'newCoin', 'coin', 'buttonData', 'error']),
            ...mapGetters('GraphModules', ['getAllDataGraph', 'getAllcoinSelect']),
            ...mapGetters('UserModules', ['getStatus'])
        }, 
        mounted(){
            !this.getStatus ? this.$router.push('/login') : null
            this.getStatus ? this.getData() : null
        },
        methods:{
            ...mapActions('GraphModules', ['fetchDataGraph']),
            ...mapMutations('GraphModules', ['setNewCoin', 'setTimeAndSize', 'closeError']),
            async getData(){
                this.height = this.$refs.graph.clientHeight
                this.width = this.$refs.graph.clientWidth
                await this.fetchDataGraph()
                this.error !== null ? this.messageError() : this.graph()
            },
            messageError(){
                var c = document.getElementById("graph");
                var ctx = c.getContext("2d");
                c.width = this.width
                c.height = this.height
                ctx.beginPath()
                ctx.font = 'bold 40px Raleway'
                ctx.fillStyle = '#fffff3'
                ctx.textAlign = 'center'
                ctx.fillText(this.error, this.width, this.height / 2)   
                ctx.stroke()
                ctx.closePath()             
            },
            closeMessage(){
                this.$refs.message.animate([
                    {transform: 'translateX(0)', opacity: 1},
                    {transform: 'translateX(100%)', opacity: 0}
                ],{
                    duration: 500,
                    fill: 'both'
                })
                setTimeout(() => this.closeError(), 500)
            },
            graph(){
                var c = document.getElementById("graph");
                var ctx = c.getContext("2d");
                c.width = this.width
                c.height = this.height

                ctx.beginPath()
                ctx.lineWidth = 1 
                ctx.strokeStyle = '#fffff3'
                ctx.font = 'bold 20px Raleway'
                ctx.fillStyle = '#fffff3'
                for(let i = 1; i<=5; i++){
                    let y = (this.height - 50) / 5 * i, value = y*this.valueONpx + parseInt(this.coinMin)
                    let values = value > 100 ? value.toFixed(1) 
                    : value < 100 && value > 10 ? value.toFixed(2) 
                    : value < 10 && value > 1 ? value.toFixed(3) 
                    : value.toFixed(4)
                    ctx.fillText(values, 5, this.height - y - 25)
                    ctx.moveTo(0, this.height - y - 50)
                    ctx.lineTo(this.width, this.height - y - 50)
                }
                ctx.stroke()
                ctx.closePath()

                ctx.beginPath()
                ctx.lineWidth = 3 
                ctx.strokeStyle = '#63AF8F'
                for(let index in this.newsData){
                    let X = this.width / this.newsData.length * index, Y = this.height - (this.newsData[this.newsData.length - index - 1].close - this.coinMin) / this.valueONpx
                    ctx.lineTo(X, Y - 50)
                }
                ctx.stroke()
                ctx.closePath()

                ctx.beginPath()
                ctx.lineWidth = 2 
                ctx.strokeStyle = '#5F3791'
                ctx.fillStyle = '#5F3791'
                for(let index in this.newsData){
                    let X = this.width / this.newsData.length * index, Y = this.height - (this.newsData[this.newsData.length - index - 1].close - this.coinMin) / this.valueONpx,
                        date = this.newsData[this.newsData.length - index - 1].datetime.length > 10 ? this.newsData[this.newsData.length - index - 1].datetime.substring(this.newsData[this.newsData.length - index - 1].datetime.length - 8) : this.newsData[this.newsData.length - index - 1].datetime,
                        color = this.newsData[this.newsData.length - 1].close > this.newsData[0].close ? 'red' : 'green',
                        value = parseFloat(this.newsData[0].close) > 100 ? parseFloat(this.newsData[0].close).toFixed(1) 
                        : parseFloat(this.newsData[0].close) < 100 && parseFloat(this.newsData[0].close) > 10 ? parseFloat(this.newsData[0].close).toFixed(2) 
                        : parseFloat(this.newsData[0].close) < 10 && parseFloat(this.newsData[0].close) > 1 ? parseFloat(this.newsData[0].close).toFixed(3) 
                        : parseFloat(this.newsData[0].close).toFixed(4)
                    if(index % (this.newsData.length / 4) === 0){
                        ctx.moveTo(X, this.height - 20)
                        ctx.lineTo(X, Y - 50)
                        ctx.fillText(date, X, this.height - 5)
                    }
                    if(index == this.newsData.length - 1){
                        ctx.moveTo(X, this.height - 20)
                        ctx.lineTo(X, Y - 50)
                        ctx.fillText(date, X - 100, this.height - 5)
                        ctx.fillStyle = color
                        ctx.fillText(value, X - 100, this.height - 25)
                    }
                }
                ctx.stroke()
                ctx.closePath()
            },
            setCoin(coin){
                if(coin !== this.coin){
					this.active = this.active === false ? true : false
                    this.setNewCoin(coin)
                    this.getData()
                }
            },
            setTime(time){
                this.setTimeAndSize(time)
                this.getData()
            },
			selectActive(){
				this.active = this.active === false ? true : false
			},
        }
    }
</script>

<style lang="scss" scoped>
    #graph{
        background: #000100;
        width: 100%;
        height: 500px;
    }

	section{
		padding: 100px 0;
	}
    .message{
        position: absolute;
        bottom: 15px;
        right: 0;
        background: red;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        p{
            opacity: 1;
            color: white;
            width: calc(100% - 110px);
            padding: 20px 0;
            font-size: 18px;
            font-weight: 500;
            max-width: 955px;
        }
        button{
            background: white;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            margin-right: 10px;
            color: #ff0000;
            border: 2px solid #940505;
            &:hover{
                transition: .5s;
                cursor: pointer;
                box-shadow: 0 0 5px #940505;
                color: #940505
            }
        }
    }

    button, input[type=text]{
        width: 70px;
        height: 50px;
        background: #63AF8F;
        color: #fffff0;
        font-size: 18px;
        font-weight: 500;
        border-radius: 5px;
		outline: none;
        transition: all .5s ease-in-out;
        &:hover{
            transition: .5s;
            cursor: pointer;
            border: 3px solid #5F3791;
            box-shadow: 0 0 5px #5F3791;
            color: #5F3791;
        }
    }

    button:hover{
        box-shadow: inset 0 0 0 25px #5F3791;
        color: #63AF8F;
    }

	.select{
		position: relative;
        &.active{
            .option{
                display: block;
            }
            &::before{
                transform: rotate(135deg);
                top: 23px;
            }
        }

        &::before{
            content: '';
            transition: .5s;
            position: absolute;
            width: 13px;
            height: 13px;
            border-bottom: 3px solid #fffff0;
            border-left: 3px solid #fffff0;
            transform: rotate(-45deg);
            top: 15px;
            right: 15px;
			cursor: pointer;
        }

		&:hover::before{
			border-bottom: 3px solid #5F3791;
			border-left: 3px solid #5F3791;
        }

		::-webkit-scrollbar {
          width: 10px;
          position: relative;
        }
        ::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px #63AF8F; 
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: #5F3791; 
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #5F3791; 
        }

		input[type=text]{
			width: 200px;
			height: 50px;
			border: none;
			padding: 15px;
			&:hover{
				cursor: pointer;
				
			}
		}
        .option{
			background: #63AF8F;
            position: absolute;
            z-index: 5;
            width: 100%;
            height: 170px;
            border-radius: 10px;
            overflow: auto;
            margin-top: 10px;
            display: none;
            li{
                padding: 10px;
                color: #555457;
                text-transform: capitalize;
                list-style: none;
                &:hover{
                    background: #5F3791;
					color: #63AF8F;
                    box-shadow: 0 5px 10px #63af8f;
                    margin: 0;
                }
            }
            &:hover{
                cursor: pointer;
            }
        }
	}

    .graph__buttons{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        width: 100%;
        padding: 25px 0;
    }
</style>


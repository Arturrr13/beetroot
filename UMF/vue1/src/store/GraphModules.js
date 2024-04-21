const GraphModules = {
    namespaced: true,
    actions:{
        async fetchDataGraph({ commit, state }){
            try {
                const res = await fetch(`https://api.twelvedata.com/time_series?symbol=${state.coin}&type=Stock&interval=${state.time}&outputsize=${state.size}&apikey=d5dc74ee1581433092f67d0f03544937`)
                const GraphData = await res.json()
                commit("setDataGraph", GraphData)
            } catch (error) {
                state.error = error
            }
        }
    },
    mutations:{
        setDataGraph(state, GraphData){
            state.coinMax = 0
            state.coinMin = 9999999
            state.newsData = GraphData.values
            state.error = GraphData.status === 'error' ? GraphData : null
            state.newsData.forEach(el => {
                if(parseFloat(el.high) > state.coinMax){
                    state.coinMax = parseFloat(el.high)
                }
            })
            state.newsData.forEach(el => {
                if(parseFloat(el.low) < state.coinMin){
                    state.coinMin = parseFloat(el.low)
                }
            })
            state.valueONpx = (state.coinMax - state.coinMin) / (500 - 50) //max - min / height - padding
        },
        setNewCoin(state, newCoin){
            state.coin = newCoin
        },
        setTimeAndSize(state, time){
            state.time = time
        },
        closeError(state){
            state.error = null
        }
    },
    state:{
        buttonData: ['5min', '15min', '30min', '1h', '4h', '1day', '1week', '1month'],
        newsData: null,
        valueONpx: null,
        coinMin: null,
        coinMax: null,
        coinSelect: ['BTC/USD', 'XRP/USD', 'DOGE/USD', 'LTC/USD', 'ETH/USD'],
        coin: 'BTC/USD',
        newCoin: '',
        time: '1day',
        size: 48,
        error: null
    },
    getters:{
        getAllDataGraph(state){
            return state.newsData
        },
        getAllcoinSelect(state){
            return state.coinSelect
        }
    }
}

export default GraphModules
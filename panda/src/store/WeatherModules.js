const WeatherModules = {
    namespaced: true,
    actions:{
        async requestData(context){
            try {
                let ipAddress = ''
                fetch("https://api.ipify.org")
                .then(res => res.text())
                .then(ip => ipAddress = ip)
                let getUserData = await fetch(`https://ipapi.co/${ipAddress}/json/`)
                const UserData = await getUserData.json()

                const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${UserData.city}&units=metric&cnt=40&appid=2f4254fc69d7b826a1bca823024e6d6d`)
                const GraphData = await res.json()
                context.commit("setData", { 0: GraphData, 1: 'city0', firstFetch: true})
                context.commit("deleteData", 'city2')
                context.commit("deleteData", 'city3')
                context.commit("deleteData", 'city4')
                context.commit("deleteData", 'city5')
            } catch (error) {
                console.log(error)
            }
        },
        async requestDataUpdate(context, param){
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${param.id}&units=metric&appid=2f4254fc69d7b826a1bca823024e6d6d`)
                const GraphData = await res.json()
                if(param.days === 1){
                    context.commit("setData", { 0: GraphData, 1: param.index })
                } else {
                    context.commit("setDataFiveDays", { 0: GraphData, 1: param.index })
                }
            } catch (error) {
                console.log(error)
            }
        }
    },
    mutations:{
        setData(state, arr){
            const date = new Date(arr[0].list[0].dt * 1000).toISOString().substr(0, 10)
            const d = arr[0].list.filter(el => el.dt_txt.includes(date) === true)
            const t = [], l = []
            state.WeatherData[arr[1]] = d
            d.forEach(element => {
                t.push(element.main.temp)
                if(parseInt(element.dt_txt.slice(11, -6)) === 21){
                    l.push('00:00')
                } else {
                    l.push(String(parseInt(element.dt_txt.slice(11, -6))+3)+':00')
                }
            })
            state.dataChart[arr[1]] = t
            state.labelsChart[arr[1]] = l
            arr.firstFetch ? state.WeatherData[`city1`] = [] : null
            state.WeatherData[arr[1]].push(arr[0].city)
            state.cityId[arr[1]] = arr[0].city.id
            state.cityName[arr[1]] = arr[0].city.name
        },
        setDataFiveDays(state, arr){
            let date = new Date(arr[0].list[0].dt * 1000).toISOString().substr(0, 10)
            let masTemp = [], masDate = [], mTemp = 0, qt = 0
            arr[0].list.forEach((el) => {
                if(el.dt_txt.includes(date)){
                    mTemp += el.main.temp
                    qt++
                } else {
                    masTemp.push((mTemp / qt).toFixed(2))
                    masDate.push(date)
                    date = new Date(el.dt * 1000).toISOString().substr(0, 10)
                    mTemp = 0
                    qt = 0
                    mTemp += el.main.temp
                    qt++
                }
            })
            state.dataChart[arr[1]] = masTemp
            state.labelsChart[arr[1]] = masDate
        },
        copyData(state){
            let beackCity = '', keys = Object.keys(state.WeatherData)
            for(let index = 0; index < Object.keys(state.WeatherData).length; index++ ){
                if(!(`city${index}` in state.WeatherData)){
                    beackCity = `city${index}`
                }
            }
            if( beackCity === ''){
                state.WeatherData[`city${Object.keys(state.WeatherData).length - 1}`] = state.WeatherData.city0
                state.dataChart[`city${Object.keys(state.WeatherData).length - 1}`] = state.dataChart.city0
                state.labelsChart[`city${Object.keys(state.WeatherData).length - 1}`] = state.labelsChart.city0
                state.cityId[`city${Object.keys(state.WeatherData).length - 1}`] = state.cityId.city0
                state.cityName[`city${Object.keys(state.WeatherData).length - 1}`] = state.cityName.city0
                state.WeatherData[`city${Object.keys(state.WeatherData).length}`] = []
            } else {
                state.WeatherData[beackCity] = state.WeatherData[state.WeatherData[keys[0]].length === 0 ? keys[1] : keys[0]]
                state.dataChart[beackCity] = state.dataChart[state.WeatherData[keys[0]].length === 0 ? keys[1] : keys[0]]
                state.labelsChart[beackCity] = state.labelsChart[state.WeatherData[keys[0]].length === 0 ? keys[1] : keys[0]]
                state.cityId[beackCity] = state.cityId[state.WeatherData[keys[0]].length === 0 ? keys[1] : keys[0]]
                state.cityName[beackCity] = state.cityName[state.WeatherData[keys[0]].length === 0 ? keys[1] : keys[0]]
            }
        },
        deleteData(state, index){
            for(let ind in state.WeatherData){
                if(index === ind){
                    delete state.WeatherData[index]
                }
            }
        }
    },
    state:{
        WeatherData: {},
        dataChart: {},
        labelsChart: {},
        cityId: {},
        cityName: {}
    },
    getters:{
        getAllData(state){
            return state.WeatherData
        },
        getDataChart(state){
            return state.dataChart
        },
        getLabelsChart(state){
            return state.labelsChart
        },
        getCityId(state){
            return state.cityId
        },
        getCityName(state){
            return state.cityName
        }
    }
}

export default WeatherModules
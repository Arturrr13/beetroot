import { defineStore } from "pinia"
import { Coin } from "~/types"

export const useChartStore = defineStore('chart', () => {
    let coin = ref<Coin>()
    let labels = ref<Array<Date>>([])
    let values = ref<Array<string>>([])
    let coinName = ref('')
    
    const setCoin = (data: Coin) => coin.value = data
    const setChartData = (data: Coin) => {
        labels.value = []
        values.value = []

        data.values.forEach(el => {
            labels.value.push(el.datetime)
            values.value.push(el.close)
        })
        coinName.value = data.meta.currency_base

        labels.value.reverse()
        values.value.reverse()
    }

    const getCoin = async (time: string) => {
        try {
            const data = await $fetch<Coin>(`https://api.twelvedata.com/time_series?symbol=BTC/USD&type=Stock&interval=${time}&outputsize=20&apikey=d5dc74ee1581433092f67d0f03544937`)
            await setCoin(data)
            await setChartData(data)
        } catch(error) {
            console.log(error)
        }
    }

    return { coin, labels, values, coinName, getCoin }
})
<template>
    <div class="graph__wrapper">
        <div class="buttons__wrapper">
            <button class="5min" @click="updateChart('5min')">
                5m
            </button>
            <button class="1h" @click="updateChart('1h')">
                1h
            </button>
            <button class="1day" @click="updateChart('1day')">
                1d
            </button>
        </div>
        <Line
          :data="chartData"
        />
    </div>
</template>

<script setup lang="ts">
    import {
      Chart as ChartJS,
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    } from 'chart.js'
    import { Line } from 'vue-chartjs'

    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    )

    const coinData = useChartStore()

    useHead({
        title: `Chart`
    })

    const data = reactive({
        graphData: new Array<any>(),
        lables: new Array<Date>()
    })

    onMounted(async () => {
        await coinData.getCoin('1day')
        data.graphData = coinData.values
        data.lables = coinData.labels
        useHead({
            title: coinData.coinName
        })
    })

    const chartData = computed(() => {
        return { 
            labels: data.lables, 
            datasets: [
                { 
                    label: 'BTC', 
                    backgroundColor: '#09433', 
                    data: data.graphData 
                }
            ]
        }
    })

    const updateChart = async (time: string) => {
        await coinData.getCoin(time)
        data.graphData = coinData.values
        data.lables = coinData.labels
    }
</script>

<style lang="scss" scoped>
    .buttons__wrapper{
        display: flex;
        gap: 15px;
        padding: 15px;
        max-width: 210px;
        border-radius: 15px;
        backdrop-filter: blur(6px);
        background: #f0f8ff4a;
    }

    button{
        @include button($df-color-dark, $tx-color-white, 50px, 40px, 10px)
    }
</style>
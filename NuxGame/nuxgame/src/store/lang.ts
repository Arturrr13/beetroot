import { defineStore } from "pinia"
import { ref } from "vue"

export const useCounterStore = defineStore('lang', () => {
    let coin = ref('uk-UA')
    return { coin }
})
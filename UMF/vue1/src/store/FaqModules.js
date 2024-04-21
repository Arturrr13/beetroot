import axios from 'axios'

const FaqModules = {
    state:{
        FAQdata: []
    },
    mutations:{
        setData(state, payload){
            state.FAQdata = payload
        }
    },
    getters:{
        getAllData(state){
            return state.FAQdata
        }
    },
    actions:{
        fetchData(context){
            axios
            .get('https://node-api-6d27.onrender.com/api/posts')
            .then(res => context.commit("setData", res.data))
        }
    }
}

export default FaqModules
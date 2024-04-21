import axios from 'axios'

const UserModules = {
    namespaced: true,
    actions: {
        postUser(data){
            axios
            .post('http://localhost:5050/api/users',{
                name: data.name,
                mail: data.mail,
                password: data.password
            })
        },
        async loginUserr({ commit, state }, user){
            try {
                const res = await fetch(`http://localhost:5050/api/users?mail=${user.mail}&password=${user.password}`)
                if (res.ok) {
                    const userData = await res.json()
                    commit("setStatus", true)
                    commit("setToken", userData.token)
                    state.error = ''
                } else {
                    const userData = await res.json()
                    state.error = userData.message
                }
            } catch (error) {
                state.error = error
            }
        }
    },
    mutations: {
        setToken(state, token){
            state.token = token
        },
        setStatus(state, status){
            state.status = status
        }
    },
    state: {
        token: null,
        status: false,
        error: ''
    },
    getters: {
        getToken(state){
            return state.token
        },
        getStatus(state){
            return state.status
        },
        getError(state){
            return state.error
        }
    }
}

export default UserModules
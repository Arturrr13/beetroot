const UserModules = {
    namespaced: true,
    actions: {
       
    },
    mutations: {
        setEmailAndPassword(state, data){
            state.UserData.userEmail = data.email
            state.UserData.userPassword = data.password
            state.UserData.userNickName = data.nickname
        }
    },
    state: {
        UserData: {
            userEmail: '',
            userPassword: '',
            userNickName: ''
        }
    },
    getters: {
        getUserData(state){
            return state.UserData
        }
    }
}

export default UserModules
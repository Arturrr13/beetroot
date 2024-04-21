const historyOperationModules = {
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
        HistoryOperation: [
            {
                number: '0000001',
                date: '10.10.21 13:59',
                barter: 'XDE / USDT',
                xde: 130,
                usdt: 130,
                status: 'Выполнено'
            },
            {
                number: '0000002',
                date: '10.10.21 13:59',
                barter: 'USDT / XDE',
                xde: 30,
                usdt: 30,
                status: 'Выполнено'
            },
            {
                number: '0000003',
                date: '10.10.21 13:59',
                barter: 'XDE / USDT',
                xde: 30,
                usdt: 30,
                status: 'Выполнено'
            },
            {
                number: '0000004',
                date: '10.10.21 13:59',
                barter: 'USDT / XDE',
                xde: 50,
                usdt: 50,
                status: 'Просрочено'
            },
            {
                number: '0000005',
                date: '10.10.21 13:59',
                barter: 'USDT / XDE',
                xde: 30,
                usdt: 30,
                status: 'Выполнено'
            },
            {
                number: '0000006',
                date: '10.10.21 13:59',
                barter: 'XDE / USDT',
                xde: 30,
                usdt: 30,
                status: 'Выполнено'
            },
            {
                number: '0000007',
                date: '10.10.21 13:59',
                barter: 'USDT / XDE',
                xde: 80,
                usdt: 80,
                status: 'Просрочено'
            },
            {
                number: '0000008',
                date: '10.10.21 13:59',
                barter: 'XDE / USDT',
                xde: 110,
                usdt: 110,
                status: 'Выполнено'
            },
            {
                number: '0000009',
                date: '10.10.21 13:59',
                barter: 'XDE / USDT',
                xde: 310,
                usdt: 310,
                status: 'Выполнено'
            },
            {
                number: '0000010',
                date: '10.10.21 13:59',
                barter: 'USDT / XDE',
                xde: 10,
                usdt: 10,
                status: 'В ожидании'
            }
        ]
    },
    getters: {
        getHistoryOperation(state){
            return state.HistoryOperation.reverse()
        }
    }
}

export default historyOperationModules
import {createStore} from 'vuex'
import UserModules from './UserModules'
import historyOperationModules from './historyOperationModules'

export default createStore({
    modules: {
        UserModules: UserModules,
        historyOperationModules: historyOperationModules
    }
})
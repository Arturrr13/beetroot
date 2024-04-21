import {createStore} from 'vuex'
import GraphModules from './GraphModules'
import FaqModules from './FaqModules'
import PresaleModules from './PresaleModules'
import UserModules from './UserModules'

export default createStore({
    modules: {
        GraphModules: GraphModules,
        FaqModules: FaqModules,
        PresaleModules: PresaleModules,
        UserModules: UserModules
    }
})


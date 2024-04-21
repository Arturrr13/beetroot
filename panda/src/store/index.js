import {createStore} from 'vuex'
import WeatherModules from './WeatherModules'

export default createStore({
  modules: {
    WeatherModules: WeatherModules
  }
})

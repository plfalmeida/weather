import { WeatherState } from '@/types/Weather'
import { MutationTree } from 'vuex'

const mutations: MutationTree<WeatherState> = {
  setWeather: (state, payload) => {
    state.currentWeather = payload
  },
  setHourly: (state, payload) => {
    payload.hourly.length = 23
    state.hourlyDetail = payload
  },
}

export default mutations

import Vue from 'vue'
import Vuex from 'vuex'
import { WeatherState } from '@/types/Weather'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  currentWeather: {
    main: {},
    wind: {},
    sys: {},
    weather: [],
  },
  hourlyDetail: {
    hourly: [],
  },
  locale: navigator.language,
  cities: [
    'Dallol',
    'Fairbanks',
    'London',
    'Recife',
    'Vancouver',
    'Yakutsk',
  ],
} as unknown as WeatherState

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
})

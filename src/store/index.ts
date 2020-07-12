import Vue from 'vue'
import Vuex from 'vuex'
import weatherService from '@/services/weatherService'
import { WeatherState } from '@/types/Weather'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  } as WeatherState,
  mutations: {
    setWeather: (state, payload) => {
      state.currentWeather = payload
    }
  },
  actions: {
    fetchWeather: async (context, { cityName }: { cityName: string }) => {
      try {
        // TODO: Remove this code - only to development
        const localWheter = JSON.parse(localStorage.getItem('weather')as string)
        if (!localWheter) {
          throw localWheter
        }
        context.commit('setWeather', localWheter)
      } catch {
        try {
          const { data } = await weatherService.findByCity(cityName)
          localStorage.setItem('weather', JSON.stringify(data))
          context.commit('setWeather', data)
        } catch (err) {
          console.log('err', err)
        }
      }
    }
  },
  getters: {
    temperature: (state) => {
      const { temp, temp_max: tempMax, temp_min: tempMin } = state.currentWeather.main
      return { temp, tempMax, tempMin }
    }
  }
})

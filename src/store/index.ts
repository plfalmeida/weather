import Vue from 'vue'
import Vuex from 'vuex'
import weatherService from '@/services/weatherService'
import { WeatherState } from '@/types/Weather'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentWeather: {
      main: {}
    }
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
        const localWeather = JSON.parse(localStorage.getItem('weather')as string)
        if (!localWeather) {
          throw localWeather
        }
        context.commit('setWeather', localWeather)
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
      let { temp: current, temp_max: max, temp_min: min } = state.currentWeather.main

      current = Math.trunc(current)
      max = Math.trunc(max)
      min = Math.trunc(min)

      return { current, max, min }
    }
  }
})

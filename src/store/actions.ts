import weatherService from '@/services/weatherService'
import { ActionTree } from 'vuex'
import { WeatherState } from '@/types/Weather'

const actions: ActionTree<WeatherState, WeatherState> = {

  fetchWeather: async (context, { cityName }: { cityName: string }) => {
    try {
      const { data } = await weatherService.findByCity(cityName)
      localStorage.setItem('weather', JSON.stringify(data))
      context.commit('setWeather', data)
      context.dispatch('fetchHourly', {
        lat: data.coord.lat,
        lon: data.coord.lon,
      })
    } catch (err) {
      console.log('err', err)
    }
  },

  fetchHourly: async (context, { lat, lon }) => {
    try {
      const { data } = await weatherService.findHourly(lat, lon)
      localStorage.setItem('hourly', JSON.stringify(data))
      context.commit('setHourly', data)
    } catch (err) {
      console.log('err', err)
    }
  },

}

export default actions

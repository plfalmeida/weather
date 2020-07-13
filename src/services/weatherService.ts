import api from './api'
import { WeatherInfo } from '@/types/Weather'

const findByCity = (cityName: string) => {
  return api.get<WeatherInfo>('/weather', { params: { q: cityName } })
}

const findHourly = (lat: number, lon: number) => {
  return api.get('/onecall', {
    params: {
      lat,
      lon,
      exclude: 'daily,current',
    },
  })
}

export default {
  findByCity,
  findHourly,
}

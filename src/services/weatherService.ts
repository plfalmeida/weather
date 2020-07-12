import api from './api'
import { WeatherInfo } from '@/types/Weather'

const findByCity = (cityName: string) => {
  return api.get<WeatherInfo>('/weather', { params: { q: cityName } })
}

export default {
  findByCity
}

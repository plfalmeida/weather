import api from './api'
import { WheaterInfo } from '@/types/Wheater'

const findByCity = (cityName: string) => {
  return api.get<WheaterInfo>('/weather', { params: { q: cityName } })
}

export default {
  findByCity
}

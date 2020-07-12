import axios from 'axios'

const api = axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5'
})

api.interceptors.request.use(async (config) => {
  config.params.appid = process.env.VUE_APP_OPEN_WEATHER_KEY
  config.params.units = 'metric'

  return config
})

export default api

import { WeatherState } from '@/types/Weather'
import { GetterTree } from 'vuex'

const getters: GetterTree<WeatherState, WeatherState> = {
  temperature: (state) => {
    let { temp: current, temp_max: max, temp_min: min } = state.currentWeather.main

    current = Math.trunc(current)
    max = Math.trunc(max)
    min = Math.trunc(min)

    return { current, max, min }
  },

  dailyInfo: (state) => {
    const speed = state.currentWeather.wind.speed
    const humidity = state.currentWeather.main.humidity

    const msSunrise = (state.currentWeather.sys.sunrise * 1000)
    const msSunset = (state.currentWeather.sys.sunset * 1000)
    const sunrise = new Date(msSunrise).toLocaleTimeString()
    const sunset = new Date(msSunset).toLocaleTimeString()

    return [
      { name: 'windspeed', value: speed },
      { name: 'sunrise', value: sunrise },
      { name: 'sunset', value: sunset },
      { name: 'humidity', value: `${humidity}%` },
    ]
  },

  weather: (state) => {
    const [CurrentWeather = { main: '' }] = state.currentWeather.weather
    return CurrentWeather
  },

  city: (state) => state.currentWeather.name,

  hourly: (state) => {
    const relevantTimes = ['03:00', '09:00', '15:00', '21:00']

    return state.hourlyDetail.hourly.reduce((acc: any[], hour: any) => {
      const date = new Date(hour.dt * 1000)

      hour.dt = new Intl.DateTimeFormat('pt-BR', {
        timeZone: state.hourlyDetail.timeZone,
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      }).format(date)

      console.log('date', new Intl.DateTimeFormat('pt-BR', {
        timeZone: state.hourlyDetail.timeZone,
        hour: 'numeric',
        minute: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour12: false,
      }).format(date))

      const isRelevant = relevantTimes.includes(hour.dt)
      if (isRelevant) {
        hour.temp = Math.trunc(hour.temp)
        const [weather] = hour.weather
        hour.weather = weather
        acc.push(hour)
      }
      return acc
    }, [])
  },
}

export default getters

import { WeatherState } from '@/types/Weather'
import { GetterTree } from 'vuex'
import { unixToDate, zoneDateFromUnix, getHour } from '@/helpers/date'

const getters: GetterTree<WeatherState, WeatherState> = {
  temperature: (state) => {
    let { temp: current, temp_max: max, temp_min: min } = state.currentWeather.main

    current = Math.trunc(current)
    max = Math.trunc(max)
    min = Math.trunc(min)

    return { current, max, min }
  },

  dailyInfo: (state) => {
    const { locale } = state
    const { timezone } = state.hourlyDetail

    const speed = state.currentWeather.wind.speed
    const humidity = state.currentWeather.main.humidity

    const sunrise = getHour(
      unixToDate(state.currentWeather.sys.sunrise),
      timezone,
      locale,
    )

    const sunset = getHour(
      unixToDate(state.currentWeather.sys.sunset),
      timezone,
      locale,
    )

    return [
      { name: 'windspeed', value: `${speed} m/s` },
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
    type period = {
      index: number;
      name: string;
    }

    const periods: { [key: string]: period } = {
      '3:00 AM': {
        index: 1,
        name: 'Dawn',
      },
      '9:00 AM': {
        index: 2,
        name: 'Morning',
      },
      '3:00 PM': {
        index: 3,
        name: 'Afternoon',
      },
      '9:00 PM': {
        index: 4,
        name: 'Night',
      },
    }

    const { locale } = state
    const { timezone, hourly } = state.hourlyDetail
    const relevantTimes = Object.keys(periods)

    return hourly.reduce((acc: any[], hour: any) => {
      const date = zoneDateFromUnix(hour.dt, timezone)
      hour.time = getHour(date, timezone, locale)

      if (relevantTimes.includes(hour.time)) {
        hour.temp = Math.trunc(hour.temp)
        const [weather] = hour.weather
        hour.weather = weather
        hour.name = periods[hour.time].name
        hour.index = periods[hour.time].index
        acc.push(hour)
      }

      return acc
    }, []).sort((a, b) => (a.index > b.index) ? 1 : -1)
  },
}

export default getters

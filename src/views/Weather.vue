<template lang="pug">

  .weather(:data-theme="weather.main")
    nav.top-navigation
      router-link(:to="{ name: 'home' }").back-button
        arrow-icon(direction="left")
    .container
      header
        h1 {{ city }}
        h2 {{ weather.main }}

      main(@click="changeIconSet")
        temperature(:temperature="temperature")
        weather-icon(:iconId="weather.icon" iconSize="@4x" :custom="showCustomIcons")
        temperature-extended(:periods="hourly" :customIcons="showCustomIcons")
        day-info(:dailyInfo="dailyInfo")

</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

import Temperature from '@/components/Temperature/Temperature.vue'
import TemperatureExtended from '@/components/Temperature/TemperatureExtended.vue'
import DayInfo from '@/components/Day/DayInfo.vue'
import WeatherIcon from '@/components/ui/WeatherIcon.vue'
import ArrowIcon from '../components/ui/ArrowIcon.vue'

import { mapGetters } from 'vuex'

@Component({
  name: 'weather',
  components: {
    Temperature,
    TemperatureExtended,
    DayInfo,
    WeatherIcon,
    ArrowIcon,
  },
  computed: {
    ...mapGetters(['temperature', 'dailyInfo', 'weather', 'city', 'hourly', 'showCustomIcons']),
  },
})
export default class Weather extends Vue {
  mounted () {
    const { city } = this.$route.params
    this.$store.dispatch('fetchWeather', { cityName: city })
  }

  changeIconSet () {
    this.$store.commit('toggleIconSet')
  }
}
</script>

<style lang="stylus" scoped>

header
  margin-bottom 2rem

h1
  font-size 4.5rem
  text-transform uppercase

h2
  margin-top 0.5rem
  font-size 2.5rem
  font-weight 200
  text-transform lowercase

.top-navigation
  width 100%
  position fixed
  top 0
  left 0
  text-align left

.back-button
  padding 1rem
  display inline-block
  >>> svg
    width 2rem

.weather
  padding 5rem 0
  min-height 100vh
  overflow-y auto
  color var(--w-foreground)
  background var(--w-background)
  text-align center
  display flex
  justify-content center
  transition all 0.8s

  &[data-theme="Clear"]
    --w-background linear-gradient(to bottom, #00c6ff, #0072ff)

  &[data-theme="Clouds"]
    --w-background linear-gradient(to bottom, #00c6ff, #b0bac5)

  &[data-theme="Drizzle"]
    --w-background linear-gradient(to bottom, #a7bece, #6aa4de)

  &[data-theme="Rain"]
    --w-background linear-gradient(to bottom, #bdc3c7, #2c3e50)

  &[data-theme="Thunderstorm"]
    --w-background linear-gradient(to bottom, #8e5da0, #1a0540)

  &[data-theme="Snow"]
    --w-background linear-gradient(to bottom, #f8fcff, #d0d0d0)
    --w-foreground #1d2d3e

  @media screen and (min-height: 650px)
    align-items center
</style>

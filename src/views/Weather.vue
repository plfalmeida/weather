<template lang="pug">

  .weather(data-theme="rainy")
    .container
      header
        h1 London
        h2 snowy

      main
        temperature(:temperature="temperature")
        temperature-extended
        day-info

</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

import Temperature from '@/components/Temperature/Temperature.vue'
import TemperatureExtended from '@/components/Temperature/TemperatureExtended.vue'
import DayInfo from '@/components/Day/DayInfo.vue'
import { mapGetters } from 'vuex'

@Component({
  name: 'Weather',
  components: {
    Temperature,
    TemperatureExtended,
    DayInfo
  },
  computed: {
    ...mapGetters({
      temperature: 'temperature'
    })
  }
})
export default class Weather extends Vue {
  mounted () {
    this.$store.dispatch('fetchWeather', { cityName: 'London' })
  }
}
</script>

<style lang="stylus" scoped>

header
  margin-bottom 2rem

h1
  font-size 4.5rem

h2
  margin-top 0.5rem
  font-size 2.5rem
  font-weight 200

.weather
  padding 5rem 0
  min-height 100vh
  overflow-y auto
  color var(--w-foreground)
  background var(--w-background)
  text-align center
  display flex
  justify-content center

  &[data-theme="sunny"]
    --w-background linear-gradient(to bottom, #00c6ff, #0072ff)

  &[data-theme="rainy"]
    --w-background linear-gradient(to bottom, #bdc3c7, #2c3e50)

  &[data-theme="snowy"]
    --w-background linear-gradient(to bottom, #f8fcff, #d0d0d0)
    --w-foreground #1d2d3e

  @media screen and (min-height: 650px)
    align-items center
</style>

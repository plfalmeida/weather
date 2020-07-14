<template lang="pug">
  .temperature-extended-widget

    .period(v-for="period in periods")
      span.period-name {{ period.name }}
      span.period-icon
        weather-icon(:iconId="period.weather.icon" :custom="customIcons")
      span.period-temperature
        number(:from="0" :to="period.temp" :duration="1")
        |°C

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import WeatherIcon from '@/components/ui/WeatherIcon.vue'

import VueNumber from 'vue-number-animation'

Vue.use(VueNumber)

@Component({
  name: 'temperature-extended',
  components: {
    WeatherIcon,
  },
})
export default class TemperatureExtended extends Vue {
  @Prop() periods: unknown
  @Prop({ default: false }) customIcons: boolean
}
</script>

<style lang="stylus" scoped>
.temperature-extended-widget
  display flex
  flex-direction row
  justify-content center

.period
  padding 1rem
  display flex
  flex 1
  flex-direction column
  font-weight 400

  &-name
    font-size 1.2rem

  &-temperature
    font-size 1.8rem

</style>

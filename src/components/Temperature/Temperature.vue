<template lang="pug">

  .temperature-widget
    span.current
      number(:from="0" :to="temperature.current" :duration="1")
    .unit: span °C
    .limits
      span.max
        arrow-icon
        number(:from="0" :to="temperature.max" :duration="1")
        |°
      span.min
        arrow-icon(direction="down")
        number(:from="0" :to="temperature.min" :duration="1")
        |°

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { TemperatureInfo } from '@/types/Weather'
import ArrowIcon from '../ui/ArrowIcon.vue'
import VueNumber from 'vue-number-animation'

Vue.use(VueNumber)

@Component({
  name: 'temperature',
  components: {
    ArrowIcon,
  },
})
export default class Temperature extends Vue {
  @Prop({ required: true }) temperature: TemperatureInfo;
}
</script>

<style lang="stylus" scoped>

.temperature-widget
  font-weight 300

  display grid
  grid "current unit"\
       "current limits"

  .current
    grid-area current

    font-size 15rem
    line-height 1
    text-align right

  .unit
    grid-area unit

    font-size 3rem
    display flex
    align-items flex-end

  .limits
    grid-area limits

    text-align left
    display flex
    flex-direction column

</style>

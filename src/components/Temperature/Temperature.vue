<template lang="pug">

  .temperature-widget
    span.current {{ temperature.current }}
    .unit: span °C
    .limits
      span.max {{ temperature.max }}°
      span.min {{ temperature.min }}°

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { TemperatureInfo } from '@/types/Weather'

@Component({
  name: 'temperature'
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

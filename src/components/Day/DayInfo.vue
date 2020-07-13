<template lang="pug">
  .day-info-widget

    .statistic(v-for="info in dailyInfo")
      span.statistic-name {{ info.name }}
      span.statistic-value {{ info.value }}

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { DayInfo } from '@/types/Weather'

@Component({
  name: 'day-info',
})
export default class Dayinfo extends Vue {
  @Prop({ required: true }) dailyInfo: DayInfo[]
}
</script>

<style lang="stylus" scoped>

.day-info-widget
  display flex
  flex-direction row
  justify-content center

.statistic
  padding 1rem
  display flex
  flex 1
  flex-direction column
  font-weight 200
  position relative

  & + .statistic&:before
    content ''
    height 40%
    width 1px
    background rgba(255, 255, 255, 0.1)
    position absolute
    left 0
    top 50%
    transform translateY(-50%)

  &-name
    font-size 1.2rem

  &-value
    font-size 1.4rem
    font-weight 300

</style>

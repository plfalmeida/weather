<template lang="pug">
  .day-info-widget

    .statistic
      span.statistic-name windspeed
      span.statistic-value 5.1 m/s

    .statistic
      span.statistic-name sunrise
      span.statistic-value 5:14 AM

    .statistic
      span.statistic-name sunset
      span.statistic-value 7:25 PM

    .statistic
      span.statistic-name humidity
      span.statistic-value 52%

</template>

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

<template lang="pug">
  .temperature-extended-widget

    .period
      span.period-name dawn
      span.period-icon
      span.period-temperature 13 ºC

    .period
      span.period-name dawn
      span.period-icon
      span.period-temperature 13 ºC

    .period
      span.period-name dawn
      span.period-icon
      span.period-temperature 13 ºC

    .period
      span.period-name dawn
      span.period-icon
      span.period-temperature 13 ºC

</template>

<style lang="stylus" scoped>
// *
//   border 1px solid #fff

.temperature-extended-widget
  display flex
  flex-direction row
  justify-content center

.period
  padding 1rem
  display flex
  flex 1
  flex-direction column
  font-weight 200

  &-name
    font-size 1.2rem

  &-temperature
    font-size 1.8rem

</style>

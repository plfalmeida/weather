<template lang="pug">

  .temperature-widget
    span.current 17
    .unit: span ºC
    .limits
      span.max 20º
      span.min 17º

</template>

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

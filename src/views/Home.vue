<template lang="pug">

  .home
    .container
      header
        h1 WEATHER
        h2 select a city

      main
        img.logo(src="@/assets/icons/world.svg", alt="alt")
        ul.city-list
          li.city(v-for="city in cities")
            router-link(:to="{ name: 'weather', params: { city } }") {{ city }}

</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import { mapGetters } from 'vuex'

@Component({
  name: 'home',
  computed: {
    ...mapGetters(['cities']),
  },
})
export default class Home extends Vue {}
</script>

<style lang="stylus" scoped>

h1
  font-size 4.5rem

h2
  margin-top 0.5rem
  font-size 2.5rem
  font-weight 200

.logo
  width 15rem
  margin 5rem auto
  display block

.home
  padding 5rem
  min-height 100vh
  overflow-y auto

  color #fff
  background #0f0f0f
  text-align center

  display flex
  justify-content center

  @media screen and (min-height: 650px)
    align-items center

.city-list
  padding 0
  list-style none
  font-weight 300
  display flex
  flex-flow wrap

.city
  width 100%
  @media screen and (min-width: 768px)
    width 33%

  a
    padding 1rem
    display block
    font-size 2rem
    font-weight 200
    letter-spacing 0.15rem
    text-decoration none
    color #fff

</style>

<template lang="pug">
  component(:is="ImgUrl" :data-icon-size="iconSize")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
const images = require.context('../../assets/icons/weather/lines/', false, /\.svg$/)

@Component({})
export default class CustomWeatherIcon extends Vue {
  @Prop({ default: '02d' }) iconId: string
  @Prop({ default: '' }) iconSize: string

  get ImgUrl () {
    const { iconId } = this
    const icon = images(`./${iconId}.svg`)
    return icon
  }
}
</script>

<style lang="stylus" scoped>
svg
  width 5rem
  fill var(--w-foreground)

  &[data-icon-size="@4x"]
    width 20rem

</style>

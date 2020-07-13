<template lang="pug">
  img(:src="icon")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class WeatherIcon extends Vue {
  @Prop({ default: '02d' }) iconId: string
  @Prop({ default: '' }) iconSize: string

  get icon () {
    const id = this.iconId
    const size = this.iconSize
    const url = `http://openweathermap.org/img/wn/${id}${size}.png`
    return url
  }
}
</script>

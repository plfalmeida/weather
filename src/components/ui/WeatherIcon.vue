<template lang="pug">
  custom-weather-icon(v-if="custom" :iconId="iconId" :iconSize="iconSize")
  img(v-else :src="icon")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import CustomWeatherIcon from './CustomWeatherIcon.vue'

@Component({
  name: 'weather-icon',
  components: {
    CustomWeatherIcon,
  },
})
export default class WeatherIcon extends Vue {
  @Prop({ default: '02d' }) iconId: string
  @Prop({ default: '' }) iconSize: string
  @Prop({ default: false }) custom: boolean

  get icon () {
    const id = this.iconId
    const size = this.iconSize
    const url = `http://openweathermap.org/img/wn/${id}${size}.png`
    return url
  }
}
</script>

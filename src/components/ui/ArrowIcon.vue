<template>
  <span class="arrow-wrapper" :data-direction="direction">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 31.479 31.479" style="enable-background:new 0 0 31.479 31.479;" xml:space="preserve">
      <path d="M26.477,10.274c0.444,0.444,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-8.047-8.047
        v26.555c0,0.619-0.492,1.111-1.111,1.111c-0.619,0-1.127-0.492-1.127-1.111V3.813l-8.031,8.047c-0.444,0.429-1.159,0.429-1.587,0
        c-0.444-0.444-0.444-1.143,0-1.587l9.952-9.952c0.429-0.429,1.143-0.429,1.571,0L26.477,10.274z"/>
      </svg>
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  name: '',
})
export default class ArrowIcon extends Vue {
  @Prop({ default: 'up' }) direction: string
}
</script>

<style lang="stylus" scoped>

.arrow-wrapper

  svg
    width 1.5rem

    ../[data-direction="left"]&
      transform rotate(270deg)

    ../[data-direction="down"]&
      transform rotate(180deg)

    ../[data-direction="right"]&
      transform rotate(90deg)

svg
  fill var(--w-foreground)

</style>

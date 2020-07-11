<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="stylus">

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap')

:root
  --w-background: #0f0f0f;
  --w-foreground: #fff;

html
  font-size 62.5%

*
  margin 0
  padding 0
  box-sizing border-box

body
  font-size 1.6rem

h1, h2, h3, h4, h5, h6
  font-weight 300
  line-height 1
  letter-spacing 0.3rem

#app
  font-family: 'Poppins', sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale

.container
  width 90%
  max-width 40rem
</style>

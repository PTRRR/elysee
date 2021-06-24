<template lang="pug">
  .app
    menu-top-bar
    main-menu
    nuxt
</template>

<script lang="ts">
import Vue from 'vue'
import MenuTopBar from '~/components/MenuTopBar.vue'
import MainMenu from '~/components/MainMenu.vue'

export default Vue.extend({
  components: { MenuTopBar, MainMenu },
  head: {
    title: 'Elysee - Musee pour la photographie',
  },
})
</script>

<style lang="scss">
@font-face {
  font-family: PhotoC;
  src: url(~static/font/PhotoC_4.ttf);
}

@font-face {
  font-family: PhotoCText;
  src: url(~static/font/PhotoCText_Reg_1.ttf);
}

* {
  box-sizing: border-box;
}

html,
body {
  font-family: PhotoC, Helvetica, Arial, sans-serif;
  margin: 0;
  font-size: 14px;
}

a {
  color: inherit;
  text-decoration: inherit;
}

@media screen and (max-width: 1400px) {
  html,
  body {
    font-size: 10px;
  }
}

@media screen and (max-width: 800px) {
  html,
  body {
    font-size: 7px;
  }
}
</style>

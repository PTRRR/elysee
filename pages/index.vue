<template lang="pug">
  grid.home(
    :items="home"
  )

</template>

<script lang="ts">
import Vue from 'vue'
import { home } from '@/static/content/home'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      home,
    }
  },
})
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  padding: calc(#{$desktop-menu-top-bar-height} - #{$main-padding}) 0
    $main-padding;

  @media screen and (max-width: $mobile-breakpoint) {
    padding: calc(#{$mobile-menu-top-bar-height} - #{$main-padding}) 0
      $main-padding;
  }
}
</style>

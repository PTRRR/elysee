<template lang="pug">
  grid.expositions(
    :items="expositions"
  )
</template>

<script lang="ts">
import Vue from 'vue'
import { expositions } from '@/static/content/expositions'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      expositions,
    }
  },

  head() {
    return {}
  },
})
</script>

<style lang="scss">
.expositions {
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

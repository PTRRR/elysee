<template lang="pug">
div
  grid.expositions(
    :items="expositions"
  )
  .infos.pt-0
    .infos__content
      .infos__row
        h2.infos__title Le Musée de l'Elysée <br>dans le monde
        .infos__content
          p Le Musée de l’Elysée détient une collection unique couvrant toute l’histoire de l’art photographique et ses aspects les plus divers.
          br
          br
          br
    .map
      .button-large.dark.button Exposition en cours
        .icon ↓
      img(
          src="~static/img/map.png"
    			class="half-width"
      )

</template>

<script lang="ts">
import Vue from 'vue'
import { expositions } from '@/static/content/expositions'
import { monde } from '@/static/content/monde'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      expositions,
      monde,
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
  // padding: calc(#{$desktop-menu-top-bar-height} - #{$main-padding}) 0
  //   $main-padding;

  // @media screen and (max-width: $mobile-breakpoint) {
  //   padding: calc(#{$mobile-menu-top-bar-height} - #{$main-padding}) 0
  //     $main-padding;
  // }
}
.map {
  position: relative;
  img {
    width: 100%;
  }
  .button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    margin-right: 0;
  }
}
</style>

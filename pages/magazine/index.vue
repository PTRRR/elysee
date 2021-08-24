<template lang="pug">
  .liste
    grid(
      :items="magazine"
    )
    grid.expositions.pt-0(
      :items="dossier"
    )
    .infos.pt-0
      .infos__row
        h3.infos__title NEWSLETTER
        .infos__content
          p Restez au courant de l’actualité de l’Elysée en vous abonnant à notre newsletter mensuelle.
          input(type="text" name="year" placeholder="Email")
          input.button-large(type="submit" name="year" placeholder="Email")
          br
          br
    grid.expositions.pt-0(
      :items="magazinefooter"
    )

</template>

<script lang="ts">
import Vue from 'vue'
import { magazine } from '@/static/content/magazine'
import { magazinefooter } from '@/static/content/magazinefooter'
import { dossier } from '@/static/content/dossier'

import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      magazine,
      magazinefooter,
      dossier,
    }
  },
})
</script>

<style lang="scss">
.liste {
  display: flex;
  flex-direction: column;
  padding: calc(#{$desktop-menu-top-bar-height} - #{$main-padding}) 0
    $main-padding;

  @media screen and (max-width: $mobile-breakpoint) {
    padding: calc(#{$mobile-menu-top-bar-height} - #{$main-padding}) 0
      $main-padding;
  }

  .grid {
    margin-bottom: $main-padding;
  }

  &__rows {
    padding: 0 $main-padding * 2;
  }

  &__row {
    display: flex;
    padding: 2rem 0;
    border-top: solid 0.15em black;
  }

  &__column {
    width: 50%;

    h4 {
      font-size: $main-font-size;
      line-height: 0.9;
      text-transform: uppercase;
    }

    h5 {
      font-size: $desktop-font-size;
      margin-top: 1em;
      margin-left: 0.25em;
    }

    p {
      font-family: PhotoCText;
      line-height: 1.2;
    }
  }

  @media screen and (max-width: $tablet-breakpoint) {
    p {
      font-size: $desktop-font-size;
    }
  }

  @media screen and (max-width: $mobile-breakpoint) {
    p {
      font-size: $mobile-menu-font-size;
    }

    &__row {
      flex-direction: column;
    }

    &__column {
      width: 100%;

      h5 {
        margin-left: 0;
        margin-bottom: 1em;
      }
    }
  }
}
</style>

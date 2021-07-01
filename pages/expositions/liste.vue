<template lang="pug">
  .liste
    grid(
      :items="list"
    )
    .liste__rows
      .liste__row(
        v-for="row in exibitions"
      )
        .liste__column
          h4 {{ row.title }}
          h5 {{ row.date }}
        .liste__column
          p(v-html="row.text")
</template>

<script lang="ts">
import Vue from 'vue'
import { list, exibitions } from '@/static/content/list'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      list,
      exibitions,
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

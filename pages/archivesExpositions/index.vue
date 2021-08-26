<template lang="pug">
div
  .infos
    img.infos__image(src='~static/img/dddd.jpg')
    .infos__content

      .infos__row
        h2.infos__title Archives des expositions

        .infos__content
          .filter.active Tous
          .filter 2021
          .filter 2020
          .filter 2019
          .filter 2018
          .filter 2017
          .filter 2016
          .filter Dans le monde
          br
          br

  grid(
    :items="archives"
  )

</template>

<script lang="ts">
import Vue from 'vue'
import { archives } from '@/static/content/archives'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      archives,
    }
  },
})
</script>

<style lang="scss">
.artwork {
  max-width: 75%;
  height: 75vh;
}
</style>

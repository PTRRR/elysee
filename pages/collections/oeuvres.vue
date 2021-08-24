<template lang="pug">
div
  .infos
    img.infos__image(src='~static/img/oeuvres.jpg')
    .infos__content

      .infos__row
        h2.infos__title Oeuvres

        .infos__content
          .filter.active Tous
          .filter Filtre A
          .filter Filtre B
          .filter Filtre C
          .filter Filtre D
          .filter Filtre E
          .filter Filtre F
          .filter Filtre G
          br
          br

  grid(
    :items="oeuvres"
  )

</template>

<script lang="ts">
import Vue from 'vue'
import { oeuvres } from '@/static/content/oeuvres'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      oeuvres,
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

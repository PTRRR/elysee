<template lang="pug">
div
  .infos
    img.infos__image(src='~static/img/nomines.jpg')
    .infos__content
      .infos__row
        h3.infos__title NOMINÉS<br>2020–2021
        .infos__content
          p Le Musée de l’Elysée est heureux d’annoncer l’identité du lauréat de la 4e édition du Prix Elysée, avec le soutien de Parmigiani Fleurier : le photographe hongkongais Kurt Tong, pour son projet Dear Franklin.
          br
          br


  grid(
    :items="nomines"
  )

  .infos
    .infos__content

      .infos__row
        h3.infos__title ÉDITIONS PRÉCEDENTES
      .infos__row.no-border
        span.infos__title
          img(
            src="~static/img/image--25.jpg"
      			class="half-width"
          )

        .infos__content
          h5 Prix 3 <br> 2018-2020
          br
          p Combing for Ice and Jade, Esplanade, Singapour
          br
          .button-large.button En savoir plus
      .infos__row
        span.infos__title
          img(
            src="~static/img/image--24.jpg"
      			class="half-width"
          )

        .infos__content
          h5 Prix 4 <br> 2018-2020
          br
          p Combing for Ice and Jade, Esplanade, Singapour
          br
          .button-large.button En savoir plus


      .infos__row
          h3.infos__title PRINCIPALES EXPOSITIONS
          .infos__content
            .infos__row
              .infos__column
                h5 2020
              .infos__column
                p Combing for Ice and Jade, Esplanade, Singapour
            .infos__row
              .infos__column
                h5 2019
              .infos__column
                p Combing for Ice and Jade, Ground Control, Les Rencontres d’Arles, Arles, France
            .infos__row
              .infos__column
                h5 2018
              .infos__column
                p Dimensions of Family, Times Art Museum, Beijing, Chine
            .infos__row
              .infos__column
                h5 2017
              .infos__column
                p Combing for Ice and Jade, Esplanade, Singapour


</template>

<script lang="ts">
import Vue from 'vue'
import { nomines } from '@/static/content/nomines'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      nomines,
    }
  },
})
</script>

<style lang="scss"></style>

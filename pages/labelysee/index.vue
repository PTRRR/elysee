<template lang="pug">
div
  .infos
    img.infos__image(src='~static/img/labelysee.jpg')
    .infos__content
      .infos__row
        h3.infos__title LABELYSÉE
        .infos__content
          p Le LabElysée est le nouvel espace d’expérimentation du Musée de l’Elysée dédié à la culture numérique. Chantier vivant au coeur du musée, le LabElysée questionne la façon dont une institution culturelle dédiée à la photographie joue avec les nouvelles technologies.
          .button-large.button Voir le plan du site
          br


  grid(
    :items="labelysee"
  )
  .infos
    .infos__content
      .infos__row
        h3.infos__title ACTUALITÉS
      .infos__row.no-border
        span.infos__title
          img(
            src="~static/img/image--37.jpg"
  	  			class="half-width"
          )

        .infos__content
          h2 01.02.2021
          br
          h5 Vos plus beaux souvenirs de la Nuit des images
          br
          p Dix ans après la première édition de la Nuit des images qui a eu lieu en juin 2011, le Musée de l’Elysée et UBS, partenaire principal de cet événement emblématique, organisent un concours de photographies ouvert à toutes et à tous autour du thème "Vos plus beaux souvenirs de la Nuit des images".
          br
          .button-large.button En savoir plus

      .infos__row.no-border
        span.infos__title
          img(
            src="~static/img/image--32.jpg"
  	  			class="half-width"
          )

        .infos__content
          h2 01.02.2021
          br
          h5 Vos plus beaux souvenirs de la Nuit des images
          br
          p Dix ans après la première édition de la Nuit des images qui a eu lieu en juin 2011, le Musée de l’Elysée et UBS, partenaire principal de cet événement emblématique, organisent un concours de photographies ouvert à toutes et à tous autour du thème "Vos plus beaux souvenirs de la Nuit des images".
          br
          .button-large.button En savoir plus

      .infos__row
        h3.infos__title CONTACTS
        .infos__content
        nuxt-link(
          to="#"
        )
          p labelysee@elysee.ch

</template>

<script lang="ts">
import Vue from 'vue'
import { labelysee } from '@/static/content/labelysee'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      labelysee,
    }
  },
})
</script>

<style lang="scss"></style>

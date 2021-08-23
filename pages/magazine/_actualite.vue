<template lang="pug">
div
  .infos
    .infos__content
      img.artwork(src='~static/img/actualite--0.jpg')
      .infos__row
        .infos__title
          h2 Vos plus beaux souvenirs de la Nuit des images
          br
          h5 Concours organisé par le Musée de l’Elysée et UBS

        .infos__content
          p Quel est votre plus beau souvenir de la Nuit des images ? Avez-vous une anecdote à partager avec nou Dix ans après la première édition de la Nuit des images qui a eu lieu en juin 2011, le Musée de l’Elysée et UBS, partenaire principal de cet événement emblématique, organisent un concours de photographies ouvert à toutes et à tous autour du thème Vos plus beaux souvenirs de la Nuit des images.

          p Envoyez-nous vos souvenirs (une image accompagnée d’un petit texte explicatif) à l’adresse nuitdesimages(at)gmail.com jusqu’au 18 juillet 2021. Bonne chance à toutes et à tous !

          .infos__row
            .infos__column
              h5 Prix
            .infos__column
              p L’image lauréate sera désignée par le Musée de l’Elysée et UBS. La gagnante ou le gagnant sera annoncé à la fin du mois d’août 2021 et recevra les prix suivants :
          .infos__row
            .infos__column
              h5 Règlement
            .infos__column
              ul
                li
                  p Votre contribution doit être envoyée à l’adresse nuitdesimages(at)gmail.com jusqu’au 18 juillet 2021. Vous ne pouvez participer qu’une seule fois.
                li
                  p Vous vous engagez à posséder les droits de diffusion des images soumises.


    .infos__content
      .infos__row.border
        h3.infos__title AUTRES ACTUALITÉS
      .infos__row.no-border
        span.infos__title
          img(
            src="~static/img/image--37.jpg"
  	  			class="half-width"
          )

        .infos__content
          span 01.02.2021
          br
          h4 Vos plus beaux souvenirs de la Nuit des images
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
          span 01.02.2021
          br
          h4 Vos plus beaux souvenirs de la Nuit des images
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

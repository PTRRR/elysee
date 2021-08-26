<template lang="pug">
div
  .infos
    img.infos__image(src='~static/img/dddd.jpg')
    .infos__content

      .infos__row
        h2.infos__title Ressources

        .infos__content
          h3 Renouvaud
          p Catalogue du réseau vaudois des bibliothèques – Répertoire complet des documents de la bibliothèque de l’Elysée
          span
            input(type="text" name="year" placeholder="Rechercher")
            .button-large.button(type="submit" name="year") →

      .infos__row
        h3.infos__title
          span Liens

        .infos__content
          .infos__row.no-padding
            p Catalogue de la plateforme nationale Swisscovery, qui regroupe actuellement les informations scientifiques de 470 bibliothèques suisses
            a swisscovery.slsp.ch

          .infos__row.no-padding
            p Catalogue du Réseau des bibliothèques de Suisse occidentale:
            a explore.rero.ch

          .infos__row.no-padding
            p SIKART Dictionnaire sur l’art suisse
            a sikart.ch

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

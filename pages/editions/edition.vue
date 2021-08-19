<template lang="pug">
div
  .infos
    .infos__content

      img.artwork(src='~static/img/image--24.jpg')

      .infos__row
        h3.infos__title L’explosion du regard
          p
            h5 N°8 René Burri

        .infos__content
          p Déposé au Musée de l’Elysée Pour une durée de 20 ans reconductible, le Musée de l’Elysée détient l’essentiel de l’œuvre du photographe suisse René Burri (1933-2014). Membre de l’agence Magnum dès ses 26 ans, il témoignera avec intelligence et justesse, tout au long de sa carrière, des événements marquants de son temps. A côté de son travail aux sujets souvent imposés, René Burri photographie également pour lui-même, laissant libre cours à son imagination. Il raconte que la pratique du collage lui est venue pour gérer son angoisse de l’avion. Avec cette pratique artistique, Burri élabore ses propres compositions graphiques en découpant, déchirant et assemblant ses photographies. Le photocollage de René Burri présenté ici évoque la construction du Cyclope de Jean Tinguely. Réalisé dans la forêt de Milly, en France, cette installation monumentale de béton et de fer résulte d’un travail collaboratif de plusieurs années entre le sculpteur suisse, sa femme Niki de Saint-Phalle et une quinzaine d’artistes issus du groupe des Nouveaux Réalistes. © René Burri / Magnum Photos Fondation René Burri courtesy Musée de l'Elysée

          nuxt-link(
            to="#"
          )
            .button-large.button Voir la boutique
          br
          br

  grid(
    :items="edition"
  )

</template>

<script lang="ts">
import Vue from 'vue'
import { edition } from '@/static/content/edition'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      edition,
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

<template lang="pug">
div
  .infos
    .infos__content

      img.artwork(src='~static/img/image--7.jpg')

      .infos__row
        h3.infos__title Jean Tinguely, "Le Cyclope" <br> Milly-la-Forêt, France
          p
            h5 René Burri (1933 - 2014)
          p
            h5 Date
            p 1972
          p
            h5 Procédé
            p Epreuve au gélatino-bromure d'argent <br>(collé sur papier gravure)
          p
            h5 Dimensions
            p 3,8 x 21 cm
          p
            h5 Crédit
            p Crédit © René Burri/Magnum Photos. <br> Fondation René Burri courtesy <br> Musée de l’Elysée, Lausanne
          p
            h5 Genre
            p
              a(href="#") test
          p
            h5 Genre
            p
              a(href="#") test
          p
            h5 Tags
            p
              a(href="#") Collage
              a(href="#") Scuplture
              a(href="#") Superposition

        .infos__content
          p Déposé au Musée de l’Elysée Pour une durée de 20 ans reconductible, le Musée de l’Elysée détient l’essentiel de l’œuvre du photographe suisse René Burri (1933-2014). Membre de l’agence Magnum dès ses 26 ans, il témoignera avec intelligence et justesse, tout au long de sa carrière, des événements marquants de son temps. A côté de son travail aux sujets souvent imposés, René Burri photographie également pour lui-même, laissant libre cours à son imagination. Il raconte que la pratique du collage lui est venue pour gérer son angoisse de l’avion. Avec cette pratique artistique, Burri élabore ses propres compositions graphiques en découpant, déchirant et assemblant ses photographies. Le photocollage de René Burri présenté ici évoque la construction du Cyclope de Jean Tinguely. Réalisé dans la forêt de Milly, en France, cette installation monumentale de béton et de fer résulte d’un travail collaboratif de plusieurs années entre le sculpteur suisse, sa femme Niki de Saint-Phalle et une quinzaine d’artistes issus du groupe des Nouveaux Réalistes. © René Burri / Magnum Photos Fondation René Burri courtesy Musée de l'Elysée

  grid(
    :items="artwork"
  )

</template>

<script lang="ts">
import Vue from 'vue'
import { artwork } from '@/static/content/artwork'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      artwork,
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

<template lang="pug">
div
  .infos
    img.infos__image(src='~static/img/edition--1.jpg')
    .infos__content
      .infos__row
        h3.infos__title Collection Musée de l’Elysée
        .infos__content
          p Fondé en 1985 en tant que musée «pour la photographie», il s’interroge sur la photographie et la fait connaître à un large public grâce à des expositions innovantes, à Lausanne et dans le monde lors de leur itinérance. Pôle d’excellence dans la conservation et la valorisation du patrimoine visuel, le Musée de l’Elysée détient une collection unique de plus d’un million d’objets photographiques. Les éditions du Musée de l’Elysée se font le prolongement des expositions du musée et accompagnent l’ensemble de ses activités par des publications de référence. Elles éditent également des ouvrages au corpus inédit, tels que les livres des nominés et du lauréat du Prix Elysée.

      .infos__row
        span.infos__title
          h4
           span N°8 René Burri
           br
           span L’explosion du regard
          br
          img(
            src="~static/img/edition--0.jpg"
  	  			class="half-width"
          )

        .infos__content
          p Depuis 2016, le Musée de l’Elysée, les éditions Noir sur Blanc et les éditions Scheidegger & Spiess coéditent une collection de catalogues des expositions du musée. Depuis 2019, cette collection est exclusivement dédiée aux catalogues d’expositions réalisées à partir du fonds du Musée de l’Elysée. L’identité graphique cohérente et distinctive de la collection offre un écrin valorisant à chaque ouvrage, qu’il soit thématique ou monographique. Parmi les huit titres déjà parus dans cette collection, trois ont été distingués par le Deutscher Fotobuchpreis 2019/2020 et 2020/2021 dans leur version anglaise et allemande

          nuxt-link(
        		to="/editions/edition"
        	)
            .button-large.button Voir la boutique


</template>

<script lang="ts">
import Vue from 'vue'
import { collections } from '@/static/content/collections'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      collections,
    }
  },
})
</script>

<style lang="scss"></style>

<template lang="pug">
div
  grid(
    :items="editions"
  )
  .infos.pt-0
    .infos__content
      .infos__row
        h2.infos__title EDITIONS
        .infos__content
          h5 Le Musée de l’Elysée détient une collection unique couvrant toute l’histoire de l’art photographique et ses aspects les plus divers.
          br
          br
          p Fondé en 1985 en tant que musée «pour la photographie», il s’interroge sur la photographie et la fait connaître à un large public grâce à des expositions innovantes, à Lausanne et dans le monde lors de leur itinérance. Pôle d’excellence dans la conservation et la valorisation du patrimoine visuel, le Musée de l’Elysée détient une collection unique de plus d’un million d’objets photographiques. Les éditions du Musée de l’Elysée se font le prolongement des expositions du musée et accompagnent l’ensemble de ses activités par des publications de référence. Elles éditent également des ouvrages au corpus inédit, tels que les livres des nominés et du lauréat du Prix Elysée. La diversité des titres et des genres offre un catalogue riche et varié appelé à se déployer dans un proche avenir, notamment dans le secteur des livres pour la jeunesse. La coédition de bon nombre des parutions des éditions du musée avec des éditeurs de renom, suisses ou étrangers, assure à ces ouvrages, aux photographes et à leurs œuvres, une large diffusion en Suisse alémanique et à l’international.

      .infos__row
        span.infos__title
          h3
           span Collection
           br
           span Musée de l’Elysée
          br
          img(
            src="~static/img/edition--0.jpg"
  	  			class="half-width"
          )
          h5 N°8 René Burri
          h6 L’explosion du regard
          br
          nuxt-link(
        		to="/collections"
        	)
            h5 Voir la boutique

        .infos__content
          p Depuis 2016, le Musée de l’Elysée, les éditions Noir sur Blanc et les éditions Scheidegger & Spiess coéditent une collection de catalogues des expositions du musée. Depuis 2019, cette collection est exclusivement dédiée aux catalogues d’expositions réalisées à partir du fonds du Musée de l’Elysée. L’identité graphique cohérente et distinctive de la collection offre un écrin valorisant à chaque ouvrage, qu’il soit thématique ou monographique. Parmi les huit titres déjà parus dans cette collection, trois ont été distingués par le Deutscher Fotobuchpreis 2019/2020 et 2020/2021 dans leur version anglaise et allemande
          nuxt-link(
        		to="editions/collections"
        	)
            .button-large.button Decouvrir toutes les éditions collections

      .infos__row
        span.infos__title
          h3 Livres Prix Elysée
          br
          img(
            src="~static/img/edition--0.jpg"
  	  			class="half-width"
          )
          h5 Prix Elysée
          h6 Livre des nominés 2020-2022
          br
          nuxt-link(
        		to="/collections"
        	)
            h5 Voir la boutique

        .infos__content
          p Résultat d’un partenariat entre le Musée de l’Elysée et Parmigiani Fleurier, le Prix Elysée est un prix de soutien à la production dans le domaine de la photographie, qui offre une aide financière et un accompagnement muséal des artistes passionnés par la photographie et le livre, afin qu’ils puissent franchir une étape décisive dans leur carrière.
          nuxt-link(
        		to="#"
        	)
            .button-large.button Decouvrir toutes les éditions Prix Elysée

</template>

<script lang="ts">
import Vue from 'vue'
import { editions } from '@/static/content/editions'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      editions,
    }
  },
})
</script>

<style lang="scss"></style>

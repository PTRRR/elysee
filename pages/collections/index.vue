<template lang="pug">
div
  .infos
    img.infos__image(src='~static/img/collections.jpg')
    .infos__content
      .infos__row
        h3.infos__title COLLECTIONS
        .infos__content
          p Le Musée de l’Elysée détient une collection unique couvrant toute l’histoire de l’art photographique et ses aspects les plus divers.
          p Conserver, documenter et valoriser la photographie font partie des missions premières du musée. Ses collections sont composées de près d’un million de tirages, négatifs, planches-contacts et diapositives, ainsi que d’un grand nombre d’albums. Le Musée de l’Elysée conditionne et gère des ensembles significatifs de photographes connus à l’échelle internationale comme Mario Giacomelli, Gilles Caron, Geraldo de Barros ou Pieter Hugo, ainsi que de photographes suisses tels Paul Vionnet, Constant Delessert, Hans Steiner ou Jean Mohr.
          p Grâce à son expertise, le musée est également internationalement connu pour la gestion de fonds photographiques complets. Ses collections s’enrichissent d’année en année par des achats, des dépôts et des dons. Il compte ainsi le Fonds Ella Maillart, le Fonds Nicolas Bouvier, les Archives Charles Chaplin, le Fonds Marcel Imsand ou encore le Fonds René Burri.

      .infos__row
        span.infos__title
          img(
            src="~static/img/image--20.jpg"
  	  			class="half-width"
          )

        .infos__content
          h5 Marmarita, Reef Homs, 11 septembre 2013 © Matthias Bruggmann
          p Press Images. Courtesy Musée de l’Elysée, Lausanne et Galerie Polaris, Paris
          nuxt-link(
        		to="collections/artwork/"
        	)
            .button-large.button Toutes les oeuvres

  grid(
    :items="collections"
  )
  .infos
    .infos__content

      .infos__row
        h3.infos__title Nouvelles acquisitions
      .infos__row.no-border
        span.infos__title
          img(
            src="~static/img/image--25.jpg"
  	  			class="half-width"
          )

        .infos__content
          h5 Marmarita, Reef Homs, 11 septembre 2013 © Matthias Bruggmann
          p Press Images. Courtesy Musée de l’Elysée, Lausanne et Galerie Polaris, Paris
      .infos__row.no-border
        span.infos__title
          img(
            src="~static/img/image--24.jpg"
  	  			class="half-width"
          )

        .infos__content
          h5 Marmarita, Reef Homs, 11 septembre 2013 © Matthias Bruggmann
          p Press Images. Courtesy Musée de l’Elysée, Lausanne et Galerie Polaris, Paris

      .infos__row
        h3.infos__title
          span PRÊTS

        .infos__content
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan ex ut lacus interdum, et auctor nisl pharetra. Nullam vitae ex eget justo fringilla consectetur.
          .button-large.button En savoir plus

      .infos__row
        h3.infos__title
          span COMMANDE DE <br>REPRODUCTIONS

        .infos__content
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan ex ut lacus interdum, et auctor nisl pharetra. Nullam vitae ex eget justo fringilla consectetur.
          .button-large.button En savoir plus

      .infos__row
        h3.infos__title
          span Conservation et <br> procédés photographiques

        .infos__content
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan ex ut lacus interdum, et auctor nisl pharetra. Nullam vitae ex eget justo fringilla consectetur.
          .button-large.button En savoir plus

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

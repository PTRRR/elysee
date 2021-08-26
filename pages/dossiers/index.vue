<template lang="pug">
div
  grid(
    :items="dossiersBanner"
  )
  .infos.pt-0
    .infos__content
      .infos__row
        h2.infos__title Dossier Thématiques
        .infos__content
          p Le Musée de l’Elysée détient une collection unique couvrant toute l’histoire de l’art photographique et ses aspects les plus divers.
        br
        br

      .infos__row
        span.infos__title
          img(
            src="~static/img/image--20.jpg"
  	  			class="half-width"
          )

        .infos__content
          h3 Dossier 1#
          br
          p Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.
          nuxt-link(
        		to="dossiers/dossier/"
        	)
            .button-large.button Voir le détail

      .infos__row
        span.infos__title
          img(
            src="~static/img/image--10.jpg"
  	  			class="half-width"
          )

        .infos__content
          h3 Dossier 2#
          br
          p Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.
          nuxt-link(
        		to="dossiers/dossier/"
        	)
            .button-large.button Voir le détail

      .infos__row
        span.infos__title
          img(
            src="~static/img/image--14.jpg"
  	  			class="half-width"
          )

        .infos__content
          h3 Dossier 3#
          br
          p Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.
          nuxt-link(
        		to="dossiers/dossier/"
        	)
            .button-large.button Voir le détail



</template>

<script lang="ts">
import Vue from 'vue'
import { dossiersBanner } from '@/static/content/dossiersBanner'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      dossiersBanner,
    }
  },
})
</script>

<style lang="scss"></style>

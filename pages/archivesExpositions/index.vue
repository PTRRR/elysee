<template lang="pug">
div
  .infos
    img.infos__image(src='~static/img/image--32.jpg')
    .infos__row
      .infos__title
        h2 Archives


      .infos__content
        .filter.active 2021 ↓
        br
        br


    each val in [1, 2, 3, 4]
      .infos__row
        span.infos__title
          img(
            src="~static/img/image--"+val+".jpg"
  	  			class="half-width"
          )

        .infos__content
          span 23.01 — 12.04.22

          h4 reGeneration4
          br
          p Le Musée de l’Elysée est temporairement fermé pour organiser son déménagement à PLATEFORME 10, le nouveau quartier des arts de Lausanne. La cérémonie de remise des clés du nouveau bâtiment du Musée de l'Elysée et du mudac aura lieu du 4 au 7 novembre 2021. L’inauguration des espaces d'exposition est prévue pour juin 2022. D'ici là, suivez l'actualité du musée sur L'Elysée hors champ et sur nos réseaux sociaux !

    ul.pagination
      li.active 1
      li 2
      li 3
      li 4
      li →
    br
    br


</template>

<script lang="ts">
import Vue from 'vue'

import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {}
  },
})
</script>

<style lang="scss"></style>

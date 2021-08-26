<template lang="pug">
div
  .infos
    img.infos__image(src='~static/img/image--21.jpg')
    .infos__content
      .infos__row
        h2.infos__title Dossier #1
        .infos__content
          p Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.
  grid.expositions.pt-0(
    :items="dossierDetail"
  )

</template>

<script lang="ts">
import Vue from 'vue'
import Grid from '@/components/Grid.vue'
import { dossierDetail } from '@/static/content/dossierDetail'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      dossierDetail,
    }
  },
})
</script>

<style lang="scss"></style>

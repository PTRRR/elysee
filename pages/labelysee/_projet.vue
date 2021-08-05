<template lang="pug">
div
  .infos
    img.infos__image(src='~static/img/labelysee.jpg')
    .infos__content
      .infos__row
        h3.infos__title PROJET
        .infos__content
          p Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus. Vivamus integer non suscipit taciti mus etiam at primis tempor sagittis sit, euismod libero facilisi aptent elementum felis blandit cursus gravida sociis erat ante, eleifend lectus nullam dapibus netus feugiat curae curabitur est ad. Massa curae fringilla porttitor quam sollicitudin iaculis aptent leo ligula euismod dictumst, orci penatibus mauris eros etiam praesent erat volutpat posuere hac. Metus fringilla nec ullamcorper odio aliquam lacinia conubia mauris tempor, etiam ultricies proin quisque lectus sociis id tristique, integer phasellus taciti pretium adipiscing tortor sagittis ligula.
          br
          .player(style='background-image:url(/public/static/img/image--1.jpg)')
            h3.absolute-center PLAY
          h5 Titre vidéo
          p Description vidéo


  .infos
    .infos__content.border
      .infos__row
        h3.infos__title ACTUALITÉS
      .infos__row.no-border
        span.infos__title
          img(
            src="~static/img/image--37.jpg"
  	  			class="half-width"
          )

        .infos__content
          h2 01.02.2021
          br
          h5 Vos plus beaux souvenirs de la Nuit des images
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
          h2 01.02.2021
          br
          h5 Vos plus beaux souvenirs de la Nuit des images
          br
          p Dix ans après la première édition de la Nuit des images qui a eu lieu en juin 2011, le Musée de l’Elysée et UBS, partenaire principal de cet événement emblématique, organisent un concours de photographies ouvert à toutes et à tous autour du thème "Vos plus beaux souvenirs de la Nuit des images".
          br
          .button-large.button En savoir plus

</template>

<script lang="ts">
import Vue from 'vue'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },
})
</script>

<style lang="scss"></style>

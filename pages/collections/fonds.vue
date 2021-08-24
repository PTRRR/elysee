<template lang="pug">
div
  .infos
    img.infos__image(src='~static/img/image--6.jpg')
    .infos__content

      .infos__row
        h2.infos__title Fonds photographiques

        .infos__content
          .message-info
            h3 Fermeture des collections
            br
            p.no-margin En raison de la fermeture temporaire du musée entre octobre 2020 et juin 2022 et du travail à mener pour déménager les œuvres des collections, les demandes de recherche, de prêts ou de reproductions d’images pour publication sont suspendues depuis mai 2019 et jusqu'au printemps 2023. Nous serons heureux de répondre à nouveau à vos besoins dans nos locaux à PLATEFORME 10 à partir de juin 2022. Nous vous remercions vivement de votre compréhension.
          br
          p Reconnu pour la gestion de fonds photographiques complets, le Musée de l’Elysée conserve et met en valeur des collections et des fonds qui lui ont été confiés et en gère également souvent les droits. Les tirages, négatifs, planches-contacts ou autres types de documents sont soigneusement étudiés, catalogués, numérisés et restaurés afin de constituer des archives riches et complètes.

      each val in [1, 2, 3, 4]
        .infos__row
          span.infos__title
            img(
              src="~static/img/fond--0.jpg"
    	  			class="half-width"
            )

          .infos__content
            h4 Jan Groover
            br
            p Jan Groover (1943-2012) a mené tout au long de sa vie une recherche sur les formes et leur capacité à transformer la perception de l’image. Au début des années 1970, la photographe américaine est remarquée par le milieu artistique newyorkais pour ses polyptyques autour des motifs de la voiture et de l’environnement urbain. Vers 1978, Jan Groover change radicalement de sujet pour se tourner vers la nature morte, qui formera l’essentiel de son œuvre ultérieure. Réalisées en studio, ses compositions relèvent de techniques variées et, dans les années 1970 et 1980, elles contribueront activement à la reconnaissance institutionnelle et artistique de la photographie en couleurs. Elle développe alors un grand intérêt pour un procédé de la fin du XIXe, le platine-palladium.
            p Le fonds photographique de Jan Groover a intégré les collections du Musée de l’Elysée en 2017. Dès lors, un important travail de recherche a été mené par l’équipe du musée à la fois du point de vue de la conservation et de la documentation historique.
            nuxt-link(
          		to="fond/"
          	)
              .button-large.button Découvrir le fond →

      .infos__row
        h3.infos__title
          span Prêts

        .infos__content
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan ex ut lacus interdum, et auctor nisl pharetra. Nullam vitae ex eget justo fringilla consectetur.
          .button-large.button En savoir plus
          br

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

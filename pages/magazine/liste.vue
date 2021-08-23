<template lang="pug">
div
  .infos
    img.infos__image(src='~static/img/image--31.jpg')
    .infos__row
      h2.infos__title MAGAZINE
      .infos__content
        .filter.active Tous
        .filter Actualités
        .filter LabElysée
        .filter Plateforme 10
        .filter Collections
        .filter Expositions
        .filter Podcast
        .filter Prix Elysée


    .infos__row
      span.infos__title
        img(
          src="~static/img/image--19.jpg"
	  			class="half-width"
        )

      .infos__content
        span 01.02.2021
        br
        nuxt-link.mr-1(
          to="#"
        ) Actualité
        nuxt-link(
          to="#"
        ) LabElysée

        h4 VOS PLUS BEAUX SOUVENIRS DE LA NUIT DES IMAGES
        br
        p Dix ans après la première édition de la Nuit des images qui a eu lieu en juin 2011, le Musée de l’Elysée et UBS, partenaire principal de cet événement emblématique, organisent un concours de photographies ouvert à toutes et à tous autour du thème "Vos plus beaux souvenirs de la Nuit des images".

    .infos__row
      span.infos__title
        img(
          src="~static/img/labelysee--1.jpg"
	  			class="half-width"
        )

      .infos__content
        span 01.02.2021
        br
        nuxt-link(
          to="#"
        ) Post instagram
        br
        br
        p [Journée mondiale de la photographie] En ce mercredi 19 août 2021, nous célébrons la Journée mondiale de la photographie ! Depuis 2010, cette journée spéciale vise à partager une photographie afin d’inspirer les amatrices et amateurs du médium à travers le monde. Nous avons choisi une image issue du Fonds Marcel Imsand, représentant le Prince Rainier III de Monaco et Grace Kelly. A votre tour !
        nuxt-link.opening(
          to="#"
        )
        #WorldPhotographyDay #JournéeMondialeDeLaPhotographie #MarcelImsand #GraceKelly #PrinceRainierIII #Plateforme10

    .infos__row
      span.infos__title
        img(
          src="~static/img/nomines--01.jpg"
	  			class="half-width"
        )

      .infos__content
        nuxt-link(
          to="#"
        ) Podcast
        br
        br
        .podcast
          .podcast-player
            img(
              src="~static/img/play.png"
            )
          .podcast-info
            h5 Titre du podcast
            p.no-margin Nous avons choisi une image issue du Fonds Marcel Imsand, représentant le Prince Rainier III de Monaco et Grace Kelly. A votre tour !
    .infos__row
      span.infos__title
        img(
          src="~static/img/image--19.jpg"
	  			class="half-width"
        )

      .infos__content
        span 01.02.2021
        br
        nuxt-link.mr-1(
          to="#"
        ) Actualité
        nuxt-link(
          to="#"
        ) LabElysée

        h4 VOS PLUS BEAUX SOUVENIRS DE LA NUIT DES IMAGES
        br
        p Dix ans après la première édition de la Nuit des images qui a eu lieu en juin 2011, le Musée de l’Elysée et UBS, partenaire principal de cet événement emblématique, organisent un concours de photographies ouvert à toutes et à tous autour du thème "Vos plus beaux souvenirs de la Nuit des images".

    .infos__row
      span.infos__title
        img(
          src="~static/img/labelysee--1.jpg"
	  			class="half-width"
        )

      .infos__content
        span 01.02.2021
        br
        nuxt-link(
          to="#"
        ) Post instagram
        br
        br
        p [Journée mondiale de la photographie] En ce mercredi 19 août 2021, nous célébrons la Journée mondiale de la photographie ! Depuis 2010, cette journée spéciale vise à partager une photographie afin d’inspirer les amatrices et amateurs du médium à travers le monde. Nous avons choisi une image issue du Fonds Marcel Imsand, représentant le Prince Rainier III de Monaco et Grace Kelly. A votre tour !
        nuxt-link.opening(
          to="#"
        )
        #WorldPhotographyDay #JournéeMondialeDeLaPhotographie #MarcelImsand #GraceKelly #PrinceRainierIII #Plateforme10

    .infos__row
      span.infos__title
        img(
          src="~static/img/nomines--01.jpg"
	  			class="half-width"
        )

      .infos__content
        nuxt-link(
          to="#"
        ) Podcast
        br
        br
        .podcast
          .podcast-player
            img(
              src="~static/img/play.png"
            )
          .podcast-info
            h5 Titre du podcast
            p.no-margin Nous avons choisi une image issue du Fonds Marcel Imsand, représentant le Prince Rainier III de Monaco et Grace Kelly. A votre tour !

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
import { collections } from '@/static/content/collections'
import { magazineBanner } from '@/static/content/magazineBanner'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      collections,
      magazineBanner,
    }
  },
})
</script>

<style lang="scss"></style>

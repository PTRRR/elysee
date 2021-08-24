<template lang="pug">
div
  .back-to-top ↑
  .exposition
    swiper.exposition__slider(
      :options="swiperOptions"
      :auto-update="true"
    )
      swiper-slide.exposition__slide
        img(
          src="~static/img/image--0.jpg"
          @click="showImageOverlay('image--0.jpg')"
        )
      swiper-slide.exposition__slide
        img(
          src="~static/img/image--1.jpg"
          @click="showImageOverlay('image--1.jpg')"
        )
      swiper-slide.exposition__slide
        img(
          src="~static/img/image--2.jpg"
          @click="showImageOverlay('image--2.jpg')"
        )
      swiper-slide.exposition__slide
        img(
          src="~static/img/image--3.jpg"
          @click="showImageOverlay('image--3.jpg')"
        )
      swiper-slide.exposition__slide
        img(
          src="~static/img/image--4.jpg"
          @click="showImageOverlay('image--4.jpg')"
        )
      swiper-slide.exposition__slide
        img(
          src="~static/img/image--5.jpg"
          @click="showImageOverlay('image--5.jpg')"
        )
      swiper-slide.exposition__slide
        img(
          src="~static/img/image--6.jpg"
          @click="showImageOverlay('image--6.jpg')"
        )
      swiper-slide.exposition__slide
        img(
          src="~static/img/image--7.jpg"
          @click="showImageOverlay('image--7.jpg')"
        )
      swiper-slide.exposition__slide
        img(
          src="~static/img/image--8.jpg"
          @click="showImageOverlay('image--8.jpg')"
        )
      swiper-slide.exposition__slide
        img(
          src="~static/img/image--9.jpg"
          @click="showImageOverlay('image--9.jpg')"
        )
      .swiper-button-prev
      .swiper-button-next

    .infos__row
      .infos__title
        h2 UN MAGNIFIQUE <br> CADEAU POUR LA<br> PHOTOGRAPHIE

        br

        h5 23.06.21

        br

        h5 Fotonoviembre, <br>Santa Cruz de Tenerife

      .infos__content
        //- ul.infos__links
        //-   h5.active Description
        //-   h5 Vidéo
        //-   h5 Podcast
        //- br

        p Après Lausanne, où l'exposition a été présentée au Musée de l'Elysée au printemps 2019, retrouvez l'importante rétrospective à Martine Franck au FOMU (Fotomuseum) à Anvers. L'exposition est prolongée jusqu'au 18 avril 2021.
        p Souhaitant mettre en lumière l’œuvre pionnier des femmes photographes au cours du XXe siècle, le Musée de l’Elysée présente une importante rétrospective consacrée à Martine Franck (1938- 2012). Conçue par la Fondation Henri CartierBresson, Paris, et coproduite avec le Musée de l’Elysée, cette exposition, unique par son ampleur, est constituée de près de 140 photographies, dont certaines inédites, en grande partie sélectionnées par la photographe de son vivant.
        p Au-delà de ce regard inédit d’une photographe sur l’ensemble de son œuvre, ce projet d’exposition et d’édition est fondé sur une étude approfondie des archives de Martine Franck, ce qui lui permet de se démarquer des rétrospectives précédentes.
        .button-large.button
          span Continuer la lecture
          .icon +

    .infos__row
      span.infos__title
        img(
          src="~static/img/image--0.jpg"
  				class="half-width"
        )

      .infos__content
        h5 Marmarita, Reef Homs, 11 septembre 2013 © Matthias Bruggmann
        p Press Images. Courtesy Musée de l’Elysée, Lausanne et Galerie Polaris, Paris
        .button-large.button Voir le détail

    .infos__row.dropdown
      h3.infos__title INFORMATIONS PRATIQUES
      h3.infos__title.symbol ↓

    .infos__row
      h3.infos__title
        span VIDEOS

      .infos__content
        .player(style='background-image:url(/public/static/img/image--1.jpg)')
          h2.absolute-center PLAY
        h5 Titre vidéo
        p Description vidéo

    .infos__row
      h3.infos__title
        span PODCASTS

      .infos__content
        .podcast
          .podcast-player
            img(
              src="~static/img/play.png"
            )
          .podcast-info
            h5 Titre du podcast
            p.no-margin Description
        .podcast
          .podcast-player
            img(
              src="~static/img/play.png"
            )
          .podcast-info
            h5 Titre du podcast
            p.no-margin Description

    .infos__row
      h3.infos__title
        span RESSOURCES

      .infos__content
        div
          a Textes de salle
        div
          a Brochures
        div
          a Applications d’aide à la visite

    .infos__row
      h3.infos__title
        span CATALOGUE

      .infos__content
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a tellus tempor
          .button-large.button Voir la boutique

    .infos__row
      h3.infos__title
        span Partenaires

      .infos__content
        h5 PARTENAIRES PRINCIPAUX
        br
        div
          a Parmigiani Fleurier
        div
          a Dr. Georg und Josi

        br

        .infos__row
          .infos__column
            h5 PARTENAIRES <br>CATALOGUE
            br
            div
              a Société Académique
            div
              a Vaudoise – Fondation Fern
            div
              a Moffat
          .infos__column
            h5 MEDIAS
            br
            a
              span Fisheye
    .infos__row
      h3.infos__title
        span Vues de l'exposition
      grid.expositions(
        :items="expositionDetail"
      )

    .infos__row
      h3.infos__title
        span CONTENU POUR <br> LES MÉDIATEURS

      .infos__content
        p Vous pouvez préparer la visite pour votre groupe grace à ces documents
        .button-large.button Télécharger le PDF



    .infos__row
      h3.infos__title
        span AUTOUR DE L'EXPOSITION
  grid.expositions(
    :items="around"
  )
</template>

<script lang="ts">
import Vue from 'vue'
import { around } from '@/static/content/around'
import { expositionDetail } from '@/static/content/expositionDetail'

export default Vue.extend({
  data() {
    return {
      around,
      expositionDetail,
      swiperOptions: {
        slidesPerView: 'auto',
        freeMode: true,
        mousewheel: {
          forceToAxis: true,
        },
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },

  methods: {
    showImageOverlay(source: string) {
      this.$store.commit('setImageOverlay', `/img/${source}`)
      this.$store.commit('setShowImageOverlay', true)
    },
  },
})
</script>

<style lang="scss">
.exposition {
  //padding: 2 * $small-font-size $main-padding * 2;
  //padding: calc(#{$desktop-menu-top-bar-height} - #{$main-padding}) $main-padding * 2;
  // padding: calc(#{$desktop-menu-top-bar-height} - #{$main-padding})
  //   $main-padding * 2 $main-padding * 2;
  padding: 0 $main-padding * 2 0 $main-padding * 2;

  @media screen and (max-width: $mobile-breakpoint) {
    padding: calc(#{$desktop-menu-top-bar-height} - #{$main-padding})
      $main-padding * 2;
  }

  &__slider {
    height: 60vh;
    margin: 0 -2 * $main-padding;
  }

  &__slide {
    height: 100%;
    width: min-content;
    padding-left: 2 * $main-padding;

    &:last-child {
      padding-right: 2 * $main-padding;
    }

    img {
      height: 100%;
      width: auto;
      cursor: pointer;
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: white;
  }
  .swiper-button-prev {
    &:after {
      content: '←';
      font-family: PhotoCText;
    }
  }
  .swiper-button-next {
    &:after {
      content: '→';
      font-family: PhotoCText;
    }
  }

  &__columns {
    display: flex;
    padding: $main-padding * 2 0;
  }

  &__infos,
  &__text {
    width: 50%;
  }

  &__text {
    font-family: PhotoCText;
    // font-size: $small-font-size;

    p {
      margin: 0;
      line-height: 1.2;
    }

    p + p {
      // margin-top: $small-font-size;
    }
  }

  &__infos {
    line-height: 0.9;

    & > * {
      font-size: $main-paragraph;
      margin: 0;
    }
  }

  .podcast {
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1.5em;

    .podcast-player {
      margin-right: 1em;
    }
  }

  .catalogue {
    display: flex;
    .description {
      padding-left: 1.5em;
    }
  }

  @media screen and (max-width: $tablet-breakpoint) {
    &__text {
      font-size: $desktop-font-size;
    }
  }

  @media screen and (max-width: $mobile-breakpoint) {
    &__columns {
      flex-direction: column;
    }

    &__infos,
    &__text {
      width: 100%;
      padding-top: 2rem;
    }

    &__text {
      font-size: $mobile-menu-font-size;
    }
  }
}
</style>

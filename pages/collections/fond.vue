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
          src="~static/img/image--23.jpg"
          @click="showImageOverlay('image--0.jpg')"
        )
      swiper-slide.exposition__slide
        img(
          src="~static/img/image--21.jpg"
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

      .swiper-button-prev
      .swiper-button-next

    .infos__content
      .infos__row
          .infos__title
            h3 Fonds De Jongh (Frères De Jongh, Edouard, Francis II, Gaston)
            br
            p Date de rédaction : 2 octobre 2018



          .infos__content
            p Originaire des Pays-Bas, la famille de Jongh arrive en Suisse en 1793. Edouard (1823-1886) et Francis I (1833-1912) sont les premiers de leur famille à s'intéresser au commerce de la photographie et ouvrent ainsi la voie à plusieurs générations de photographes professionnels. Francis I s'installe à Vevey en 1865 et Edouard s'installe à Lausanne en 1867. L'atelier de l'avenue du Théâtre ouvre en 1877. Francis III (1864-1928) reprend l'atelier familial en 1886. Il le transfert à son fils Gaston (1888-1973) dès 1918
            p
              h5 Négatifs
              p Estimation entre 350'000 et 400'000 dont 152'800 négatifs souples et par déduction, 200'000 négatifs sur verre (Ploye et Chabauty). 107'000 négatifs à la Cinémathèque.
            p
              h5 Tirages
              p 770 catalogués. 1'174 inventoriés sur Museum Plus. Estimation de 2000 tirages à extraire des boîtes de la Collection iconographique vaudoise.
            p
              h5 Classeurs
              p 7 et albums: 20 (1500 photographies environ)
            p
              h5 Boîtes de diapositives
              p Au moins 3
            p
              h5 Affiches
              p Une vingtaine
            p
              h5 Boîtes d'archives de l'atelier
              p 5
            p
              h5 Type de procédés
              ul
                li
                  p Négatifs (verre, nitrate et acétate)
                li
                  p Diapositives
                li
                  p Tirages
                li
                  p Archives papier (Carnets de commande (426), Répertoires clients de Jongh (3), Classeurs

      .infos__row
        h3.infos__title
          span Liens

        .infos__content
          h5 Lien vers une vidéo, entretien de Gaston de Jongh, 1968
          p
            a https://www.rts.ch/archives/tv/culture/3478902-gaston-de-jongh.html
          br
          h5 Liens vers les biographies de Francis et Gaston de Jongh :
          p
            a http://www.hls-dhs-dss.ch/textes/f/F28757.php
          p
            a https://www.foto-ch.ch/?a=fotograph&id=20471&lang=fr
          br

      .infos__row
        h3.infos__title
          span Prêts

        .infos__content
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan ex ut lacus interdum, et auctor nisl pharetra. Nullam vitae ex eget justo fringilla consectetur.
          .button-large.button En savoir plus
          br
          br
          br


</template>

<script lang="ts">
import Vue from 'vue'
import { around } from '@/static/content/around'

export default Vue.extend({
  data() {
    return {
      around,
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
  padding: calc(#{$desktop-menu-top-bar-height} - #{$main-padding})
    $main-padding * 2 $main-padding * 2;

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
    font-size: $small-font-size;

    p {
      margin: 0;
      line-height: 1.2;
    }

    p + p {
      margin-top: $small-font-size;
    }
  }

  &__infos {
    line-height: 0.9;

    & > * {
      font-size: $main-font-size;
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

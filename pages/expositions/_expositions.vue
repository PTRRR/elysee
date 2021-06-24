<template lang="pug">
  .exposition
    client-only
      swiper.exposition__slider(
        :options="swiperOptions"
      )
        swiper-slide.exposition__slide
          img(
            src="~static/img/image--0.jpg"
          )
        swiper-slide.exposition__slide
          img(
            src="~static/img/image--1.jpg"
          )
        swiper-slide.exposition__slide
          img(
            src="~static/img/image--2.jpg"
          )
        swiper-slide.exposition__slide
          img(
            src="~static/img/image--3.jpg"
          )
        swiper-slide.exposition__slide
          img(
            src="~static/img/image--4.jpg"
          )
        swiper-slide.exposition__slide
          img(
            src="~static/img/image--5.jpg"
          )
        swiper-slide.exposition__slide
          img(
            src="~static/img/image--6.jpg"
          )
        swiper-slide.exposition__slide
          img(
            src="~static/img/image--7.jpg"
          )
        swiper-slide.exposition__slide
          img(
            src="~static/img/image--8.jpg"
          )
        swiper-slide.exposition__slide
          img(
            src="~static/img/image--9.jpg"
          )

    .exposition__columns
      .exposition__infos
        h1
          span EXPO
          br
          span SITION

        br
        br

        h5
          span UN MAGNIFIQUE
          br
          span CADEAU POUR LA
          br
          span PHOTOGRAPHIE

        br
        br

        h5 23.06.21

      .exposition__text
        p Après Lausanne, où l'exposition a été présentée au Musée de l'Elysée au printemps 2019, retrouvez l'importante rétrospective à Martine Franck au FOMU (Fotomuseum) à Anvers. L'exposition est prolongée jusqu'au 18 avril 2021.
        p Souhaitant mettre en lumière l’œuvre pionnier des femmes photographes au cours du XXe siècle, le Musée de l’Elysée présente une importante rétrospective consacrée à Martine Franck (1938- 2012). Conçue par la Fondation Henri CartierBresson, Paris, et coproduite avec le Musée de l’Elysée, cette exposition, unique par son ampleur, est constituée de près de 140 photographies, dont certaines inédites, en grande partie sélectionnées par la photographe de son vivant.
        p Au-delà de ce regard inédit d’une photographe sur l’ensemble de son œuvre, ce projet d’exposition et d’édition est fondé sur une étude approfondie des archives de Martine Franck, ce qui lui permet de se démarquer des rétrospectives précédentes.
        p Figure essentielle de l’art photographique du XXe siècle, membre de l’agence VU en 1970, cofondatrice de l’agence Viva en 1972 et membre de la coopérative Magnum à partir de 1983, journaliste, reporter et portraitiste, Martine Franck vient à la photographie à travers une démarche personnelle liée en grande partie à ses voyages en Asie et en Europe. Lorsqu’elle décide de se consacrer à la carrière de photographe, elle choisit un domaine d’activité comprenant encore peu de femmes. Elle réussit pourtant à trouver sa place en s’attachant à des sujets peu abordés par ses confrères, comme le monde du travail, les femmes, la vieillesse, la solidarité et l’humanitaire. Durant une cinquantaine d’années, indépendamment de tout courant esthétique, elle a ainsi construit une œuvre personnelle principalement consacrée à la condition humaine à travers le monde.
        p En programmant cette exposition, le Musée de l’Elysée offre au public la possibilité de redécouvrir une œuvre majeure qui, au-delà de la diversité des sujets, porte un regard intense et singulier sur notre époque.
        p De nombreux documents d’archives, dont certains inédits, viendront enrichir l’exposition conçue par la Fondation Henri Cartier-Bresson. Ils illustreront, dans des vitrines dédiées, les relations étroites entre Martine Franck et Lausanne, en particulier son exposition en 1979 à la galerie Portfolio dirigée par Jean-Pierre et Marlène Vorlet, ou ses liens d’amitié avec Monique Jacot et Jean Genoud.
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      },
    }
  },
})
</script>

<style lang="scss">
.exposition {
  padding: 2 * $small-font-size $main-padding * 2;

  &__slider {
    height: 60vh;
  }

  &__slide {
    height: 100%;
    width: min-content;
    padding-right: 2 * $main-padding;

    &:last-child {
      padding: 0;
    }

    img {
      height: 100%;
      width: auto;
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
}
</style>

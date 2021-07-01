<template lang="pug">
.infos
  img.infos__image(src='~static/img/musee.jpg')
  .infos__content
    .infos__row
      h3.infos__title INFOS <br> PRATIQUES
      .infos__content
        p Le Musée de l’Elysée est temporairement fermé pour organiser son déménagement à PLATEFORME 10, le nouveau quartier des arts de Lausanne. La cérémonie de remise des clés du nouveau bâtiment du Musée de l'Elysée et du mudac aura lieu du 4 au 7 novembre 2021. L’inauguration des espaces d'exposition est prévue pour juin 2022. D'ici là, suivez l'actualité du musée sur L'Elysée hors champ et sur nos réseaux sociaux !
    .infos__row
      h3.infos__title HORAIRES
      .infos__content
        p Mardi-vendredi: 12—18h
        br
        p Samedi-dimanche: 11—18h
        br
        p Fermé le lundi
        br
        p Le premier dimanche du mois: entrée gratuite et guides disposition
        br
        p Le musée est ouvert les jours fériés suivants: à l’ascension (jeudi 13 mai 2021) et pour le Jeûne Genevois (jeudi 9 septembre 2021)

    .infos__row
      h3.infos__title TARIFS
      .infos__content
        p L’entrée est gratuite jusqu’au 5 septembre 2021! Dès le 6 septembre 2021:
        .infos__row
          .infos__column
            h5 TARIF NORMAL
            br
            p 15 CHF
          .infos__column
            h5 TARIF RÉDUIT
            br
            p 10 CHF
            br
            p Apprentis
            br
            p Enseignants
            br
            p Artistes
        .infos__row
          .infos__column
            h5 ENTRÉE GRATUITE
            br
            p Membre des Amis
            br
            p Jeunes, jusqu’à 18 ans et étudiants
            br
            p Groupes scolaires
            br
            p Chômeurs et AI
            br
            p ICOM, AICA
    .infos__row
      h3.infos__title ACCÈS
      .infos__content
        p Gare CFF Lausanne, 3 minutes à pied
        br
        p Bus: 1, 3, 21, arrêt Gare
        br
        p Bus: 6, arrêt Cécil
        br
        p Métro: m2, arrêt Gare
        br
        p Parking Montbenon: à 300 mètres de l’entrée du MCBA, entrée au chemin de Mornex et avenue Jean-Jaques-Mercier. Réduction sur validation de votre ticket de parking à l’accueil du MCBA
        br
        p Mobilité douce: ouverture sous peu d’un chemin piéton et d’une piste cyclable depuis l’avenue Marc-Dufour; parcs à vélos sur le site
        br
        p Musée de l’Elysée
        br
        p 18, avenue de l’Elysée
        br
        p 1014 Lausanne - Suisse
        br
        p Tél. +41 21 316 99 11
        br
        p Fax +41 21 316 99 12
        br
        p Mail info[at]elysee.ch
</template>

<script lang="ts">
import Vue from 'vue'
import { home } from '@/static/content/home'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      home,
    }
  },
})
</script>

<style lang="scss">
.infos {
  $i: &;
  display: flex;
  flex-direction: column;
  padding: calc(#{$desktop-menu-top-bar-height} - #{$main-padding})
    $main-padding * 2;

  &__image {
    height: calc(100vh - #{$desktop-menu-top-bar-height} - #{$main-padding});
    object-fit: cover;
    object-position: 50% 100%;
  }

  &__row {
    display: flex;
    padding: 1.5em 0;

    #{$i}__row {
      padding: 1em 0;
    }

    & > * {
      width: 50%;
    }

    & + & {
      border-top: solid 0.15em black;
    }

    &:last-child {
      padding-bottom: 0;
    }
  }

  &__title {
    margin: 0;
    font-size: $main-font-size;
    font-family: PhotoC;
    line-height: 0.9;
    margin-bottom: -0.2em;
  }

  &__content {
    p,
    h5 {
      margin: 0;
      line-height: 1.2;
    }

    p {
      font-family: PhotoCText;
    }
  }

  @media screen and (max-width: $tablet-breakpoint) {
    &__content {
      p,
      h5 {
        font-size: $desktop-font-size;
      }
    }
  }

  @media screen and (max-width: $mobile-breakpoint) {
    &__title {
      margin-bottom: 0.6em;
    }

    &__content {
      p,
      h5 {
        font-size: $mobile-menu-font-size;
      }
    }

    &__row {
      flex-direction: column;

      & > * {
        width: 100%;
      }
    }

    &__column {
      & + & {
        margin-top: 2em;
      }
    }

    padding: calc(#{$mobile-menu-top-bar-height} - #{$main-padding})
      $main-padding * 2;
  }
}
</style>

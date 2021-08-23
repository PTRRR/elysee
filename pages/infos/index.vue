<template lang="pug">
.infos
  alert-bar
  img.infos__image(src='~static/img/musee.jpg')
  .infos__content
    .infos__row
      h2.infos__title INFORMATIONS PRATIQUES
      .infos__content
        p Le Musée de l’Elysée est temporairement fermé pour organiser son déménagement à PLATEFORME 10, le nouveau quartier des arts de Lausanne. La cérémonie de remise des clés du nouveau bâtiment du Musée de l'Elysée et du mudac aura lieu du 4 au 7 novembre 2021. L’inauguration des espaces d'exposition est prévue pour juin 2022. D'ici là, suivez l'actualité du musée sur L'Elysée hors champ et sur nos réseaux sociaux !
    .infos__row
      h3.infos__title HORAIRES
      .infos__content
        p
           span Mardi-vendredi: 12—18h
           br
           span Samedi-dimanche: 11—18h
           br
           span Fermé le lundi
        br
        p Le premier dimanche du mois: entrée gratuite et guides disposition
        br
        p Le musée est ouvert les jours fériés suivants: à l’ascension (jeudi 13 mai 2021) et pour le Jeûne Genevois (jeudi 9 septembre 2021)

    .infos__row
      h3.infos__title TARIFS
      .infos__content
        .infos__row.no-padding
          .infos__column
            h5 EXPOSITION PERMANENTE
            br
            p Gratuit* (billet obligatoire)
          .infos__column
            h5 EXPOSITIONS TEMPORAIRES
            br
            p
             span Plein tarif: 8.-
             br
             span Réduit : 6.-
             br
             span Jusqu’à 16 ans: entrée gratuite
        .infos__row
          .infos__column
            h5 OFFRES COMBINÉES
            br
            p
             span Plein tarif: 8.-
             br
             span Réduit : 6.-
             br
             span Jusqu’à 16 ans: entrée gratuite
        .infos__row
          .infos__column
            h5 PERSONNES EN SITUATION DE HANDICAP
            br
            p
             span Entrée gratuite pour l'accompagnateur

        .infos__row.dropdown
            h5.infos__title BÉNÉFICIAIRES ENTRÉE REDUITE
            h5.infos__title.symbol ↓
        .infos__row.dropdown
            h5.infos__title GROUPES ET SCOLAIRES
            h5.infos__title.symbol ↓
        .infos__row.dropdown
            h5.infos__title OFFRES POUR LES MEMBRES
            h5.infos__title.symbol ↓

        br
        br
        nuxt-link(
      		to="#"
      	)
            .button-large.button.primary Réserver son billet
        br
        br

    .infos__row
      h3.infos__title ACCÈS


      .infos__content
        .infos__row
          .infos__column
            h5 MUSÉE PHOTO ELYSÉE
            br
            p
              span Musée de photographie
              br
              span Place de la Gare 17
              br
              span CH-1003 Lausanne
              br
              span +41 21 315 25 30

        .infos__row
          .infos__column
            h5 ACCÈS EN TRANSPORTS PUBLICS
            br
            p
              span Bus : 1, 3, 21, arrêt "Gare"Bus : 6, arrêt "Cécil"
              br
              span Bus : 6, arrêt "Cécil"
              br
              span Métro : m2, arrêt "Gare"

        .infos__row
          .infos__column
            h5 MOBILITÉ DOUCE
            br
            p
             span Gare CFF Lausanne, 3 minutes à pied Chemin piéton et piste cyclable depuis l’avenue Marc-Dufour ; parcs à vélos sur le site
        .infos__row
          .infos__column
            h5 ACCÈS EN VOITURE
            br
            p
             span Parking Montbenon : à 300 mètres de l’entrée du MCBA, entrée au chemin de Mornex et avenue Jean-Jaques-Mercier. Réduction sur validation de votre ticket de parking à l’accueil du Musée Photo Elysée

        br
        br
        nuxt-link(
      		to="#"
      	)
            .button-large.button Accès (Google map)
        br
        br

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

<style lang="scss"></style>

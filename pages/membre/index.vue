<template lang="pug">
div
  .infos
    img.infos__image(src='~static/img/image--33.jpg')
    .infos__row
      .infos__title
        h5 NOUS SOUTENIR
        br

    ul.infos__links
      h5 Programmes de membership
      h5 Institutions partenaires
      h5 Partenaires
    .infos__row
      .infos__title
      .infos__content
        p Devenez membre et participez à la vie d’une institution culturelle lausannoise de renommée internationale. Marquez votre soutien au Musée de l’Elysée et faites vivre son héritage exceptionnel. Ensemble, partageons et développons notre passion commune pour la photographie.
        br
        .button-large.button Faire un don

    .infos__row
      h5.infos__title
        span LES AMIS

      .infos__content
        p Devenez membre et participez à la vie d’une institution culturelle lausannoise de renommée internationale. Marquez votre soutien au Musée de l’Elysée et faites vivre son héritage exceptionnel. Ensemble, partageons et développons notre passion commune pour la photographie.

    .infos__row.dropdown
      h5.infos__title MEMBRES ET DONATEURS DU CLUB 2019
      h5.infos__title.symbol ↓

    .infos__row
      h5.infos__title
        span LES AVANTAGES POUR LES MEMBRES

  .table
    .Rtable.Rtable--4cols
      .Rtable-cell(style="order:1")
        span Les avantages
      .Rtable-cell(style="order:2")
        span Les Amis <br> A partir de 30.– <br> <a href="#">Devenir Membre</a>
      .Rtable-cell(style="order:3")
        span Les Amis <br> A partir de 30.– <br> <a href="#">Devenir Membre</a>
      .Rtable-cell(style="order:4")
        span Les Amis <br> A partir de 30.– <br> <a href="#">Devenir Membre</a>
    .Rtable.Rtable--4cols
      .Rtable-cell(style="order:1")
        span Une visite guidée de chaque exposition
      .Rtable-cell(style="order:2")
        h3 ●
      .Rtable-cell(style="order:3")
        h3 ●
      .Rtable-cell(style="order:4")
        h3 ●
    .Rtable.Rtable--4cols
      .Rtable-cell(style="order:1")
        span 10% de réduction à la librairie du musée et sur la boutique en ligne
      .Rtable-cell(style="order:2")
        h3 ●
      .Rtable-cell(style="order:3")
        h3 ●
      .Rtable-cell(style="order:4")
        h3 ●
    .Rtable.Rtable--4cols
      .Rtable-cell(style="order:1")
        span 30% de réduction sur le publications du musée
      .Rtable-cell(style="order:2")
        h3 ●
      .Rtable-cell(style="order:3")
        h3 ●
      .Rtable-cell(style="order:4")
        h3 ●
    .Rtable.Rtable--4cols
      .Rtable-cell(style="order:1")
        span Invitations aux événements du musée et prix préférentiels sur les activités et ateliers proposés
      .Rtable-cell(style="order:2")
        h3 ●
      .Rtable-cell(style="order:3")
        h3 ●
      .Rtable-cell(style="order:4")
        h3 ●

  grid(
    :items="club"
  )

  .infos
    .infos__row
      h5.infos__title
        span SOUTIENS PRIVÉS, MÉCÈNES ET INSTITUTIONNELS

      .infos__content
        .logos-grid
          div
            img.logo(src='~static/img/logo--1.svg')
          div
            img.logo(src='~static/img/logo--2.svg')
          div
            img.logo(src='~static/img/logo--3.svg')
          div
            img.logo(src='~static/img/logo--4.svg')
          div
            img.logo(src='~static/img/logo--2.svg')
          div
            img.logo(src='~static/img/logo--3.svg')
          div
            img.logo(src='~static/img/logo--1.svg')
          div
            img.logo(src='~static/img/logo--4.svg')

</template>

<script lang="ts">
import Vue from 'vue'
import { club } from '@/static/content/club'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      club,
    }
  },
})
</script>

<style lang="scss">
/* Tables
================================== */
.table {
  padding-left: 0.5rem;
  font-size: $desktop-font-size;
  font-family: PhotoCText;
  width: 100vw;
  overflow-x: auto;
  margin-bottom: 2em;
}
.Rtable {
  display: flex;
  //flex-wrap: wrap;
  background: rgb(241, 241, 241);
  flex-wrap: nowrap;
  min-width: 125vw;
  //margin: 0 0 3em 0;
}
.Rtable:nth-child(even) {
  background: none;
  //margin: 0 0 3em 0;
}
.Rtable-cell {
  box-sizing: border-box;
  flex-grow: 1;
  padding: 0.8em 1.2em;
  overflow: hidden;
  list-style: none;
  align-items: center;
  width: 50vw;
  //border: solid 3px white;
}
.Rtable-cell > h1,
.Rtable-cell > h2,
.Rtable-cell > h3,
.Rtable-cell > h4,
.Rtable-cell > h5,
.Rtable-cell > h6 {
  margin: 0;
}
/* Table column sizing
================================== */
.Rtable--2cols > .Rtable-cell {
  width: 50%;
}
.Rtable--3cols > .Rtable-cell {
  width: 33.33%;
}
.Rtable--4cols > .Rtable-cell {
  //width: 25%;
}
.Rtable--4cols > .Rtable-cell:first-child {
  width: 100%;
}
.Rtable--5cols > .Rtable-cell {
  width: 20%;
}
.Rtable--6cols > .Rtable-cell {
  width: 16.6%;
}

@media screen and (max-width: $mobile-breakpoint) {
  .table {
    font-size: $mobile-menu-font-size;
  }
}
</style>

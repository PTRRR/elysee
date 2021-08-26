<template lang="pug">
footer.footer-bar

	span
		h5 Musée Photo Elysée
		ul
			li
				span Place de la Gare 17
				br
				span CH-1003 Lausanne
				br
				br
			li
				a +41 21 315 25 30
			li
				a info@photoelysée.ch
	span
		h5 Horaires
		ul
			li lundi 10h-18h
			li mardi  fermé
			li mercredi 10h-18h
			li jeudi 10h-20h
			li vendredi-samedi 10h-18h
			br
			li
				a Voir plus de détail
	span
		h5 INFORMATIONS
		ul
			li
				a Billetterie
			li
				a Accessibilité
			li
				a Press
			li
				a Contacts
			li
				a Impressum
			li
				a Newsletter
		.button-large.dark.button Nous soutenir


	span
		img(
			src="~static/icons/social-media-facebook_white.png"
		)
		img(
			src="~static/icons/social-instagram_white.png"
		)
		img(
			src="~static/icons/social-media-twitter_white.png"
		)
		img(
			src="~static/icons/social-media-facebook_white.png"
		)
		img(
			src="~static/icons/social-instagram_white.png"
		)
		img(
			src="~static/icons/social-media-twitter_white.png"
		)
		br
		br
		.logo-partner
			img(
				src="~static/logos/je_vais_au_musee.png"
			)
			img(
				src="~static/logos/plateforme10.svg"
			)

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
.footer-bar {
  padding: $main-padding * 2 $main-padding * 2 $main-padding * 6 $main-padding *
    2;
  width: 100%;
  background-color: #1a1718;
  color: white;
  line-height: 1;
  display: flex;
  flex-wrap: wrap;
  font-size: $main-paragraph;
  ul {
    li {
      font-family: PhotoCText;
      a {
        font-family: PhotoC;
      }
    }
  }

  img {
    margin-right: 1em;
  }
  .logo-partner {
    margin-top: 2rem;
    img {
      width: 7rem;
      float: left;
    }
  }

  span {
    flex: 1 0 21%;
    /* explanation below */
    //margin: 5px;
  }
}

@media screen and (max-width: $mobile-breakpoint) {
  .footer-bar {
    span {
      flex: 1 0 100%;
    }
  }
}
</style>

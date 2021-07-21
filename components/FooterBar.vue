<template lang="pug">
footer.footer-bar
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

	span PHOTO ELYSEE <br> Place de la Gare 17 <br> CH-1003 Lausanne
	span Title
		ul
			li Item nav
			li Item nav
			li Item nav
	span Title
		ul
			li Item nav
			li Item nav
			li Item nav
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
.footer-bar {
  padding: 0.5em $main-padding * 2;
  width: 100%;
  background-color: #1a1718;
  color: white;
  line-height: 1;
  font-size: $desktop-font-size;
  display: flex;
  flex-wrap: wrap;

  img {
    margin-right: 1em;
  }

  span {
    flex: 1 0 21%;
    /* explanation below */
    margin: 5px;
  }
}
</style>

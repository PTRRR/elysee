<template lang="pug">
  .image-overlay(
    :class="imageOverlayCssClasses"
    @click="hideImageOverlay"
  )
    img(
      :src="imageOverlaySource"
    )
    span.label
      h2 Martine Franck, Plage, village de Puri, Inde <br> 1980 © Martine Franck Magnum Photos
      h2.right
        nuxt-link.opening(
          to="/collections/artwork/"
        ) Voir le détail

</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters([
      'showTopBar',
      'showMenu',
      'showImageOverlay',
      'imageOverlay',
    ]),

    imageOverlayCssClasses() {
      return {
        'image-overlay--hide': !this.showImageOverlay || this.showMenu,
        'image-overlay--fullscreen': !this.showTopBar,
      }
    },

    imageOverlaySource() {
      return this.imageOverlay
    },
  },

  methods: {
    hideImageOverlay() {
      this.$store.commit('setShowImageOverlay', false)
    },
  },
})
</script>

<style lang="scss">
.image-overlay {
  position: fixed;
  //top: $desktop-menu-top-bar-height;
  left: 0;
  width: 100%;
  // height: calc(100% - #{$desktop-menu-top-bar-height});
  height: 100vh;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.9);
  transition: all $transition-duration $easing;
  padding: $desktop-menu-top-bar-height 2 * $main-padding 2 * $main-padding;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  img {
    //  width: 100%;
    // height: 100%;
    object-fit: contain;
    // height: 100%;
    max-height: 100%;
    max-width: 100%;
    flex: 1 1 0%;
    overflow: auto;
    display: flex;
    padding-top: 4rem;
    padding-bottom: 4rem;
    align-items: center;
    justify-content: center;
  }

  .label {
    font-size: $desktop-font-size;
    h2 {
      display: inline;
    }
  }
  &--fullscreen {
    top: 0;
    height: 100%;
    padding: 2 * $main-padding;
  }

  &--hide {
    opacity: 0;
    pointer-events: none;
  }
}
</style>

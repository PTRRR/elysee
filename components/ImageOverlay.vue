<template lang="pug">
  .image-overlay(
    :class="imageOverlayCssClasses"
    @click="hideImageOverlay"
  )
    img(
      :src="imageOverlaySource"
    )
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
  top: $desktop-menu-top-bar-height;
  left: 0;
  width: 100%;
  height: calc(100% - #{$desktop-menu-top-bar-height});
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.9);
  transition: all $transition-duration $easing;
  padding: 0 2 * $main-padding 2 * $main-padding;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
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

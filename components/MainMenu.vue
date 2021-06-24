<template lang="pug">
  .menu(
    :class="menuCssClasses"
  )
    ul.menu__main-sections
      li
        nuxt-link(
          to="/expositions"
          @click.native="hideMenu"
        ) expositions
      li collections
      li agenda
      li magazine
      li informations

    ul.menu__secondary-sections
      li accessibilite
      li billeterie
      li eshop
      li editions
      li le musee
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters(['showMenu']),
    menuCssClasses() {
      return {
        'menu--show': this.showMenu,
      }
    },
  },

  methods: {
    hideMenu() {
      this.$store.commit('setShowMenu', false)
    },
  },
})
</script>

<style lang="scss">
.menu {
  position: fixed;
  top: 3rem;
  left: 0;
  width: 100%;
  height: calc(100% - 3rem);
  z-index: 100;
  padding: 0 #{2 * $main-padding} #{2 * $main-padding};
  background-color: rgba($color: #ffffff, $alpha: 0.9);
  display: none;

  &--show {
    display: block;
  }

  ul {
    list-style: none;
    padding: #{2 * $main-padding} #{2 * $main-padding} 0;
    margin: 0;

    li {
      text-transform: uppercase;
      cursor: pointer;
    }

    li:hover {
      text-decoration: underline;
    }
  }

  &__main-sections {
    font-size: $main-font-size;
  }

  &__secondary-sections {
    font-size: $small-font-size;
  }
}
</style>

<template lang="pug">
  nav.menu-top-bar(
    :class="menuTopBarCssClasses"
  )
    nuxt-link.menu-top-bar__home(
      to="/"
      @click.native="hideMenu"
    )
      span PHOTO ELYSEE
      span MUSEE POUR LA PHOTOGRAPHIE

    .menu-top-bar__sections
      .menu-top-bar__social
        img(
          src="~static/icons/instagram.png"
        )
        img(
          src="~static/icons/twitter.png"
        )
        img(
          src="~static/icons/facebook.png"
        )

      .menu-top-bar__burger(
        @click="toggleMenu"
      )
        .menu-top-bar__line
        .menu-top-bar__line
        .menu-top-bar__line
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  data() {
    return {
      showTopBar: true,
    }
  },

  computed: {
    ...mapGetters(['showMenu']),
    menuTopBarCssClasses(): any {
      return {
        'menu-top-bar--hide': !this.showTopBar && !this.showMenu,
      }
    },
  },

  mounted() {
    let lastScrollY = 0
    window.addEventListener('scroll', () => {
      this.showTopBar = window.scrollY < 100 || lastScrollY - window.scrollY > 0
      lastScrollY = window.scrollY
    })
  },

  methods: {
    toggleMenu() {
      this.$store.commit('setShowMenu', !this.showMenu)
    },

    hideMenu() {
      this.$store.commit('setShowMenu', false)
    },
  },
})
</script>

<style lang="scss">
.menu-top-bar {
  padding: 1rem;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: white;
  height: 2 * $small-font-size;
  line-height: 1;
  transition: transform 0.3s ease-in-out;
  font-size: $small-font-size;

  &--hide {
    transform: translate(0, -100%);
  }

  &__home {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      display: block;
      width: 50%;
      margin-bottom: -0.4rem;
    }

    span + span {
      padding-left: 0.2rem;
    }
  }

  &__sections {
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }

  &__social {
    width: 25vh;
    img {
      margin-left: 1rem;
      height: 100%;
    }
  }

  &__burger {
    cursor: pointer;
    width: 1.2rem;
    height: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__line {
    width: 100%;
    height: 2px;
    background-color: black;
  }
}
</style>

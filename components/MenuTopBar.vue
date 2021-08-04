<template lang="pug">
nav.menu-top-bar(
	:class="menuTopBarCssClasses"
	@click="hideImageOverlay"
)
	nuxt-link.menu-top-bar__home(
		to="/"
		@click.native="hideMenu"
	)
		span PHOTO <br> ELYSEE
		span {{this.header_title}}

	.menu-top-bar__sections
		nuxt-link.opening(
			to="/infos"
		)
			span Ouvert de 8h à 19h

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
      header_title: 'Musée pour la photographie',
    }
  },

  computed: {
    ...mapGetters(['showMenu', 'showTopBar']),
    menuTopBarCssClasses(): any {
      return {
        'menu-top-bar--hide': !this.showTopBar && !this.showMenu,
      }
    },
  },

  watch: {
    $route() {
      // on route change
      this.updateTitle()
    },
  },

  mounted() {
    this.updateTitle()

    let lastScrollY = 0
    window.addEventListener('scroll', () => {
      this.$store.commit(
        'setShowTopBar',
        window.scrollY < 100 || lastScrollY - window.scrollY > 0
      )
      lastScrollY = window.scrollY
    })
  },

  methods: {
    updateTitle() {
      this.header_title = 'MUSÉE POUR LA PHOTOGRAPHIE'
      if (this.$route.name !== 'index')
        this.header_title = String(this.$route.name)
    },

    toggleMenu() {
      this.$store.commit('setShowMenu', !this.showMenu)
    },

    hideMenu() {
      this.$store.commit('setShowMenu', false)
    },

    hideImageOverlay() {
      this.$store.commit('setShowImageOverlay', false)
    },
  },
})
</script>

<style lang="scss">
.menu-top-bar {
  padding: 0 $main-padding * 2;
  display: flex;
  position: fixed;
  text-transform: uppercase;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: white;
  height: $desktop-menu-top-bar-height;
  line-height: 1;
  transition: transform $transition-duration $easing;
  font-size: $desktop-font-size;
  align-items: center;

  a {
    text-decoration: none;
  }

  &--hide {
    transform: translate(0, -100%);
  }

  .opening {
    display: block;
    width: 50%;
    white-space: nowrap;
    padding-left: 1.4em;
    margin-top: 0.2em;
  }

  &__home {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;

    span {
      display: block;
      width: 50%;
      margin-bottom: -0.4em;
      white-space: nowrap;

      br {
        display: none;
      }
    }

    span + span {
      padding-left: 0.2em;
    }
  }

  &__sections {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  &__social {
    width: 25vh;
    display: flex;

    img {
      margin-left: 1em;
      height: 1em;
    }
  }

  &__open {
    width: 25vh;
    display: flex;

    span {
      display: block;
      margin-bottom: -0.4em;
    }
  }

  &__burger {
    cursor: pointer;
    width: 1.2em;
    height: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__line {
    width: 100%;
    height: 2px;
    background-color: black;
  }

  @media screen and (max-width: $mobile-breakpoint) {
    height: $mobile-menu-top-bar-height;
    font-size: $mobile-menu-font-size;

    &__home {
      span {
        br {
          display: block;
        }
      }
    }

    &__burger {
      cursor: pointer;
      width: 2em;
      height: 1.85em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__social {
      display: none;
    }

    .opening {
      display: none;
    }
  }
}
</style>

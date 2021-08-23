<template lang="pug">
  .menu(
    :class="menuCssClasses"
  )
    ul(
      v-for="list of lists"
      :class="[list.class]"
    )
      li(
        v-for="item in list.items"
        v-show="isVisible(item)"
      )
        .menu__item(
          :is="item.link ? 'nuxt-link' : 'div'"
          :to="item.link"
          :class="item.state"
          @click.native="hideMenu"
        ) {{ item.name }}

    br
    .infos.tickets
      br
      .button-large.button.primary Réserver son billet
      h5
        span Ouvert aujourd'hui <br>de 8h à 19h

</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

const lists = [
  {
    class: 'menu__main-sections',
    items: [
      {
        name: 'expositions',
        link: '/expositions',
      },
      {
        name: 'collections',
        link: '/collections',
      },
      {
        name: 'agenda',
        link: '/expositions',
      },
      {
        name: 'magazine',
        link: '/magazine',
      },
      {
        name: 'informations',
        link: '/infos',
      },
    ],
  },
  {
    class: 'menu__secondary-sections',
    items: [
      {
        name: 'LabElysée',
        link: '/labelysee',
      },
      {
        name: 'Archives',
        link: '/archives',
      },
      {
        name: 'exposition',
        link: '/expositions',
      },
      {
        name: 'billeterie',
        link: '/expositions',
      },
      {
        name: 'eshop',
        link: '/expositions',
      },
      {
        name: 'editions',
        link: '/editions',
      },
      {
        name: 'le musee',
        link: '/expositions',
      },
      {
        name: 'Nous soutenir',
        link: '/membre',
      },
    ],
  },
  {
    class: 'menu__secondary-sections',
    items: [
      {
        name: 'Français',
        link: '#',
        state: 'active',
      },
      {
        name: 'English',
        link: '#',
      },
      {
        name: 'Deustch',
        link: '#',
      },
    ],
  },
]

export default Vue.extend({
  data() {
    return {
      lists,
      visibleIndex: 0,
    }
  },

  computed: {
    ...mapGetters(['showMenu']),
    menuCssClasses(): any {
      return {
        'menu--show': this.showMenu,
      }
    },

    allItems(): any {
      return this.lists.reduce((acc: any, list: any) => {
        acc.push(...list.items)
        return acc
      }, [])
    },
  },

  watch: {
    showMenu(show) {
      if (show) {
        this.visibleIndex = 0
        setTimeout(() => {
          const interval = setInterval(() => {
            this.visibleIndex++
            if (this.visibleIndex === this.allItems.length) {
              clearInterval(interval)
            }
          }, 50)
        }, 200)
      }
    },
  },

  methods: {
    hideMenu() {
      this.$store.commit('setShowMenu', false)
    },

    getItemIndex(item: any) {
      return this.allItems.indexOf(item)
    },

    isVisible(item: any) {
      return this.getItemIndex(item) < this.visibleIndex
    },
  },
})
</script>

<style lang="scss">
.menu {
  position: fixed;
  // top: $headlines-xsmall * 1.75;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;
  /* padding: 0 #{2 * $main-padding} #{2 * $main-padding}; */
  background-color: rgba($color: #ffffff, $alpha: 0.95);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s $easing;

  .tickets {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  &--show {
    opacity: 1;
    pointer-events: initial;
  }
  a {
    text-decoration: none;
  }
  a.active {
    color: #666;
  }

  ul {
    list-style: none;
    padding: $main-padding * 4 #{2 * $main-padding} 0;
    margin: 0;

    li {
      text-transform: uppercase;
      cursor: pointer;
      user-select: none;
      line-height: 1;
    }

    li:hover {
      text-decoration: underline;
    }
  }

  &__main-sections {
    font-size: $headlines-large;
  }

  &__secondary-sections {
    font-size: $headlines-small;
  }
}
</style>

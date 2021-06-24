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
          @click.native="hideMenu"
        ) {{ item.name }}

</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

const lists = [
  {
    class: 'menu__main-sections',
    items: [
      {
        name: 'exposition',
        link: '/expositions',
      },
      {
        name: 'collections',
        link: '/expositions',
      },
      {
        name: 'agenda',
        link: '/expositions',
      },
      {
        name: 'magazine',
        link: '/expositions',
      },
      {
        name: 'informations',
        link: '/expositions',
      },
    ],
  },
  {
    class: 'menu__secondary-sections',
    items: [
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
        link: '/expositions',
      },
      {
        name: 'le musee',
        link: '/expositions',
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
        const interval = setInterval(() => {
          this.visibleIndex++
          if (this.visibleIndex === this.allItems.length) {
            clearInterval(interval)
          }
        }, 50)
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
  top: 3rem;
  left: 0;
  width: 100%;
  height: calc(100% - 3rem);
  z-index: 100;
  padding: 0 #{2 * $main-padding} #{2 * $main-padding};
  background-color: rgba($color: #ffffff, $alpha: 0.9);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;

  &--show {
    opacity: 1;
    pointer-events: initial;
  }

  ul {
    list-style: none;
    padding: #{2 * $main-padding} #{2 * $main-padding} 0;
    margin: 0;

    li {
      text-transform: uppercase;
      cursor: pointer;
      user-select: none;
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

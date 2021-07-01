<template lang="pug">
  .sticky-block(
    :class="styckyBlockCssClasses"
  )
    .sticky-block__column(
      v-for="column of columns"
      :class="getColumnCssClasses(column)"
      :style="getColumnCssStyle(column)"
    )
      template(
        v-if="column.type === 'sticky'"
      )
        .sticky-block__content(
          :style="getContentCssStyle(column)"
        )
          .sticky-block__text(
            v-if="column.text"
            v-html="column.text"
          )

      template(
        v-else
      )
        block.sticky-block__block(
          v-if="column.blocks"
          v-for="(block, index) in column.blocks"
          v-bind="block"
          :key="index"
        )
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { BlockType } from '@/components/Row.vue'
import Block from '@/components/Block.vue'
import { mapGetters } from 'vuex'

type ColumnType = {
  type?: 'sticky'
  color?: string
  backgroundColor?: string
  blocks?: Array<BlockType>
  img?: string
}

export default Vue.extend({
  components: { Block },

  props: {
    columns: {
      type: Array,
      default: () => [],
    } as PropOptions<Array<ColumnType>>,
  },

  computed: {
    ...mapGetters(['showTopBar']),
    styckyBlockCssClasses() {
      return {
        'sticky-block--top-bar': this.showTopBar,
      }
    },
  },

  methods: {
    getColumnCssClasses(column: ColumnType) {
      return {
        'sticky-block__column-sticky': column.type === 'sticky',
      }
    },

    getColumnCssStyle() {
      return {
        width: `${100 / this.columns.length}%`,
      }
    },

    getContentCssStyle(column: ColumnType) {
      return {
        backgroundColor: column.backgroundColor,
        color: column.color,
        backgroundImage: column.img ? `url(${column.img})` : null,
      }
    },
  },
})
</script>

<style lang="scss">
.sticky-block {
  $s: &;
  width: 100%;
  display: flex;
  padding: 0 $main-padding;

  &__text {
    color: inherit;
    font-size: $main-font-size;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
  }

  &__column-sticky {
    height: calc(100vh - #{$main-padding * 2});
    position: sticky;
    top: $main-padding;
    padding: $main-padding;
    overflow: hidden;
    text-align: center;
  }

  &__content {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  @media screen and (max-width: $mobile-breakpoint) {
    flex-direction: column;

    &__column {
      width: 100% !important;
    }

    &__column-sticky {
      z-index: 10;
      height: 25vw;
      position: sticky;
      top: 0;
      padding: $main-padding * 2 $main-padding;
      margin: -$main-padding 0;
      background-color: white;
      overflow: hidden;
      display: flex;
      justify-content: center;
      transition: top 0.3s ease-in-out;

      #{$s}--top-bar & {
        top: $mobile-menu-top-bar-height;
      }
    }
  }
}
</style>

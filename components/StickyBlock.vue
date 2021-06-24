<template lang="pug">
  .sticky-block
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
  width: 100%;
  display: flex;
  padding: 0 $main-padding;

  &__text {
    color: inherit;
    font-size: 5rem;
  }

  &__column-sticky {
    height: calc(100vh - 1rem);
    position: sticky;
    top: $main-padding;
    padding: $main-padding;
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
}
</style>

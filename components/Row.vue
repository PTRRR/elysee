<template lang="pug">
  .row
    block.row__block(
      v-for="(block, index) in blocks"
      v-bind="block"
      :style="blockCssStyle"
      :key="index"
    )

</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import Block from '@/components/Block.vue'

export type BlockType = {
  img: string
}

type BlocksType = Array<BlockType>

export default Vue.extend({
  components: { Block },

  props: {
    blocks: {
      type: Array,
      default: () => [],
    } as PropOptions<BlocksType>,
  },

  computed: {
    blockCssStyle(): { width: string } {
      return {
        width: `${100 / (this.blocks.length / 2)}%`,
      }
    },
  },
})
</script>

<style lang="scss">
.row {
  display: flex;
  width: 100%;
  padding: 0 $main-padding;

  @media screen and (max-width: $mobile-breakpoint) {
    flex-wrap: wrap;

    &__block {
      // width: 50% !important;
    }
  }
}
</style>

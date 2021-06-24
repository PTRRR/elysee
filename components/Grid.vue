<template lang="pug">
  .grid
    .grid__item(
      v-for="item in items"
      v-bind="item"
      :is="getItemComponent(item)"
    )
</template>

<script lang="ts">
import Vue from 'vue'
import Row from '@/components/Row.vue'
import FullBlock from '@/components/FullBlock.vue'
import StickyBlock from '@/components/StickyBlock.vue'

type ItemType = {
  type: string
}

export default Vue.extend({
  components: {
    Row,
    FullBlock,
    StickyBlock,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    getItemComponent(item: ItemType) {
      return item.type
    },
  },
})
</script>

<style lang="scss">
.grid {
  display: flex;
  flex-direction: column;
}
</style>

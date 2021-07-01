<template lang="pug">
  span.writer
    client-only
      component(
        v-for="(item, index) in items"
        :key="index"
        :is="item.type"
        v-html="item.html"
        v-show="index < visibleIndex"
      )
    noscript
      component(
        v-for="(item, index) in items"
        :key="index"
        :is="item.type"
        v-html="item.html"
      )
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    items: {
      type: Array,
      default: () => [],
    },

    show: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      visibleIndex: 0,
      interval: null,
    } as { visibleIndex: number; interval: any }
  },

  watch: {
    show: {
      immediate: true,
      handler(show) {
        clearInterval(this.interval as any)
        if (show) {
          this.interval = setInterval(() => {
            this.visibleIndex++
            if (this.visibleIndex === this.items.length) {
              clearInterval(this.interval as any)
            }
          }, 50)
        } else {
          this.interval = setInterval(() => {
            this.visibleIndex--
            if (this.visibleIndex === 0) {
              clearInterval(this.interval as any)
            }
          }, 50)
        }
      },
    },
  },
})
</script>

<template lang="pug">
  grid.expositions(
    :items="expositions"
  )
</template>

<script lang="ts">
import Vue from 'vue'
import expositions from '@/static/content/expositions.json'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      expositions,
    }
  },
})
</script>

<style lang="scss">
.expositions {
  display: flex;
  flex-direction: column;
  padding: 2 * $small-font-size - $main-padding 0 $main-padding;
}
</style>

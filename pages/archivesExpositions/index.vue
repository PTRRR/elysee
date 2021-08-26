<template lang="pug">
div
  .infos
  grid(
    :items="archives"
  )

</template>

<script lang="ts">
import Vue from 'vue'
import { archives } from '@/static/content/archives'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      archives,
    }
  },
})
</script>

<style lang="scss">
.artwork {
  max-width: 75%;
  height: 75vh;
}
</style>

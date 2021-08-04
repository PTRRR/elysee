<template lang="pug">
  .liste
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

<style lang="scss"></style>

<template lang="pug">
  grid.home(
    :items="home"
  )
</template>

<script lang="ts">
import Vue from 'vue'
import home from '@/static/content/home.json'
import Grid from '@/components/Grid.vue'

export default Vue.extend({
  components: { Grid },

  data() {
    return {
      home,
    }
  },
})
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  padding: #{$main-padding + 2rem} 0 $main-padding;
}
</style>

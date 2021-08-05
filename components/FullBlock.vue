<template lang="pug">
  .full-block(
    :class="fullBlockCssClasses"
  )
    img(
      :src="img"
    )

    span.full-block__overlay(
      v-if="text"
      v-html="text"
    )
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    img: {
      type: String,
      default: '',
    },

    text: {
      type: String,
      default: '',
    },

    fontSize: {
      type: String,
      default: 'large',
    },
  },

  computed: {
    fullBlockCssClasses() {
      return [`full-block--${this.fontSize}`]
    },
  },
})
</script>

<style lang="scss">
.full-block {
  $f: &;
  width: 100vw;
  margin: $main-padding 0;

  img {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    display: block;
  }

  &__overlay {
    position: relative;
    color: white;
    text-align: center;
    display: block;
    padding-bottom: 100vh;

    #{$f}--small & {
      font-size: $main-font-size;
    }

    #{$f}--large & {
      font-size: 20vw;
      line-height: 0.85;
    }
  }
  span.content {
    display: block;
    margin-top: 1em;
    font-size: $desktop-font-size;
    padding: 0 2em;
    line-height: normal;
    width: 50%;
    margin: 1em auto;
  }
}
</style>

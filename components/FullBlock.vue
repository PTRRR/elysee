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
    span.full-block__arrow(
      v-if="mode=='banner'"
    ) ↓
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

    mode: {
      type: String,
      default: 'section',
    },
  },

  computed: {
    fullBlockCssClasses() {
      return [`full-block--${this.fontSize} ${this.mode}`]
    },
  },
})
</script>

<style lang="scss">
.full-block {
  $f: &;
  width: 100vw;
  margin: $main-padding 0;
  position: relative;

  img {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    display: block;
  }

  &__arrow {
    position: absolute;
    bottom: 2.5rem;
    color: white;
    z-index: 1000;
    font-size: $main-font-size;
    width: 100%;
    text-align: center;
  }

  &__overlay {
    position: relative;
    color: white;
    text-align: center;
    display: block;
    padding-bottom: 100vh;
    margin: auto;

    #{$f}--small & {
      font-size: $headlines-large;
    }

    #{$f}--medium & {
      font-size: $headlines-xlarge;
    }

    #{$f}--large & {
      font-size: $headlines-xlarge;
      line-height: 0.85;
    }
  }
  span.content {
    display: block;
    font-size: $desktop-font-size;
    padding: 3em 2em;
    line-height: normal;
    width: 75%;
    margin: 1em auto;
  }
}

.banner {
  .full-block__overlay {
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (max-width: $mobile-breakpoint) {
  .full-block {
    span.content {
      width: 100%;
    }
  }
}
</style>

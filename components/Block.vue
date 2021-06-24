<template lang="pug">
  .block(
    :is="link ? 'nuxt-link' : 'div'"
    :to="link"
  )
    .block__inner
      .block__content
        .block__image(
          v-if="img"
        )
          img(
            :src="img"
          )

        .block__background(
          v-else
          :style="contentCssStyle"
        )

        span.block__title(
          v-if="title"
          v-html="title"
        )

        .block__text(
          v-if="text"
          v-html="text"
        )

        .block__typo(
          v-if="typo"
          v-html="typo"
        )

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    link: {
      type: String,
      default: '',
    },

    img: {
      type: String,
      default: '',
    },

    color: {
      type: String,
      default: 'white',
    },

    text: {
      type: String,
      default: '',
    },

    title: {
      type: String,
      default: '',
    },

    typo: {
      type: String,
      default: '',
    },
  },

  computed: {
    contentCssStyle() {
      return {
        backgroundColor: this.color,
      }
    },
  },
})
</script>

<style lang="scss">
.block {
  overflow: hidden;

  &__inner {
    width: 100%;
    padding-top: 100%;
    position: relative;
  }

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - #{2 * $main-padding});
    height: calc(100% - #{2 * $main-padding});
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__image,
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__title {
    position: absolute;
    top: 0;
    left: 50%;
    color: white;
    text-align: center;
    transform: translate(-50%, 0%);
    font-size: $small-font-size;
    width: 100%;
    padding: $small-font-size;
    text-transform: uppercase;
  }

  &__text,
  &__typo {
    position: relative;
    color: white;
    text-align: center;
    font-size: $main-font-size;
    width: 100%;
  }

  &__typo {
    font-size: $big-font-size;
    line-height: 0.8;
    margin-bottom: -5rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>

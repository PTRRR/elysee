<template lang="pug">
  .block(
    :is="link ? 'nuxt-link' : 'div'"
    :to="link"
    v-observe-visibility="onVisibilityChange"
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
          :style="textCssStyle"
        )

        .block__text(
          v-if="text"
          v-html="text"
          :style="textCssStyle"
        )

        writer.block__text(
          v-if="writer"
          :items="writer"
          :show="isVisible"
          :style="textCssStyle"
        )

        .block__typo(
          v-if="typo"
          v-html="typo"
          :style="textCssStyle"
        )

</template>

<script lang="ts">
import Vue from 'vue'
import Writer from '@/components/Writer.vue'

export default Vue.extend({
  components: { Writer },

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

    backgroundColor: {
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

    writer: {
      type: Array,
      default: null,
    },
  },

  data() {
    return {
      isVisible: false,
    }
  },

  computed: {
    contentCssStyle(): any {
      return {
        backgroundColor: this.backgroundColor,
      }
    },

    textCssStyle(): any {
      return {
        color: this.color,
      }
    },
  },

  methods: {
    onVisibilityChange(visible: any) {
      this.isVisible = visible
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
    line-height: 0.85;
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

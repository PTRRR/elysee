<template lang="pug">
.block(
	:is="link ? 'nuxt-link' : 'div'"
	:to="link"
	:class="blockCssClasses"
	@click="onClick(type)"
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

			writer.block__text(
				v-if="writer"
				:items="writer"
				:show="isVisible"
				:style="textCssStyle"
				:class="getTextCssClasses(writer)"
			)

			.block__text(
				v-if="text"
				v-html="text"
				:style="textCssStyle"
				:class="getTextCssClasses(text)"
			)

			span.block__bottom(
				v-if="bottom"
				v-html="bottom"
				:style="textCssStyle"
			)

			.block__typo(
				v-if="typo"
				v-html="typo"
				:style="textCssStyle"
			)

			span.block__credits(
				v-if="credits"
				v-html="credits"
			)
</template>

<script lang="ts">
import Vue from 'vue'
import Writer from '@/components/Writer.vue'

export default Vue.extend({
  components: {
    Writer,
  },

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

    bottom: {
      type: String,
      default: '',
    },

    credits: {
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

    type: {
      type: String,
      default: 'image',
    },

    target: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      isVisible: false,
      showCredits: false,
      mounted: false,
    }
  },

  computed: {
    blockCssClasses(): any {
      return {
        'block--show-credits': this.showCredits,
      }
    },

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

  mounted() {
    this.mounted = true
  },

  methods: {
    onVisibilityChange(visible: any) {
      this.isVisible = visible
    },

    onClick(action: string) {
      // TODO: Choose between those two behaviour

      // Credits
      // this.showCredits = !this.showCredits

      if (action === 'anchor') {
        // const targetDiv = this.$refs[this.target]
        // if (targetDiv)
        // window.scrollTo(0, targetDiv.offsetTop);
      } else {
        // Fulscreen image + credits
        this.$store.commit('setShowImageOverlay', true)
        this.$store.commit('setImageOverlay', this.img)
      }
      /*
       */
    },

    getTextCssClasses(text: any) {
      if (this.mounted) {
        const type = typeof text
        let innerHTML = ''
        if (type === 'object') {
          innerHTML = text.map((it: any) => it.html).join('')
        }

        const element = document.createElement('span')
        element.innerHTML = innerHTML

        return {
          'block--long-text': element.innerText.length > 15,
        }
      } else {
        return {}
      }
    },
  },
})
</script>

<style lang="scss">
.block {
  $b: &;
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
    flex-direction: column;
  }

  &__background,
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__credits,
  &__title {
    position: absolute;
    left: 50%;
    color: white;
    text-align: center;
    font-size: $small-font-size;
    width: 100%;
    padding: $small-font-size;
    text-transform: uppercase;
  }

  &__bottom {
    position: absolute;
    bottom: 0;
    color: white;
    font-size: $small-font-size;
    width: 100%;
    padding: $small-font-size;
    text-align: center;
  }

  &__title {
    top: 0;
    transform: translate(-50%, 0%);
  }

  &__credits {
    color: black;
    opacity: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: opacity $transition-duration $easing;

    #{$b}--show-credits & {
      opacity: 1;
    }
  }

  &__text,
  &__typo {
    position: relative;
    color: white;
    text-align: center;
    font-size: $main-font-size;
    line-height: 0.85;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 1em 0em;
    margin: -1.25em 0;
  }
  &__text {
    padding-left: 0.5em;
    padding-right: 0.5em;
    text-transform: uppercase;
  }

  p {
    font-size: $desktop-font-size;
    padding: 0 1em;
  }

  &__typo {
    font-size: $big-font-size;
    line-height: 0.8;
    margin-bottom: -1.22em;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity $transition-duration $easing,
      transform $transition-duration $easing;
  }

  img.symbol {
    width: auto;
    height: auto;
    margin: 0.5em;
  }

  &--show-credits img {
    opacity: 0.15;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }

  span.content {
    display: block;
    margin-top: 1em;
    font-size: $desktop-font-size;
    padding: 0 2em;
    text-transform: none;
  }

  @media screen and (max-width: $tablet-breakpoint) {
    &__bottom,
    &__credits,
    &__title {
      font-size: $desktop-font-size;
    }
  }
}
</style>

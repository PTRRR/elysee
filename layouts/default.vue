<template lang="pug">
.app
	menu-top-bar
	main-menu
	image-overlay
	nuxt
	footer-bar
</template>

<script lang="ts">
import Vue from 'vue'
import ImageOverlay from '@/components/ImageOverlay.vue'
import MenuTopBar from '@/components/MenuTopBar.vue'
import MainMenu from '@/components/MainMenu.vue'

export default Vue.extend({
  components: {
    MenuTopBar,
    MainMenu,
    ImageOverlay,
  },
  head: {
    title: 'Elysee - Musee pour la photographie',
  },
})
</script>

<style lang="scss">
@font-face {
  font-family: PhotoC;
  src: url('~static/font/PhotoElysee-Bold.otf');
}

@font-face {
  font-family: PhotoCText;
  src: url('~static/font/PhotoElysee-Regular.otf');
}

* {
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: normal;
  margin: 0;
}

body,
html {
  font-family: PhotoC, Helvetica, Arial, sans-serif;
  margin: 0;
  font-size: $desktop-font-size;
}

a {
  color: inherit;
  text-decoration: underline;
}

ul {
  list-style: none;
  padding: 0;
}

p {
  margin-top: 0;
  margin-bottom: 1.5em;
}

.no-padding {
  padding: 0 !important;
}

.no-margin {
  margin: 0 !important;
}
.no-border {
  border: 0 !important;
}
img.half-width {
  width: 50%;
}

@media screen and (max-width: $tablet-breakpoint) {
  body,
  html {
    font-size: $mobile-font-size;
  }
}

@media screen and (max-width: $mobile-breakpoint) {
  body,
  html {
    font-size: 10px;
  }

  img.half-width {
    width: 100%;
  }

  .button {
    width: 100%;
    text-align: center;
  }
}

.button {
  background: white;
  color: black;
  cursor: pointer;
}

.button:hover {
  background: black;
  color: white;
}

.button-large {
  display: inline-block;
  font-size: $desktop-font-size;
  padding: 0.75em 1.5em;
  border: solid 0.05em black;
  background: white;
}

.player {
  width: 100%;
  height: 360px;
  background-size: cover;
  margin-bottom: 1em;
  background-color: #333;

  h3 {
    color: white;
    font-size: $large-font-size;
    height: inherit;
  }
}
.absolute-center {
  display: flex; // make us of Flexbox
  align-items: center; // does vertically center the desired content
  justify-content: center; // horizontally centers single line items
  text-align: center; // optional, but helps horizontally center text that breaks into multiple lines
}

input {
  flex: 1 1;
  max-width: 300px;
  line-height: 1.4;
  vertical-align: top;
  box-shadow: none;
  -webkit-appearance: none;
  border: 1px solid #000;
  font-size: $desktop-font-size;
  padding: 0.75em 1.5em;
  border-right: none;
  border-radius: 0;
  font-family: PhotoC;
}

.infos {
  $i: &;
  display: flex;
  flex-direction: column;
  padding: calc(#{$desktop-menu-top-bar-height} - #{$main-padding})
    $main-padding * 2;

  &__image {
    height: calc(75vh - #{$desktop-menu-top-bar-height} - #{$main-padding});
    object-fit: cover;
    // object-position: 50% 100%;
  }

  &__row {
    display: flex;
    padding: 1.5em 0 3em 0;

    #{$i}__row {
      padding: 1em 0;
    }

    & > * {
      width: 50%;
    }

    .dropdown {
      width: 100%;
    }

    & + & {
      border-top: solid 0.15em black;
    }

    &:last-child {
      padding-bottom: 0;
    }

    img {
      max-width: 100%;
    }
  }

  &__row.dropdown {
    & > * {
      width: 100%;
    }
    .symbol {
      text-align: right;
      padding: 0.5em;
    }
  }

  &__title {
    margin: 0;
    font-size: $main-font-size;
    font-family: PhotoC;
    line-height: 0.9;
    margin-bottom: -0.2em;
  }

  &__content {
    p,
    h5 {
      margin-top: 0;
      line-height: 1.2;
    }

    p {
      font-family: PhotoCText;
    }
  }

  &__links {
    margin: 0 0 1em 0;
    border-bottom: solid 0.1em black;

    h5 {
      display: inline-block;
      text-transform: uppercase;
      margin-right: 1em;
    }
    h5.active {
      border-bottom: solid 0.25em black;
    }
  }

  @media screen and (max-width: $tablet-breakpoint) {
    &__content {
      p,
      h5 {
        font-size: $desktop-font-size;
      }
    }
  }

  @media screen and (max-width: $mobile-breakpoint) {
    &__image {
      height: calc(50vh - #{$desktop-menu-top-bar-height} - #{$main-padding});
      object-fit: cover;
      object-position: 50% 100%;
    }

    &__title {
      margin-bottom: 0.6em;
    }

    &__content {
      p,
      h5 {
        font-size: $mobile-menu-font-size;
      }
    }

    &__row {
      flex-direction: column;

      & > * {
        width: 100%;
      }
    }

    &__column {
      & + & {
        margin-top: 2em;
      }
    }

    padding: calc(#{$mobile-menu-top-bar-height} - #{$main-padding})
      $main-padding * 2;
  }
}
</style>

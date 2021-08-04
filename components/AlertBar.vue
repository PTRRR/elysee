<template lang="pug">
div.alert-bar
	span Le Musée de l’Elysée est temporairement fermé pour organiser son déménagement à PLATEFORME 10, le nouveau quartier des arts de Lausanne.
	a.close
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss">
.alert-bar {
  padding: $main-padding * 4 $main-padding;
  position: fixed;
  //text-transform: uppercase;
  bottom: 0;
  left: 0;
  background: rgb(224, 45, 45);
  color: white;
  width: 100%;
  z-index: 100;
  //height: $desktop-menu-top-bar-height;
  font-size: $desktop-font-size;
  align-items: center;

  span {
    display: inline-block;
    width: 90%;
  }
}
</style>

<template>
  <div class="page">
    <Header />
    <Navigation />
    <Sprite />
    <AlertList />
    <slot />
  </div>
</template>

<script>
import Header from '@partials/Header.vue'
import Navigation from '@partials/Navigation.vue'
import Sprite from '@components/Sprite.vue'
import AlertList from '@components/AlertList.vue'

export default {
  components: {
    AlertList,
    Sprite,
    Header,
    Navigation,
  },
  name: 'Page',
}
</script>

<style src="@layouts/Page.scss" lang="scss"></style>
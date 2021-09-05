<template>
  <div :class="['app', appTheme + '-theme']">
    <Sprite />
    <Header />
    <Navigation />
    <div class="container">
      <Calendar />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Calendar from '@components/Calendar.vue'
import Header from '@components/Header.vue'
import Navigation from '@components/Navigation.vue'
import Sprite from '@components/Sprite.vue'

export default {
  name: 'App',
  components: {
    Calendar,
    Header,
    Sprite,
    Navigation,
  },
  computed: {
    ...mapState([
      'appTheme',
    ]),
  },
  async beforeMount() {
    await this.updateLang(window.localStorage.getItem('app-lang') ?? 'en')
  },
  methods: {
    ...mapActions([
      'updateLang',
    ]),
  },
}
</script>

<style src="@/App.scss" lang="scss"></style>

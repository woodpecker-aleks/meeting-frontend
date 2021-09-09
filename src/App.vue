<template>
  <div :class="['app', appTheme + '-theme']">
    <RouterView />
    <router-link to="/register">Register</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
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

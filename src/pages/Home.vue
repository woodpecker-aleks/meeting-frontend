<template>
  <Page>
    <Header />
    <Navigation />
    <div class="container">
      <Calendar />
    </div>
  </Page>
</template>

<script>
import Header from '@components/Header.vue'
import Navigation from '@components/Navigation.vue'
import Page from '@layouts/Page.vue'
import Calendar from '@components/Calendar.vue'

export default {
  name: 'Home',
  components: {
    Calendar,
    Page,
    Header,
    Navigation,
  },
}
</script>
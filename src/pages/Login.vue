<template>
  <Page class="login-page">
    <div class="login-page__container container">
      <h1 class="login-page__title">Meetup</h1>
      <Input :placeholder="trans('email.title')" />
      <Input
        type="password"
        :placeholder="trans('password.title')"
      />
      <Button class="login-page__submit">
        {{ trans('login.title') }}
      </Button>
      <Link to="/register">
        {{ trans('register.title') }}
      </Link>
    </div>
  </Page>
</template>

<script>
import Page from '@layouts/Page.vue'
import Input from '@components/Input.vue'
import Button from '@components/Button.vue'
import Link from '@components/Link.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  components: {
    Page,
    Input,
    Button,
    Link,
  },
  computed: {
    ...mapGetters([
      'trans',
    ]),
  },
}
</script>

<style src="@pages/Login.scss" lang="scss"></style>
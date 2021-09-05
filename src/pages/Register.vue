<template>
  <Page>
    <div class="register-page__container container">
      <h1 class="register-page__title">Meetup</h1>
      <Input :placeholder="trans('name.title')" />
      <Input :placeholder="trans('surname.title')" />
      <Input :placeholder="trans('email.title')" />
      <Input
        type="password"
        :placeholder="trans('password.title')"
      />
      <Input
        type="password"
        :placeholder="trans('confirm-password.title')"
      />
      <Button class="register-page__submit">
        {{ trans('register.title') }}
      </Button>
      <Link to="/login">
        {{ trans('login.title') }}
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
  name: 'Register',
  components: {
    Page,
    Button,
    Input,
    Link,
  },
  computed: {
    ...mapGetters([
      'trans',
    ]),
  },
}
</script>

<style src="@pages/Register.scss" lang="scss"></style>
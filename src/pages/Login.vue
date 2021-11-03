<template>
  <Page class="login-page">
    <div class="login-page__container container">
      <h1 class="login-page__title">Meetup</h1>
      <Input
        @blur.once="touch('email')"
        @input="setField($event, 'email')"
        @blur="validateForm"
        :value="fields.email"
        :error="errors.email"
        name="email"
        required
        :placeholder="trans('email.title')"
      />
      <Input
        @blur.once="touch('password')"
        @input="setField($event, 'password')"
        @blur="validateForm"
        :value="fields.password"
        :error="errors.password"
        name="password"
        required
        type="password"
        :placeholder="trans('password.title')"
      />
      <Button :disabled="!canSubmit" class="login-page__submit">
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
import { mapGetters } from 'vuex'
import { emailRegExp, passwordRegExp } from '@utils/constants'

export default {
  name: 'Login',
  components: {
    Page,
  },
  data() {
    return {
      fields: {
        email: '',
        password: '',
      },
      touched: {
        email: false,
        password: false,
      },
      errors: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    ...mapGetters([
      'trans',
    ]),
    canSubmit() {
      for (const touched of Object.values(this.touched)) {
        if (!touched) return false
      }

      for (const error of Object.values(this.errors)) {
        if (error) return false
      }

      return true
    },
  },
  methods: {
    touch(fieldName) {
      this.touched[fieldName] = true
    },
    validateForm() {
      const { fields, touched, errors } = this
      const requiredFieldError = this.trans('validation.required')
      const nameFieldError = this.trans('validation.name', { minSymbols: 2 })

      if (touched.email) {
        if (!fields.email) errors.email = requiredFieldError
        else if (!emailRegExp.test(fields.email)) errors.email = this.trans('validation.email')
        else errors.email = ''
      }

      if (touched.password) {
        if (!fields.password) errors.password = requiredFieldError
        else if (!passwordRegExp.test(fields.password)) errors.password = this.trans('validation.password', { minSymbols: 8, minSmallLetters: 1, minBigLetters: 1, minNumbers: 1 })
        else errors.password = ''
      }
    },
    setField(e, fieldName) {
      this.fields[fieldName] = e.target.value.trim()
    },
  },
}
</script>

<style src="@pages/Login.scss" lang="scss"></style>
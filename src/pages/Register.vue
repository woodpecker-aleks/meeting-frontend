<template>
  <Page>
    <div class="register-page__container container">
      <h1 class="register-page__title">Meetup</h1>
      <Input
        @blur.once="touch('name')"
        @input="setField($event, 'name')"
        @blur="validateForm"
        :value="fields.name"
        :error="errors.name"
        name="name"
        capitalize
        required
        :placeholder="trans('name.title')"
      />
      <Input
        @blur.once="touch('surname')"
        @input="setField($event, 'surname')"
        @blur="validateForm"
        :value="fields.surname"
        :error="errors.surname"
        name="surname"
        capitalize
        required
        :placeholder="trans('surname.title')"
      />
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
        type="password"
        required
        :placeholder="trans('password.title')"
      />
      <Input
        @blur.once="touch('confirmPassword')"
        @input="setField($event, 'confirmPassword')"
        @blur="validateForm"
        :value="fields.confirmPassword"
        :error="errors.confirmPassword"
        name="confirmPassword"
        type="password"
        required
        :placeholder="trans('confirm-password.title')"
      />
      <Checkbox
        @click="fields.confirmPrivacy = !fields.confirmPrivacy"
        :value="fields.confirmPrivacy"
        :label="true"
      >
        Confirm privacy policy
      </Checkbox>
      <Button :disabled="!canSubmit" class="register-page__submit">
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
import { emailRegExp, passwordRegExp } from '@utils/constants'
import Checkbox from '../components/Checkbox.vue'

export default {
  name: 'Register',
  components: {
    Page,
    Button,
    Input,
    Link,
    Checkbox,
  },
  data() {
    return {
      fields: {
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
        confirmPrivacy: false,
      },
      touched: {
        name: false,
        surname: false,
        email: false,
        password: false,
        confirmPassword: false,
      },
      errors: {
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
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

      if (touched.name) {
        if (!fields.name) errors.name = requiredFieldError
        else if (fields.name.length <= 1) errors.name = nameFieldError
        else errors.name = ''
      }

      if (touched.surname) {
        if (!fields.surname) errors.surname = requiredFieldError
        else if (fields.surname.length <= 1) errors.surname = nameFieldError
        else errors.surname = ''
      }

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

      if (touched.confirmPassword) {
        if (!fields.confirmPassword) errors.confirmPassword = requiredFieldError
        else if (fields.confirmPassword !== fields.password) errors.confirmPassword = this.trans('validation.confirm-password')
        else errors.confirmPassword = ''
      }
    },
    setField(e, fieldName) {
      this.fields[fieldName] = e.target.value.trim()
    },
  },
}
</script>

<style src="@pages/Register.scss" lang="scss"></style>
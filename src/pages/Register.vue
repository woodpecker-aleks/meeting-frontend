<template>
  <Page>
    <Container>
      <Form :fields="1" />
    </Container>
  </Page>
</template>

<script>
import Page from '@layouts/Page.vue'
import { mapGetters } from 'vuex'
import { emailRegExp, passwordRegExp } from '@utils/constants'

export default {
  name: 'Register',
  components: {
    Page,
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
        theme: {
          selected: '',
          values: [
            { value: 'dark', title: 'Dark' },
            { value: 'light', title: 'Light' },
            { value: 'custom', title: 'Custom' },
          ],
        },
      },
      touched: {
        name: false,
        surname: false,
        email: false,
        password: false,
        confirmPassword: false,
        theme: false,
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
    ...mapGetters(['trans']),
    canSubmit() {
      for (const touched of Object.values(this.touched)) {
        if (!touched) return false
      }

      for (const error of Object.values(this.errors)) {
        if (error) return false
      }

      if (!this.fields.confirmPrivacy) return false

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
        else if (!emailRegExp.test(fields.email))
          errors.email = this.trans('validation.email')
        else errors.email = ''
      }

      if (touched.password) {
        if (!fields.password) errors.password = requiredFieldError
        else if (!passwordRegExp.test(fields.password))
          errors.password = this.trans('validation.password', {
            minSymbols: 8,
            minSmallLetters: 1,
            minBigLetters: 1,
            minNumbers: 1,
          })
        else errors.password = ''
      }

      if (touched.confirmPassword) {
        if (!fields.confirmPassword)
          errors.confirmPassword = requiredFieldError
        else if (fields.confirmPassword !== fields.password)
          errors.confirmPassword = this.trans('validation.confirm-password')
        else errors.confirmPassword = ''
      }
    },
    setField(e, fieldName) {
      this.fields[fieldName] = e.target.value
    },
  },
}
</script>

<style src="@pages/Register.scss" lang="scss"></style>

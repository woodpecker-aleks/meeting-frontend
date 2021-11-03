import VueForm from '@utils/VueForm'

export const RegisterForm = new VueForm('register', {
  username: {
    type: 'text',
    required: true,
  },
  email: {
    type: 'text',
    required: true,
  },
  password: {
    type: 'password',
    required: true,
    validation(value) {
      value = value.trim()

      this.confirmPassword.disabled = Boolean(value)
    },
  },
  confirmPassword: {
    type: 'password',
    required: true,
    disabled: true,
    validation(value) {
      value = value.trim()

      if (value !== this.password.value) return 'This fields is not match to password'
    },
  },
  confirmPrivacy: {
    type: 'checkbox',
    required: true,
  },
})
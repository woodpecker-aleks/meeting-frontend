import app from '@/main'

app.directive('focus', {
  mounted(el) {
    el.focus()
  },
})
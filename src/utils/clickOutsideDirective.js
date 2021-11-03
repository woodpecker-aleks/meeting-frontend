import app from '@/main'

app.directive('click-outside', {
  created: function (el, binding) {
    el.clickOutsideEvent = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    setTimeout(() => document.body.addEventListener('click', el.clickOutsideEvent), 0)
  },
  beforeUnmount: function (el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  },
})
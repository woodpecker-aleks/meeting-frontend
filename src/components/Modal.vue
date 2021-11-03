<template>
  <div class="modal">
    <div v-focus v-click-outside="onClose" tabindex="0" ref="modalContent" class="modal__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  created() {
    document.body.classList.add('fixed')
  },
  unmounted() {
    document.body.classList.remove('fixed')
  },
  props: {
    onClose: Function,
  },
}
</script>

<style src="@components/Modal.scss" lang="scss"></style>
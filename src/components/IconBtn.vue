<template>
  <button
    class="icon-btn backdrop__control"
    :disabled="disabled"
    :aria-label="title"
    v-bind="$attrs"
  >
    <Backdrop
      class="icon-btn__backdrop"
      :disabled="disabled"
    />
    <slot />
  </button>
</template>

<script>
import Backdrop from '@components/Backdrop.vue'

export default {
  name: 'IconBtn',
  components: {
    Backdrop,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    disabled: Boolean,
  },
}
</script>

<style src="@components/IconBtn.scss" lang="scss"></style>

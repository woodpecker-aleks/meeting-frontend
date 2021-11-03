<template>
  <button
    class="btn backdrop__control"
    :disabled="disabled"
    :aria-label="title"
    v-bind="$attrs"
  >
    <Backdrop
      :disabled="disabled"
      class="btn__backdrop"
    />
    <div class="btn__start-icon">
      <slot name="start-icon" />
    </div>
    <div class="btn__text">
      <slot />
    </div>
  </button>
</template>

<script>
import Backdrop from '@components/Backdrop.vue'

export default {
  name: 'Button',
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

<style src="@components/Button.scss" lang="scss"></style>

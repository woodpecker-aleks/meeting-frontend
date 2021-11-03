<template>
  <button
    @click="$emit('change', $event)"
    class="switch label-focus-watcher backdrop__control"
    role="checkbox"
    :id="id"
    :aria-checked="value"
    :class="[value && 'checked']"
    v-bind="$attrs"
  >
    <div class="switch__wrapper">
      <Backdrop class="switch__backdrop" />
      <div class="switch__thumb" />
    </div>
  </button>
</template>

<script>
import Backdrop from '@components/Backdrop.vue'

export default {
  name: 'Switch',
  components: {
    Backdrop,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style src="@components/Switch.scss" lang="scss"></style>
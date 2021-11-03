<template>
  <button
    @click="$emit('change', $event)"
    class="radio label-focus-watcher backdrop__control"
    :class="[value === targetValue && 'checked']"
    :disabled="disabled"
  >
    <div class="radio__fake">
      <Backdrop class="radio__backdrop" />
    </div>
    <input
      :disabled="disabled"
      :id="id"
      class="radio__control"
      type="radio"
      v-bind="$attrs"
    />
  </button>
</template>

<script>
import Backdrop from '@components/Backdrop.vue'

export default {
  name: 'Radio',
  components: {
    Backdrop,
  },
  props: {
    disabled: Boolean,
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    targetValue: {
      type: String,
      required: true,
    },
  },
}
</script>

<style src="@components/Radio.scss" lang="scss"></style>
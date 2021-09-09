<template>
  <label :class="['checkbox', value && 'checked']">
    <div class="checkbox__fake">
      <div class="checkbox__backdrop" />
      <Icon
        name="check"
        class="checkbox__fake-icon"
      />
    </div>
    <input
      type="checkbox"
      class="checkbox__control"
      :checked="value"
      v-bind="$attrs"
    >
    <p
      v-if="label"
      class="checkbox__label"
    >
      <slot />
    </p>
  </label>
</template>

<script>
import Icon from './Icon.vue'

export default {
  components: {
    Icon,
  },
  name: 'Checkbox',
  props: {
    label: Boolean,
    value: Boolean,
  },
}
</script>

<style src="@components/Checkbox.scss" lang="scss"></style>
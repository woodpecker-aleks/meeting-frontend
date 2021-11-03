<template>
  <button
    @click="handleChange"
    class="checkbox label-focus-watcher backdrop__control"
    :class="[value && 'checked']"
    :disabled="disabled"
  >
    <div class="checkbox__fake">
      <Backdrop class="checkbox__backdrop" />
      <Icon
        name="check"
        class="checkbox__fake-icon _checked_"
      />
      <Icon
        name="check"
        class="checkbox__fake-icon"
      />
    </div>
    <input
      :disabled="disabled"
      tabindex="-1"
      :id="id"
      type="checkbox"
      class="checkbox__control"
      :checked="value"
      v-bind="$attrs"
    />
  </button>
</template>

<script>
import Icon from '@components/Icon.vue'
import Backdrop from '@components/Backdrop.vue'

export default {
  name: 'Checkbox',
  components: {
    Icon,
    Backdrop,
  },
  props: {
    disabled: Boolean,
    id: String,
    value: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleChange(e) {
      e.target.value = !this.value

      this.$emit('change', e)
    },
  },
}
</script>

<style src="@components/Checkbox.scss" lang="scss"></style>

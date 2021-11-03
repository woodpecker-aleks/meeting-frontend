<template>
  <button
    :for="id ?? name"
    :disabled="disabled"
    @focus="handleFocus"
    @mousedown="isActive = true"
    @mouseup="isActive = false"
    class="input backdrop__control"
    :class="[
      error && 'error',
      disabled && 'disabled',
      $slots.icon && 'input_with-icon',
      capitalize && 'capitalize',
      !value && 'input_empty',
      inFocus && 'focus',
      isActive && 'active',
    ]"
  >
    <Backdrop class="input__backdrop" />
    <div class="input__wrapper">
      <div
        v-if="required"
        class="input__required"
      >
        *
      </div>
      <input
        :disabled="disabled"
        ref="inputControl"
        @blur="inFocus = false"
        :id="id ?? name"
        :value="value"
        @input="$emit('input', e)"
        class="input__control text text_p"
        :required="required"
        :name="name"
        v-bind="$attrs"
      />
      <transition :name="iconTransitionName">
        <IconBtn
          v-if="$slots.icon"
          @click="handleIconActive"
          class="input__icon sm"
        >
          <slot name="icon" />
        </IconBtn>
      </transition>
    </div>
    <Divider class="input__divider" />
  </button>
</template>

<script>
import Backdrop from './Backdrop.vue'
import Divider from './Divider.vue'
import IconBtn from './IconBtn.vue'

export default {
  components: {
    Divider,
    IconBtn,
    Backdrop,
  },
  name: 'Input',
  props: {
    error: Boolean,
    disabled: Boolean,
    iconTransitionName: String,
    onIconActive: Function,
    ignoreSymbols: Array,
    capitalize: Boolean,
    value: String,
    required: Boolean,
    name: {
      type: String,
      required: true,
    },
    id: String,
  },
  data() {
    return {
      inFocus: false,
      isActive: false,
    }
  },
  methods: {
    handleIconActive(e) {
      this.onIconActive(e)

      this.$refs.inputControl.focus()
    },
    handleFocus() {
      this.inFocus = true

      this.$refs.inputControl.focus()
    },
    handleKeyDown(e) {
      if (e.code === 'Enter') this.isActive = true
    },
    handleKeyUp(e) {
      if (e.code === 'Enter') this.isActive = false
    },
  },
}
</script>

<style src="@components/Input.scss" lang="scss"></style>

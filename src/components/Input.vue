<template>
  <div :class="['input', enteredType === 'password' && 'password']">
    <div class="input__backdrop" />
    <input
      v-bind="$attrs"
      :type="enteredType"
      class="input__control"
    />
    <IconBtn
      v-if="type === 'password'"
      @click="toggleType"
      class="input__icon sm"
    >
      <Icon
        v-if="enteredType === 'text'"
        name="open-eye"
      />
      <Icon
        v-else
        name="close-eye"
      />
    </IconBtn>
    <Divider class="input__divider" />
  </div>
</template>

<script>
import Divider from './Divider.vue'
import Icon from './Icon.vue'
import IconBtn from './IconBtn.vue'

export default {
  components: {
    Divider,
    Icon,
    IconBtn,
  },
  name: 'Input',
  props: {
    type: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      enteredType: this.type,
    }
  },
  methods: {
    toggleType() {
      this.enteredType = this.enteredType === 'password' ? 'text' : 'password'
    },
  },
}
</script>

<style src="@components/Input.scss" lang="scss"></style>
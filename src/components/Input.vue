<template>
  <label
    :for="id ?? name"
    :class="['input', enteredType === 'password' && 'password', capitalize && 'capitalize', !value && 'empty', error && 'error']"
  >
    <Dropdown
      class="input__error"
      :isOpen="Boolean(error)"
    >
      {{ error }}
    </Dropdown>
    <div class="input__backdrop" />
    <div class="input__wrapper">
      <div
        v-if="required"
        class="input__required"
      >
        *
      </div>
      <input
        :id="id ?? name"
        v-bind="$attrs"
        :type="enteredType"
        class="input__control"
        :required="required"
        :name="name"
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
    </div>
    <Divider class="input__divider" />
  </label>
</template>

<script>
import Divider from './Divider.vue'
import Dropdown from './Dropdown.vue'
import Icon from './Icon.vue'
import IconBtn from './IconBtn.vue'

export default {
  components: {
    Divider,
    Icon,
    IconBtn,
    Dropdown,
  },
  name: 'Input',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    capitalize: Boolean,
    error: String,
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
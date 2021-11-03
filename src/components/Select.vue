<template>
  <div tabindex="0" @click="handleOpen" :class="['select', isOpen && 'select_open']">
    <div v-if="required" class="select__required">*</div>
    <div :class="['select__selected', !selectedTitle && 'empty']">
      <Backdrop class="select__backdrop" />
      <Icon name="arrow-filled" class="select__dropdown-icon" />
      <div class="select__text text text_h6">{{ selectedTitle ?? placeholder }}</div>
    </div>
    <Divider class="select__divider" />
    <Dropdown class="select__dropdown" :isOpen="isOpen">
      <div class="select__option">{{ title }}</div>
    </Dropdown>
    <select hidden class="select__control" v-bind="$attrs">
      <option v-for="{ value, title } of values" :key="value">
        {{ title }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    value: String,
    options: Array,
    placeholder: String,
    required: Boolean,
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    selectedTitle() {
      return this.options.find(({ value }) => value === this.value)?.title
    },
  },
  methods: {
    handleOpen() {
      this.isOpen = true
    },
  },
}
</script>

<style src="@components/Select.scss" lang="scss"></style>

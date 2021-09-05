<template>
  <button :class="['switch', checked && 'active', classes]">
    <div class="switch__thumb" />
  </button>
</template>

<script>
export default {
  name: 'Switch',
  props: {
    classes: String,
    checked: Boolean,
  },
}
</script>

<style src="@components/Switch.scss" lang="scss"></style>
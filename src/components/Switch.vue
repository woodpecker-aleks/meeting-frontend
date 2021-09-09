<template>
  <button :class="['switch', checked && 'active']">
    <div class="switch__thumb" />
  </button>
</template>

<script>
export default {
  name: 'Switch',
  props: {
    checked: Boolean,
  },
}
</script>

<style src="@components/Switch.scss" lang="scss"></style>
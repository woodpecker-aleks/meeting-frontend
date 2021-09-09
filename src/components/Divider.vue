<template>
  <div class="divider">
    <div :class="['divider__line', 'lenght-' + length]" />
  </div>
</template>

<script>
export default {
  name: 'Divider',
  props: {
    length: {
      type: String,
      default: '100',
    },
  },
}
</script>

<style src="@components/Divider.scss" lang="scss"></style>
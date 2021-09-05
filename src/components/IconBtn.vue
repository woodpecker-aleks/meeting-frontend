<template>
  <button :class="['icon-btn', classes]">
    <div class="icon-btn__backdrop" />
    <slot />
  </button>
</template>

<script>
export default {
  name: 'IconBtn',
  props: {
    classes: String,
  },
}
</script>

<style src="@components/IconBtn.scss" lang="scss"></style>
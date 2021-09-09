<template>
  <button class="icon-btn">
    <div class="icon-btn__backdrop" />
    <slot />
  </button>
</template>

<script>
export default {
  name: 'IconBtn',
}
</script>

<style src="@components/IconBtn.scss" lang="scss"></style>
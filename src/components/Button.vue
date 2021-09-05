<template>
  <button class="btn">
    <div class="btn__backdrop" />
    <div class="btn__text">
      <slot />
    </div>
  </button>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<style src="@components/Button.scss" lang="scss"></style>
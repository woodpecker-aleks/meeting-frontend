<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
  props: {
    size: String,
  },
}
</script>

<style src="@components/Container.scss" lang="scss"></style>
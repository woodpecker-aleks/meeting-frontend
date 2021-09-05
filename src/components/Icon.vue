<template>
  <svg :class="['icon']">
    <use :xlink:href="'#' + name" />
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: String,
  },
}
</script>

<style src="@components/Icon.scss" lang="scss"></style>

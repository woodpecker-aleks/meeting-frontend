<template>
  <svg :class="['icon', classes]">
    <use :xlink:href="'#' + name" />
  </svg>
</template>

<script>
export default {
  name: "Icon",
  props: {
    name: String,
    classes: String,
  },
}
</script>

<style src="@components/Icon.scss" lang="scss"></style>

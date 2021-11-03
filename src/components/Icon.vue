<template>
  <svg
    class="icon"
    v-bind="$attrs"
  >
    <use :xlink:href="'#' + name" />
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style src="@components/Icon.scss" lang="scss"></style>

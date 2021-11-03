<template>
  <div class="dynamic-string">
    <div class="dynamic-string__string">
      <div class="dynamic-string__content">
        <slot />
      </div>
      <div class="dynamic-string__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DynamicString',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style src="@components/DynamicString.scss" lang="scss"></style>
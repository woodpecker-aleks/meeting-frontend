<template>
  <div
    class="text"
    :class="[
      'text_' + (type ?? 'p'),
      sub && 'text_sub'
    ]">
    <div class="text__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Text',
  props: {
    type: String,
    sub: Boolean,
  },
}
</script>

<style src="@components/Text.scss" lang="scss"></style>
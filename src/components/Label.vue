<template>
  <label
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
    :for="this.for"
    class="label"
    :class="[disabled && 'disabled']"
    v-bind="$attrs"
  >
    <slot />
  </label>
</template>

<script>

export default {
  name: 'Label',
  props: {
    for: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      disabled: false,
    }
  },
  computed: {
    target() {
      return document.getElementById(this.for)?.closest('.label-focus-watcher')
    },
  },
  methods: {
    handleMouseEnter() {
      this.target?.classList.add('hover')

      this.disabled = this.target?.hasAttribute('disabled')
    },
    handleMouseLeave() {
      this.target?.classList.remove('hover')

      this.disabled = this.target?.disabled
    },
    handleMouseDown() {
      this.target?.classList.add('active')
    },
    handleMouseUp() {
      this.target?.classList.remove('active')
      this.target?.focus()
    },
  },
}
</script>

<style src="@components/Label.scss" lang="scss"></style>
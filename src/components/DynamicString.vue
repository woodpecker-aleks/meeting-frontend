<template>
  <div
    ref="container"
    class="dynamic-string"
    :class="[isActive && 'dynamic-string_active']"
  >
    <div class="dynamic-string__string">
      <div ref="content" class="dynamic-string__content">
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
  data() {
    return {
      isActive: false,
    }
  },
  mounted() {
    this.setContentWidth()
  },
  updated() {
    this.setContentWidth()
  },
  methods: {
    setContentWidth() {
      const contentWidth = this.$refs.content.clientWidth

      this.$refs.container.style.setProperty('--content-width', contentWidth + 'px')

      if (this.$props.active) this.isActive = true
    },
  },
}
</script>

<style src="@components/DynamicString.scss" lang="scss"></style>
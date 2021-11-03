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
      const container = this.$refs.container
      const content = this.$refs.content
      const contentWidth = content.clientWidth

      if (!this.$props.active && container.clientWidth < contentWidth) returna

      container.style.setProperty('--content-width', contentWidth + 'px')

      const styles = getComputedStyle(content)

      container.style.setProperty('--run-duration', contentWidth / Number(styles.fontSize.replace('px', '')) * 250 + 'ms')

      this.isActive = true
    },
  },
}
</script>

<style src="@components/DynamicString.scss" lang="scss"></style>
<template>
  <div
    @mousemove="handleMouseMove"
    ref="backdrop"
    :class="['backdrop']"
  >
    <div class="backdrop__base" />
    <div class="backdrop__effect-wrapper">
      <div
        :style="{
          top: (y - size / 2) + 'px',
          left: (x - size / 2) + 'px',
          height: size + 'px',
          width: size + 'px'
        }"
        class="backdrop__effect"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Backdrop',
  data() {
    return {
      x: undefined,
      y: undefined,
      size: 0,
    }
  },
  mounted() {
    const { backdrop } = this.$refs

    this.size = (backdrop?.clientHeight > backdrop?.clientWidth ? backdrop?.clientHeight : backdrop?.clientWidth)
  },
  methods: {
    handleMouseMove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
  },
}
</script>

<style src="@components/Backdrop.scss" lang="scss"></style>
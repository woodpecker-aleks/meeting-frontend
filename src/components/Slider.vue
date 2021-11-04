<template>
  <button
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    @keydown="handleKeyDown"
    @keyup="isActive = false"
    tabindex="0"
    ref="slider"
    @mousedown="handleDrag"
    @touchstart="handleDrag"
    :disabled="disabled"
    :class="[
      'slider backdrop__control',
      isActive && 'slider_active',
      isHover && 'hover'
    ]"
  >
    <input
      class="slider__control"
      type="range"
      :max="max"
      :min="min"
      :value="value"
      :disabled="disabled"
    />
    <div class="slider__track">
      <div class="slider__progress" :style="{ width: value + '%' }" />
      <ul class="slider__breakpoints" v-if="showSteps">
        <li :style="{ left: `calc(${point}% - 0.5px)` }" v-for="point of breakpoints" :key="point" class="slider__breakpoint" />
      </ul>
    </div>
    <button :disabled="disabled" class="slider__btn" :style="{ left: `calc(${value}% - 5px)` }">
      <Backdrop class="slider__backdrop" />
    </button>
  </button>
</template>

<script>
import deviceType from '@utils/checkDeviceType'

export default {
  name: 'Slider',
  props: {
    value: Number,
    step: Number,
    disabled: Boolean,
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    showSteps: Boolean,
  },
  data() {
    return {
      isActive: false,
      isHover: false,
    }
  },
  computed: {
    range() {
      return this.max - this.min
    },
    breakpoints() {
      const breakpoints = []

      for (let i = this.range; i >= 0; i -= this.step) {
        breakpoints.push(i)
      }

      return breakpoints
    },
  },
  methods: {
    handleDrag(e) {
      this.handleMove(e)
      this.isActive = true

      document.body.style.overflowY = 'hidden'

      window.addEventListener(deviceType() === 'mobile' ? 'touchmove' : 'mousemove', this.handleMove)
      window.addEventListener(deviceType() === 'mobile' ? 'touchend' : 'mouseup', this.handleStop)
    },
    handleMove(e) {
      const clientX = e?.touches?.[0].clientX ?? e.clientX
      const { width, left } = this.$refs.slider.getBoundingClientRect()
      const percentInPx = width / 100

      if (clientX < left) e.target.value = 0
      else if (clientX > left + width) e.target.value = 100
      else e.target.value = (clientX - left) / percentInPx

      this.handleChangeValue(e)
    },
    handleChangeValue(e) {
      if (e.target.value < 0) e.target.value = 0
      else if (e.target.value > 100) e.target.value = 100

      if (this.step) e.target.value = this.breakpoints.reduce((prev, curr) => {
        return (Math.abs(curr - e.target.value) < Math.abs(prev - e.target.value) ? curr : prev)
      })

      this.$emit('change', e)
    },
    handleStop() {
      this.isActive = false

      document.body.style.overflowY = 'auto'

      window.removeEventListener(deviceType() === 'mobile' ? 'touchmove' : 'mousemove', this.handleMove)
      window.removeEventListener(deviceType() === 'mobile' ? 'touchend' : 'mouseup', this.handleStop)
    },
    handleKeyDown(e) {
        this.isActive = true

      switch (e.code) {
        case 'ArrowLeft': {
          e.target.value -= this.step ?? this.range / 100
          this.isActive = true

          return this.handleChangeValue(e)
        }
        case 'ArrowRight': {
          e.target.value += this.step ?? this.range / 100
          this.isActive = true

          return this.handleChangeValue(e)
        }
      }
    },
  },
}
</script>

<style src="@components/Slider.scss" lang="scss"></style>
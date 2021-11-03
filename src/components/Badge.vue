<template>
  <div
    class="badge"
    :class="[`badge_${type}`]"
  >
    <transition name="grow">
      <div
        v-if="value"
        class="badge__indicator"
      >
        {{ type !== 'boolean' ? value : '' }}
      </div>
    </transition>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    value: Number,
    type: {
      type: String,
      default: 'text',
    },
  },
}
</script>

<style src="@components/Badge.scss" lang="scss"></style>
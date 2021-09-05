<template>
  <div
    ref="dropdown"
    :class="['dropdown', isOpen && 'active']"
    :style="{ maxHeight }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    isOpen: Boolean,
  },
  computed: {
    maxHeight() {
      return this.isOpen ? this.$refs?.dropdown?.scrollHeight + 'px' : '0px'
    },
  },
}
</script>

<style src="@components/Dropdown.scss" lang="scss"></style>
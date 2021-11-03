<template>
  <div
    ref="dropdown"
    :class="['dropdown', isOpen && 'active']"
  >
    <div
      v-if="isOpen"
      ref="dropdownContainer"
      class="dropdown__container"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    isOpen: Boolean,
  },
  mounted() {
    this.checkIsOpen()
  },
  updated() {
    this.checkIsOpen()
  },
  methods: {
    checkIsOpen() {
      const { dropdown, dropdownContainer } = this.$refs

      dropdown.style.maxHeight = this.isOpen ? dropdownContainer.scrollHeight + 'px' : '0px'
      dropdown.style.minHeight = this.isOpen ? dropdownContainer.scrollHeight + 'px' : '0px'
    },
  },
}
</script>

<style src="@components/Dropdown.scss" lang="scss"></style>
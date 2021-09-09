<template>
  <div
    ref="dropdown"
    :class="['dropdown', isOpen && 'active']"
  >
    <div
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
  updated() {
    const { dropdown, dropdownContainer } = this.$refs

    dropdown.style.maxHeight = this.isOpen ? dropdownContainer.scrollHeight + 'px' : '0px'
    dropdown.style.minHeight = this.isOpen ? dropdownContainer.scrollHeight + 'px' : '0px'
  },
}
</script>

<style src="@components/Dropdown.scss" lang="scss"></style>
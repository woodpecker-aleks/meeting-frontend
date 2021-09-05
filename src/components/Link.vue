<template>
  <router-link class="link">
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'Link',
}
</script>

<style src="@components/Link.scss" lang="scss"></style>
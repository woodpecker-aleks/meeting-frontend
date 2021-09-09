<template>
  <div class="page">
    <Sprite />
    <slot />
  </div>
</template>

<script>
import Sprite from '@components/Sprite.vue'

export default {
  components: {
    Sprite,
  },
  name: 'Page',
}
</script>
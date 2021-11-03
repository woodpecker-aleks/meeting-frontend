<template>
  <div
    class="image"
    :class="[
      withError && 'image_error',
      isLoading && 'image_loading'
    ]">
    <Skeleton
      class="image__skeleton"
      v-if="!withError && isLoading"
    />
    <img
      v-if="!withError"
      ref="imageContent"
      class="image__content"
      loading="lazy"
      decoding="async"
      :src="src"
      :alt="alt"
      :title="alt"
      v-bind="$attrs"
    />
    <div
      v-if="withError"
      class="image__alt"
    >
      <Icon
        class="image__icon"
        name="broken-image"
      />
      <Text
        type="h6"
        class="image__text"
      >
        {{ alt }}
      </Text>
    </div>
  </div>
</template>

<script>
import Text from '@components/Text.vue'
import Icon from '@components/Icon.vue'
import Skeleton from '@components/Skeleton.vue'

export default {
  name: 'Image',
  components: {
    Skeleton,
    Text,
    Icon,
  },
  props: {
    alt: String,
    src: String,
  },
  data() {
    return {
      withError: false,
      isLoading: true,
    }
  },
  mounted() {
    this.$refs.imageContent.onload = () => this.isLoading = false

    this.$refs.imageContent.onerror = () => this.withError = true
  },
}
</script>

<style src="@components/Image.scss" lang="scss"></style>
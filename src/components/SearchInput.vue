<template>
  <Input
    iconTransitionName="grow"
    :onIconActive="clearInput"
    :value="value"
    v-bind="$attrs"
  >
    <template v-if="value" #icon>
      <Icon name="close" class="sm" />
    </template>
  </Input>
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    value: String,
  },
  methods: {
    clearInput(e) {
      e.target.value = ''

      this.$emit('input', e)
    },
  },
}
</script>
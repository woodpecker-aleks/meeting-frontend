<template>
  <Input
    :type="enteredType"
    :onIconActive="toggleType"
    v-bind="$attrs"
  >
    <template #icon>
      <Icon
        :name="enteredType === 'text' ? 'open-eye' : 'close-eye'"
        class="sm"
      />
    </template>
  </Input>
</template>

<script>
export default {
  name: 'PasswordInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
  },
  data() {
    return {
      enteredType: this.type,
    }
  },
  methods: {
    toggleType() {
      this.enteredType = this.enteredType === 'password' ? 'text' : 'password'
    },
  },
}
</script>
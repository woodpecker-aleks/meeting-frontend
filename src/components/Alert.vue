<template>
  <div class="alert">
    <div class="alert__title">
      <Icon name="info" class="alert__icon sm" />
      <Text type="h5">Lorem ipsum dolor sit amet.</Text>
    </div>
    <Divider class="alert__divider" />
    <Text class="alert__description" sub>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, perspiciatis!</Text>
  </div>
</template>

<script>
export default {
  name: 'Alert',
}
</script>

<style src="@components/Alert.scss" lang="scss"></style>
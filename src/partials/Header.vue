<template>
  <header :class="['header clr-primary', isElevating && 'header_elevate']">
    <Container class="header__container">
      <div class="grid jc-between header__grid">
        <div class="col-2 col-sm-auto d-flex ai-center">
          <IconBtn class="mr-sm-1" @click="toggleNav">
            <Icon name="menu" />
          </IconBtn>
          <Button class="d-none d-sm-flex" @click="isOpenCreateProductModal = true" type="text">
            <template v-slot:start-icon>
              <Icon class="sm" name="plus" />
            </template>
            <Text single-line>Create Product</Text>
          </Button>
        </div>
        <div class="col-8 col-sm-3 d-flex ai-center jc-center">
          <SearchInput autocomplete="off" :value="search" @input="handleChangeSearch" id="header__search" name="search" placeholder="Search" />
        </div>
        <div class="col-2 col-sm-auto d-flex jc-end ai-center">
          <Badge class="mr-sm-1" :value="notifications">
            <IconBtn>
              <Icon name="notify" />
            </IconBtn>
          </Badge>
          <IconBtn class="d-none mr-sm-1 d-sm-flex">
            <Icon name="cart" />
          </IconBtn>
          <Button class="d-none d-sm-flex" type="text">
            <template v-slot:start-icon>
              <Icon class="sm" name="lock" />
            </template>
            <Text single-line>Sign In</Text>
          </Button>
        </div>
      </div>
    </Container>
  </header>
</template>

<script>

import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'Header',
  props: {
    withDate: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      notifications: 7,
      search: '',
      isElevating: false,
      isOpenCreateProductModal: false,
    }
  },
  computed: {
    ...mapState([
      'navIsOpen',
    ]),
    ...mapGetters([
      'trans',
    ]),
  },
  mounted() {
    window.addEventListener('scroll', this.handleElevate)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleElevate)
  },
  methods: {
    ...mapMutations([
      'toggleNav',
    ]),
    handleChangeSearch(e) {
      this.search = e.target.value
    },
    handleElevate() {
      this.isElevating = window.scrollY !== 0
    },
    closeCreateModal() {
      this.isOpenCreateProductModal = false
    },
  },
}
</script>

<style src="@partials/Header.scss" lang="scss"></style>

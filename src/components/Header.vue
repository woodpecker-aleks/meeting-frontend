<template>
  <header :class="['header', isElevating ? 'elevate' : '']">
    <div class="header__container container">
      <IconBtn @click="toggleNav">
        <Icon name="menu" />
      </IconBtn>
      <span v-if="withDate">
        {{ trans(`month.${targetDate.getMonth()}`) }}
        {{ targetDate.getFullYear() }}
      </span>
      <IconBtn>
        <Icon name="search" />
      </IconBtn>
    </div>
  </header>
</template>

<script>
import Icon from '@components/Icon.vue'
import { mapGetters, mapMutations, mapState } from 'vuex'
import IconBtn from '@components/IconBtn.vue'

export default {
  name: 'Header',
  components: {
    Icon,
    IconBtn,
  },
  props: {
    withDate: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isElevating: false,
    }
  },
  computed: {
    ...mapState({
      targetDate: state => state.calendar.targetDate,
      navIsOpen: state => state.navIsOpen,
    }),
    ...mapGetters([
      'trans',
    ]),
  },
  mounted() {
    window.onscroll = () => {
      this.isElevating = window.scrollY !== 0
    }
  },
  methods: {
    ...mapMutations([
      'toggleNav',
    ]),
  },
}
</script>

<style src="@components/Header.scss" lang="scss"></style>

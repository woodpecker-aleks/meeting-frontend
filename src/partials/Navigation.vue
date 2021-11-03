<template>
  <nav :class="['nav', navIsOpen && 'active']">
    <div class="nav__container">
      <ul class="nav__list">
        <li v-for="(item, index) of menu" :key="index" class="nav__item">
          <button :tabindex="navIsOpen ? 1 : -1" class="nav__item-header" @click="item.action">
            <Backdrop class="nav__item-backdrop" />
            <Icon class="nav__item-icon" :name="item.icon" />
            <Text singleLine class="nav__item-title">
              {{ trans(item.title) }}
            </Text>
            <Switch
              tabindex="-1"
              v-if="item.additional === 'Switch'"
              :checked="item.checked"
            />
            <Icon
              v-if="item.secondIcon"
              :name="item.secondIcon"
              :class="item.secondIconClasses + ' sm'"
            />
          </button>
          <Dropdown
            v-if="item.additional === 'Dropdown'"
            :is-open="item.checked"
          >
            <ul class="nav__droplist">
              <li
                v-for="(itm, i) of item.droplist"
                :key="i"
                class="nav__item"
                @click="itm.action"
              >
                <button :tabindex="navIsOpen ? 1 : -1" class="nav__item-header">
                  <Backdrop class="nav__item-backdrop" />
                  <Text singleLine class="nav__item-title">
                    {{ trans(itm.title) }}
                  </Text>
                </button>
              </li>
            </ul>
            <Divider class="nav__divider" />
          </Dropdown>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

export default {
  name: 'Navigation',
  data() {
    return {
      langIsOpen: false,
    }
  },
  computed: {
    ...mapState(['appTheme', 'navIsOpen', 'notifications']),
    ...mapGetters(['trans']),
    menu() {
      return [
        {
          icon: 'user',
          title: 'profile.title',
        },
        {
          icon: 'notify',
          title: 'notifications.title',
          action: this.toggleNotifications,
          additional: 'Switch',
          checked: this.notifications,
        },
        {
          icon: 'moon',
          title: 'dark-theme.title',
          action: this.toggleTheme,
          additional: 'Switch',
          checked: this.appTheme === 'dark',
        },
        {
          icon: 'lang',
          title: 'lang',
          action: this.toggleExpandLags,
          checked: this.langIsOpen,
          additional: 'Dropdown',
          secondIcon: 'arrow',
          secondIconClasses: this.langIsOpen ? 'bottom' : 'left',
          droplist: [
            {
              title: 'lang.ru',
              action: () => this.updateLang('ru'),
            },
            {
              title: 'lang.en',
              action: () => this.updateLang('en'),
            },
          ],
        },
        {
          icon: 'settings',
          title: 'settings.title',
        },
        {
          icon: 'logout',
          title: 'logout.title',
        },
      ]
    },
  },
  methods: {
    ...mapMutations(['toggleTheme', 'toggleNotifications']),
    ...mapActions(['updateLang']),
    toggleExpandLags() {
      this.langIsOpen = !this.langIsOpen
    },
  },
}
</script>

<style src="@partials/Navigation.scss" lang="scss"></style>

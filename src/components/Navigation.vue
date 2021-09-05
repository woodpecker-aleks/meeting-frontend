<template>
  <nav :class="['nav', navIsOpen && 'active']">
    <div class="nav__container">
      <ul class="nav__list">
        <li
          v-for="(item, index) of menu"
          :key="index"
          class="nav__item"
        >
          <div
            class="nav__item-header"
            @click="item.action"
          >
            <div class="nav__item-backdrop" />
            <Icon
              classes="nav__item-icon"
              :name="item.icon"
            />
            <span class="nav__item-title">
              {{ trans(item.title) }}
            </span>
            <Switch
              v-if="item.additional === 'Switch'"
              :checked="item.checked"
            />
            <Icon
              v-if="item.secondIcon"
              :name="item.secondIcon"
              :classes="item.secondIconClasses + ' sm'"
            />
          </div>
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
                <div class="nav__item-header">
                  <div class="nav__item-backdrop" />
                  <span class="nav__item-title">
                    {{ trans(itm.title) }}
                  </span>
                </div>
              </li>
            </ul>
            <Divider length="75" />
          </Dropdown>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'
import Icon from '@components/Icon'
import Switch from '@components/Switch.vue'
import Dropdown from '@components/Dropdown.vue'
import Divider from '@components/Divider.vue'

export default {
  name: 'Navigation',
  components: {
    Icon,
    Switch,
    Dropdown,
    Divider,
  },
  data() {
    return {
      langIsOpen: false,
    }
  },
  computed: {
    ...mapState([
      'appTheme',
      'navIsOpen',
      'notifications',
    ]),
    ...mapGetters([
      'trans',
    ]),
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
    ...mapMutations([
      'toggleTheme',
      'toggleNotifications',
    ]),
    ...mapActions([
      'updateLang',
    ]),
    toggleExpandLags() {
      this.langIsOpen = !this.langIsOpen
    },
  },
}
</script>

<style src="@components/Navigation.scss" lang="scss"></style>
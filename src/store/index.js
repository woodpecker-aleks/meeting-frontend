import { createStore } from 'vuex'
import LangApi from '@api/lang'

const langs = {}

const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    navIsOpen: false,
    appTheme: window.localStorage.getItem('app-theme') ?? 'light',
    notifications: false,
    appLang: null,
  },
  mutations: {
    toggleNotifications(state) {
      state.notifications = !state.notifications
    },
    toggleNav(state) {
      state.navIsOpen = !state.navIsOpen
    },
    toggleTheme(state) {
      const newTheme = state.appTheme === 'light' ? 'dark' : 'light'
      window.localStorage.setItem('app-theme', newTheme)
      state.appTheme = newTheme
    },
    changeLang(state, newLang) {
      window.localStorage.setItem('app-lang', newLang)
      state.appLang = newLang
    },
  },
  actions: {
    async updateLang({ commit }, newLang) {
      if (!langs[newLang]) {
        const { data: targetLang } = await LangApi.get(newLang)

        langs[newLang] = targetLang

      }

      commit('changeLang', newLang)
    },
  },
  getters: {
    trans: state => (key, props = {}) => {
      let translatedKey = langs[state.appLang]?.[key]

      if (translatedKey) {
        for (const prop of Object.keys(props)) {
          translatedKey = translatedKey.replace(`{{${prop}}}`, props[prop])
        }
      }

      return translatedKey ?? key
    },
  },
})

export default store

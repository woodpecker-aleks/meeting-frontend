import { createStore } from 'vuex'
import calendar from './calendar'
import en from '../langs/en.json'
import ru from '../langs/ru.json'

const langs = {
  en,
  ru,
}

const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    navIsOpen: false,
    appTheme: window.localStorage.getItem('app-theme') ?? 'light',
    notifications: false,
    appLang: window.localStorage.getItem('app-lang') ?? 'en',
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
  getters: {
    trans: state => key => {
      return langs[state.appLang][key] ?? key
    },
  },
  modules: {
    calendar,
  },
})

export default store

import axios from 'axios'

const LangApi = {
  async get(lang) {
    return await axios.get(`/lang/${lang}`)
  },
}

export default LangApi
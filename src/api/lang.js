import axios from 'axios'

const getLang = (lang) => axios.get(`/lang/${lang}`)

export default getLang
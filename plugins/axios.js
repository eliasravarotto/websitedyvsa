import axios from 'axios'

export default axios.create({
  baseURL: 'https://panelweb.derkayvargas.com/api'
  // baseURL: 'http://webdyvsa.test/api'
})